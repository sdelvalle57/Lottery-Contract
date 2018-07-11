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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

var _lottery = require('../ethereum/lottery');

var _lottery2 = _interopRequireDefault(_lottery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Ethereum\\Worldpay\\lottery-contract\\components\\LotteryPlayedModal.js';


var LotteryPlayedModal = function (_Component) {
    (0, _inherits3.default)(LotteryPlayedModal, _Component);

    function LotteryPlayedModal() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, LotteryPlayedModal);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LotteryPlayedModal.__proto__ || (0, _getPrototypeOf2.default)(LotteryPlayedModal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            open: _this.props.lotteryHasPlayed,
            numOfWinners: _this.props.numOfWinners,
            winningNumber: _this.props.winningNumber,
            prize: _this.props.prize,
            finalJackPot: _this.props.finalJackPot,
            showMessage: _this.props.showMessage,
            winnersPaid: _this.props.winnersPaid,
            lotteryAddress: _this.props.lotteryAddress,
            loading: false,
            errroMessage: '',
            isOwner: _this.props.isOwner
        }, _this.show = function () {
            return _this.setState({ open: true });
        }, _this.close = function () {
            return _this.setState({ open: false });
        }, _this.payWinners = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var lottery, accounts;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _this.setState({ loading: true, errroMessage: '' });
                            lottery = (0, _lottery2.default)(_this.state.lotteryAddress, _web2.default);
                            _context.prev = 2;
                            _context.next = 5;
                            return _web2.default.eth.getAccounts();

                        case 5:
                            accounts = _context.sent;
                            _context.next = 8;
                            return lottery.methods.payWinners().send({
                                from: accounts[0]
                            });

                        case 8:
                            _this.setState({ winnersPaid: true });
                            _context.next = 14;
                            break;

                        case 11:
                            _context.prev = 11;
                            _context.t0 = _context['catch'](2);

                            _this.setState({ errroMessage: _context.t0.message.split("\n")[0] });

                        case 14:
                            _this.setState({ loading: false });

                        case 15:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2, [[2, 11]]);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(LotteryPlayedModal, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                open: nextProps.lotteryHasPlayed,
                numOfWinners: nextProps.numOfWinners,
                winningNumber: nextProps.winningNumber,
                prize: nextProps.prize,
                winnersPaid: nextProps.winnersPaid,
                isOwner: nextProps.isOwner
            });
        }
    }, {
        key: 'convertToNumbers',
        value: function convertToNumbers(numByte) {
            var numbers = [];
            var numbersString = "";
            numByte = numByte.split("0x")[1];
            for (var k = 0; k < numByte.length; k = k + 2) {
                var number = parseInt(numByte[k] + numByte[k + 1], 16);
                numbers.push(number);
                numbersString += number + " ";
            }
            return numbersString;
        }
    }, {
        key: 'goHome',
        value: function goHome() {
            _routes.Router.push('/');
        }
    }, {
        key: 'showMessage',
        value: function showMessage(_showMessage) {
            if (_showMessage) {
                return "Next Lottery coming soon!";
            }
            return null;
        }
    }, {
        key: 'renderPayButton',
        value: function renderPayButton(showMessage, winnersPaid) {
            if (!showMessage && !winnersPaid && this.props.isOwner && this.props.numOfWinners > 0) {
                return _react2.default.createElement(_semanticUiReact.Button, {
                    primary: true,
                    content: 'Pay Winners',
                    onClick: this.payWinners,
                    loading: this.state.loading,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 79
                    }
                });
            }
            return null;
        }
    }, {
        key: 'renderMessage',
        value: function renderMessage() {
            if (!!this.state.errroMessage) {
                return _react2.default.createElement(_semanticUiReact.Modal.Content, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 93
                    }
                }, this.state.errroMessage);
            }
            return null;
        }
    }, {
        key: 'renderButton',
        value: function renderButton(showMessage) {
            if (!showMessage) {
                return _react2.default.createElement(_semanticUiReact.Button, {
                    positive: true,
                    icon: 'checkmark',
                    labelPosition: 'right',
                    content: 'Ok!',
                    onClick: this.goHome,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 104
                    }
                });
            }
            return null;
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                open = _state.open,
                numOfWinners = _state.numOfWinners,
                winningNumber = _state.winningNumber,
                prize = _state.prize,
                finalJackPot = _state.finalJackPot,
                showMessage = _state.showMessage,
                winnersPaid = _state.winnersPaid;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, _react2.default.createElement(_semanticUiReact.Modal, { closeOnEscape: false,
                closeOnDimmerClick: showMessage,
                size: 'mini',
                dimmer: 'inverted',
                open: open,
                onClose: this.close, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                }
            }, _react2.default.createElement(_semanticUiReact.Modal.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            }, 'Lottery Result'), _react2.default.createElement(_semanticUiReact.Modal.Content, { image: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }, _react2.default.createElement(_semanticUiReact.Image, { src: '/static/eth2.png', size: 'small', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }), _react2.default.createElement(_semanticUiReact.Modal.Description, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            }, _react2.default.createElement(_semanticUiReact.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                }
            }, ' ', this.convertToNumbers(winningNumber), ' '), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                }
            }, 'There are ', numOfWinners, ' winners '), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                }
            }, 'Paid ', prize, ' ETH'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                }
            }, 'JackPot left ', finalJackPot, ' ETH'))), _react2.default.createElement(_semanticUiReact.Modal.Description, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                }
            }, this.showMessage(showMessage)), _react2.default.createElement(_semanticUiReact.Modal.Actions, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 137
                }
            }, this.renderPayButton(showMessage, winnersPaid), this.renderButton(showMessage)), this.renderMessage()));
        }
    }]);

    return LotteryPlayedModal;
}(_react.Component);

