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
}