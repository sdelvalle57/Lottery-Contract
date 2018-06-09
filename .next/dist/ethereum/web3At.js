'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = web3At;

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function web3At(windowProvider) {
  if (typeof windowProvider !== 'undefined' && typeof windowProvider.web3 !== 'undefined') {
    return new _web2.default(windowProvider.web3.currentProvider);
  } else {
    /*
    const provider = new Web3.providers.HttpProvider(
      'https://rinkeby.infura.io/qAudSy87uo2SByV57ETq'
    );
    return new Web3(provider);
    */
    return new _web2.default("ws://localhost:8545");
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzQXQuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjNBdCIsIndpbmRvd1Byb3ZpZGVyIiwid2ViMyIsImN1cnJlbnRQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUdBOzs7Ozs7QUFBZSxTQUFTLEFBQVQsT0FBZ0IsQUFBaEIsZ0JBQWdDLEFBQzdDO01BQUksT0FBTyxBQUFQLG1CQUEwQixBQUExQixlQUF5QyxPQUFPLGVBQWUsQUFBdEIsU0FBK0IsQUFBNUUsYUFBeUYsQUFDdkY7V0FBTyxBQUFJLEFBQUosa0JBQVMsZUFBZSxBQUFmLEtBQW9CLEFBQTdCLEFBQVAsQUFDRDtBQUZELFNBRU8sQUFDTDtBQU1BOzs7Ozs7V0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0Q7QUFDRiIsImZpbGUiOiJ3ZWIzQXQuanMiLCJzb3VyY2VSb290IjoiRTovRXRoZXJldW0vV29ybGRwYXkvbG90dGVyeS1jb250cmFjdCJ9