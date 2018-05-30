pragma solidity ^0.4.23;

import "./ownership/Ownable.sol";
import "./math/SafeMath.sol";
import "./LotteryFactory.sol";

/**
 * @title Lottery
 * @dev Lottery with 6 numbers between 01-99.
 */
contract Lottery is Ownable {
    using SafeMath for uint256; 

    event Winners(address[] winners, uint256 jackPot);
    event TransferJackPot(uint256 value);
    event Debug(uint val);

    uint256 public deadline;
    uint256 public lotteryValue;
    uint256 public jackPot;
    uint256 public winningNumber;
    
    // @dev mapping of the LotteryNumber => users who chose that number
    mapping(uint256 => address[]) public contest;

    // @dev mapping of the sender => numbers, when user enters the lottery we save his numbers
    mapping(address => uint256[]) public playerNumbers;
    address[] public players;

    bool public lotteryHasPlayed = false;

    // @dev we keep a reference of the last lottery
    address public lastLottery;

    // @dev the address of the factory which deployed this lottery
    address public factoryAddress;

    // @dev modifier to check if sender is the factoryAddress
    modifier onlyFactory() {
        require(msg.sender == factoryAddress);
        _;
    }
    /** 
    * @dev we set the lotteryFactory as the creator of this lottery
    * @param _duration how long will the lottery be open to enter
    * @param _lotteryValue sets the value of the lottery
    * @param _lastLotteryAddress address of the previous lottery
    */
    constructor(uint256 _duration, uint256 _lotteryValue, address _lastLotteryAddress) public {
        require(_duration > 0);
        require(_lotteryValue > 0);
        factoryAddress = msg.sender;
        deadline = now + _duration;
        lotteryValue = _lotteryValue;
        lastLottery = _lastLotteryAddress;
    }

    /** 
    * @notice (130000 gas) allows the player to enter, chacking amount and deadline and refund 
    * if the value sent is more than the lotteryValue
    * @param _numbers inside the probability 
    */
    function enter(uint256[] _numbers) external payable {
        require(msg.value == lotteryValue, "value received is less than the lotteryValue");
        require(now < deadline, "Lottery has finalized");
        require(_numbers.length == 6, "total numbers submited are 6");
        require(!lotteryHasPlayed);
        jackPot = jackPot.add(lotteryValue);
        players.push(msg.sender);
        //contest[_numbers].push(msg.sender);    
    }

     /** 
    * @notice Transfer the jackpot nobody won the lottery to a the newLottery 
    */
    function transferJackPot(address _newLottery) external onlyFactory {
        //require(winners.length == 0, "Must not be winners in order to transfer");
        require(jackPot > 0, "Jackpot sohuld be more than 0");
        require(lotteryHasPlayed, "lottery has played");
        require(_newLottery != address(0), "new lottery address should not be 0");
        uint256 _jackPot = jackPot;
        jackPot = 0;
        Lottery lottery = Lottery(_newLottery);
        lottery.addJackPot.value(_jackPot)();  
    }

    function addJackPot() public payable {
        require(msg.value>0);
        jackPot = jackPot.add(msg.value);
        emit TransferJackPot(jackPot);
    }

    function getSummary() external view returns (
        uint256, uint256, uint256, uint256, uint256, uint256, bool, address, address, address
    ) {
        return(
            lotteryValue,
            deadline,
            jackPot,
            winningNumber,
            players.length,
            players.length,
            lotteryHasPlayed,
            lastLottery,
            factoryAddress, 
            owner
        );
    }

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
    /** 
    * @notice This is used only for testing purpose, has to be deleted 
    */
    function setWinningNumber(uint256 _winningNumber) external onlyOwner {
        require(!lotteryHasPlayed);
        require(deadline < now);
        winningNumber = _winningNumber;
    }

    
}



