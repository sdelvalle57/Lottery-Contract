pragma solidity ^0.4.23;

import "./ownership/Ownable.sol";
import "./math/SafeMath.sol";
import "./LotteryFactory.sol";

/**
 * @title Lottery
 * @dev Lottery with 6 numbers between 01-45. for each bet we store:
 * 1 bytes6 [ 14, 15, 16, 19, 32, 35 ] = 0x0e0f10132023
 * 6 bytes5 [ 14, 15, 16, 19, 35 ] = 0x0e0f101323, ..... 
 * 15 bytes4 [ 14, 15, 16, 19, 35 ] = 0x0e0f101323, ..... 
 * according to the formula (n!/(k!(n-k)!)) where
 * for 5 numbers n = 6 and k = 5, for 4 numbers n = 6 and k = 4
 */

contract Lottery is Ownable {
    using SafeMath for uint256; 

    event Winners(address[] winners, uint256 jackPot);
    event TransferJackPot(uint256 value);
    event Debug(uint val);

    uint256 public deadline;
    uint256 public lotteryValue;
    uint256 public jackPot;
   
    struct WinningNumbers { 
        bytes6 winningNumber; 
        bytes5[6] winningNumbers5;
        bytes4[15] winningNumbers4;
    } 

    WinningNumbers public winningNumbers;

    // @dev mapping of the sender => numbers, when user enters the lottery we save his numbers
    mapping(address => bytes6[]) public playerNumbers6;
    mapping(address => bytes5[]) public playerNumbers5;
    mapping(address => bytes4[]) public playerNumbers4;

    // @dev mapping of the numbers => players[], when user enters a number we save his 
    // number pointing to his address
    mapping(bytes6 => address[]) public numbers6;
    mapping(bytes5 => address[]) public numbers5;
    mapping(bytes4 => address[]) public numbers4;

    address[] public players;

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
    * @notice allows the player to enter (1500000 gas in testing)
    * @param _number6 the main numbers in bytes [ 14, 15, 16, 19, 32, 35 ] = 0x0e0f10132023
    * @param _numbers5 array[6] of bytes5, 6 possible combinations of 5 numbers
    * [ 14, 15, 16, 19, 35 ] = 0x0e0f101323, ....
    * @param _numbers4 array[15] of bytes4, 15 possible combinations of 4 numbers
    * [ 14, 15, 16, 19 ] = 0x0e0f1013, ....
    */
    function enter(bytes6 _number6, bytes5[6] _numbers5, bytes4[15] _numbers4) external payable {
        require(msg.value == lotteryValue, "value received is less than the lotteryValue");
        require(now < deadline, "Lottery has finalized");
        require(!lotteryHasPlayed, "Lottery has already played");
        require(_areValidNumbers6(_number6), "No repeated numbers inside the bet");
        require(_areInsideNumber6(_number6, _numbers5));
        require(_areInsideNumber6(_number6, _numbers4));
        jackPot = jackPot.add(lotteryValue);
        players.push(msg.sender);
        _storeNumbers(_number6, _numbers5, _numbers4);
    }

    /** 
    * @notice checks if there is no numbers below 0 and above 45
    * then checks if there is no repeated number and they are
    * organized from lowest to highest
    * @param _number6 6 bytes containing the numbers
    */
    function _areValidNumbers6(bytes6 _number6) private pure returns(bool) {
        if(_number6.length!=6) return false;
        for(uint256 i = 0; i < _number6.length; i++) {
            bytes1 num = _number6[i];
            if(uint256(num) <= 0 || uint256(num)>45) { 
                return false;
            }
            for(uint256 j = i+1; j < _number6.length; j++) {
                if(num >= _number6[j]) return false;
            }
        }
        return true;
    }

    /** 
    * @notice checks if there is no numbers below 0 and above 45
    * then checks if there is no repeated number and they are
    * organized from lowest to highest
    * @param _number5 5 bytes containing the numbers
    */
    function _areValidNumbers5(bytes5 _number5) private pure returns(bool) {
        if(_number5.length!=5) return false;
        for(uint256 i = 0; i < _number5.length; i++) {
            bytes1 num = _number5[i];
            if(uint256(num) <= 0 || uint256(num)>45) { 
                return false;
            }
            for(uint256 j = i+1; j < _number5.length; j++) {
                if(num >= _number5[j]) return false;
            }
        }
        return true;
    }

    /** 
    * @notice checks if there is no numbers below 0 and above 45
    * then checks if there is no repeated number and they are
    * organized from lowest to highest
    * @param _number4 4 bytes containing the numbers
    */
    function _areValidNumbers4(bytes4 _number4) private pure returns(bool) {
        if(_number4.length!=4) return false;
        for(uint256 i = 0; i < _number4.length; i++) {
            bytes1 num = _number4[i];
            if(uint256(num) <= 0 || uint256(num)>45) { 
                return false;
            }
            for(uint256 j = i+1; j < _number4.length; j++) {
                if(num >= _number4[j]) return false;
            }
        }
        return true;
    }

    /** 
    * @notice checks if each number(2nd for) inside each combination(1st for) is valid
    * and is inside the main number(3rd for) or @param _number6 
    * so, we check for example a number6 in integers is [ 14, 15, 16, 19, 32, 35 ]
    * this in bytes is 0x0e0f10132023, so one of the possible 15 combinations of 4 
    * numbers could be [ 14, 15, 16, 19, 35 ] where in bytes is 0x0e0f101323 
    * @param _number6 6 bytes containing the numbers
    * @param _numbers5 array[6] of bytes5
    */
    function _areInsideNumber6(bytes6 _number6, bytes5[6] memory _numbers5) private pure returns(bool) {
        uint256 numbersLength = 0;
        for(uint256 i = 0; i < _numbers5.length; i++){
            bytes5 number5 = _numbers5[i];
            if(!_areValidNumbers5(number5)) return false;
            uint256 index = 0;
            uint256 found = 0;
            for(uint256 j = 0; j < number5.length; j++){
                bytes1 each = number5[j];
                for(uint256 k = index; k < _number6.length; k++){
                    if(_number6[k] == each){
                        index = k;
                        found++;
                        break;
                    }
                }
            }
            if(found==5) numbersLength++;
        }
        return numbersLength==6;
    }

    /** 
    * @notice checks if each number(2nd for) inside each combination(1st for) is valid
    * and is inside the main number(3rd for) or @param _number6 
    * so, we check for example a number6 in integers is [ 14, 15, 16, 19, 32, 35 ]
    * this in bytes is 0x0e0f10132023, so one of the possible 15 combinations of 4 
    * numbers could be [ 14, 15, 16, 35 ] where in bytes is 0x0e0f1023 
    * @param _number6 6 bytes containing the numbers
    * @param _numbers4 array[15]  of bytes4 
    */
    function _areInsideNumber6(bytes6 _number6, bytes4[15] memory _numbers4) private pure returns(bool) {
        uint256 numbersLength = 0;
        for(uint256 i = 0; i < _numbers4.length; i++){
            bytes4 number4 = _numbers4[i];
            if(!_areValidNumbers4(number4)) return false;
            uint256 index = 0;
            uint256 found = 0;
            for(uint256 j = 0; j < number4.length; j++){
                bytes1 each = number4[j];
                for(uint256 k = index; k < _number6.length; k++){
                    if(_number6[k] == each){
                        index = k;
                        found++;
                        break;
                    }
                }
            }
            if(found==4) numbersLength++;
        }
        return numbersLength==15;
    }

    /** 
    * @notice we store one bytes6, 6 bytes5 and 15 bytes4, so when lottery plays
    * we compare how many players played these numbers to know how much was won
    * and separate this money from the jackpot
    * @param _number6 6 bytes containing the numbers
    * @param _numbers5 array[6]  of bytes5
    * @param _numbers4 array[15]  of bytes4 
    */
    function _storeNumbers(bytes6 _number6, bytes5[6] memory _numbers5, bytes4[15] memory _numbers4) private {
        playerNumbers6[msg.sender].push(_number6);
        numbers6[_number6].push(msg.sender);
        for(uint256 i = 0; i < _numbers5.length; i++){
            bytes5 _number5 = _numbers5[i];
            playerNumbers5[msg.sender].push(_number5);
            numbers5[_number5].push(msg.sender);
        }
        for(uint256 j = 0; j < _numbers4.length; j++){
            bytes4 _number4 = _numbers4[j];
            playerNumbers4[msg.sender].push(_number4);
            numbers4[_number4].push(msg.sender);
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
    * random number, first 2 bytes are divided by 45 and we take the residous
    * if the number is ok we put it in the first place of _number6, then we take
    * the subsequent 2 bytes and do the same to put it in the second slot of _number6
    * at the end _number 6 is the winning number
    */
    function playTheLottery() external onlyOwner {
        require(deadline > now, "deadline has to be over");
        require(!lotteryHasPlayed, "lottery has played");
        lotteryHasPlayed = true;
        bytes32 random = keccak256(now);        
        bytes memory _number6 = new bytes(6);
        uint256 size = 0;
        while(size < 6){
            if(size==6) break;
            uint256 pair = uint256(bytes2(random)) % 45;
            if(pair == 0) pair = 45;
            if(_isNotRepeated(bytes1(pair), _number6) && pair != 0){
                _number6[size] = bytes1(pair);
                size++;
            } 
            random = random << 16;
        }
        _number6 = _sortArray(_number6);
        winningNumbers.winningNumber = convertBytesToBytes6(_number6);
        //WinningNumbers.winningNumbers5 = setCombinations5();
        //WinningNumbers.winningNumbers4 = setCombinations4(); 
    }

    /** 
    * @notice we check there are no repeated numbers inside the future winning number
    * @param _pair the byte to check if is not inside the array of bytes
    * @param _number6 array of 6 bytes 
    */
    function _isNotRepeated(bytes1 _pair, bytes memory _number6) private pure returns(bool) {
        for(uint256 i = 0; i < _number6.length; i++){
            if(_pair == _number6[i]) return false;
        }
        return true;
    }

    /** 
    * @notice sorts the array from the lowest to highest
    * @param _number6 array of 6 bytes 
    */
    function _sortArray(bytes memory _number6) private pure returns (bytes) {
        uint256 l = _number6.length;
        for(uint256 i = 0; i < l; i++) {
            for(uint256 j = i+1; j < l ;j++) {
                if(_number6[i] > _number6[j]) {
                    bytes1 temp = _number6[i];
                    _number6[i] = _number6[j];
                    _number6[j] = temp;
                }
            }
        }
        return _number6;
    }

    /** 
    * @notice converts byte to readonly bytes6, this will be the final number
    * @param _number6 array of 6 bytes 
    */
    function convertBytesToBytes6(bytes memory _number6) private pure returns (bytes6 outBytes6) {
        for (uint256 i = 0; i < _number6.length; i++) {
            bytes6 tempBytes6 = _number6[i];
            tempBytes6 = tempBytes6 >> (8 * i);
            outBytes6 = outBytes6 | tempBytes6;
        }
    }

    function setCombinations5() private view returns (bytes5[]) {
        //bytes6 winner = WinningNumbers.winningNumber;

    }

    function setCombinations4() private view returns (bytes4[]) {
        //bytes6 winner = WinningNumbers.winningNumber;

    }

     /** 
    * @notice Transfer the jackpot nobody won the lottery to a the newLottery 
    */
    function transferJackPot(address _newLottery) external onlyFactory {
        //require(winners.length == 0, "Must not be winners in order to transfer");
        require(jackPot > 0, "Jackpot sohuld be more than 0");
        require(lotteryHasPlayed, "lottery has played");
        require(_newLottery != address(0), "new lottery address should not be 0");
        uint256 _jackPot = jackPot;
        jackPot = 0;
        Lottery lottery = Lottery(_newLottery);
        lottery.addJackPot.value(_jackPot)();  
    }

    //Getters
    function getStoredNumbers6(bytes6 _number6, address user) public view returns(
        uint256, uint256) {
        return (
            playerNumbers6[user].length,
            numbers6[_number6].length
        );
    }

    function getStoredNumbers5(bytes5 _number5, address user) public view returns(
        uint256, uint256) {
        return (
            playerNumbers5[user].length,
            numbers5[_number5].length
        );
    }

    function getStoredNumbers4(bytes4 _numbers4, address user) public view returns(
        uint256, uint256) {
        return (
            playerNumbers4[user].length,
            numbers4[_numbers4].length
        );
    }

    function getPlayers() external view returns(address[]){
        return players;
    }

    function getSummary() external view returns (
        uint256, uint256, uint256, uint256, uint256, bool, address, address, address
    ) {
        return (
            lotteryValue,
            deadline,
            jackPot,
            players.length,
            players.length,
            lotteryHasPlayed,
            lastLottery,
            factoryAddress, 
            owner
        );
    }
    
}



