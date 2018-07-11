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