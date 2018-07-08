'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = lotteryAt;

var _Lottery = require('./build/contracts/Lottery.json');

var _Lottery2 = _interopRequireDefault(_Lottery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function lotteryAt(lotteryAddress, web3) {
    return new web3.eth.Contract(_Lottery2.default.abi, lotteryAddress);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxsb3R0ZXJ5LmpzIl0sIm5hbWVzIjpbIkxvdHRlcnkiLCJsb3R0ZXJ5QXQiLCJsb3R0ZXJ5QWRkcmVzcyIsIndlYjMiLCJldGgiLCJDb250cmFjdCIsImFiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFvQixBQUFwQixBQUVBOzs7Ozs7QUFBZSxTQUFTLEFBQVQsVUFBbUIsQUFBbkIsZ0JBQW1DLEFBQW5DLE1BQXlDLEFBQ3BEO1dBQU8sSUFBSSxLQUFLLEFBQUwsSUFBUyxBQUFiLFNBQXNCLGtCQUFRLEFBQTlCLEtBQW1DLEFBQW5DLEFBQVAsQUFDSCIsImZpbGUiOiJsb3R0ZXJ5LmpzIiwic291cmNlUm9vdCI6IkU6L0V0aGVyZXVtL1dvcmxkcGF5L2xvdHRlcnktY29udHJhY3QifQ==