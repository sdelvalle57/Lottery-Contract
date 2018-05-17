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
        createLottery(_duration, _lotteryValue, address(0));
    }


    /** 
    * @notice gets called when a new lottery is created from Lottery.sol,
    *  we check if the caller is the last lottery created
    * @param _duration duration of the lottery
    * @param _lotteryValue value of the lottery
    */
    function createNewLottery(uint256 _duration, uint256 _lotteryValue) public returns (Lottery) { 
        require(msg.sender==lotteries[lotteries.length-1], "Caller of this function must be the last lottery created");
        return createLottery(_duration, _lotteryValue, lotteries[lotteries.length-1]);
        
    }

    /** 
    * @notice create the new lottery,
    * @param _duration duration of the lottery
    * @param _lotteryValue value of the lottery
    * @param _laterLottery address of the most recent lottery
    */
    function createLottery(uint256 _duration, uint256 _lotteryValue, address _laterLottery) private returns (Lottery) {
        Lottery l = new Lottery(_duration, _lotteryValue, this, _laterLottery);
        l.transferOwnership(owner);
        lotteries.push(address(l));
        indexOf[address(l)] = lotteries.length - 1;
        emit LotteryDeployed(address(l));
        return l;
    }

    /**
    * @notice getter for all deployed lotteries
     */
    function getLotteries() external view returns (address[]){
        return lotteries;
    }
}