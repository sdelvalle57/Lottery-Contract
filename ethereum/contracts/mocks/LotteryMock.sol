pragma solidity ^0.4.23;

import "../Lottery.sol";

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
    }

    function _isNotRepeated(bytes1 _pair, bytes memory _number6) private pure returns(bool) {
        for(uint256 i = 0; i < _number6.length; i++){
            if(_pair == _number6[i]) return false;
        }
        return true;
    }

    function _sortArray(bytes memory _number6) private pure returns (bytes) {
        uint256 l = _number6.length;
        for(uint256 i = 0; i < l; i++) {
            for(uint256 j = i+1; j < l ;j++) {
                if(_number6[i] > _number6[j]) {
                    bytes1 temp = _number6[i];
                    _number6[i] = _number6[j];
                    _number6[j] = temp;
                }
            }
        }
        return _number6;
    }

    function convertBytesToBytes6(bytes memory _number6) private pure returns (bytes6 outBytes6) {
        for (uint256 i = 0; i < _number6.length; i++) {
            bytes6 tempBytes6 = _number6[i];
            tempBytes6 = tempBytes6 >> (8 * i);
            outBytes6 = outBytes6 | tempBytes6;
        }
    }

    function _convertBytesToBytes6(bytes memory _number6) private pure returns (bytes6 outBytes6) {
        for (uint256 i = 0; i < _number6.length; i++) {
            bytes6 tempBytes6 = _number6[i];
            tempBytes6 = tempBytes6 >> (8 * i);
            outBytes6 = outBytes6 | tempBytes6;
        }
    }

    function _setCombinations5(bytes memory _number6) private pure returns (bytes5[6]) {
        uint256 k = 5;
        uint256 n = 6;
        uint256[] memory combination = new uint256[](k);
        uint256 r = 0;
        uint256 index = 0;
        uint256 nIndex = 0;
        bytes5[6] memory _numbers5;
        while(r >= 0) {
            if(index <= (n + (r - k))){
                combination[r] = index;
                if(r == k-1){
                    bytes memory _number5 = new bytes(k);
                    for(uint256 j = 0; j < combination.length; j++) {
                        _number5[j] = _number6[combination[j]];
                    }
                    _numbers5[nIndex] = _convertBytesToBytes5(_number5);
                    nIndex++;
                    index++;
                    if(nIndex == 6) return _numbers5;
                } else {
                    index = combination[r] + 1;
                    r++;
                }
            } else {
                r--;
                if(r > 0) index = combination[r] + 1;
                else index = combination[0] + 1;
            }
        }
    }

    function _convertBytesToBytes5(bytes memory _number5) private pure returns (bytes5 outBytes5) {
        for (uint256 i = 0; i < _number5.length; i++) {
            bytes5 tempBytes5 = _number5[i];
            tempBytes5 = tempBytes5 >> (8 * i);
            outBytes5 = outBytes5 | tempBytes5;
        }
    }

    function _setCombinations4(bytes memory _number6) private pure returns (bytes4[15] _numbers4) {
        uint256 k = 4;
        uint256 n = 6;
        uint256[] memory combination = new uint256[](k);
        uint256 r = 0;
        uint256 index = 0;
        uint256 nIndex = 0;
        while(r >= 0) {
            if(index <= (n + (r - k))){
                combination[r] = index;
                if(r == k-1){
                    bytes memory _number4 = new bytes(k);
                    for(uint256 j = 0; j < combination.length; j++) {
                        _number4[j] = _number6[combination[j]];
                    }
                    _numbers4[nIndex] = _convertBytesToBytes4(_number4);
                    nIndex++;
                    index++;
                    if(nIndex == 15) break;
                } else {
                    index = combination[r] + 1;
                    r++;
                }
            } else {
                r--;
                if(r > 0) index = combination[r] + 1;
                else index = combination[0] + 1;
            }
        }
    }

    function _convertBytesToBytes4(bytes memory _number4) private pure returns (bytes4 outBytes4) {
        for (uint256 i = 0; i < _number4.length; i++) {
            bytes4 tempBytes4 = _number4[i];
            tempBytes4 = tempBytes4 >> (8 * i);
            outBytes4 = outBytes4 | tempBytes4;
        }
    }
}