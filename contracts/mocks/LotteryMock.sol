pragma solidity ^0.4.23;

import "../Lottery.sol";

contract LotteryMock is Lottery(5 seconds, 0.001 ether) {

    function getPlayers() external view returns(address[]) {
        return players;
    }

    function getPlayersByLotteryNumber(uint256 _number) external view returns(address[]) {
        return contest[_number];
    }

    function getWinners() external view returns(address[]){
        return winners;
    }

    function setWinningNumber(uint256 _winningNumber) external onlyOwner {
        winningNumber = _winningNumber;
    }

    function setProbability(uint256 _probability) external onlyOwner {
        probability = _probability;
    }
}