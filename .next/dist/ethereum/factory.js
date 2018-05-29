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

function lotteryFactoryAt(lotteryFactoryAddress) {
    return new _web2.default.eth.Contract(_LotteryFactory2.default.abi, lotteryFactoryAddress);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJMb3R0ZXJ5RmFjdG9yeSIsImxvdHRlcnlGYWN0b3J5QXQiLCJsb3R0ZXJ5RmFjdG9yeUFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsImFiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUEyQixBQUEzQixBQUVBOzs7Ozs7QUFBZSxTQUFTLEFBQVQsaUJBQTBCLEFBQTFCLHVCQUFpRCxBQUM1RDtXQUFPLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUFzQix5QkFBZSxBQUFyQyxLQUEwQyxBQUExQyxBQUFQLEFBQ0giLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJFOi9FdGhlcmV1bS9Xb3JsZHBheS9sb3R0ZXJ5LWNvbnRyYWN0In0=