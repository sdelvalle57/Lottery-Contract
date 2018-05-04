pragma solidity ^0.4.23;

import "../Lottery.sol";

contract LotteryMock is Lottery(5 minutes, 0.001 ether) {

    function getPlayers() external view returns(address[]) {
        return players;
    }

    function getPlayersByLotteryNumber(uint256 _number) external view returns(address[]) {
        return contest[_number];
    }

    function setWinningNumber(uint256 _winningNumber) external onlyOwner {
        winningNumber = _winningNumber;
    }

    function setProbability(uint256 _probability) external onlyOwner {
        probability = _probability;
    }

    function setDeadline(uint256 _deadline) external onlyOwner {
        deadline = now + _deadline;
    }
}