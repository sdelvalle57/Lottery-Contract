pragma solidity ^0.4.23;

import "../ownership/Ownable.sol";
import "../LotteryFactory.sol"; 
import "./LotteryMock.sol"; 

/**
 * @title LotteryFactoryMock
 * @dev This is the LotteryMock creator
 */
contract LotteryFactoryMock is LotteryFactory { 
   
    function createNewLottery(uint256 _duration, uint256 _lotteryValue) external onlyOwner { 
        if (lotteries.length==0) {
            LotteryMock newLottery = new LotteryMock(_duration, _lotteryValue, address(0));        
            _setLotteryData(newLottery);
        } else { 
            LotteryMock lottery = LotteryMock(lotteries[lotteries.length-1]);
            require(lottery.lotteryHasPlayed(), "Checks if the previous lottery has already played");
            _createLottery(_duration, _lotteryValue, lottery);
        }
    }

    function _createLottery(uint256 _duration, uint256 _lotteryValue, Lottery _lastLottery) private {
        Lottery newLottery = new Lottery(_duration, _lotteryValue, address(_lastLottery));
        _setLotteryData(newLottery);
    }

    function _setLotteryData(Lottery _newLottery) private {
        _newLottery.transferOwnership(owner);
        lotteries.push(address(_newLottery));
        emit LotteryDeployed(address(_newLottery)); 
    }

}