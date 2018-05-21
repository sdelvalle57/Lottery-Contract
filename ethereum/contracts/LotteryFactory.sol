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

    //
    /** 
    * @notice (1586381 gas) We launch this to start creating the chain of all contratacts
    * @param _duration duration of the lottery
    * @param _lotteryValue value of the lottery
    */
    constructor(uint256 _duration, uint256 _lotteryValue) public {
        Lottery newLottery = new Lottery(_duration, _lotteryValue, address(0));        
        _setLotteryData(newLottery);
    }

    /** 
    * @notice (1700000 gas) To create a new Lottery, first checks if lastLottery has played
    * if not, creates new lottery and transfers jackpot from the old to the new one 
    * if there is jackpot available
    * @param _duration duration of the lottery
    * @param _lotteryValue value of the lottery
    */
    function createNewLottery(uint256 _duration, uint256 _lotteryValue) public onlyOwner { 
        Lottery lottery = Lottery(lotteries[lotteries.length-1]);
        require(lottery.lotteryHasPlayed());
        _createLottery(_duration, _lotteryValue, lottery);
    }

    /** 
    * @notice create the new lottery,
    * @param _duration duration of the lottery
    * @param _lotteryValue value of the lottery
    */
    function _createLottery(uint256 _duration, uint256 _lotteryValue, Lottery lottery) private {
        Lottery newLottery = new Lottery(_duration, _lotteryValue, lotteries[lotteries.length-1]);
        _setLotteryData(newLottery);
        if (address(lottery) != 0 && lottery.getWinners().length == 0 && lottery.jackPot() > 0) {
            lottery.transferJackPot(address(newLottery), owner);
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