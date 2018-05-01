pragma solidity ^0.4.21;

import "./ownership/Ownable.sol";

/**
 * @title Lottery
 * @dev Lottery with 6 numbers between 01-99.
 */
contract Lottery is Ownable {
    
    /**
    * @dev mapping of the LotteryNumber => users who chose that number
    */
    mapping(uint256 => address[]) public contest;
    address[] public players;

    function enter(uint256 _number) external payable {
        require(msg.value > 0 ether);
        players.push(msg.sender);
        contest[_number].push(msg.sender);    
    }

    function getAllPlayers() external view returns (address[]) {
        return players;
    }

    function getPlayersByLotteryNumber(uint256 _number) external view returns (address[]) {
        return contest[_number];
    }

}