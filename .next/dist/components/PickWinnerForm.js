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
            loading: false,
            canPickWinner: _this.props.canPickWinner,
            lotteryAddress: _this.props.lotteryAddress

        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var lottery, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                lottery = (0, _lottery2.default)(_this.state.lotteryAddress);

                                if (!_this.state.canPickWinner) {
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
                                _routes.Router.replaceRoute('/lotteries/' + _this.state.lotteryAddress);
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
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log(this.state.canPickWinner);
            console.log(this.state.lotteryAddress);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            console.log(nextProps);
            this.setState({
                canPickWinner: nextProps.canPickWinner,
                lotteryAddress: nextProps.lotteryAddress
            });
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.canPickWinner) {
                return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errroMessage, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                    }
                }, _react2.default.createElement(_semanticUiReact.Button, { positive: true, loading: this.state.loading, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 55
                    }
                }, 'Pick Winner'), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errroMessage, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                    }
                }));
            } else return null;
        }
    }]);

    return PickWinnerForm;
}(_react.Component);

exports.default = PickWinnerForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBpY2tXaW5uZXJGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIk1lc3NhZ2UiLCJCdXR0b24iLCJsb3R0ZXJ5QXQiLCJ3ZWIzIiwiUm91dGVyIiwiUGlja1dpbm5lckZvcm0iLCJzdGF0ZSIsInZhbHVlIiwiZXJycm9NZXNzYWdlIiwibG9hZGluZyIsImNhblBpY2tXaW5uZXIiLCJwcm9wcyIsImxvdHRlcnlBZGRyZXNzIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibG90dGVyeSIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJwaWNrV2lubmVyIiwic2VuZCIsImZyb20iLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwibmV4dFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFTOztBQUN4QixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7OztJQUVqQixBOzs7Ozs7Ozs7Ozs7Ozs7Z08sQUFDRjttQkFBUSxBQUNHLEFBQ1A7MEJBRkksQUFFUyxBQUNiO3FCQUhJLEFBR0ssQUFDVDsyQkFBZSxNQUFBLEFBQUssTUFKaEIsQUFJc0IsQUFDMUI7NEJBQWdCLE1BQUEsQUFBSyxNQUxqQixBLEFBS3VCOztBQUx2QixBQUNKLGlCLEFBc0JKO2lHQUFXLGlCQUFBLEFBQU0sT0FBTjs2QkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtzQ0FBQSxBQUFNLEFBQ0E7QUFGQywwQ0FFUyx1QkFBVSxNQUFBLEFBQUssTUFGeEIsQUFFUyxBQUFxQjs7cUNBQ2xDLE1BQUEsQUFBSyxNQUhELEFBR08sZUFIUDtvREFBQTtBQUFBO0FBSUg7O3NDQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBSjVCLEFBSUgsQUFBYyxBQUErQjtnREFKMUM7Z0RBQUE7dUNBTXdCLGNBQUEsQUFBSyxJQU43QixBQU13QixBQUFTOztpQ0FBMUI7QUFOUCxvREFBQTtnREFBQTsrQ0FPTyxBQUFRLFFBQVIsQUFBZ0IsYUFBaEIsQUFBNkI7MENBQ3pCLFNBUlgsQUFPTyxBQUFrQyxBQUM5QixBQUFTO0FBRHFCLEFBQ3BDLGlDQURFOztpQ0FHTjsrQ0FBQSxBQUFPLDZCQUEyQixNQUFBLEFBQUssTUFWeEMsQUFVQyxBQUE2QztnREFWOUM7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBWUM7O3NDQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFBQSxBQUFJLFFBQUosQUFBWSxNQUFaLEFBQWtCLE1BWmpELEFBWUMsQUFBYyxBQUFnQixBQUF3Qjs7aUNBRTFEO3NDQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxPQUFPLE9BZDdCLEFBY0gsQUFBYyxBQUF3Qjs7aUNBZG5DO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7NENBZFMsQUFDaEI7b0JBQUEsQUFBUSxJQUFJLEtBQUEsQUFBSyxNQUFqQixBQUF1QixBQUN2QjtvQkFBQSxBQUFRLElBQUksS0FBQSxBQUFLLE1BQWpCLEFBQXVCLEFBRTFCOzs7O2tEQUV5QixBLFdBQVcsQUFDakM7b0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtpQkFBQSxBQUFLOytCQUNjLFVBREwsQUFDZSxBQUN6QjtnQ0FBZ0IsVUFGcEIsQUFBYyxBQUVnQixBQUVqQztBQUppQixBQUNWOzs7O2lDQXdCQyxBQUNMO2dCQUFHLEtBQUEsQUFBSyxNQUFSLEFBQWMsZUFBYyxBQUN4Qjt1Q0FDSSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7a0NBQW5EO29DQUFBLEFBRUk7QUFGSjtpQkFBQSxrQkFFSSxBQUFDLHlDQUFPLFVBQVIsTUFBaUIsU0FBUyxLQUFBLEFBQUssTUFBL0IsQUFBcUM7a0NBQXJDO29DQUFBO0FBQUE7bUJBRkosQUFFSSxBQUNBLGdDQUFBLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDtrQ0FBbEQ7b0NBSlIsQUFDSSxBQUdJLEFBSVg7QUFKVzs7QUFMWixtQkFTTSxPQUFBLEFBQU8sQUFDaEI7Ozs7O0FBdER3QixBLEFBd0Q3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJQaWNrV2lubmVyRm9ybS5qcyIsInNvdXJjZVJvb3QiOiJFOi9FdGhlcmV1bS9Xb3JsZHBheS9sb3R0ZXJ5LWNvbnRyYWN0In0=