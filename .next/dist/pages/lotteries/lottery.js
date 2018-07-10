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

var _reactTimestamp = require('react-timestamp');

var _reactTimestamp2 = _interopRequireDefault(_reactTimestamp);

var _routes = require('../../routes');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _lottery = require('../../ethereum/lottery');

var _lottery2 = _interopRequireDefault(_lottery);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _web3Socket = require('../../ethereum/web3Socket');

var _web3Socket2 = _interopRequireDefault(_web3Socket);

var _EnterForm = require('../../components/EnterForm');

var _EnterForm2 = _interopRequireDefault(_EnterForm);

var _PickWinnerForm = require('../../components/PickWinnerForm');

var _PickWinnerForm2 = _interopRequireDefault(_PickWinnerForm);

var _NumberPicker = require('../../components/NumberPicker');

var _NumberPicker2 = _interopRequireDefault(_NumberPicker);

var _LotteryPlayedModal = require('../../components/LotteryPlayedModal');

var _LotteryPlayedModal2 = _interopRequireDefault(_LotteryPlayedModal);

var _vm = require('vm');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Ethereum\\Worldpay\\lottery-contract\\pages\\lotteries\\lottery.js?entry';


var Lottery = function (_Component) {
    (0, _inherits3.default)(Lottery, _Component);

    function Lottery() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Lottery);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Lottery.__proto__ || (0, _getPrototypeOf2.default)(Lottery)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            lotteryAddress: _this.props.url.query.lotteryAddress,
            lotteryValue: '',
            deadline: Date.now(),
            lotteryJackPot: '',
            lotteryHasPlayed: '',
            owner: '',
            accounts: '',
            canBuyLottery: '',
            canPickWinner: '',
            loading: true,
            timeStarted: '',
            number4: '',
            numbers3: [],
            prize: '',
            numOfWinners: '',
            winningNumber: '',
            winnersPaid: true
        }, _this.setLotteryValues = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(lottery) {
                var summary, accounts, lotteryValue, deadline, lotteryJackPot, lotteryHasPlayed, owner, timeStarted, canBuyLottery, canPickWinner, prize, numOfWinners, winningNumber, winnersPaid;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return lottery.methods.getSummary().call();

                            case 2:
                                summary = _context.sent;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                lotteryValue = summary[0];
                                deadline = summary[1];
                                lotteryJackPot = summary[2];
                                lotteryHasPlayed = summary[7];
                                owner = summary[10];
                                timeStarted = summary[12];
                                canBuyLottery = !lotteryHasPlayed && Date.now() / 1000 - deadline < 0;
                                canPickWinner = !lotteryHasPlayed && Date.now() / 1000 > deadline;

                                if (lotteryHasPlayed) lotteryJackPot = summary[6];
                                prize = _web2.default.utils.fromWei(summary[4], 'ether');
                                numOfWinners = summary[5];
                                winningNumber = summary[11];
                                winnersPaid = summary[13];

                                console.log(summary);
                                _this.setState({ lotteryValue: lotteryValue, deadline: deadline, lotteryJackPot: lotteryJackPot, lotteryHasPlayed: lotteryHasPlayed, owner: owner,
                                    accounts: accounts, canBuyLottery: canBuyLottery, canPickWinner: canPickWinner, loading: false, timeStarted: timeStarted, prize: prize,
                                    numOfWinners: numOfWinners, winningNumber: winningNumber, winnersPaid: winnersPaid });

                            case 21:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.numberPickerCallback = function (number4, numbers3) {
            _this.setState({ number4: number4, numbers3: numbers3 });
        }, _this.setIntervalFunction = function () {
            _this.interval = setInterval(function () {
                _this.isLotteryOpen();
            }, 2000);
        }, _this.setEventsListeners = function (lottery) {
            window.addEventListener('load', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _this.setLotteryValues((0, _lottery2.default)(lotteryAddress, _web2.default));

                            case 2:
                                _this.setIntervalFunction();

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            })), false);
            lottery.events.TicketBuy({}, function () {
                var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(error, data) {
                    var lotteryJackPot;
                    return _regenerator2.default.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    if (error == null) {
                                        lotteryJackPot = data.returnValues.jackPot;

                                        _this.setState({ lotteryJackPot: lotteryJackPot });
                                    }

                                case 1:
                                case 'end':
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, _this2);
                }));

                return function (_x2, _x3) {
                    return _ref4.apply(this, arguments);
                };
            }());
            lottery.events.LotteryHasPlayed({}, function () {
                var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(error, data) {
                    var summary, lotteryJackPot, prize, numOfWinners, winningNumber, winnersPaid, lotteryHasPlayed, canBuyLottery, canPickWinner;
                    return _regenerator2.default.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    if (!(error == null)) {
                                        _context4.next = 13;
                                        break;
                                    }

                                    _context4.next = 3;
                                    return lottery.methods.getSummary().call();

                                case 3:
                                    summary = _context4.sent;
                                    lotteryJackPot = summary[6];
                                    prize = _web2.default.utils.fromWei(summary[4], 'ether');
                                    numOfWinners = summary[5];
                                    winningNumber = summary[11];
                                    winnersPaid = summary[13];
                                    lotteryHasPlayed = true;
                                    canBuyLottery = false;
                                    canPickWinner = false;

                                    _this.setState({ lotteryHasPlayed: lotteryHasPlayed, canPickWinner: canPickWinner, canBuyLottery: canBuyLottery, lotteryJackPot: lotteryJackPot,
                                        winningNumber: winningNumber, prize: prize, numOfWinners: numOfWinners, winnersPaid: winnersPaid });

                                case 13:
                                case 'end':
                                    return _context4.stop();
                            }
                        }
                    }, _callee4, _this2);
                }));

                return function (_x4, _x5) {
                    return _ref5.apply(this, arguments);
                };
            }());
        }, _this.isLotteryOpen = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
            var _this$state, lotteryHasPlayed, deadline, canBuyLottery, canPickWinner;

            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _this$state = _this.state, lotteryHasPlayed = _this$state.lotteryHasPlayed, deadline = _this$state.deadline;
                            canBuyLottery = !lotteryHasPlayed && Date.now() / 1000 - deadline < 0;
                            canPickWinner = !lotteryHasPlayed && Date.now() / 1000 > deadline;

                            _this.setState({ canBuyLottery: canBuyLottery, canPickWinner: canPickWinner });

                        case 4:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Lottery, [{
        key: 'componentDidMount',
        value: function () {
            var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
                var lotteryAddress, lottery;
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                lotteryAddress = this.props.url.query.lotteryAddress;

                                if (!(typeof window !== 'undefined' && typeof window.web3 !== 'undefined')) {
                                    _context6.next = 6;
                                    break;
                                }

                                lottery = (0, _lottery2.default)(lotteryAddress, _web2.default);
                                _context6.next = 5;
                                return this.setLotteryValues(lottery);

                            case 5:
                                this.setIntervalFunction();

                            case 6:
                                this.setEventsListeners((0, _lottery2.default)(lotteryAddress, _web3Socket2.default));

                            case 7:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function componentDidMount() {
                return _ref7.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.interval);
        }
    }, {
        key: 'renderDeadline',
        value: function renderDeadline(deadline, canBuyLottery) {
            var ending = canBuyLottery ? "Ending " : "Ended";
            return _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            }, ending, ' ', _react2.default.createElement(_reactTimestamp2.default, {
                precision: 3,
                autoUpdate: true, time: deadline,
                actualSeconds: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            }));
        }
    }, {
        key: 'renderStartTime',
        value: function renderStartTime(timeStarted) {
            return _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                }
            }, 'Started on ', _react2.default.createElement(_reactTimestamp2.default, { time: timeStarted, format: 'full', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                }
            }));
        }
    }, {
        key: 'renderCards',
        value: function renderCards() {
            var _state = this.state,
                lotteryValue = _state.lotteryValue,
                deadline = _state.deadline,
                lotteryJackPot = _state.lotteryJackPot,
                timeStarted = _state.timeStarted,
                canBuyLottery = _state.canBuyLottery;

            var isLotteryOpen = canBuyLottery ? "Open" : "Closed";
            var items = [{
                header: _web2.default.utils.fromWei(this.state.lotteryValue, 'ether') + " Ether",
                meta: 'We accept just Ether as payment',
                description: 'This is the value of each ticket to enter the Lottery',
                style: { overflowWrap: 'break-word' }
            }, {
                header: "Lottery is " + isLotteryOpen,
                meta: this.renderDeadline(deadline, canBuyLottery),
                description: this.renderStartTime(timeStarted),
                style: { overflowWrap: 'break-word' }
            }, {
                header: _web2.default.utils.fromWei(lotteryJackPot, 'ether') + " Ether",
                meta: 'Lottery Jackpot',
                description: 'This jackpot will be release to the winners',
                style: { overflowWrap: 'break-word' }
            }];
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157
                }
            });
        }
    }, {
        key: 'renderPickWinnerButton',
        value: function renderPickWinnerButton() {
            var _state2 = this.state,
                lotteryAddress = _state2.lotteryAddress,
                canPickWinner = _state2.canPickWinner,
                lotteryHasPlayed = _state2.lotteryHasPlayed,
                owner = _state2.owner,
                accounts = _state2.accounts;

            if (!lotteryHasPlayed && canPickWinner && accounts.length > 0 && owner.toString() == accounts[0].toString()) {
                return _react2.default.createElement(_PickWinnerForm2.default, {
                    lotteryAddress: lotteryAddress,
                    canPickWinner: canPickWinner,
                    lotteryHasPlayed: lotteryHasPlayed,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 165
                    }
                });
            }
            return null;
        }
    }, {
        key: 'renderModal',
        value: function renderModal() {
            var _state3 = this.state,
                lotteryHasPlayed = _state3.lotteryHasPlayed,
                numOfWinners = _state3.numOfWinners,
                winningNumber = _state3.winningNumber,
                prize = _state3.prize,
                lotteryJackPot = _state3.lotteryJackPot,
                winnersPaid = _state3.winnersPaid,
                lotteryAddress = _state3.lotteryAddress,
                owner = _state3.owner,
                accounts = _state3.accounts;

            var jackPot = _web2.default.utils.fromWei(lotteryJackPot, 'ether');
            var isOwner = accounts.length > 0 && owner.toString() == accounts[0].toString();
            if (lotteryHasPlayed) {
                return _react2.default.createElement(_LotteryPlayedModal2.default, {
                    lotteryHasPlayed: lotteryHasPlayed,
                    numOfWinners: numOfWinners,
                    winningNumber: winningNumber,
                    prize: prize,
                    finalJackPot: jackPot,
                    showMessage: false,
                    winnersPaid: winnersPaid,
                    lotteryAddress: lotteryAddress,
                    isOwner: isOwner,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 180
                    }
                });
            }
            return null;
        }
    }, {
        key: 'render',
        value: function render() {
            var _state4 = this.state,
                canPickWinner = _state4.canPickWinner,
                canBuyLottery = _state4.canBuyLottery,
                number4 = _state4.number4,
                lotteryHasPlayed = _state4.lotteryHasPlayed,
                lotteryValue = _state4.lotteryValue,
                lotteryAddress = _state4.lotteryAddress,
                numbers3 = _state4.numbers3;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 199
                }
            }, _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 200
                }
            }, _react2.default.createElement(_semanticUiReact.Loader, { size: 'large', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 201
                }
            }, 'Loading')), _react2.default.createElement(_semanticUiReact.Container, { style: { marginTop: '100px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 204
                }
            }, this.renderModal(), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 206
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 207
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 210
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 211
                }
            }, _react2.default.createElement(_EnterForm2.default, {
                number4: number4,
                canPickWinner: canPickWinner,
                canBuyLottery: canBuyLottery,
                lotteryValue: lotteryValue,
                lotteryAddress: lotteryAddress,
                numbers3: numbers3,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 212
                }
            }), _react2.default.createElement(_NumberPicker2.default, { callback: this.numberPickerCallback, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 220
                }
            })), this.renderPickWinnerButton()))));
        }
    }]);

    return Lottery;
}(_react.Component);

