'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Ethereum\\Worldpay\\lottery-contract\\pages\\index.js?entry';


var LotteryIndex = function (_Component) {
    (0, _inherits3.default)(LotteryIndex, _Component);

    function LotteryIndex(props) {
        (0, _classCallCheck3.default)(this, LotteryIndex);

        var _this = (0, _possibleConstructorReturn3.default)(this, (LotteryIndex.__proto__ || (0, _getPrototypeOf2.default)(LotteryIndex)).call(this, props));

        _this.state = {
            lotteries: props.lotteries
        };
        return _this;
    }

    (0, _createClass3.default)(LotteryIndex, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var lotteryFactory = (0, _factory2.default)(this.props.factoryAddress, _web2.default);
            var event = lotteryFactory.events.LotteryDeployed({}, function () {
                var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(error, data) {
                    var lotteries;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (!(error == null)) {
                                        _context.next = 5;
                                        break;
                                    }

                                    _context.next = 3;
                                    return lotteryFactory.methods.getLotteries().call();

                                case 3:
                                    lotteries = _context.sent;

                                    _this2.setState({ lotteries: lotteries });

                                case 5:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2);
                }));

                return function (_x, _x2) {
                    return _ref.apply(this, arguments);
                };
            }());
        }
    }, {
        key: 'renderLotteries',
        value: function renderLotteries() {
            var items = this.state.lotteries.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: '/lotteries/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                        }
                    }, 'View Lottery')),
                    fluid: true
                };
            });
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Open lotteries'), _react2.default.createElement(_routes.Link, { route: '/lotteries/new/' + this.props.factoryAddress, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Deploy Lottery',
                icon: 'add',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }))), this.renderLotteries()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var factoryAddress, lotteryFactory, lotteries;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                factoryAddress = "0x6bFcF6E2Ce867C935490f1F96088946a70DBef61";
                                lotteryFactory = (0, _factory2.default)(factoryAddress, _web2.default);
                                _context2.next = 4;
                                return lotteryFactory.methods.getLotteries().call();

                            case 4:
                                lotteries = _context2.sent;
                                return _context2.abrupt('return', { factoryAddress: factoryAddress, lotteries: lotteries });

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps() {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return LotteryIndex;
}(_react.Component);

exports.default = LotteryIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJsb3R0ZXJ5RmFjdG9yeUF0IiwiTGF5b3V0IiwiTGluayIsIndlYjMiLCJMb3R0ZXJ5SW5kZXgiLCJwcm9wcyIsInN0YXRlIiwibG90dGVyaWVzIiwibG90dGVyeUZhY3RvcnkiLCJmYWN0b3J5QWRkcmVzcyIsImV2ZW50IiwiZXZlbnRzIiwiTG90dGVyeURlcGxveWVkIiwiZXJyb3IiLCJkYXRhIiwibWV0aG9kcyIsImdldExvdHRlcmllcyIsImNhbGwiLCJzZXRTdGF0ZSIsIml0ZW1zIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyZW5kZXJMb3R0ZXJpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBc0I7Ozs7QUFDN0IsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVYOzBDQUVGOzswQkFBQSxBQUFZLE9BQU87NENBQUE7O3NKQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLO3VCQUNVLE1BSEEsQUFFZixBQUFhLEFBQ1E7QUFEUixBQUNUO2VBRVA7Ozs7OzRDQVNtQjt5QkFDaEI7O2dCQUFNLGlCQUFpQix1QkFBaUIsS0FBQSxBQUFLLE1BQTdDLEFBQXVCLEFBQTRCLEFBQWdCLEFBQ25FO2dCQUFJLHVCQUFRLEFBQWUsT0FBZixBQUFzQixnQkFBdEIsQUFBc0MsZ0JBQXRDO29HQUEwQyxpQkFBQSxBQUFPLE9BQVAsQUFBYyxNQUFkO3dCQUFBO2tGQUFBO2tDQUFBOzZEQUFBO3FDQUFBOzBDQUM5QyxTQUQ4QyxBQUNyQyxPQURxQzt3REFBQTtBQUFBO0FBQUE7O29EQUFBOzJDQUV0QixlQUFBLEFBQWUsUUFBZixBQUF1QixlQUZELEFBRXRCLEFBQXNDOztxQ0FBeEQ7QUFGd0MseURBRzlDOzsyQ0FBQSxBQUFLLFNBQVMsRUFBRSxXQUg4QixBQUc5QyxBQUFjOztxQ0FIZ0M7cUNBQUE7b0RBQUE7O0FBQUE7Z0NBQUE7QUFBMUM7OzBDQUFBOzRDQUFBO0FBQUE7QUFBWixBQVFILGVBUmU7Ozs7MENBVUUsQUFDZDtnQkFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxtQkFBVyxBQUM5Qzs7NEJBQU8sQUFDSyxBQUNSO2lEQUNJLEFBQUMsOEJBQUssdUJBQU4sQUFBNEI7c0NBQTVCO3dDQUFBLEFBQ0k7QUFESjtxQkFBQSxrQkFDSSxjQUFBOztzQ0FBQTt3Q0FBQTtBQUFBO0FBQUEsdUJBSkwsQUFHQyxBQUNJLEFBR1I7MkJBUEosQUFBTyxBQU9JLEFBRWQ7QUFUVSxBQUNIO0FBRlIsQUFBYyxBQVdkLGFBWGM7aURBV1AsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FJRixBQUNMO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLG1DQUFBLEFBQUMsOEJBQUssMkJBQTBCLEtBQUEsQUFBSyxNQUFyQyxBQUEyQzs4QkFBM0M7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUM7eUJBQUQsQUFDWSxBQUNSO3lCQUZKLEFBRVksQUFDUjtzQkFISixBQUdTLEFBQ0w7eUJBSko7OzhCQUFBO2dDQUpaLEFBRUksQUFDSSxBQUNJLEFBUVA7QUFSTztBQUNJLHVCQVB4QixBQUNJLEFBQ0ksQUFZSyxBQUFLLEFBSXJCOzs7Ozs7Ozs7O2lDQXJEUztBLGlEQUFpQixBLEFBQ2pCO0EsaURBQWlCLHVCLEFBQUEsQUFBaUIsQUFBZ0I7O3VDQUNoQyxlQUFBLEFBQWUsUUFBZixBQUF1QixlQUFlLEEsQUFBdEM7O2lDQUFsQjtBO2tFQUNDLEVBQUUsZ0JBQUYsZ0JBQWtCLFdBQWxCLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFiWSxBLEFBa0UzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9FdGhlcmV1bS9Xb3JsZHBheS9sb3R0ZXJ5LWNvbnRyYWN0In0=