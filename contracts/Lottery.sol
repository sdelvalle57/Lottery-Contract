pragma solidity ^0.4.21;

import "./ownership/Ownable.sol";

contract Lottery is Ownable {

    struct Player {
        address playerAddress;
    }

    Player[] public players;
    mapping(uint256 => Player[]) public winners;

    function enter() external payable {
        require(msg.value > 2 ether);
        Player memory player = Player({
            playerAddress: msg.sender
        });
        players.push(player);        
    }

}