exports.default = Lottery;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxsb3R0ZXJpZXNcXGxvdHRlcnkuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiR3JpZCIsIkRpbW1lciIsIkxvYWRlciIsIlNlZ21lbnQiLCJDb250YWluZXIiLCJUaW1lc3RhbXAiLCJMaW5rIiwiTGF5b3V0IiwibG90dGVyeUF0Iiwid2ViMyIsIndlYjNTb2NrZXQiLCJFbnRlckZvcm0iLCJQaWNrV2lubmVyRm9ybSIsIk51bWJlclBpY2tlciIsIkxvdHRlcnlQbGF5ZWRNb2RhbCIsInJ1bkluVGhpc0NvbnRleHQiLCJMb3R0ZXJ5Iiwic3RhdGUiLCJsb3R0ZXJ5QWRkcmVzcyIsInByb3BzIiwidXJsIiwicXVlcnkiLCJsb3R0ZXJ5VmFsdWUiLCJkZWFkbGluZSIsIkRhdGUiLCJub3ciLCJsb3R0ZXJ5SmFja1BvdCIsImxvdHRlcnlIYXNQbGF5ZWQiLCJvd25lciIsImFjY291bnRzIiwiY2FuQnV5TG90dGVyeSIsImNhblBpY2tXaW5uZXIiLCJsb2FkaW5nIiwidGltZVN0YXJ0ZWQiLCJudW1iZXI0IiwibnVtYmVyczMiLCJwcml6ZSIsIm51bU9mV2lubmVycyIsIndpbm5pbmdOdW1iZXIiLCJ3aW5uZXJzUGFpZCIsInNldExvdHRlcnlWYWx1ZXMiLCJsb3R0ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsImV0aCIsImdldEFjY291bnRzIiwidXRpbHMiLCJmcm9tV2VpIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwibnVtYmVyUGlja2VyQ2FsbGJhY2siLCJzZXRJbnRlcnZhbEZ1bmN0aW9uIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImlzTG90dGVyeU9wZW4iLCJzZXRFdmVudHNMaXN0ZW5lcnMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRzIiwiVGlja2V0QnV5IiwiZXJyb3IiLCJkYXRhIiwicmV0dXJuVmFsdWVzIiwiamFja1BvdCIsIkxvdHRlcnlIYXNQbGF5ZWQiLCJjbGVhckludGVydmFsIiwiZW5kaW5nIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInJlbmRlckRlYWRsaW5lIiwicmVuZGVyU3RhcnRUaW1lIiwibGVuZ3RoIiwidG9TdHJpbmciLCJpc093bmVyIiwibWFyZ2luVG9wIiwicmVuZGVyTW9kYWwiLCJyZW5kZXJDYXJkcyIsInJlbmRlclBpY2tXaW5uZXJCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFNLEFBQVEsQUFBTSxBQUFRLEFBQVEsQUFBUzs7QUFDdEQsQUFBTzs7OztBQUNQLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBd0I7Ozs7QUFDL0IsQUFBUzs7Ozs7OztJLEFBR0g7Ozs7Ozs7Ozs7Ozs7OztrTixBQUVGOzRCQUNvQixNQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxNQUQzQixBQUNpQyxBQUNyQzswQkFGSSxBQUVVLEFBQ2Q7c0JBQVUsS0FITixBQUdNLEFBQUssQUFDZjs0QkFKSSxBQUlZLEFBQ2hCOzhCQUxJLEFBS2MsQUFDbEI7bUJBTkksQUFNRyxBQUNQO3NCQVBJLEFBT00sQUFDVjsyQkFSSSxBQVFXLEFBQ2Y7MkJBVEksQUFTVyxBQUNmO3FCQVZJLEFBVUssQUFDVDt5QkFYSSxBQVdTLEFBQ2I7cUJBWkksQUFZSSxBQUNSO3NCQWJJLEFBYUssQUFDVDttQkFkSSxBQWNFLEFBQ047MEJBZkksQUFlUyxBQUNiOzJCQWhCSSxBQWdCVSxBQUNkO3lCQWpCSSxBQWlCUyxB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RTZCLG1CQUY3QixBQUU2QixBQUNsQzs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDLHlDQUFPLFFBQVUsS0FBQSxBQUFLLE1BQXZCLEFBQTZCOzhCQUE3QjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyx5Q0FBTyxNQUFSLEFBQWE7OEJBQWI7Z0NBQUE7QUFBQTtlQUZSLEFBQ0ksQUFDSSxBQUdKLDZCQUFBLEFBQUMsNENBQVUsT0FBTyxFQUFDLFdBQW5CLEFBQWtCLEFBQVc7OEJBQTdCO2dDQUFBLEFBQ0U7QUFERjtvQkFBQSxBQUNFLEFBQUssQUFDSCwrQkFBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQXVCOzhCQUF2QjtnQ0FBQSxBQUNNO0FBRE47b0JBREosQUFDSSxBQUNNLEFBQUssQUFFWCxnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQXVCOzhCQUF2QjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQzt5QkFBRCxBQUNlLEFBQ1g7K0JBRkosQUFFcUIsQUFDakI7K0JBSEosQUFHcUIsQUFDakI7OEJBSkosQUFJb0IsQUFDaEI7Z0NBTEosQUFLc0IsQUFDbEI7MEJBTkosQUFNZ0I7OzhCQU5oQjtnQ0FESixBQUNJLEFBUUE7QUFSQTtBQUNJLGdDQU9KLEFBQUMsd0NBQWEsVUFBVSxLQUF4QixBQUE2Qjs4QkFBN0I7Z0NBVlIsQUFDSSxBQVNJLEFBRUg7QUFGRztzQkF0QnhCLEFBQ0ksQUFLSSxBQUVJLEFBSUksQUFZSyxBQUFLLEFBTTdCOzs7OztBQXBOaUIsQSxBQXVOdEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibG90dGVyeS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9FdGhlcmV1bS9Xb3JsZHBheS9sb3R0ZXJ5LWNvbnRyYWN0In0=