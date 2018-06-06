pragma solidity ^0.4.23;

library BytesConvertLib {

    /** 
    * @notice checks if there is no numbers below 0 and above 45
    * then checks if there is no repeated number and they are
    * organized from lowest to highest
    * @param _ticket 6 bytes containing the numbers
    */
    function areValidNumbers(bytes6 _ticket) internal pure returns(bool) {
        if(_ticket.length!=6) return false;
        for(uint256 i = 0; i < _ticket.length; i++) {
            bytes1 num = _ticket[i];
            if(uint256(num) <= 0 || uint256(num)>45) { 
                return false;
            }
            for(uint256 j = i+1; j < _ticket.length; j++) {
                if(num >= _ticket[j]) return false;
            }
        }
        return true;
    }

    /** 
    * @notice we check there are no repeated numbers inside the future winning number
    * @param _pair the byte to check if is not inside the array of bytes
    * @param _ticket array of 6 bytes 
    */
    function isNotRepeated(bytes memory _ticket, bytes1 _pair) internal pure returns(bool) {
        for(uint256 i = 0; i < _ticket.length; i++){
            if(_pair == _ticket[i]) return false;
        }
        return true;
    }

    /** 
    * @notice sorts the array from the lowest to highest
    * @param _ticket array of 6 bytes 
    */
    function sortArray(bytes memory _ticket) internal pure returns (bytes) {
        uint256 l = _ticket.length;
        for(uint256 i = 0; i < l; i++) {
            for(uint256 j = i+1; j < l ;j++) {
                if(_ticket[i] > _ticket[j]) {
                    bytes1 temp = _ticket[i];
                    _ticket[i] = _ticket[j];
                    _ticket[j] = temp;
                }
            }
        }
        return _ticket;
    }

    /** 
    * @notice converts byte to readonly bytes6, this will be the final number
    * @param _ticket array of 6 bytes 
    */
    function convertBytesToBytes6(bytes memory _ticket) internal pure returns (bytes6 outBytes) {
        for (uint256 i = 0; i < _ticket.length; i++) {
            bytes6 tempBytes = _ticket[i];
            tempBytes = tempBytes >> (8 * i);
            outBytes = outBytes | tempBytes;
        }
    }
}
