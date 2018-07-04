pragma solidity ^0.4.23;

library BytesConvertLib {
    
    /** 
    * @notice checks if there is no numbers below 1 and above 99
    * then checks if there is no repeated number and they are
    * organized from lowest to highest
    * @param _number4 4 bytes containing the numbers
    */
    function areValidNumbers4(bytes4 _number4) internal pure returns(bool) {
        if(_number4.length!=4) return false;
        for(uint256 i = 0; i < _number4.length; i++) {
            bytes1 num = _number4[i];
            if(uint256(num) <= 0 || uint256(num)>99) { 
                return false;
            }
            for(uint256 j = i+1; j < _number4.length; j++) {
                if(num >= _number4[j]) return false;
            }
        }
        return true;
    }

    /** 
    * @notice checks if there is no numbers below 0 and above 99
    * then checks if there is no repeated number and they are
    * organized from lowest to highest
    * @param _number3 3 bytes containing the numbers
    */
    function _areValidNumbers3(bytes3 _number3) private pure returns(bool) {
        if(_number3.length!=3) return false;
        for(uint256 i = 0; i < _number3.length; i++) {
            bytes1 num = _number3[i];
            if(uint256(num) <= 0 || uint256(num)>99) { 
                return false;
            }
            for(uint256 j = i+1; j < _number3.length; j++) {
                if(num >= _number3[j]) return false;
            }
        }
        return true;
    }

    /** 
    * @notice checks if each number(2nd for) inside each combination(1st for) is valid
    * and is inside the main number(3rd for) or @param _number4 
    * so, we check for example a number4 in integers is [ 14, 15, 16, 19 ]
    * this in bytes is 0x0e0f1013, so one of the possible 4 combinations of 3 
    * numbers could be [ 14, 15, 16] where in bytes is 0x0e0f10 
    * @param _number4 4 bytes containing the numbers
    * @param _numbers3 array[4] of bytes3
    */
    function areInsideNumber4(bytes4 _number4, bytes3[4] memory _numbers3) internal pure returns(bool) {
        uint256 numbersLength = 0;
        for(uint256 i = 0; i < _numbers3.length; i++){
            bytes3 number3 = _numbers3[i];
            if(!_areValidNumbers3(number3)) return false;
            uint256 index = 0;
            uint256 found = 0;
            for(uint256 j = 0; j < number3.length; j++){
                bytes1 each = number3[j];
                for(uint256 k = index; k < _number4.length; k++){
                    if(_number4[k] == each){
                        index = k;
                        found++;
                        break;
                    }
                }
            }
            if(found==3) numbersLength++;
        }
        return numbersLength==4;
    }

    /** 
    * @notice we check there are no repeated numbers inside the future winning number
    * @param _pair the byte to check if is not inside the array of bytes
    * @param _number4 array of 4 bytes 
    */
    function isNotRepeated(bytes memory _number4, bytes1 _pair) internal pure returns(bool) {
        for(uint256 i = 0; i < _number4.length; i++){
            if(_pair == _number4[i]) return false;
        }
        return true;
    }

    /** 
    * @notice sorts the array from the lowest to highest
    * @param _number4 array of 4 bytes 
    */
    function sortArray(bytes memory _number4) internal pure returns (bytes) {
        uint256 l = _number4.length;
        for(uint256 i = 0; i < l; i++) {
            for(uint256 j = i+1; j < l ;j++) {
                if(_number4[i] > _number4[j]) {
                    bytes1 temp = _number4[i];
                    _number4[i] = _number4[j];
                    _number4[j] = temp;
                }
            }
        }
        return _number4;
    }

    /** 
    * @notice outputs the 4 possible combinations
    * @param _number4 array of 4 bytes 
    */
    function setCombinations3(bytes memory _number4) internal pure returns (bytes3[4]) {
        uint256 k = 3;
        uint256 n = 4;
        uint256[] memory combination = new uint256[](k);
        uint256 r = 0;
        uint256 index = 0;
        uint256 nIndex = 0;
        bytes3[4] memory _numbers3;
        while(r >= 0) {
            if(index <= (n + (r - k))){
                combination[r] = index;
                if(r == k-1){
                    bytes memory _number3 = new bytes(k);
                    for(uint256 j = 0; j < combination.length; j++) {
                        _number3[j] = _number4[combination[j]];
                    }
                    _numbers3[nIndex] = _convertBytesToBytes3(_number3);
                    nIndex++;
                    index++;
                    if(nIndex == 4) return _numbers3;
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

    /** 
    * @notice converts byte to readonly bytes4, this will be the final number
    * @param _number4 array of 4 bytes 
    */
    function convertBytesToBytes4(bytes memory _number4) internal pure returns (bytes4 outBytes4) {
        for (uint256 i = 0; i < _number4.length; i++) {
            bytes4 tempBytes4 = _number4[i];
            tempBytes4 = tempBytes4 >> (8 * i);
            outBytes4 = outBytes4 | tempBytes4;
        }
    }

    /** 
    * @notice converts byte to readonly bytes3, this will be one of the final numbers
    * @param _number3 array of 3 bytes 
    */
    function _convertBytesToBytes3(bytes memory _number3) private pure returns (bytes3 outBytes3) {
        for (uint256 i = 0; i < _number3.length; i++) {
            bytes3 tempBytes3 = _number3[i];
            tempBytes3 = tempBytes3 >> (8 * i);
            outBytes3 = outBytes3 | tempBytes3;
        }
    }
}
