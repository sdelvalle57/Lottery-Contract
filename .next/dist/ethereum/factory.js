'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = lotteryFactoryAt;

var _LotteryFactory = require('./build/contracts/LotteryFactory.json');

var _LotteryFactory2 = _interopRequireDefault(_LotteryFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function lotteryFactoryAt(lotteryFactoryAddress, web3) {
    return new web3.eth.Contract(_LotteryFactory2.default.abi, lotteryFactoryAddress);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIkxvdHRlcnlGYWN0b3J5IiwibG90dGVyeUZhY3RvcnlBdCIsImxvdHRlcnlGYWN0b3J5QWRkcmVzcyIsIndlYjMiLCJldGgiLCJDb250cmFjdCIsImFiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUEyQixBQUEzQixBQUVBOzs7Ozs7QUFBZSxTQUFTLEFBQVQsaUJBQTBCLEFBQTFCLHVCQUFpRCxBQUFqRCxNQUF1RCxBQUNsRTtXQUFPLElBQUksS0FBSyxBQUFMLElBQVMsQUFBYixTQUFzQix5QkFBZSxBQUFyQyxLQUEwQyxBQUExQyxBQUFQLEFBQ0giLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJFOi9FdGhlcmV1bS9Xb3JsZHBheS9sb3R0ZXJ5LWNvbnRyYWN0In0=