exports.default = LotteryPlayedModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExvdHRlcnlQbGF5ZWRNb2RhbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkhlYWRlciIsIk1vZGFsIiwiSWNvbiIsIkltYWdlIiwid2ViMyIsIlJvdXRlciIsImxvdHRlcnlBdCIsIkxvdHRlcnlQbGF5ZWRNb2RhbCIsInN0YXRlIiwib3BlbiIsInByb3BzIiwibG90dGVyeUhhc1BsYXllZCIsIm51bU9mV2lubmVycyIsIndpbm5pbmdOdW1iZXIiLCJwcml6ZSIsImZpbmFsSmFja1BvdCIsInNob3dNZXNzYWdlIiwid2lubmVyc1BhaWQiLCJsb3R0ZXJ5QWRkcmVzcyIsImxvYWRpbmciLCJlcnJyb01lc3NhZ2UiLCJpc093bmVyIiwic2hvdyIsInNldFN0YXRlIiwiY2xvc2UiLCJwYXlXaW5uZXJzIiwibG90dGVyeSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwic3BsaXQiLCJuZXh0UHJvcHMiLCJudW1CeXRlIiwibnVtYmVycyIsIm51bWJlcnNTdHJpbmciLCJrIiwibGVuZ3RoIiwibnVtYmVyIiwicGFyc2VJbnQiLCJwdXNoIiwiZ29Ib21lIiwiY29udmVydFRvTnVtYmVycyIsInJlbmRlclBheUJ1dHRvbiIsInJlbmRlckJ1dHRvbiIsInJlbmRlck1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFTLEFBQVEsQUFBUSxBQUFPLEFBQU07O0FBQ3RDLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7O0FBQ3ZCLEFBQU8sQUFBZTs7Ozs7Ozs7O0ksQUFHaEI7Ozs7Ozs7Ozs7Ozs7Ozt3T0FFRixBO2tCQUNVLE1BQUEsQUFBSyxNQURQLEFBQ2EsQUFDakI7MEJBQWMsTUFBQSxBQUFLLE1BRmYsQUFFcUIsQUFDekI7MkJBQWUs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TUEsQUFDQSxtQ0FBQyxjQUFELHVCQUFBLEFBQU8sV0FBUSxPQUFmOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLHdDQUFNLEtBQVAsQUFBVyxvQkFBbUIsTUFBOUIsQUFBbUM7OEJBQW5DO2dDQURKLEFBQ0ksQUFDQTtBQURBO2dDQUNDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDQTtBQURBO0FBQUEsK0JBQ0EsQUFBQzs7OEJBQUQ7Z0NBQUE7QUFBQTtBQUFBLGVBQVUsVUFBQSxBQUFLLGlCQUFmLEFBQVUsQUFBc0IsZ0JBRGhDLEFBQ0EsQUFDQSxzQkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBYyxjQUFkLGNBRkEsQUFFQSxBQUNBLDhCQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFTLFNBQVQsT0FIQSxBQUdBLEFBQ0EseUJBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQWlCLGlCQUFqQixjQWJKLEFBT0EsQUFFSSxBQUlBLEFBR0EsMkJBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUFvQjtBQUFwQjtBQUFBLG9CQUFvQixBQUFLLFlBaEI3QixBQWdCSSxBQUFvQixBQUFpQixBQUNyQywrQkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQ0s7QUFETDtBQUFBLG9CQUNLLEFBQUssZ0JBQUwsQUFBcUIsYUFEMUIsQUFDSyxBQUFrQyxBQUNsQyxtQkFBQSxBQUFLLGFBbkJkLEFBaUJJLEFBRUssQUFBa0IsQUFFbEIsb0JBdkJiLEFBQ0EsQUFDSSxBQXFCUyxBQUFLLEFBS3JCOzs7OztBQTFJNEIsQSxBQThJakM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTG90dGVyeVBsYXllZE1vZGFsLmpzIiwic291cmNlUm9vdCI6IkU6L0V0aGVyZXVtL1dvcmxkcGF5L2xvdHRlcnktY29udHJhY3QifQ==