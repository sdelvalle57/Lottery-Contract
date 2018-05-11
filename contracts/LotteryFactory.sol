pragma solidity ^0.4.23;

import "./ownership/Ownable.sol";
import "./Lottery.sol"; 


contract LotteryFactory is Ownable { 
    event LotteryDeployed(address deployedLottery);
    address public deployedLottery;
    
    //1586381 gas
    function createNewLottery(uint256 _duration, uint256 _lotteryValue, address _reference) public onlyOwner returns (Lottery) {
        Lottery l = new Lottery(_duration, _lotteryValue, this, _reference);
        l.transferOwnership(msg.sender);
        deployedLottery = address(l);
        emit LotteryDeployed(deployedLottery);
        return l;
    }
}