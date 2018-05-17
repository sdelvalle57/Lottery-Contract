'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = lotteryFactoryAt;

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _LotteryFactory = require('./build/contracts/LotteryFactory.json');

var _LotteryFactory2 = _interopRequireDefault(_LotteryFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lotteryFactory = new _web2.default.eth.Contract(_LotteryFactory2.default.abi, _LotteryFactory2.default.address);

function lotteryFactoryAt(lotteryFactoryAddress) {
    return new _web2.default.eth.Contract(_LotteryFactory2.default.abi, lotteryFactoryAddress);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJMb3R0ZXJ5RmFjdG9yeSIsImxvdHRlcnlGYWN0b3J5IiwiZXRoIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwibG90dGVyeUZhY3RvcnlBdCIsImxvdHRlcnlGYWN0b3J5QWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUEyQixBQUEzQjs7Ozs7O0FBRUEsSUFBTSxpQkFBaUIsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQXNCLHlCQUFlLEFBQXJDLEtBQTBDLHlCQUFlLEFBQXpELEFBQXZCLEFBRUE7O0FBQWUsU0FBUyxBQUFULGlCQUEwQixBQUExQix1QkFBaUQsQUFDNUQ7V0FBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FBc0IseUJBQWUsQUFBckMsS0FBMEMsQUFBMUMsQUFBUCxBQUNEIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiRTovRXRoZXJldW0vV29ybGRwYXkvbG90dGVyeS1jb250cmFjdCJ9