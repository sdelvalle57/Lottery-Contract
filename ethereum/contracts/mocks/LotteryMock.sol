pragma solidity ^0.4.23;

import "../Lottery.sol";

contract LotteryMock is Lottery {


    function playTheLottery(bytes6 _winningNumbers) external {
        bytes32 random = keccak256(now);        
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
        winningNumbers.winningNumber = convertBytesToBytes6(_number6);
        //WinningNumbers.winningNumbers5 = setCombinations5();
        //WinningNumbers.winningNumbers4 = setCombinations4(); 
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
}