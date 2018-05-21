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
    mapping(address => uint256) public indexOf; 
    
    //
    /** 
    * @notice (1586381 gas) We launch this to start creating the chain of all contratacts
    * @param _duration duration of the lottery
    * @param _lotteryValue value of the lottery
    */

    constructor(uint256 _duration, uint256 _lotteryValue) public {
        createLottery(_duration, _lotteryValue);
    }

    /** 
    * @notice gets called when a new lottery is created from Lottery.sol,
    *  we check if the caller is the last lottery created
    * @param _duration duration of the lottery
    * @param _lotteryValue value of the lottery
    */
    function createNewLottery(uint256 _duration, uint256 _lotteryValue) public onlyOwner returns (Lottery) { 
        Lottery lottery = Lottery(lotteries[lotteries.length-1]);
        require(lottery.lotteryHasPlayed());
        createLottery(_duration, _lotteryValue);
    }

    /** 
    * @notice create the new lottery,
    * @param _duration duration of the lottery
    * @param _lotteryValue value of the lottery
    * @param _laterLottery address of the most recent lottery
    */
    function createLottery(uint256 _duration, uint256 _lotteryValue) private returns (Lottery) {
        Lottery l = new Lottery(_duration, _lotteryValue, this, lotteries[lotteries.length-1]);
        l.transferOwnership(owner);
        lotteries.push(address(l));
        indexOf[address(l)] = lotteries.length - 1;
        emit LotteryDeployed(address(l));
    }

    /**
    * @notice getter for all deployed lotteries
     */
    function getLotteries() external view returns (address[]){
        return lotteries;
    }
}