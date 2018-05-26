'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = lotteryAt;

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Lottery = require('./build/contracts/Lottery.json');

var _Lottery2 = _interopRequireDefault(_Lottery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function lotteryAt(lotteryAddress) {
    return new _web2.default.eth.Contract(_Lottery2.default.abi, lotteryAddress);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxsb3R0ZXJ5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJMb3R0ZXJ5IiwibG90dGVyeUF0IiwibG90dGVyeUFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsImFiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFvQixBQUFwQixBQUVBOzs7Ozs7QUFBZSxTQUFTLEFBQVQsVUFBbUIsQUFBbkIsZ0JBQW1DLEFBQzlDO1dBQU8sSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQXNCLGtCQUFRLEFBQTlCLEtBQW1DLEFBQW5DLEFBQVAsQUFDSCIsImZpbGUiOiJsb3R0ZXJ5LmpzIiwic291cmNlUm9vdCI6IkU6L0V0aGVyZXVtL1dvcmxkcGF5L2xvdHRlcnktY29udHJhY3QifQ==