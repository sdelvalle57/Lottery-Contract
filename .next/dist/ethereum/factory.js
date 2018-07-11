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