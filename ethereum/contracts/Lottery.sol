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

    event RefundAdded(address player, uint256 amount);
    event Winners(address[] winners, uint256 jackPot);
    event TransferJackPot(uint256 value);
    event Debug(uint val);

    uint256 public deadline;
    uint256 public lotteryValue;
    uint256 public jackPot;
    uint256 public winningNumber;
    // @dev probability is (99*98*97*96*95*94)/6! = 1.120'529.256
    uint256 public probability = 10; //
    
    // @dev mapping of the LotteryNumber => users who chose that number
    mapping(uint256 => address[]) public contest;

    // @dev mapping of the sender => amount, if user sends more than the value of the lottery
    mapping(address => uint256) public refunds;
    address[] public players;
    address[] public winners;

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
    * @param _number inside the probability 
    */
    function enter(uint256 _number) external payable {
        require(msg.value >= lotteryValue, "value received is less than the lotteryValue");
        require(now < deadline, "Lottery has finalized");
        require(_number <= probability, "number is less than probability");
        require(_number > 0, "number is greater than probability");
        require(!lotteryHasPlayed);
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
    * @notice (from 50000 gas) pickWinner can only be called by the owner and requires
    * the lottery to be closed, still waiting for a good source 
    * of random generator, we will use the blockhash for the moment
    * check if there are winners, if yes, divide the jackpot between
    * winners and add it to the refund mapping
    */
    function pickWinner() external onlyOwner {
        require(now > deadline, "The lottery is still open");
        require(!lotteryHasPlayed, "The lottery has already played");
        lotteryHasPlayed = true;
        if(winningNumber == 0){
            winningNumber = _setResult();
        }
        //require(winningNumber != 0, "Winnning number has to be greater than 0");
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
        uint256 result = uint256(keccak256(block.difficulty, block.number, players));
        return result >= probability ? (result % probability)+1 : result;        
    }

    /** 
    * @notice add  amount won to the @param winner into the refund mapping
    * @param winner the winner of the lottery
    * @param amount to be refunded
    */
    function _refund(address winner, uint256 amount) internal {
        refunds[winner] = refunds[winner].add(amount);
    }

     /** 
    * @notice Transfer the jackpot nobody won the lottery to a the newLottery 
    */
    function transferJackPot(address _newLottery) external onlyFactory {
        require(winners.length == 0, "Must not be winners in order to transfer");
        require(jackPot > 0, "Jackpot sohuld be more than 0");
        require(lotteryHasPlayed, "lottery has played");
        require(_newLottery != address(0), "new lottery address should not be 0");
        uint256 _jackPot = jackPot;
        jackPot = 0;
        Lottery lottery = Lottery(_newLottery);
        lottery.addJackPot.value(_jackPot)();  
    }


    /** 
    * @notice withdraw the whole amount stored in the refunds mapping
    */
    function withdraw() external {
        uint256 amount = refunds[msg.sender];
        refunds[msg.sender] = 0;
        msg.sender.transfer(amount);
    }

    function addJackPot() public payable {
        require(msg.value>0);
        jackPot = jackPot.add(msg.value);
        emit TransferJackPot(jackPot);
    }

    /** 
    * @notice All getters
    */
    function getPlayers() external view returns(address[]) {
        return players;
    }

    function getPlayersByLotteryNumber(uint256 _number) external view returns(address[]) {
        return contest[_number];
    }

    function getWinners() external view returns(address[]){
        return winners;
    }

    function getRefundValue() external view returns(uint256) {
        return refunds[msg.sender];
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
            winners.length,
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

    /** 
    * @notice This is used only for testing purpose, has to be deleted 
    */
    function setProbability(uint256 _probability) external onlyOwner {
        require(players.length == 0);
        require(!lotteryHasPlayed);
        probability = _probability;
    }
}



