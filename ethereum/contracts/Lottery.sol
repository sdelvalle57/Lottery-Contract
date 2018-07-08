pragma solidity ^0.4.23;

import "./ownership/Ownable.sol";
import "./math/SafeMath.sol";
import "./LotteryFactory.sol";
import "./BytesConvertLib.sol";

/**
 * @title Lottery
 * @dev Lottery with 4 numbers between 01-99. for each bet we store:
 * 1 bytes4 [ 16, 19, 66, 88 ] = 0x10134258
 * 4 bytes3 [ 16, 19, 66 ] = 0x101342,  0x101358,  0x104258,  134258
 * according to the formula (n!/(k!(n-k)!)) where
 * for 3 numbers n = 4 and k = 3
 */

contract Lottery is Ownable {
    using SafeMath for uint256; 
    using BytesConvertLib for bytes;
    using BytesConvertLib for bytes4;

    event TransferJackPot(uint256 value);
    event TicketBuy(address indexed buyer, uint256 jackPot, uint256 numOfPlayers);
    event LotteryHasPlayed(uint256 numOfWinners, uint256 prize, bytes4 winningNumber, uint256 finalJackPot);

    uint256 public deadline;
    uint256 public lotteryValue;
    uint256 public jackPot;
    uint256 public finalJackPot;
    uint256 public prize;

    struct WinningNumbers { 
        bytes4 winningNumber; 
        bytes3[4] winningNumbers3;
    } 

    WinningNumbers public winningNumbers;

    // @dev mapping of the sender => numbers, when user enters the lottery we save his numbers
    mapping(address => bytes4[]) public playerNumbers4;
    mapping(address => bytes3[]) public playerNumbers3;

    // @dev mapping of the numbers => players[], when user enters a number we save his 
    // number pointing to his address
    mapping(bytes4 => address[]) public numbers4;
    mapping(bytes3 => address[]) public numbers3;

    // @dev mapping of player => allocation, when player is a winner we add the prize 
    mapping(address => uint256) public winnersAllocation;

    address[] public players;
    address[] public winners;

    bool public lotteryHasPlayed = false;

    // @dev we keep a reference of the last lottery
    address public lastLottery;

    // @dev the address of the factory which deployed this lottery
    address public factoryAddress;

    // @dev modifier to check if sender is the factoryAddress
    modifier onlyFactory() {
        require(msg.sender == factoryAddress);
        _;
    }
    /** 
    * @dev we set the lotteryFactory as the creator of this lottery
    * @param _duration how long will the lottery be open to enter
    * @param _lotteryValue sets the value of the lottery
    * @param _lastLotteryAddress address of the previous lottery
    */
    constructor(uint256 _duration, uint256 _lotteryValue, address _lastLotteryAddress) public {
        require(_duration > 0);
        require(_lotteryValue > 0);
        factoryAddress = msg.sender;
        deadline = now + _duration;
        lotteryValue = _lotteryValue;
        lastLottery = _lastLotteryAddress;
    }

    /** 
    * @notice allows the player to enter 
    * @param _number4 the main number in bytes [ 14, 15, 16, 19] = 0x0e0f1013
    * @param _numbers3 array[4] of bytes3, 4 possible combinations of 3 numbers
    * [ 14, 15, 16] = 0x0e0f10, ....
    */
    function enter(bytes4 _number4, bytes3[4] _numbers3) external payable {
        require(msg.value == lotteryValue, "value received is less than the lotteryValue");
        require(now < deadline, "Lottery has finalized");
        require(!lotteryHasPlayed, "Lottery has already played"); 
        require(_number4.areValidNumbers4(), "No repeated numbers inside the bet");
        require(_number4.areInsideNumber4(_numbers3));
        jackPot = jackPot.add(lotteryValue);
        players.push(msg.sender);
        _storeNumbers(_number4, _numbers3);
        emit TicketBuy(msg.sender, jackPot, players.length);
    }

    /** 
    * @notice we store one bytes4 and 4 bytes3 so when lottery plays
    * we compare how many players played these numbers to know how much was won
    * and separate this money from the jackpot
    * @param _number4 4 bytes containing the numbers
    * @param _numbers3 array[4] of bytes3 
    */
    function _storeNumbers(bytes4 _number4, bytes3[4] memory _numbers3) private {
        playerNumbers4[msg.sender].push(_number4);
        numbers4[_number4].push(msg.sender);
        for(uint256 k = 0; k < 4; k++){
            bytes3 _number3 = _numbers3[k];
            playerNumbers3[msg.sender].push(_number3);
            numbers3[_number3].push(msg.sender);
        }
    }

    /**     
    * @dev is called when player enters the lottery, we use this to allocate the money
    */
    function addJackPot() public payable {
        require(!lotteryHasPlayed, "lottery has still not played");
        require(deadline > now, "deadline is over");
        require(msg.value>0);
        jackPot = jackPot.add(msg.value);
        emit TransferJackPot(jackPot);
    }

    /** 
    * @notice play the lottery when is finished, we get a bytes32 keccak256 of the 
    * random number, first 2 bytes are divided by 99 and we take the residous
    * if the number is ok we put it in the first place of _number4, then we take
    * the subsequent 2 bytes and do the same to put it in the second slot of _number4
    * at the end _number 4 is the winning number
    */
    function playTheLottery() external onlyOwner {
        require(deadline < now, "deadline has to be over");
        require(!lotteryHasPlayed, "lottery has played");
        lotteryHasPlayed = true;
        bytes32 random = keccak256("1");        
        bytes memory _number4 = new bytes(4);
        uint256 size = 0;
        while(size < 4){
            if(size==4) break;
            uint256 pair = uint256(bytes2(random)) % 99;
            if(pair == 0) pair = 99;
            if(_number4.isNotRepeated(bytes1(pair)) && pair != 0){
                _number4[size] = bytes1(pair);
                size++;
            } 
            random = random << 16;
        }
        _number4 = _number4.sortArray();
        winningNumbers.winningNumber = _number4.convertBytesToBytes4();
        winningNumbers.winningNumbers3 = _number4.setCombinations3();
        _setWinners();
    }

    function _setWinners() private {
        uint256 allocation = jackPot.div(2);
        address[] memory number4Winners = numbers4[winningNumbers.winningNumber];
        if(number4Winners.length > 0){
            prize = prize.add(allocation);
            jackPot = jackPot.sub(allocation);
            uint256 allocationPerPlayer = allocation.div(number4Winners.length);
            for(uint256 j = 0; j < number4Winners.length; j++) {
                allocateEth(number4Winners[j], allocationPerPlayer);
            }
        }

        uint256 numberOfWinners;
        for(uint256 i = 0; i < 4; i++) {
            numberOfWinners = numberOfWinners.add(_getWinners3(i).length);
        }
        if(numberOfWinners > 0) {
            prize = prize.add(allocation);
            jackPot = jackPot.sub(allocation);
            allocationPerPlayer = allocation.div(numberOfWinners);
            for(uint256 k = 0; k < 4; k++) {
                address[] memory winners3 = _getWinners3(k); 
                if(winners3.length > 0) {
                    for(uint256 h = 0; h < winners3.length; h++) {
                        allocateEth(winners3[h], allocationPerPlayer);
                    }
                }
                
            } 
        }
        finalJackPot = jackPot;
        emit LotteryHasPlayed(winners.length, prize, winningNumbers.winningNumber, finalJackPot);    
    }

    function allocateEth(address _winner, uint256 _allocation) private {
        if(winnersAllocation[_winner] == 0) winners.push(_winner);
        winnersAllocation[_winner] = winnersAllocation[_winner].add(_allocation);
    }

    function payWinners() external onlyOwner {
        require(lotteryHasPlayed);
        require(address(this).balance > 0);
        require(winners.length > 0);
        
        for(uint256 j = 0; j < winners.length; j++) {
            address winner = winners[j];
            uint256 amount = winnersAllocation[winner];
            if(amount > 0) {
                winnersAllocation[winner] = 0;
                winner.transfer(amount);
            }
        }
    }

    function _getWinners3(uint256 _index) private view returns(address[]) {
        bytes3 thisNumber = winningNumbers.winningNumbers3[_index];
        address[] memory theseWinners = numbers3[thisNumber];
        return theseWinners;
    }

     /** 
    * @notice Transfer the jackpot after picking all winners
    */
    function transferJackPot(address _newLottery) external onlyFactory {
        require(jackPot > 0, "Jackpot sohuld be more than 0");
        require(lotteryHasPlayed, "lottery has played");
        require(_newLottery != address(0), "new lottery address should not be 0");
        uint256 _jackPot = jackPot;
        jackPot = 0;
        Lottery lottery = Lottery(_newLottery);
        lottery.addJackPot.value(_jackPot)();  
    } 

    //@dev Getters
    
    function getPlayers() external view returns(address[]){
        return players;
    }

    function getSummary() external view returns (
        uint256, uint256, uint256, uint256, uint256, uint256, 
        uint256, bool, address, address, address, bytes4
    ) {
        return (
            lotteryValue,
            deadline,
            jackPot,
            players.length,
            prize,
            winners.length,
            finalJackPot,
            lotteryHasPlayed,
            lastLottery,
            factoryAddress, 
            owner, 
            winningNumbers.winningNumber
        );
    }

    function getWinningNumbers() external view returns(bytes4, bytes3, bytes3, bytes3, bytes3) {
        return  (
            winningNumbers.winningNumber,
            winningNumbers.winningNumbers3[0],
            winningNumbers.winningNumbers3[1],
            winningNumbers.winningNumbers3[2],
            winningNumbers.winningNumbers3[3]);
    }

    function getNumbers4ByPlayer() external view returns(bytes4[]) {
        return playerNumbers4[msg.sender];
    }

    function getNumbers3ByPlayer() external view returns(bytes3[]) {
        return playerNumbers3[msg.sender];
    }

    function getPlayersByNumber4(bytes4 _number) external view returns(address[]){
        return numbers4[_number];
    }

    function getPlayersByNumber3(bytes3 _number3) external view returns(address[]){
        return numbers3[_number3];
    }
}



