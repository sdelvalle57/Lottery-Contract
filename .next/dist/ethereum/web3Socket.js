"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//export default new Web3(new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/_ws'));
exports.default = new _web2.default("ws://localhost:8545");