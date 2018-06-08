pragma solidity ^0.4.23;

import "../Lottery.sol";

contract LotteryMock is Lottery {

    constructor(uint256 _duration, uint256 _lotteryValue, address _lastLotteryAddress) public 
    Lottery(_duration,  _lotteryValue,  _lastLotteryAddress){
        
    }

    function playTheLottery() external onlyOwner {
        bytes32 random = keccak256("1");
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

    function setWinners() external {
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
    }

    function _saveValues(uint256 _pos, bytes6 _ticket) private {
        Winners storage _winners = winners[_pos];
        _winners.numberOfWinners ++;
        _winners.tickets.push(_ticket);
        address[] memory players = ticketPlayers[_ticket];
        for(uint256 l = 0; l < players.length; l++){
            _winners.winners.push(players[l]);
        }
    }

    function getTicketsLength() external view returns (uint256) {
        return tickets.length;
    }
}