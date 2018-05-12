pragma solidity ^0.4.23;

import "./ownership/Ownable.sol";
import "./Lottery.sol"; 

/**
 * @title LotteryFactory
 * @dev This is the lottery creator
 */
contract LotteryFactory is Ownable { 
    event LotteryDeployed(address deployedLottery);
    address public deployedLottery;
    event Oe(address one, address two);
    
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
        require(msg.sender==deployedLottery, "Caller of this function must be the last lottery created");
        return createLottery(_duration, _lotteryValue, deployedLottery);
        
    }

    /** 
    * @notice create the new lottery,
    * @param _duration duration of the lottery
    * @param _lotteryValue value of the lottery
    * @param _deployedLottery address of the most recent deployed lottery
    */
    function createLottery(uint256 _duration, uint256 _lotteryValue, address _deployedLottery) private returns (Lottery) {
        Lottery l = new Lottery(_duration, _lotteryValue, this, _deployedLottery);
        l.transferOwnership(owner);
        deployedLottery = address(l);
        emit LotteryDeployed(deployedLottery);
        return l;
    }
}