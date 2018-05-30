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
            loading: false,
            numbers: []
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
        key: 'renderButton',
        value: function renderButton() {
            if (this.props.canBuyLottery) {
                return _react2.default.createElement(_semanticUiReact.Button, {
                    positive: this.props.numbers.length == 6,
                    loading: this.state.loading, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                }, 'Buy');
            } else {
                return _react2.default.createElement(_semanticUiReact.Button, { negative: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                }, 'Ended');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errroMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'Enter the lottery')), this.renderButton(), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errroMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }));
        }
    }]);

    return EnterForm;
}(_react.Component);

exports.default = EnterForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEVudGVyRm9ybS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJNZXNzYWdlIiwiQnV0dG9uIiwibG90dGVyeUF0Iiwid2ViMyIsIlJvdXRlciIsIkVudGVyRm9ybSIsInN0YXRlIiwidmFsdWUiLCJlcnJyb01lc3NhZ2UiLCJsb2FkaW5nIiwibnVtYmVycyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImxvdHRlcnkiLCJwcm9wcyIsImFkZHJlc3MiLCJjYW5CdXlMb3R0ZXJ5Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImVudGVyIiwic2VuZCIsImZyb20iLCJsb3R0ZXJ5VmFsdWUiLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwic3BsaXQiLCJsZW5ndGgiLCJyZW5kZXJCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVM7O0FBQ3hCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0lBRWpCLEE7Ozs7Ozs7Ozs7Ozs7OztzTixBQUNGO21CQUFRLEFBQ0csQUFDUDswQkFGSSxBQUVTLEFBQ2I7cUJBSEksQUFHSyxBQUNUO3FCLEFBSkksQUFJSztBQUpMLEFBQ0osaUJBUUosQTtpR0FBVyxpQkFBQSxBQUFNLE9BQU47NkJBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7c0NBQUEsQUFBTSxBQUNBO0FBRkMsMENBRVMsdUJBQVUsTUFBQSxBQUFLLE1BRnhCLEFBRVMsQUFBcUI7O3FDQUNsQyxNQUFBLEFBQUssTUFIRCxBQUdPLGVBSFA7b0RBQUE7QUFBQTtBQUlIOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUo1QixBQUlILEFBQWMsQUFBK0I7Z0RBSjFDO2dEQUFBO3VDQU13QixjQUFBLEFBQUssSUFON0IsQUFNd0IsQUFBUzs7aUNBQTFCO0FBTlAsb0RBQUE7Z0RBQUE7K0NBT08sQUFBUSxRQUFSLEFBQWdCLE1BQWhCLEFBQXNCLEdBQXRCLEFBQXlCOzBDQUNyQixTQUQwQixBQUMxQixBQUFTLEFBQ2Y7MkNBQU8sTUFBQSxBQUFLLE1BVGpCLEFBT08sQUFBOEIsQUFFZDtBQUZjLEFBQ2hDLGlDQURFOztpQ0FJTjsrQ0FBQSxBQUFPLDZCQUEyQixNQUFBLEFBQUssTUFYeEMsQUFXQyxBQUE2QztnREFYOUM7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBYUM7O3NDQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFBQSxBQUFJLFFBQUosQUFBWSxNQUFaLEFBQWtCLE1BYmpELEFBYUMsQUFBYyxBQUFnQixBQUF3Qjs7aUNBRTFEO3NDQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxPQUFPLE9BZjdCLEFBZUgsQUFBYyxBQUF3Qjs7aUNBZm5DO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7dUNBbUJJLEFBQ1g7Z0JBQUcsS0FBQSxBQUFLLE1BQVIsQUFBYyxlQUFjLEFBQ3hCO3VDQUFPLEFBQUM7OEJBQ1EsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFVBRDVCLEFBQ29DLEFBQ3ZDOzZCQUFTLEtBQUEsQUFBSyxNQUZYLEFBRWlCO2tDQUZqQjtvQ0FBQTtBQUFBO0FBQ0gsaUJBREcsRUFBUCxBQUFPLEFBR1Y7QUFKRCxtQkFJSyxBQUNEO3VDQUFPLEFBQUMseUNBQU8sVUFBUjtrQ0FBQTtvQ0FBQTtBQUFBO2lCQUFBLEVBQVAsQUFBTyxBQUNWO0FBQ0o7Ozs7aUNBRVEsQUFDTDttQ0FDSSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7OEJBQW5EO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRlIsQUFDSSxBQUNJLEFBRUgsNEJBSkwsQUFJSyxBQUFLLEFBQ04sZ0NBQUEsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEOzhCQUFsRDtnQ0FOUixBQUNJLEFBS0ksQUFJWDtBQUpXOzs7Ozs7QUE5Q1EsQSxBQW9EeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiRW50ZXJGb3JtLmpzIiwic291cmNlUm9vdCI6IkU6L0V0aGVyZXVtL1dvcmxkcGF5L2xvdHRlcnktY29udHJhY3QifQ==