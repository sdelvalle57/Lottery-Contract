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

    event TicketBuy(address indexed buyer, uint256 jackPot, uint256 playersLength);
    event WinningNumber(bytes6 winningNumber);
    event WinnersResult();

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
        address[] winners;
        bytes6[] tickets;
    }

    uint256 public deadline;
    uint256 public lotteryValue;
    uint256 public jackPot;
    uint256 public finalJackPot;
    uint256 public index = 0;
    bytes6 public winningNumber;

    // @dev mapping of the sender => tickets, when user enters the lottery we save his tickets
    mapping(address => Ticket[]) public playerTickets;
    mapping(bytes6 => address[]) public ticketPlayers;

    Ticket[] public tickets;
    Winners[4] public winners;

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
        finalJackPot = jackPot;
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
        emit TicketBuy(msg.sender, jackPot, tickets.length);
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
        emit WinningNumber(winningNumber);
    }

    /**
    * @dev this function can consume a lot of gas, this is why we set an
    * index as global if we run out of gas during this call
    * We go through each ticket that was bought and we check if
    * each byte of each ticket is equal to each bytes of the winning 
    * number, if we get more than 3 results we have a winner, then we
    * call the _saveValues method for each winner found
    * After this, we check if all of the tickets have been checked
    * if so, we allocated the corresponding to each winner struct, 
    * the first position of winners is a struct defining the number
    * of winners who scored 3 numbers, the second is for 4 numbers
    * and so on.
    */
    function setWinners() external onlyOwner {
        require(deadline > now, "deadline has to be over");
        require(lotteryHasPlayed, "lottery has played");
        while(index < tickets.length) {
            Ticket storage savedTicket = tickets[index];
            bytes6 ticket = savedTicket.ticket;
            uint256 found = 0;
            uint256 offset = 0;
            for(uint256 j = 0; j < winningNumber.length; j++) {
                bytes1 chunk = winningNumber[j];
                for(uint256 k = offset; k < ticket.length; k++){
                    if((found == 0 && k >= 3) || (found == 1 && k >= 4)) break;
                    if(chunk == ticket[k]) {
                        offset = k + 1;
                        found++;
                        break;
                    } 
                }
            }
            if(found >= 3 && !savedTicket.number3) {
                savedTicket.number3 = true;
                _saveValues(0, ticket);
            } 
            if(found >= 4 && !savedTicket.number4) {
                savedTicket.number4 = true;
                _saveValues(1, ticket);
            } 
            if(found >= 5 && !savedTicket.number5) {
                savedTicket.number5 = true;
                _saveValues(2, ticket);        
            } 
            if(found == 6 && !savedTicket.number6) {
                savedTicket.number6 = true;
                _saveValues(3, ticket);              
            }
            index ++;
            if(gasleft() <= 300000 && index < tickets.length) break;
        }
        uint256 allocation = jackPot.div(4);
        if(index == tickets.length) {
            if(winners[0].numberOfWinners > 0 && winners[0].allocated == 0){
                jackPot = jackPot.sub(allocation);
                winners[0].allocated = allocation;
            }
            if(winners[1].numberOfWinners > 0 && winners[1].allocated == 0){
                jackPot = jackPot.sub(allocation);
                winners[1].allocated = allocation;
            }
            if(winners[2].numberOfWinners > 0 && winners[2].allocated == 0){
                jackPot = jackPot.sub(allocation);
                winners[2].allocated = allocation;
            }
            if(winners[3].numberOfWinners > 0 && winners[3].allocated == 0){
                jackPot = jackPot.sub(allocation);
                winners[3].allocated = allocation;
            }
        }
        emit WinnersResult();
    }

    /**
    * @dev we save the ticket if scored more than 3 numbers
    * @param _pos the position of the winner struct, 0 for 3 numbers,
    * 1 for 4 numbers, and so on
    * @param _ticket the winner ticket
    */
    function _saveValues(uint256 _pos, bytes6 _ticket) private {
        Winners storage _winners = winners[_pos];
        _winners.numberOfWinners ++;
        _winners.tickets.push(_ticket);
        address[] memory players = ticketPlayers[_ticket];
        for(uint256 l = 0; l < players.length; l++){
            _winners.winners.push(players[l]);
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
    }

     /** 
    * @notice Transfer the jackpot nobody won the lottery to a the newLottery 
    */
    function transferJackPot(address _newLottery) external onlyFactory {
        //require(winners.length == 0, "Must not be winners in order to transfer");
        require(jackPot > 0, "Jackpot sohuld be more than 0");
        require(lotteryHasPlayed, "lottery has played");
        require(_newLottery != address(0), "new lottery address should not be 0");
        finalJackPot = jackPot;
        jackPot = 0;
        Lottery lottery = Lottery(_newLottery);
        lottery.addJackPot.value(finalJackPot)();  
    }

    //@dev Getters
    function getSummary() external view returns (
        uint256, uint256, uint256, uint256, bool, 
        address, address, address, bytes6) {
        return (
            lotteryValue,
            deadline,
            finalJackPot,
            tickets.length,
            lotteryHasPlayed,
            lastLottery,
            factoryAddress, 
            owner,
            winningNumber
        );
    }

    function getWinners(uint256 _n) external view returns (
        uint256, uint256, uint256, address[],bytes6[]) {
        uint256 _numberOfWinners = winners[_n - 3].numberOfWinners;
        uint256 _allocated = winners[_n - 3].allocated;
        uint256 _payed = winners[_n - 3].payed;
        address[] memory _winners = winners[_n - 3].winners;
        bytes6[] memory _tickets = winners[_n - 3].tickets;
        return(
            _numberOfWinners, 
            _allocated, 
            _payed,
            _winners,
            _tickets
            );
    }

    function getPlayerTicket(address _address, uint256 _index) external view returns (bytes6 outTicket){
        outTicket = playerTickets[_address][_index].ticket;
    }

    function getNumberOfTickets(address _address) external view returns (uint256 size) {
        size = playerTickets[_address].length;
    }

    function getPlayers(bytes6 _ticket) external view returns (address[]) {
        return ticketPlayers[_ticket];
    }

    function getNumberOfPlayers() public view returns (uint256) {
        return tickets.length;
    }

/*
bytes6 ticket;
        address user;
        bool number3;
        bool number4;
        bool number5;
        bool number6;
        bool processed;
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



