pragma solidity ^0.4.23;

import "../Lottery.sol";
import "../BytesConvertLib.sol"; 

contract LotteryMock is Lottery {

    bytes32 public random;


    constructor(uint256 _duration, uint256 _lotteryValue, address _lastLotteryAddress) public 
    Lottery(_duration,  _lotteryValue,  _lastLotteryAddress){
        
    }

    function playTheLottery() external {
        random = keccak256("1");        
        bytes memory _number6 = new bytes(6);
        uint256 size = 0;
        while(size < 6){
            if(size==6) break;
            uint256 pair = uint256(bytes2(random)) % 45;
            if(pair == 0) pair = 45;
            if(_isNotRepeated(bytes1(pair), _number6) && pair != 0){
                _number6[size] = bytes1(pair);
                size++;
            } 
            random = random << 16;
        }
        _number6 = _sortArray(_number6);
        winningNumbers.winningNumber = _convertBytesToBytes6(_number6);
        winningNumbers.winningNumbers5 = _setCombinations5(_number6);
        winningNumbers.winningNumbers4 = _setCombinations4(_number6); 
        winningNumbers.winningNumbers3 = _setCombinations3(_number6); 
         
    }

}