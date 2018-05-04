pragma solidity ^0.4.23;

import "./ownership/Ownable.sol";
import "./math/safeMath.sol";

/**
 * @title Lottery
 * @dev Lottery with 6 numbers between 01-99.
 */
contract Lottery is Ownable {
    using SafeMath for uint256;

    event RefundAdded(address player, uint256 amount);
    event Winners(address[] winners, uint256 jackPot);

    uint256 public deadline;
    uint256 public lotteryValue;
    uint256 public jackPot;
    uint256 public winningNumber;
    // @dev probability is (99*98*97*96*95*94)/6! = 1120529256
    uint256 probability = 1120529256; //
    
    // @dev mapping of the LotteryNumber => users who chose that number
    mapping(uint256 => address[]) public contest;

    // @dev mapping of the sender => amount, if user sends more than the value of the lottery
    mapping(address => uint256) public refunds;
    address[] public players;
    address[] public winners;

    bool public lotteryHasPlayed = false;

    /**
    * @dev constructor
    * @param _duration how long will the lottery be open to enter
    * @param _lotteryValue sets the value of the lottery
    */
    constructor(uint256 _duration, uint256 _lotteryValue) public {
        deadline = now + _duration;
        lotteryValue = _lotteryValue;
    }

    /** 
    * @notice allows the player to enter, chacking amount and deadline and refund 
    * if the value sent is more than the lotteryValue
    * @param _number inside the probability 
    */
    function enter(uint256 _number) external payable {
        require(msg.value >= lotteryValue, "value received is less than the lotteryValue");
        require(now < deadline, "Lottery has finalized");
        require(_number <= probability, "number is less than probability");
        jackPot = jackPot.add(lotteryValue);
        players.push(msg.sender);
        contest[_number].push(msg.sender);    
        _refundIfValueExceedsPrice();
    }

    /** 
    * @notice add the refunded value to the sender
    */
    function _refundIfValueExceedsPrice() private {
        if (msg.value > lotteryValue) {
            refunds[msg.sender] = refunds[msg.sender].add(msg.value.sub(lotteryValue));
            emit RefundAdded(msg.sender, refunds[msg.sender]);
        } 
    }

    /** 
    * @notice pickWinner can only be called by the owner and requires
    * the lottery to be closed, still waiting for a good source 
    * of random generator, we will use the blockhash for the moment
    * check if there are winners, if yes, divide the jackpot between
    * winners and add it to the refund mapping
    */
    function pickWinner() external onlyOwner {
        require(now > deadline, "The lottery is still open");
        require(lotteryHasPlayed == false, "The lottery has already played");
        lotteryHasPlayed = true;
        winningNumber = _setResult();
        winners = contest[winningNumber];
        if (winners.length > 0) {
            uint256 prizePerPlayer = jackPot.div(winners.length);
            jackPot = 0;
            for (uint8 i = 0; i < winners.length; i++) {
                _refund(winners[i], prizePerPlayer);
            }
            emit Winners(winners, prizePerPlayer);
        }         
    }

    /** 
    * @notice we just using blockhash fro the moment to set the lottery result
    */
    function _setResult() private view returns(uint256) {
        uint256 result = uint256(blockhash(block.number));
        return result >= probability ? result % probability : result;
    }

    /** 
    * @notice add  amount won to the @param winner into the refund mapping
    * @param winner the winner of the lottery
    * @param amount to be refunded
    */
    function _refund(address winner, uint256 amount) private {
        refunds[winner] = refunds[winner].add(amount);
    }

    /** 
    * @notice Transfer the jackpot nobody won the lottery to a new deployed lottery
    * @param contractAddress 
    */
    function transferJackPot(address contractAddress) external onlyOwner {
        require(lotteryHasPlayed == true);
        require(winners.length == 0);
        contractAddress.transfer(jackPot);
        jackPot = 0;
    }

    /** 
    * @notice withdraw the whole amount stored in the refunds mapping
    */
    function withdraw() external {
        uint256 amount = refunds[msg.sender];
        refunds[msg.sender] = 0;
        msg.sender.transfer(amount);
    }
}