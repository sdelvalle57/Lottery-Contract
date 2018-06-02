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
            factoryAddress: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var factoryAddress, accounts, lotteryFactory, lotteries;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                factoryAddress = _this.props.factoryAddress;
                                _context.prev = 2;

                                _this.setState({ loading: true, errorMessage: "" });
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                lotteryFactory = (0, _factory2.default)(factoryAddress);
                                _context.next = 10;
                                return lotteryFactory.methods.getLotteries().call();

                            case 10:
                                lotteries = _context.sent;
                                _context.next = 13;
                                return lotteryFactory.methods.createNewLottery(_this.state.duration, _web2.default.utils.toWei(_this.state.entranceValue, 'ether')).send({
                                    from: accounts[0]
                                });

                            case 13:
                                _routes.Router.pushRoute('/');

                                _context.next = 19;
                                break;

                            case 16:
                                _context.prev = 16;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message.split("\n")[0] });

                            case 19:
                                _this.setState({ loading: false });

                            case 20:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 16]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(LotteryNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'New Lottery'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Duration'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'Seconds',
                labelPosition: 'right',
                type: 'number',
                value: this.state.duration,
                onChange: function onChange(event) {
                    return _this3.setState({ duration: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, 'Entrance Value'), _react2.default.createElement(_semanticUiReact.Input, { label: 'Eth',
                labelPosition: 'right',
                type: 'number',
                value: this.state.entranceValue,
                onChange: function onChange(event) {
                    return _this3.setState({ entranceValue: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }))), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Ooops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, 'Create!')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                return _context2.abrupt('return', {
                                    factoryAddress: props.query.factoryAddress
                                });

                            case 1:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return LotteryNew;
}(_react.Component);

exports.default = LotteryNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxsb3R0ZXJpZXNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJsb3R0ZXJ5RmFjdG9yeUF0Iiwid2ViMyIsIlJvdXRlciIsIkxvdHRlcnlOZXciLCJzdGF0ZSIsImR1cmF0aW9uIiwiZW50cmFuY2VWYWx1ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJmYWN0b3J5QWRkcmVzcyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibG90dGVyeUZhY3RvcnkiLCJtZXRob2RzIiwiZ2V0TG90dGVyaWVzIiwiY2FsbCIsImxvdHRlcmllcyIsImNyZWF0ZU5ld0xvdHRlcnkiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwic3BsaXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFRLEFBQU87O0FBQzlCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQXNCOzs7O0FBQzdCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7Ozs7O3dOQUVGLEE7c0JBQVEsQUFDTSxBQUNWOzJCQUZJLEFBRVcsQUFDZjswQkFISSxBQUdVLEFBQ2Q7cUJBSkksQUFJSyxBQUNUOzRCQUxJLEEsQUFLVztBQUxYLEFBQ0osaUJBYUosQTtpR0FBVyxpQkFBQSxBQUFPLE9BQVA7OERBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7c0NBQUEsQUFBTSxBQUVGO0FBSEcsaURBSUgsTUFKRyxBQUlFLE1BSkYsQUFHSDtnREFH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