pragma solidity ^0.4.23;

import "./LotteryMock.sol"; 
import "../LotteryFactory.sol";


contract LotteryFactoryMock is LotteryFactory { 
    
    function createNewLottery(uint256 _duration, uint256 _lotteryValue, address _reference) public onlyOwner returns (Lottery) {
        LotteryMock l = new LotteryMock(_duration, _lotteryValue, this, _reference);
        l.transferOwnership(msg.sender); 
        deployedLottery = address(l); 
        emit LotteryDeployed(deployedLottery); 
        return l;
    }

}