pragma solidity ^0.4.23;

import "../Lottery.sol";
import "../BytesConvertLib.sol"; 

contract LotteryMock is Lottery {

    bytes32 public random;


    constructor(uint256 _duration, uint256 _lotteryValue, address _lastLotteryAddress) public 
    Lottery(_duration,  _lotteryValue,  _lastLotteryAddress){
        
    }

    function playTheLottery() external onlyOwner {
        lotteryHasPlayed = true;
        random = keccak256("1");
        
        bytes memory _number4 = new bytes(4);
        uint256 size = 0;
        while(size < 4){
            if(size==4) break;
            uint256 pair = uint256(bytes2(random)) % 99;
            if(pair == 0) pair = 99;
            if(_number4.isNotRepeated(bytes1(pair)) && pair != 0){
                _number4[size] = bytes1(pair);
                size++;
            } 
            random = random << 16;
        }
        
        _number4 = _number4.sortArray();
        winningNumbers.winningNumber = _number4.convertBytesToBytes4();
        winningNumbers.winningNumbers3 = _number4.setCombinations3();
        _setWinners();
    }

    function _setWinners() private {
        uint256 allocation = jackPot.div(2);
        address[] memory number4Winners = numbers4[winningNumbers.winningNumber];
        if(number4Winners.length > 0){
            jackPot = jackPot.sub(allocation);
            uint256 allocationPerPlayer = allocation.div(number4Winners.length);
            for(uint256 j = 0; j < number4Winners.length; j++) {
                address winner4 = number4Winners[j];
                winners[winner4] = winners[winner4].add(allocationPerPlayer);
            }
        }
    }
}