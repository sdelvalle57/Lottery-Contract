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
                    loading: this.state.loading
                });
            }
            return null;
        }
    }, {
        key: 'renderMessage',
        value: function renderMessage() {
            if (!!this.state.errroMessage) {
                return _react2.default.createElement(_semanticUiReact.Modal.Content, null, this.state.errroMessage);
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
                    onClick: this.goHome
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

            return _react2.default.createElement('div', null, _react2.default.createElement(_semanticUiReact.Modal, { closeOnEscape: false,
                closeOnDimmerClick: showMessage,
                size: 'mini',
                dimmer: 'inverted',
                open: open,
                onClose: this.close }, _react2.default.createElement(_semanticUiReact.Modal.Header, null, 'Lottery Result'), _react2.default.createElement(_semanticUiReact.Modal.Content, { image: true }, _react2.default.createElement(_semanticUiReact.Image, { src: '/static/eth2.png', size: 'small' }), _react2.default.createElement(_semanticUiReact.Modal.Description, null, _react2.default.createElement(_semanticUiReact.Header, null, ' ', this.convertToNumbers(winningNumber), ' '), _react2.default.createElement('p', null, 'There are ', numOfWinners, ' winners '), _react2.default.createElement('p', null, 'Paid ', prize, ' ETH'), _react2.default.createElement('p', null, 'JackPot left ', finalJackPot, ' ETH'))), _react2.default.createElement(_semanticUiReact.Modal.Description, null, this.showMessage(showMessage)), _react2.default.createElement(_semanticUiReact.Modal.Actions, null, this.renderPayButton(showMessage, winnersPaid), this.renderButton(showMessage)), this.renderMessage()));
        }
    }]);

    return LotteryPlayedModal;
}(_react.Component);

exports.default = LotteryPlayedModal;