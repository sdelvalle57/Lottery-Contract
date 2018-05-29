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

var _lottery = require('../ethereum/lottery');

var _lottery2 = _interopRequireDefault(_lottery);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Ethereum\\Worldpay\\lottery-contract\\components\\EnterForm.js';


var EnterForm = function (_Component) {
    (0, _inherits3.default)(EnterForm, _Component);

    function EnterForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, EnterForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnterForm.__proto__ || (0, _getPrototypeOf2.default)(EnterForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            errroMessage: '',
            loading: false

        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var lottery, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:

                                event.preventDefault();
                                lottery = (0, _lottery2.default)(_this.props.address);

                                if (!_this.props.canBuyLottery) {
                                    _context.next = 17;
                                    break;
                                }

                                _this.setState({ loading: true, errroMessage: '' });
                                _context.prev = 4;
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context.sent;
                                _context.next = 10;
                                return lottery.methods.enter(2).send({
                                    from: accounts[0],
                                    value: _this.props.lotteryValue
                                });

                            case 10:
                                _routes.Router.replaceRoute('/lotteries/' + _this.props.address);
                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](4);

                                _this.setState({ errroMessage: _context.t0.message.split("\n")[0] });

                            case 16:
                                _this.setState({ loading: false, value: '' });

                            case 17:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[4, 13]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(EnterForm, [{
        key: 'componentDidMount',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function componentDidMount() {
                return _ref3.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'renderButton',
        value: function renderButton() {
            if (this.props.canBuyLottery) {
                return _react2.default.createElement(_semanticUiReact.Button, { positive: true, loading: this.state.loading, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                    }
                }, 'Buy');
            } else {
                return _react2.default.createElement(_semanticUiReact.Button, { negative: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                    }
                }, 'Ended');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errroMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Enter the lottery')), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errroMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }), this.renderButton());
        }
    }]);

    return EnterForm;
}(_react.Component);

exports.default = EnterForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEVudGVyRm9ybS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJNZXNzYWdlIiwiQnV0dG9uIiwibG90dGVyeUF0Iiwid2ViMyIsIlJvdXRlciIsIkVudGVyRm9ybSIsInN0YXRlIiwidmFsdWUiLCJlcnJyb01lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibG90dGVyeSIsInByb3BzIiwiYWRkcmVzcyIsImNhbkJ1eUxvdHRlcnkiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiZW50ZXIiLCJzZW5kIiwiZnJvbSIsImxvdHRlcnlWYWx1ZSIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJzcGxpdCIsInJlbmRlckJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUzs7QUFDeEIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7Ozs7O3NOLEFBQ0Y7bUJBQVEsQUFDRyxBQUNQOzBCQUZJLEFBRVMsQUFDYjtxQixBQUhJLEFBR0k7O0FBSEosQUFDSixpQkFVSixBO2lHQUFXLGlCQUFBLEFBQU0sT0FBTjs2QkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FFUDs7c0NBQUEsQUFBTSxBQUNBO0FBSEMsMENBR1MsdUJBQVUsTUFBQSxBQUFLLE1BSHhCLEFBR1MsQUFBcUI7O3FDQUNsQyxNQUFBLEFBQUssTUFKRCxBQUlPLGVBSlA7b0RBQUE7QUFBQTtBQUtIOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUw1QixBQUtILEFBQWMsQUFBK0I7Z0RBTDFDO2dEQUFBO3VDQU93QixjQUFBLEFBQUssSUFQN0IsQUFPd0IsQUFBUzs7aUNBQTFCO0FBUFAsb0RBQUE7Z0RBQUE7K0NBUU8sQUFBUSxRQUFSLEFBQWdCLE1BQWhCLEFBQXNCLEdBQXRCLEFBQXlCOzBDQUNyQixTQUQwQixBQUMxQixBQUFTLEFBQ2Y7MkNBQU8sTUFBQSxBQUFLLE1BVmpCLEFBUU8sQUFBOEIsQUFFZDtBQUZjLEFBQ2hDLGlDQURFOztpQ0FJTjsrQ0FBQSxBQUFPLDZCQUEyQixNQUFBLEFBQUssTUFaeEMsQUFZQyxBQUE2QztnREFaOUM7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBY0M7O3NDQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFBQSxBQUFJLFFBQUosQUFBWSxNQUFaLEFBQWtCLE1BZGpELEFBY0MsQUFBYyxBQUFnQixBQUF3Qjs7aUNBRTFEO3NDQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxPQUFPLE9BaEI3QixBQWdCSCxBQUFjLEFBQXdCOztpQ0FoQm5DO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBb0JJLEFBQ1g7Z0JBQUcsS0FBQSxBQUFLLE1BQVIsQUFBYyxlQUFjLEFBQ3hCO3VDQUFPLEFBQUMseUNBQU8sVUFBUixNQUFpQixTQUFTLEtBQUEsQUFBSyxNQUEvQixBQUFxQztrQ0FBckM7b0NBQUE7QUFBQTtpQkFBQSxFQUFQLEFBQU8sQUFDVjtBQUZELG1CQUVLLEFBQ0Q7dUNBQU8sQUFBQyx5Q0FBTyxVQUFSO2tDQUFBO29DQUFBO0FBQUE7aUJBQUEsRUFBUCxBQUFPLEFBQ1Y7QUFDSjs7OztpQ0FFUSxBQUNMO21DQUNJLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGUixBQUNJLEFBQ0ksQUFFSix1Q0FBQSxBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7OEJBQWxEO2dDQUpKLEFBSUksQUFDQztBQUREO3FCQUxSLEFBQ0ksQUFLSyxBQUFLLEFBSWpCOzs7OztBQW5EbUIsQSxBQXFEeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiRW50ZXJGb3JtLmpzIiwic291cmNlUm9vdCI6IkU6L0V0aGVyZXVtL1dvcmxkcGF5L2xvdHRlcnktY29udHJhY3QifQ==