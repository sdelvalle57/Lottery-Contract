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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Ethereum\\Worldpay\\lottery-contract\\pages\\lotteries\\new.js?entry';


var LotteryNew = function (_Component) {
    (0, _inherits3.default)(LotteryNew, _Component);

    function LotteryNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, LotteryNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LotteryNew.__proto__ || (0, _getPrototypeOf2.default)(LotteryNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            duration: "",
            entranceValue: "",
            errorMessage: "",
            loading: false,
            factoryAddress: _this.props.url.query.factoryAddress,
            accounts: []
        }, _this.handleLoad = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(factoryAddress) {
                var lotteryFactory, owner, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                lotteryFactory = (0, _factory2.default)(factoryAddress, _web2.default);
                                _context.next = 3;
                                return lotteryFactory.methods.owner().call();

                            case 3:
                                owner = _context.sent;
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;

                                console.log(accounts[0]);
                                _this.setState({ lotteryFactory: lotteryFactory, accounts: accounts, web3: _web2.default });

                            case 9:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.onSubmit = function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
                var lotteryFactory, accounts;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                event.preventDefault();
                                lotteryFactory = _this.state.lotteryFactory;
                                accounts = _this.state.accounts;
                                _context2.prev = 3;

                                _this.setState({ loading: true, errorMessage: "" });
                                _context2.next = 7;
                                return lotteryFactory.methods.createNewLottery(_this.state.duration, _web2.default.utils.toWei(_this.state.entranceValue, 'ether')).send({
                                    from: accounts[0]
                                });

                            case 7:
                                _routes.Router.pushRoute('/');
                                _context2.next = 14;
                                break;

                            case 10:
                                _context2.prev = 10;
                                _context2.t0 = _context2['catch'](3);

                                console.log(_context2.t0);
                                _this.setState({ errorMessage: _context2.t0.message.split("\n")[0] });

                            case 14:
                                _this.setState({ loading: false });

                            case 15:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2, [[3, 10]]);
            }));

            return function (_x2) {
                return _ref3.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(LotteryNew, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            window.addEventListener('load', function () {
                _this3.handleLoad(_this3.state.factoryAddress);
            }, false);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement(_semanticUiReact.Container, { style: { marginTop: '100px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'New Lottery'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, 'Duration'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'Seconds',
                labelPosition: 'right',
                type: 'number',
                value: this.state.duration,
                onChange: function onChange(event) {
                    return _this4.setState({ duration: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, 'Entrance Value'), _react2.default.createElement(_semanticUiReact.Input, { label: 'Eth',
                labelPosition: 'right',
                type: 'number',
                value: this.state.entranceValue,
                onChange: function onChange(event) {
                    return _this4.setState({ entranceValue: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }))), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Ooops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, 'Create!'))));
        }
    }]);

    return LotteryNew;
}(_react.Component);

exports.default = LotteryNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxsb3R0ZXJpZXNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJDb250YWluZXIiLCJMYXlvdXQiLCJsb3R0ZXJ5RmFjdG9yeUF0Iiwid2ViMyIsIlJvdXRlciIsIkxvdHRlcnlOZXciLCJzdGF0ZSIsImR1cmF0aW9uIiwiZW50cmFuY2VWYWx1ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJmYWN0b3J5QWRkcmVzcyIsInByb3BzIiwidXJsIiwicXVlcnkiLCJhY2NvdW50cyIsImhhbmRsZUxvYWQiLCJsb3R0ZXJ5RmFjdG9yeSIsIm1ldGhvZHMiLCJvd25lciIsImNhbGwiLCJldGgiLCJnZXRBY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZU5ld0xvdHRlcnkiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwic3BsaXQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibWFyZ2luVG9wIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVEsQUFBTyxBQUFTOztBQUN2QyxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFzQjs7OztBQUM3QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7Ozs7Ozt3TixBQUVGO3NCQUFRLEFBQ00sQUFDVjsyQkFGSSxBQUVXLEFBQ2Y7MEJBSEksQUFHVSxBQUNkO3FCQUpJLEFBSUssQUFDVDs0QkFBZ0IsTUFBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsTUFMM0IsQUFLaUMsQUFDckM7c0JBQVUs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SSxpQ0FRUCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxtQ0FBQSxBQUFDLHdDQUFNLE9BQVAsQUFBYSxBQUNUOytCQURKLEFBQ2tCLEFBQ2Q7c0JBRkosQUFFUyxBQUNMO3VCQUFPLEtBQUEsQUFBSyxNQUhoQixBQUdzQixBQUNsQjswQkFBVSx5QkFBQTsyQkFDTixPQUFBLEFBQUssU0FBUyxFQUFFLGVBQWUsTUFBQSxBQUFNLE9BRC9CLEFBQ04sQUFBYyxBQUE4QjtBQUxwRDs7OEJBQUE7Z0NBZlosQUFDSSxBQVlJLEFBRUksQUFTUjtBQVRRO2tDQVNSLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsVUFBUyxTQUFVLEtBQUEsQUFBSyxNQUE5QyxBQUFvRDs4QkFBcEQ7Z0NBeEJKLEFBd0JJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLFNBQVUsS0FBQSxBQUFLLE1BQXZCLEFBQTZCLFNBQVUsU0FBdkM7OEJBQUE7Z0NBQUE7QUFBQTtlQS9CaEIsQUFFSSxBQUNJLEFBR0ksQUF5QkksQUFLbkI7Ozs7O0FBbEZvQixBLEFBcUZ6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovRXRoZXJldW0vV29ybGRwYXkvbG90dGVyeS1jb250cmFjdCJ9