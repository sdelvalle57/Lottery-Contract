pragma solidity ^0.4.23;

import "./ownership/Ownable.sol";
import "./Lottery.sol"; 

/**
 * @title LotteryFactory
 * @dev This is the lottery creator
 */
contract LotteryFactory is Ownable { 
    event LotteryDeployed(address deployedLottery);
    
    address[] public lotteries;

    /** 
    * @notice (1800000 gas) To create a new Lottery
    * first checks if there was lotteries created, if so creates the first lottery
    * if there was lottery before created, then checks if lastLottery has already played
    * to then create the newLottery
    * @param _duration duration of the lottery
    * @param _lotteryValue value of the lottery
    */
    function createNewLottery(uint256 _duration, uint256 _lotteryValue) external onlyOwner { 
        if (lotteries.length==0) {
            Lottery newLottery = new Lottery(_duration, _lotteryValue, address(0));        
            _setLotteryData(newLottery);
        } else { 
            Lottery lottery = Lottery(lotteries[lotteries.length-1]);
            require(lottery.lotteryHasPlayed(), "Checks if the previous lottery has already played");
            _createLottery(_duration, _lotteryValue, lottery);
        }
    }

    /** 
    * @notice create the new lottery, checks if last lottery has jackpot to transfer
    * @param _duration duration of the lottery
    * @param _lotteryValue value of the lottery
    * @param _lastLottery the last deployed lottery
    */
    function _createLottery(uint256 _duration, uint256 _lotteryValue, Lottery _lastLottery) private {
        Lottery newLottery = new Lottery(_duration, _lotteryValue, address(_lastLottery));
        _setLotteryData(newLottery);
        if (address(_lastLottery) != 0 && _lastLottery.getWinners().length == 0 && _lastLottery.jackPot() > 0) {
            _lastLottery.transferJackPot(address(newLottery)); 
        } 
    }

    /** 
    * @notice transfers ownership and push the new lottery
    * @param _newLottery recently deployed lottery
    */
    function _setLotteryData(Lottery _newLottery) private {
        _newLottery.transferOwnership(owner);
        lotteries.push(address(_newLottery));
        emit LotteryDeployed(address(_newLottery)); 
    }

    /**
    * @notice getter for all deployed lotteries
     */
    function getLotteries() external view returns (address[]){
        return lotteries;
    }
}