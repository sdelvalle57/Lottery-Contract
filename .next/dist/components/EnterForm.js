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
            numbers6: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var numbers6, lottery, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                numbers6 = _this.props.numbers6;
                                lottery = (0, _lottery2.default)(_this.props.address);

                                if (!_this.props.canBuyLottery) {
                                    _context.next = 18;
                                    break;
                                }

                                _this.setState({ loading: true, errroMessage: '' });
                                _context.prev = 5;
                                _context.next = 8;
                                return _web2.default.eth.getAccounts();

                            case 8:
                                accounts = _context.sent;
                                _context.next = 11;
                                return lottery.methods.enter(numbers6).send({
                                    from: accounts[0],
                                    value: _this.props.lotteryValue
                                });

                            case 11:
                                _routes.Router.replaceRoute('/lotteries/' + _this.props.address);
                                _context.next = 17;
                                break;

                            case 14:
                                _context.prev = 14;
                                _context.t0 = _context['catch'](5);

                                _this.setState({ errroMessage: _context.t0.message.split("\n")[0] });

                            case 17:
                                _this.setState({ loading: false, value: '' });

                            case 18:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[5, 14]]);
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
                    positive: this.props.numbers6.length == 14,
                    loading: this.state.loading, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                    }
                }, 'Buy');
            } else {
                return _react2.default.createElement(_semanticUiReact.Button, { negative: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                    }
                }, 'Ended');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errroMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Enter the lottery')), this.renderButton(), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errroMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }));
        }
    }]);

    return EnterForm;
}(_react.Component);

exports.default = EnterForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEVudGVyRm9ybS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJNZXNzYWdlIiwiQnV0dG9uIiwibG90dGVyeUF0Iiwid2ViMyIsIlJvdXRlciIsIkVudGVyRm9ybSIsInN0YXRlIiwidmFsdWUiLCJlcnJyb01lc3NhZ2UiLCJsb2FkaW5nIiwibnVtYmVyczYiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsImxvdHRlcnkiLCJhZGRyZXNzIiwiY2FuQnV5TG90dGVyeSIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJlbnRlciIsInNlbmQiLCJmcm9tIiwibG90dGVyeVZhbHVlIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsInNwbGl0IiwibGVuZ3RoIiwicmVuZGVyQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFTOztBQUN4QixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7Ozs7Ozs7c04sQUFDRjttQkFBUSxBQUNHLEFBQ1A7MEJBRkksQUFFUyxBQUNiO3FCQUhJLEFBR0ssQUFDVDtzQkFBVSxBLEFBSk47QUFBQSxBQUNKLGlCQVFKLEE7aUdBQVcsaUJBQUEsQUFBTSxPQUFOO3VDQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQUFBLEFBQU0sQUFDQTtBQUZDLDJDQUVVLE1BQUEsQUFBSyxNQUZmLEFBRXFCLEFBRXRCO0FBSkMsMENBSVMsdUJBQVUsTUFBQSxBQUFLLE1BSnhCLEFBSVMsQUFBcUI7O3FDQUNsQyxNQUFBLEFBQUssTUFMRCxBQUtPLGVBTFA7b0RBQUE7QUFBQTtBQU1IOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQU41QixBQU1ILEFBQWMsQUFBK0I7Z0RBTjFDO2dEQUFBO3VDQVF3QixjQUFBLEFBQUssSUFSN0IsQUFRd0IsQUFBUzs7aUNBQTFCO0FBUlAsb0RBQUE7Z0RBQUE7K0NBU08sQUFBUSxRQUFSLEFBQWdCLE1BQWhCLEFBQXNCLFVBQXRCLEFBQWdDOzBDQUM1QixTQURpQyxBQUNqQyxBQUFTLEFBQ2Y7MkNBQU8sTUFBQSxBQUFLLE1BWGpCLEFBU08sQUFBcUMsQUFFckI7QUFGcUIsQUFDdkMsaUNBREU7O2lDQUlOOytDQUFBLEFBQU8sNkJBQTJCLE1BQUEsQUFBSyxNQWJ4QyxBQWFDLEFBQTZDO2dEQWI5QztBQUFBOztpQ0FBQTtnREFBQTtnRUFlQzs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQUFBLEFBQUksUUFBSixBQUFZLE1BQVosQUFBa0IsTUFmakQsQUFlQyxBQUFjLEFBQWdCLEFBQXdCOztpQ0FFMUQ7c0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE9BQU8sT0FqQjdCLEFBaUJILEFBQWMsQUFBd0I7O2lDQWpCbkM7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7Ozt1Q0FxQkksQUFDWDtnQkFBRyxLQUFBLEFBQUssTUFBUixBQUFjLGVBQWMsQUFDeEI7dUNBQU8sQUFBQzs4QkFDUSxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsVUFEN0IsQUFDcUMsQUFDeEM7NkJBQVMsS0FBQSxBQUFLLE1BRlgsQUFFaUI7a0NBRmpCO29DQUFBO0FBQUE7QUFDSCxpQkFERyxFQUFQLEFBQU8sQUFHVjtBQUpELG1CQUlLLEFBQ0Q7dUNBQU8sQUFBQyx5Q0FBTyxVQUFSO2tDQUFBO29DQUFBO0FBQUE7aUJBQUEsRUFBUCxBQUFPLEFBQ1Y7QUFDSjs7OztpQ0FFUSxBQUNMO21DQUNJLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGUixBQUNJLEFBQ0ksQUFFSCw0QkFKTCxBQUlLLEFBQUssQUFDTixnQ0FBQSxBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7OEJBQWxEO2dDQU5SLEFBQ0ksQUFLSSxBQUlYO0FBSlc7Ozs7OztBQWhEUSxBLEFBc0R4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJFbnRlckZvcm0uanMiLCJzb3VyY2VSb290IjoiRTovRXRoZXJldW0vV29ybGRwYXkvbG90dGVyeS1jb250cmFjdCJ9