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
            numbers: ''
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
                                return lottery.methods.enter(_this.props.numbers).send({
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
                    positive: this.props.numbers.length == 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEVudGVyRm9ybS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJNZXNzYWdlIiwiQnV0dG9uIiwibG90dGVyeUF0Iiwid2ViMyIsIlJvdXRlciIsIkVudGVyRm9ybSIsInN0YXRlIiwidmFsdWUiLCJlcnJyb01lc3NhZ2UiLCJsb2FkaW5nIiwibnVtYmVycyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImxvdHRlcnkiLCJwcm9wcyIsImFkZHJlc3MiLCJjYW5CdXlMb3R0ZXJ5Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImVudGVyIiwic2VuZCIsImZyb20iLCJsb3R0ZXJ5VmFsdWUiLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwic3BsaXQiLCJsZW5ndGgiLCJyZW5kZXJCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVM7O0FBQ3hCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7Ozs7OztzTixBQUNGO21CQUFRLEFBQ0csQUFDUDswQkFGSSxBQUVTLEFBQ2I7cUJBSEksQUFHSyxBQUNUO3FCQUpJLEEsQUFJSztBQUpMLEFBQ0osaUJBUUosQTtpR0FBVyxpQkFBQSxBQUFNLE9BQU47NkJBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7c0NBQUEsQUFBTSxBQUNBO0FBRkMsMENBRVMsdUJBQVUsTUFBQSxBQUFLLE1BRnhCLEFBRVMsQUFBcUI7O3FDQUNsQyxNQUFBLEFBQUssTUFIRCxBQUdPLGVBSFA7b0RBQUE7QUFBQTtBQUlIOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUo1QixBQUlILEFBQWMsQUFBK0I7Z0RBSjFDO2dEQUFBO3VDQU13QixjQUFBLEFBQUssSUFON0IsQUFNd0IsQUFBUzs7aUNBQTFCO0FBTlAsb0RBQUE7Z0RBQUE7K0NBT08sQUFBUSxRQUFSLEFBQWdCLE1BQU0sTUFBQSxBQUFLLE1BQTNCLEFBQWlDLFNBQWpDLEFBQTBDOzBDQUN0QyxTQUQyQyxBQUMzQyxBQUFTLEFBQ2Y7MkNBQU8sTUFBQSxBQUFLLE1BVGpCLEFBT08sQUFBK0MsQUFFL0I7QUFGK0IsQUFDakQsaUNBREU7O2lDQUlOOytDQUFBLEFBQU8sNkJBQTJCLE1BQUEsQUFBSyxNQVh4QyxBQVdDLEFBQTZDO2dEQVg5QztBQUFBOztpQ0FBQTtnREFBQTtnRUFhQzs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQUFBLEFBQUksUUFBSixBQUFZLE1BQVosQUFBa0IsTUFiakQsQUFhQyxBQUFjLEFBQWdCLEFBQXdCOztpQ0FFMUQ7c0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE9BQU8sT0FmN0IsQUFlSCxBQUFjLEFBQXdCOztpQ0FmbkM7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7Ozt1Q0FtQkksQUFDWDtnQkFBRyxLQUFBLEFBQUssTUFBUixBQUFjLGVBQWMsQUFDeEI7dUNBQU8sQUFBQzs4QkFDUSxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsVUFENUIsQUFDb0MsQUFDdkM7NkJBQVMsS0FBQSxBQUFLLE1BRlgsQUFFaUI7a0NBRmpCO29DQUFBO0FBQUE7QUFDSCxpQkFERyxFQUFQLEFBQU8sQUFHVjtBQUpELG1CQUlLLEFBQ0Q7dUNBQU8sQUFBQyx5Q0FBTyxVQUFSO2tDQUFBO29DQUFBO0FBQUE7aUJBQUEsRUFBUCxBQUFPLEFBQ1Y7QUFDSjs7OztpQ0FFUSxBQUNMO21DQUNJLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGUixBQUNJLEFBQ0ksQUFFSCw0QkFKTCxBQUlLLEFBQUssQUFDTixnQ0FBQSxBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7OEJBQWxEO2dDQU5SLEFBQ0ksQUFLSSxBQUlYO0FBSlc7Ozs7OztBQTlDUSxBLEFBb0R4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJFbnRlckZvcm0uanMiLCJzb3VyY2VSb290IjoiRTovRXRoZXJldW0vV29ybGRwYXkvbG90dGVyeS1jb250cmFjdCJ9