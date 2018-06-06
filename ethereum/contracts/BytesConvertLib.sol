pragma solidity ^0.4.23;

library BytesConvertLib {
    /** 
    * @notice checks if there is no numbers below 0 and above 45
    * then checks if there is no repeated number and they are
    * organized from lowest to highest
    * @param _number6 6 bytes containing the numbers
    */
    function _areValidNumbers6(bytes6 _number6) internal pure returns(bool) {
        if(_number6.length!=6) return false;
        for(uint256 i = 0; i < _number6.length; i++) {
            bytes1 num = _number6[i];
            if(uint256(num) <= 0 || uint256(num)>45) { 
                return false;
            }
            for(uint256 j = i+1; j < _number6.length; j++) {
                if(num >= _number6[j]) return false;
            }
        }
        return true;
    }

    /** 
    * @notice checks if there is no numbers below 0 and above 45
    * then checks if there is no repeated number and they are
    * organized from lowest to highest
    * @param _number5 5 bytes containing the numbers
    */
    function _areValidNumbers5(bytes5 _number5) internal pure returns(bool) {
        if(_number5.length!=5) return false;
        for(uint256 i = 0; i < _number5.length; i++) {
            bytes1 num = _number5[i];
            if(uint256(num) <= 0 || uint256(num)>45) { 
                return false;
            }
            for(uint256 j = i+1; j < _number5.length; j++) {
                if(num >= _number5[j]) return false;
            }
        }
        return true;
    }

    /** 
    * @notice checks if there is no numbers below 0 and above 45
    * then checks if there is no repeated number and they are
    * organized from lowest to highest
    * @param _number4 4 bytes containing the numbers
    */
    function _areValidNumbers4(bytes4 _number4) internal pure returns(bool) {
        if(_number4.length!=4) return false;
        for(uint256 i = 0; i < _number4.length; i++) {
            bytes1 num = _number4[i];
            if(uint256(num) <= 0 || uint256(num)>45) { 
                return false;
            }
            for(uint256 j = i+1; j < _number4.length; j++) {
                if(num >= _number4[j]) return false;
            }
        }
        return true;
    }

    /** 
    * @notice checks if there is no numbers below 0 and above 45
    * then checks if there is no repeated number and they are
    * organized from lowest to highest
    * @param _number3 3 bytes containing the numbers
    */
    function _areValidNumbers3(bytes3 _number3) internal pure returns(bool) {
        if(_number3.length!=3) return false;
        for(uint256 i = 0; i < _number3.length; i++) {
            bytes1 num = _number3[i];
            if(uint256(num) <= 0 || uint256(num)>45) { 
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
    * and is inside the main number(3rd for) or @param _number6 
    * so, we check for example a number6 in integers is [ 14, 15, 16, 19, 32, 35 ]
    * this in bytes is 0x0e0f10132023, so one of the possible 15 combinations of 4 
    * numbers could be [ 14, 15, 16, 19, 35 ] where in bytes is 0x0e0f101323 
    * @param _number6 6 bytes containing the numbers
    * @param _numbers5 array[6] of bytes5
    */
    function _areInsideNumber6(bytes6 _number6, bytes5[6] memory _numbers5) internal pure returns(bool) {
        uint256 numbersLength = 0;
        for(uint256 i = 0; i < _numbers5.length; i++){
            bytes5 number5 = _numbers5[i];
            if(!_areValidNumbers5(number5)) return false;
            uint256 index = 0;
            uint256 found = 0;
            for(uint256 j = 0; j < number5.length; j++){
                bytes1 each = number5[j];
                for(uint256 k = index; k < _number6.length; k++){
                    if(_number6[k] == each){
                        index = k;
                        found++;
                        break;
                    }
                }
            }
            if(found==5) numbersLength++;
        }
        return numbersLength==6;
    }

    /** 
    * @notice checks if each number(2nd for) inside each combination(1st for) is valid
    * and is inside the main number(3rd for) or @param _number6 
    * so, we check for example a number6 in integers is [ 14, 15, 16, 19, 32, 35 ]
    * this in bytes is 0x0e0f10132023, so one of the possible 15 combinations of 4 
    * numbers could be [ 14, 15, 16, 35 ] where in bytes is 0x0e0f1023 
    * @param _number6 6 bytes containing the numbers
    * @param _numbers4 array[15] of bytes4 
    */
    function _areInsideNumber6(bytes6 _number6, bytes4[15] memory _numbers4) internal pure returns(bool) {
        uint256 numbersLength = 0;
        for(uint256 i = 0; i < _numbers4.length; i++){
            bytes4 number4 = _numbers4[i];
            if(!_areValidNumbers4(number4)) return false;
            uint256 index = 0;
            uint256 found = 0;
            for(uint256 j = 0; j < number4.length; j++){
                bytes1 each = number4[j];
                for(uint256 k = index; k < _number6.length; k++){
                    if(_number6[k] == each){
                        index = k;
                        found++;
                        break;
                    }
                }
            }
            if(found==4) numbersLength++;
        }
        return numbersLength==15;
    }

    /** 
    * @notice checks if each number(2nd for loop) inside each combination(1st for loop) is valid
    * and is inside the main number(3rd for loop) or @param _number6 
    * so, we check for example a number6 in integers is [ 14, 15, 16, 19, 32, 35 ]
    * this in bytes is 0x0e0f10132023, so one of the possible 20 combinations of 3 
    * numbers could be [ 14, 15, 16] where in bytes is 0x0e0f10
    * @param _number6 6 bytes containing the numbers
    * @param _numbers3 array[20] of bytes3
    */
    function _areInsideNumber6(bytes6 _number6, bytes3[20] memory _numbers3) internal pure returns(bool) {
        uint256 numbersLength = 0;
        for(uint256 i = 0; i < _numbers3.length; i++){
            bytes3 number3 = _numbers3[i];
            if(!_areValidNumbers3(number3)) return false;
            uint256 index = 0;
            uint256 found = 0;
            for(uint256 j = 0; j < number3.length; j++){
                bytes1 each = number3[j];
                for(uint256 k = index; k < _number6.length; k++){
                    if(_number6[k] == each){
                        index = k;
                        found++;
                        break;
                    }
                }
            }
            if(found==3) numbersLength++;
        }
        return numbersLength==20;
    }

    /** 
    * @notice we check there are no repeated numbers inside the future winning number
    * @param _pair the byte to check if is not inside the array of bytes
    * @param _number6 array of 6 bytes 
    */
    function _isNotRepeated(bytes1 _pair, bytes memory _number6) internal pure returns(bool) {
        for(uint256 i = 0; i < _number6.length; i++){
            if(_pair == _number6[i]) return false;
        }
        return true;
    }

    /** 
    * @notice sorts the array from the lowest to highest
    * @param _number6 array of 6 bytes 
    */
    function _sortArray(bytes memory _number6) internal pure returns (bytes) {
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

    /** 
    * @notice outputs the 6 possible combinations
    * @param _number6 array of 6 bytes 
    */
    function _setCombinations5(bytes memory _number6) internal pure returns (bytes5[6]) {
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

    /** 
    * @notice outputs the 15 possible combinations
    * @param _number6 array of 6 bytes 
    */
    function _setCombinations4(bytes memory _number6) internal pure returns (bytes4[15]) {
        uint256 k = 4;
        uint256 n = 6;
        uint256[] memory combination = new uint256[](k);
        uint256 r = 0;
        uint256 index = 0;
        uint256 nIndex = 0;
        bytes4[15] memory _numbers4;
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
                    if(nIndex == 15) return _numbers4;
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
    * @notice outputs the 20 possible combinations
    * @param _number6 array of 6 bytes 
    */
    function _setCombinations3(bytes memory _number6) internal pure returns (bytes3[20]) {
        uint256 k = 3;
        uint256 n = 6;
        uint256[] memory combination = new uint256[](k);
        uint256 r = 0;
        uint256 index = 0;
        uint256 nIndex = 0;
        bytes3[20] memory _numbers3;
        while(r >= 0) {
            if(index <= (n + (r - k))){
                combination[r] = index;
                if(r == k-1){
                    bytes memory _number3 = new bytes(k);
                    for(uint256 j = 0; j < combination.length; j++) {
                        _number3[j] = _number6[combination[j]];
                    }
                    _numbers3[nIndex] = _convertBytesToBytes3(_number3);
                    nIndex++;
                    index++;
                    if(nIndex == 20) return _numbers3;
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
    * @notice converts byte to readonly bytes6, this will be the final number
    * @param _number6 array of 6 bytes 
    */
    function _convertBytesToBytes6(bytes memory _number6) internal pure returns (bytes6 outBytes6) {
        for (uint256 i = 0; i < _number6.length; i++) {
            bytes6 tempBytes6 = _number6[i];
            tempBytes6 = tempBytes6 >> (8 * i);
            outBytes6 = outBytes6 | tempBytes6;
        }
    }

    /** 
    * @notice converts byte to readonly bytes5, this will be one of the final numbers
    * @param _number5 array of 5 bytes 
    */
    function _convertBytesToBytes5(bytes memory _number5) internal pure returns (bytes5 outBytes5) {
        for (uint256 i = 0; i < _number5.length; i++) {
            bytes5 tempBytes5 = _number5[i];
            tempBytes5 = tempBytes5 >> (8 * i);
            outBytes5 = outBytes5 | tempBytes5;
        }
    }

    /** 
    * @notice converts byte to readonly bytes4, this will be one of the final numbers
    * @param _number4 array of 4 bytes 
    */
    function _convertBytesToBytes4(bytes memory _number4) internal pure returns (bytes4 outBytes4) {
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
    function _convertBytesToBytes3(bytes memory _number3) internal pure returns (bytes3 outBytes3) {
        for (uint256 i = 0; i < _number3.length; i++) {
            bytes3 tempBytes3 = _number3[i];
            tempBytes3 = tempBytes3 >> (8 * i);
            outBytes3 = outBytes3 | tempBytes3;
        }
    }
}
