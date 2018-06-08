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

var _jsxFileName = 'E:\\Ethereum\\Worldpay\\lottery-contract\\components\\PickWinnerForm.js';


var PickWinnerForm = function (_Component) {
    (0, _inherits3.default)(PickWinnerForm, _Component);

    function PickWinnerForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, PickWinnerForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PickWinnerForm.__proto__ || (0, _getPrototypeOf2.default)(PickWinnerForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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

                                if (!_this.props.canPickWinner) {
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
                                return lottery.methods.pickWinner().send({
                                    from: accounts[0]
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

    (0, _createClass3.default)(PickWinnerForm, [{
        key: 'render',
        value: function render() {
            if (this.props.canPickWinner) {
                return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errroMessage, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    }
                }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                }, _react2.default.createElement('label', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                    }
                }, 'Enter the lottery')), _react2.default.createElement(_semanticUiReact.Button, { positive: true, loading: this.state.loading, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                    }
                }, 'pickWinner'), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errroMessage, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                }));
            } else return null;
        }
    }]);

    return PickWinnerForm;
}(_react.Component);

exports.default = PickWinnerForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBpY2tXaW5uZXJGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIk1lc3NhZ2UiLCJCdXR0b24iLCJsb3R0ZXJ5QXQiLCJ3ZWIzIiwiUm91dGVyIiwiUGlja1dpbm5lckZvcm0iLCJzdGF0ZSIsInZhbHVlIiwiZXJycm9NZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImxvdHRlcnkiLCJwcm9wcyIsImFkZHJlc3MiLCJjYW5QaWNrV2lubmVyIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsInBpY2tXaW5uZXIiLCJzZW5kIiwiZnJvbSIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJzcGxpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUzs7QUFDeEIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SUFFakIsQTs7Ozs7Ozs7Ozs7Ozs7O2dPQUNGLEE7bUJBQVEsQUFDRyxBQUNQOzBCQUZJLEFBRVMsQUFDYjtxQkFISSxBLEFBR0k7O0FBSEosQUFDSixpQkFNSixBO2lHQUFXLGlCQUFBLEFBQU0sT0FBTjs2QkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtzQ0FBQSxBQUFNLEFBQ0E7QUFGQywwQ0FFUyx1QkFBVSxNQUFBLEFBQUssTUFGeEIsQUFFUyxBQUFxQjs7cUNBQ2xDLE1BQUEsQUFBSyxNQUhELEFBR08sZUFIUDtvREFBQTtBQUFBO0FBSUg7O3NDQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBSjVCLEFBSUgsQUFBYyxBQUErQjtnREFKMUM7Z0RBQUE7dUNBTXdCLGNBQUEsQUFBSyxJQU43QixBQU13QixBQUFTOztpQ0FBMUI7QUFOUCxvREFBQTtnREFBQTsrQ0FPTyxBQUFRLFFBQVIsQUFBZ0IsYUFBaEIsQUFBNkI7MENBQ3pCLFNBUlgsQUFPTyxBQUFrQyxBQUM5QixBQUFTO0FBRHFCLEFBQ3BDLGlDQURFOztpQ0FHTjsrQ0FBQSxBQUFPLDZCQUEyQixNQUFBLEFBQUssTUFWeEMsQUFVQyxBQUE2QztnREFWOUM7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBWUM7O3NDQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFBQSxBQUFJLFFBQUosQUFBWSxNQUFaLEFBQWtCLE1BWmpELEFBWUMsQUFBYyxBQUFnQixBQUF3Qjs7aUNBRTFEO3NDQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxPQUFPLE9BZDdCLEFBY0gsQUFBYyxBQUF3Qjs7aUNBZG5DO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBbUJGLEFBQ0w7Z0JBQUcsS0FBQSxBQUFLLE1BQVIsQUFBYyxlQUFjLEFBQ3hCO3VDQUNJLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtrQ0FBbkQ7b0NBQUEsQUFDSTtBQURKO2lCQUFBLGtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7a0NBQU47b0NBQUEsQUFDSTtBQURKO0FBQUEsbUNBQ0ksY0FBQTs7a0NBQUE7b0NBQUE7QUFBQTtBQUFBLG1CQUZSLEFBQ0ksQUFDSSxBQUVKLHVDQUFBLEFBQUMseUNBQU8sVUFBUixNQUFpQixTQUFTLEtBQUEsQUFBSyxNQUEvQixBQUFxQztrQ0FBckM7b0NBQUE7QUFBQTttQkFKSixBQUlJLEFBQ0EsK0JBQUEsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEO2tDQUFsRDtvQ0FOUixBQUNJLEFBS0ksQUFJWDtBQUpXOztBQVBaLG1CQVdNLE9BQUEsQUFBTyxBQUNoQjs7Ozs7QUF4Q3dCLEEsQUEwQzdCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlBpY2tXaW5uZXJGb3JtLmpzIiwic291cmNlUm9vdCI6IkU6L0V0aGVyZXVtL1dvcmxkcGF5L2xvdHRlcnktY29udHJhY3QifQ==