pragma solidity ^0.4.23;

import "./ownership/Ownable.sol";
import "./math/SafeMath.sol";
import "./LotteryFactory.sol";
import "./BytesConvertLib.sol";

/**
 * @title Lottery
 * @dev Lottery with 6 numbers between 01-45. for each bet we store:
 * 1 bytes6 [ 14, 15, 16, 19, 32, 35 ] = 0x0e0f10132023
 */

contract Lottery is Ownable {
    using SafeMath for uint256; 
    using BytesConvertLib for bytes;
    using BytesConvertLib for bytes6;

    event TransferJackPot(uint256 value);
    event Debug(uint val);

    struct Ticket {
        bytes6 ticket;
        address user;
        bool number3;
        bool number4;
        bool number5;
        bool number6;
        bool processed;
    }

    struct Winners {
        uint256 numberOfWinners;
        uint256 allocated;
        uint256 payed;
    }

    uint256 public deadline;
    uint256 public lotteryValue;
    uint256 public jackPot;
    uint256 public index = 0;
    Winners public winners3;
    Winners public winners4;
    Winners public winners5;
    Winners public winners6;

    bytes6 public winningNumber;

    // @dev mapping of the sender => tickets, when user enters the lottery we save his tickets
    mapping(address => Ticket[]) public playerTickets;
    mapping(bytes6 => address[]) public ticketPlayers;

    Ticket[] public tickets;

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
    * @notice allows the player to enter (200000 gas in testing)
    * @param _ticket the ticket in bytes [ 14, 15, 16, 19, 32, 35 ] = 0x0e0f10132023
    */
    function enter(bytes6 _ticket) external payable {
        require(msg.value == lotteryValue, "value received is less than the lotteryValue");
        require(now < deadline, "Lottery has finalized");
        require(!lotteryHasPlayed, "Lottery has already played");
        require(_ticket.areValidNumbers(), "No repeated numbers inside the ticket");
        jackPot = jackPot.add(lotteryValue);
        Ticket memory newTicket = Ticket({
            ticket: _ticket,
            user: msg.sender,
            number3: false,
            number4: false,
            number5: false,
            number6: false,
            processed: false 
        });
        playerTickets[msg.sender].push(newTicket);
        ticketPlayers[_ticket].push(msg.sender);
        tickets.push(newTicket);
    }

    /** 
    * @notice play the lottery when is finished (70k gas test), we get a bytes32 keccak256 of the 
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
        bytes memory winner = new bytes(6);
        uint256 size = 0;
        while(size < 6){
            if(size==6) break;
            uint256 pair = uint256(bytes2(random)) % 45;
            if(pair == 0) pair = 45;
            if(winner.isNotRepeated(bytes1(pair)) && pair != 0){
                winner[size] = bytes1(pair);
                size++;
            } 
            random = random << 16;
        }
        winner = winner.sortArray();
        winningNumber = winner.convertBytesToBytes6();
    }

    function setWinners() external onlyOwner {
        require(deadline > now, "deadline has to be over");
        require(lotteryHasPlayed, "lottery has played");
        for(; index < tickets.length; index++) {
            Ticket storage savedTicket = tickets[index];
            bytes6 ticket = savedTicket.ticket;
            uint256 found = 0;
            uint256 lastFound = 0;
            for(uint256 j = 0; j < winningNumber.length; j++) {
                bytes1 chunk = winningNumber[j];
                for(uint256 k = lastFound; k < ticket.length; k++){
                    if((found==0 && k >= 3) || (found==1 && k >= 4)) break;
                    if(chunk == ticket[k]){
                        lastFound = k+1;
                        found++;
                        break;
                    } 
                }
            }
            if(found >= 3 && !savedTicket.number3) {
                savedTicket.number3 = true;
                winners3.numberOfWinners ++;
            } 
            if(found >= 4 && !savedTicket.number4) {
                savedTicket.number4 = true;
                winners4.numberOfWinners ++;
            } 
            if(found >= 5 && !savedTicket.number5) {
                savedTicket.number5 = true;
                winners5.numberOfWinners ++;              
            } 
            if(found == 6 && !savedTicket.number6) {
                savedTicket.number6 = true;
                winners6.numberOfWinners ++;                
            }
            if(gasleft() <= 200000 && index < tickets.length - 1) break;
        }
        if(index == tickets.length - 1) {
            if(winners3.numberOfWinners > 0 && winners3.allocated == 0){
                uint256 allocation3 = jackPot.mul(25).div(100);
                jackPot = jackPot.sub(allocation3);
                winners3.allocated = allocation3;
            }
            if(winners4.numberOfWinners > 0 && winners4.allocated == 0){
                uint256 allocation4 = jackPot.mul(25).div(100);
                jackPot = jackPot.sub(allocation4);
                winners4.allocated = allocation4;
            }
            if(winners5.numberOfWinners > 0 && winners5.allocated == 0){
                uint256 allocation5 = jackPot.mul(25).div(100);
                jackPot = jackPot.sub(allocation5);
                winners5.allocated = allocation5;
            }
            if(winners6.numberOfWinners > 0 && winners6.allocated == 0){
                uint256 allocation6 = jackPot.mul(25).div(100);
                jackPot = jackPot.sub(allocation6);
                winners6.allocated = allocation6;
            }
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

    //@dev Getters
    function getSummary() external view returns (
        uint256, uint256, uint256, uint256, bool, address, address, address) {
        return (
            lotteryValue,
            deadline,
            jackPot,
            tickets.length,
            lotteryHasPlayed,
            lastLottery,
            factoryAddress, 
            owner
        );
    }

/*
    function getWinner() external view returns(bytes6 winningNumber6) {
        winningNumber6 = winningNumbers.winningNumber;
    }

    function getWinner5(uint256 index) external view returns(bytes5) {
        return  winningNumbers.winningNumbers5[index];
    }

    function getWinner4(uint256 index) external view returns(bytes4) {
        return  winningNumbers.winningNumbers4[index];
    }

    function getWinner3(uint256 index) external view returns(bytes3) {
        return  winningNumbers.winningNumbers3[index];
    }
    */
}



