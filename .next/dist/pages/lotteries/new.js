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

var _web3Socket = require('../../ethereum/web3Socket');

var _web3Socket2 = _interopRequireDefault(_web3Socket);

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
            accounts: [],
            lotteryFactory: ""
        }, _this.setEventsListeners = function () {
            var lotteryFactory = (0, _factory2.default)(_this.state.factoryAddress, _web3Socket2.default);
            _this.LotteryDeployedEvent = lotteryFactory.events.LotteryDeployed({}, function () {
                var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(error, data) {
                    var address;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (error == null) {
                                        address = data.returnValues.deployedLottery;

                                        _routes.Router.pushRoute('/lotteries/' + address);
                                    }

                                case 1:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2);
                }));

                return function (_x, _x2) {
                    return _ref2.apply(this, arguments);
                };
            }());
        }, _this.handleLoad = function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(factoryAddress) {
                var lotteryFactory, owner, accounts;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _this.setEventsListeners();
                                lotteryFactory = (0, _factory2.default)(factoryAddress, _web2.default);
                                _context2.next = 4;
                                return lotteryFactory.methods.owner().call();

                            case 4:
                                owner = _context2.sent;
                                _context2.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context2.sent;

                                _this.setState({ lotteryFactory: lotteryFactory, accounts: accounts, web3: _web2.default });

                            case 9:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }));

            return function (_x3) {
                return _ref3.apply(this, arguments);
            };
        }(), _this.onSubmit = function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
                var lotteryFactory, accounts;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                event.preventDefault();
                                lotteryFactory = _this.state.lotteryFactory;
                                accounts = _this.state.accounts;
                                _context3.prev = 3;

                                _this.setState({ loading: true, errorMessage: "" });
                                _context3.next = 7;
                                return lotteryFactory.methods.createNewLottery(_this.state.duration, _web2.default.utils.toWei(_this.state.entranceValue, 'ether')).send({
                                    from: accounts[0]
                                });

                            case 7:
                                _context3.next = 12;
                                break;

                            case 9:
                                _context3.prev = 9;
                                _context3.t0 = _context3['catch'](3);

                                _this.setState({ errorMessage: _context3.t0.message.split("\n")[0] });

                            case 12:
                                _this.setState({ loading: false });

                            case 13:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this2, [[3, 9]]);
            }));

            return function (_x4) {
                return _ref4.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(LotteryNew, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
                this.handleLoad(this.state.factoryAddress);
            } else {
                window.addEventListener('load', function () {
                    _this3.handleLoad(_this3.state.factoryAddress);
                }, false);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.LotteryDeployedEvent.unsubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement(_semanticUiReact.Container, { style: { marginTop: '100px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, 'New Lottery'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
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
                    lineNumber: 83
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
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
                    lineNumber: 94
                }
            }))), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Ooops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, 'Create!'))));
        }
    }]);

    return LotteryNew;
}(_react.Component);

exports.default = LotteryNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxsb3R0ZXJpZXNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJDb250YWluZXIiLCJMYXlvdXQiLCJsb3R0ZXJ5RmFjdG9yeUF0Iiwid2ViMyIsIndlYjNTb2NrZXQiLCJSb3V0ZXIiLCJMb3R0ZXJ5TmV3Iiwic3RhdGUiLCJkdXJhdGlvbiIsImVudHJhbmNlVmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwiZmFjdG9yeUFkZHJlc3MiLCJwcm9wcyIsInVybCIsInF1ZXJ5IiwiYWNjb3VudHMiLCJsb3R0ZXJ5RmFjdG9yeSIsInNldEV2ZW50c0xpc3RlbmVycyIsIkxvdHRlcnlEZXBsb3llZEV2ZW50IiwiZXZlbnRzIiwiTG90dGVyeURlcGxveWVkIiwiZXJyb3IiLCJkYXRhIiwiYWRkcmVzcyIsInJldHVyblZhbHVlcyIsImRlcGxveWVkTG90dGVyeSIsInB1c2hSb3V0ZSIsImhhbmRsZUxvYWQiLCJtZXRob2RzIiwib3duZXIiLCJjYWxsIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZXRTdGF0ZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZU5ld0xvdHRlcnkiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwic3BsaXQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwidW5zdWJzY3JpYmUiLCJtYXJnaW5Ub3AiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFPLEFBQVM7O0FBQ3ZDLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQXNCOzs7O0FBQzdCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQVMsQUFBYzs7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QUFBLEFBQUsscUJBQUwsQUFBMEIsQUFDN0I7Ozs7aUNBdUNRO3lCQUNMOzttQ0FFSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUMsNENBQVUsT0FBTyxFQUFDLFdBQW5CLEFBQWtCLEFBQVc7OEJBQTdCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBRUEsZ0NBQUEsQUFBQyx1Q0FBSyxVQUFXLEtBQWpCLEFBQXNCLFVBQVcsT0FBUSxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQWhELEFBQXNEOzhCQUF0RDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxzQkFBQSxBQUFNLFNBQU0sUUFBWixBQUFtQjs4QkFBbkI7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDZCQUFBLEFBQUM7dUJBQUQsQUFDVSxBQUNOOytCQUZKLEFBRWtCLEFBQ2Q7c0JBSEosQUFHUyxBQUNMO3VCQUFPLEtBQUEsQUFBSyxNQUpoQixBQUlzQixBQUNsQjswQkFBVSx5QkFBQTsyQkFDTixPQUFBLEFBQUssU0FBUyxFQUFFLFVBQVUsTUFBQSxBQUFNLE9BRDFCLEFBQ04sQUFBYyxBQUF5QjtBQU4vQzs7OEJBQUE7Z0NBSFIsQUFDSSxBQUVJLEFBU0o7QUFUSTtBQUNJLGlDQVFQLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLG1DQUFBLEFBQUMsd0NBQU0sT0FBUCxBQUFhLEFBQ1Q7K0JBREosQUFDa0IsQUFDZDtzQkFGSixBQUVTLEFBQ0w7dUJBQU8sS0FBQSxBQUFLLE1BSGhCLEFBR3NCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUNOLE9BQUEsQUFBSyxTQUFTLEVBQUUsZUFBZSxNQUFBLEFBQU0sT0FEL0IsQUFDTixBQUFjLEFBQThCO0FBTHBEOzs4QkFBQTtnQ0FmWixBQUNJLEFBWUksQUFFSSxBQVNSO0FBVFE7a0NBU1IsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixVQUFTLFNBQVUsS0FBQSxBQUFLLE1BQTlDLEFBQW9EOzhCQUFwRDtnQ0F4QkosQUF3QkksQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sU0FBVSxLQUFBLEFBQUssTUFBdkIsQUFBNkIsU0FBVSxTQUF2Qzs4QkFBQTtnQ0FBQTtBQUFBO2VBL0JoQixBQUVJLEFBQ0ksQUFHSSxBQXlCSSxBQUtuQjs7Ozs7QUFwR29CLEEsQUF1R3pCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9FdGhlcmV1bS9Xb3JsZHBheS9sb3R0ZXJ5LWNvbnRyYWN0In0=