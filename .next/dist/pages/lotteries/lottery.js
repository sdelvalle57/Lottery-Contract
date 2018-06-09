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

var _reactMoment = require('react-moment');

var _reactMoment2 = _interopRequireDefault(_reactMoment);

var _humanizeDuration = require('humanize-duration');

var _humanizeDuration2 = _interopRequireDefault(_humanizeDuration);

var _reactNumberFormat = require('react-number-format');

var _reactNumberFormat2 = _interopRequireDefault(_reactNumberFormat);

var _reactInterval = require('react-interval');

var _reactInterval2 = _interopRequireDefault(_reactInterval);

var _routes = require('../../routes');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _lottery = require('../../ethereum/lottery');

var _lottery2 = _interopRequireDefault(_lottery);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _web3At = require('../../ethereum/web3At');

var _web3At2 = _interopRequireDefault(_web3At);

var _EnterForm = require('../../components/EnterForm');

var _EnterForm2 = _interopRequireDefault(_EnterForm);

var _PickWinnerForm = require('../../components/PickWinnerForm');

var _PickWinnerForm2 = _interopRequireDefault(_PickWinnerForm);

var _NumberPicker = require('../../components/NumberPicker');

var _NumberPicker2 = _interopRequireDefault(_NumberPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Ethereum\\Worldpay\\lottery-contract\\pages\\lotteries\\lottery.js?entry';


var Lottery = function (_Component) {
    (0, _inherits3.default)(Lottery, _Component);

    function Lottery(props) {
        var _this2 = this;

        (0, _classCallCheck3.default)(this, Lottery);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Lottery.__proto__ || (0, _getPrototypeOf2.default)(Lottery)).call(this, props));

        _this.numberPickerCallback = function (numbers6) {
            _this.setState({ numbers6: numbers6 });
        };

        _this.handleLoad = function (lotteryAddress) {
            //const lottery = lotteryAt(lotteryAddress, web3At(window));

        };

        _this.setEventsListeners = function (lottery) {
            lottery.events.TicketBuy({}, function () {
                var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(error, data) {
                    var jackPot, playersLenght;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (!(error == null)) {
                                        _context.next = 8;
                                        break;
                                    }

                                    _context.next = 3;
                                    return lottery.methods.finalJackPot().call();

                                case 3:
                                    jackPot = _context.sent;
                                    _context.next = 6;
                                    return lottery.methods.getNumberOfPlayers().call();

                                case 6:
                                    playersLenght = _context.sent;

                                    _this.setState({ jackPot: jackPot, playersLenght: playersLenght });

                                case 8:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2);
                }));

                return function (_x, _x2) {
                    return _ref.apply(this, arguments);
                };
            }());
            lottery.events.WinningNumber({}, function () {
                var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(error, data) {
                    var winningNumber;
                    return _regenerator2.default.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    if (!(error == null)) {
                                        _context2.next = 5;
                                        break;
                                    }

                                    _context2.next = 3;
                                    return lottery.methods.winningNumber().call();

                                case 3:
                                    winningNumber = _context2.sent;

                                    _this.setState({ winningNumber: winningNumber, canBuyLottery: false });

                                case 5:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, _this2);
                }));

                return function (_x3, _x4) {
                    return _ref2.apply(this, arguments);
                };
            }());
            lottery.events.WinnersResult({}, function () {
                var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(error, data) {
                    var allWinners;
                    return _regenerator2.default.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    if (!(error == null)) {
                                        _context3.next = 6;
                                        break;
                                    }

                                    console.log("event winners");
                                    _context3.next = 4;
                                    return _this.getAllWinners(lottery);

                                case 4:
                                    allWinners = _context3.sent;

                                    _this.setState({ canBuyLottery: false, allWinners: allWinners });

                                case 6:
                                case 'end':
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, _this2);
                }));

                return function (_x5, _x6) {
                    return _ref3.apply(this, arguments);
                };
            }());
        };

        _this.getAllWinners = function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(lottery) {
                var allWinners, j, winners, winnersSummary;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                allWinners = [];
                                j = 3;

                            case 2:
                                if (!(j <= 6)) {
                                    _context4.next = 13;
                                    break;
                                }

                                winners = {};
                                _context4.next = 6;
                                return lottery.methods.getWinners(j).call();

                            case 6:
                                winnersSummary = _context4.sent;

                                winners.number = winnersSummary[0];
                                winners.allocated = winnersSummary[1];
                                allWinners.push(winners);

                            case 10:
                                j++;
                                _context4.next = 2;
                                break;

                            case 13:
                                return _context4.abrupt('return', allWinners);

                            case 14:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, _this2);
            }));

            return function (_x7) {
                return _ref4.apply(this, arguments);
            };
        }();

        _this.setLotteryValues = function () {
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(lottery) {
                var lotteryAddress, summary, accounts, lotteryValue, deadline, jackPot, playersLenght, lotteryHasPlayed, lastLotery, factoryAddress, owner, winningNumber, userAccount, canBuyLottery, canPickWinner, allWinners;
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                lotteryAddress = _this.state.lotteryAddress;
                                _context5.next = 3;
                                return lottery.methods.getSummary().call();

                            case 3:
                                summary = _context5.sent;
                                _context5.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context5.sent;
                                lotteryValue = summary[0];
                                deadline = summary[1];
                                jackPot = summary[2];
                                playersLenght = summary[3];
                                lotteryHasPlayed = summary[4];
                                lastLotery = summary[5];
                                factoryAddress = summary[6];
                                owner = summary[7];
                                winningNumber = summary[8];
                                userAccount = accounts[0];
                                canBuyLottery = !lotteryHasPlayed && deadline - Date.now() / 1000 > 0;
                                canPickWinner = !lotteryHasPlayed && deadline - Date.now() / 1000 < 0;
                                _context5.next = 21;
                                return _this.getAllWinners(lottery);

                            case 21:
                                allWinners = _context5.sent;

                                _this.setState({ lotteryValue: lotteryValue, deadline: deadline, jackPot: jackPot, winningNumber: winningNumber,
                                    playersLenght: playersLenght, lotteryHasPlayed: lotteryHasPlayed, lastLotery: lastLotery, factoryAddress: factoryAddress,
                                    owner: owner, userAccount: userAccount, canBuyLottery: canBuyLottery, canPickWinner: canPickWinner, loading: false,
                                    allWinners: allWinners });

                            case 23:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, _this2);
            }));

            return function (_x8) {
                return _ref5.apply(this, arguments);
            };
        }();

        _this.state = {
            lotteryAddress: props.url.query.address,
            lotteryValue: '',
            deadline: '',
            jackPot: '',
            winningNumber: '',
            playersLenght: '',
            lotteryHasPlayed: '',
            lastLotery: '',
            factoryAddress: '',
            owner: '',
            userAccount: '',
            canBuyLottery: '',
            canPickWinner: '',
            loading: true,
            numbers6: '',
            allWinners: []
        };
        return _this;
    }

    (0, _createClass3.default)(Lottery, [{
        key: 'componentDidMount',
        value: function () {
            var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
                var lotteryAddress, lottery;
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                lotteryAddress = this.props.url.query.address;
                                /*
                                window.addEventListener('load', () => {
                                    this.handleLoad(lotteryAddress);
                                }, false);
                                */

                                lottery = (0, _lottery2.default)(lotteryAddress, _web2.default);

                                this.setLotteryValues(lottery);
                                this.setEventsListeners(lottery);

                            /*
                            web3.eth.subscribe('logs', {
                                 address: '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0',  // EOS token is popular atm.
                                 topics: [], // A token transfer log would be good for now.
                               }, function (err, result) {
                                 if (err) throw err
                                 console.log('Success!', result)
                               })
                               */

                            case 4:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function componentDidMount() {
                return _ref6.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'renderCards',
        value: function renderCards() {

            var items = [{
                header: _web2.default.utils.fromWei(this.state.lotteryValue, 'ether') + " Ether",
                meta: 'We accept just Ether as payment',
                description: 'This is the value of each ticket to enter the Lottery',
                style: { overflowWrap: 'break-word' }
            }, {
                header: _react2.default.createElement(_reactMoment2.default, { interval: 1000, to: Date.now(), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 143
                    }
                }, this.state.deadline),
                meta: 'Lottery selling ' + this.getDeadline(this.state.deadline),
                description: 'We sale tickets untils this date',
                style: { overflowWrap: 'break-word' }
            }, {
                header: _react2.default.createElement(_reactNumberFormat2.default, {
                    value: _web2.default.utils.fromWei(this.state.jackPot, 'ether') + " Ether",
                    displayType: 'text',
                    thousandSeparator: true,
                    decimalScale: 5, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 149
                    }
                }),
                meta: 'Lottery Jackpot',
                description: 'This jackpot will be release to the winners',
                style: { overflowWrap: 'break-word' }
            }, {
                header: this.state.playersLenght,
                meta: 'Participants',
                description: 'Number of tickets sold',
                style: { overflowWrap: 'break-word' }
            }, {
                header: this.state.winningNumber,
                meta: 'And the winner is...',
                description: 'This is the lottery winner number',
                style: { overflowWrap: 'break-word' }
            }, {
                href: '/lotteries/' + this.state.lastLotery,
                header: this.state.lastLotery,
                meta: 'Address of previous lottery',
                style: { overflowWrap: 'break-word' }
            }, {
                header: "Winners who scored 3 numbers",
                description: this.state.allWinners[0] != null ? _web2.default.utils.fromWei(this.state.allWinners[0].allocated, 'ether') + " Ether Prize" : "0",
                meta: this.state.allWinners[0] != null ? this.state.allWinners[0].number + " winners" : "0 winners"
            }, {
                header: "Winners who scored 4 numbers",
                description: this.state.allWinners[1] != null ? _web2.default.utils.fromWei(this.state.allWinners[1].allocated, 'ether') + " Ether Prize" : "0",
                meta: this.state.allWinners[1] != null ? this.state.allWinners[1].number + " winners" : "0 winners"
            }, {
                header: "Winners who scored 5 numbers",
                description: this.state.allWinners[2] != null ? _web2.default.utils.fromWei(this.state.allWinners[2].allocated, 'ether') + " Ether Prize" : "0",
                meta: this.state.allWinners[2] != null ? this.state.allWinners[2].number + " winners" : "0 winners"
            }, {
                header: "Winners who scored 6 numbers",
                description: this.state.allWinners[3] != null ? _web2.default.utils.fromWei(this.state.allWinners[3].allocated, 'ether') + " Ether Prize" : "0",
                meta: this.state.allWinners[3] != null ? this.state.allWinners[3].number + " winners" : "0 winners"
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 203
                }
            });
        }
    }, {
        key: 'getNumberOfPlayers',
        value: function getNumberOfPlayers(i) {
            return this.state.allWinners[i]['number'];
        }
    }, {
        key: 'getDeadline',
        value: function getDeadline(deadline) {
            deadline = parseInt(deadline * 1000);
            var ans = (0, _humanizeDuration2.default)(deadline - Date.now(), { largest: 2 });
            return deadline - Date.now() < 0 ? 'ended ' + ans + ' ago' : 'ends in ' + ans;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 219
                }
            }, _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 220
                }
            }, _react2.default.createElement(_semanticUiReact.Loader, { size: 'large', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 221
                }
            }, 'Loading')), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 223
                }
            }, 'Lottery Show'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 224
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 225
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 228
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 229
                }
            }, _react2.default.createElement(_EnterForm2.default, {
                address: this.state.lotteryAddress,
                canBuyLottery: this.state.canBuyLottery,
                lotteryValue: this.state.lotteryValue,
                numbers6: this.state.numbers6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 230
                }
            }), _react2.default.createElement(_NumberPicker2.default, { callback: this.numberPickerCallback, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 235
                }
            })), _react2.default.createElement(_PickWinnerForm2.default, {
                address: this.state.lotteryAddress,
                canPickWinner: this.state.canPickWinner,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 237
                }
            }))));
        }
    }]);

    return Lottery;
}(_react.Component);

exports.default = Lottery;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxsb3R0ZXJpZXNcXGxvdHRlcnkuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiR3JpZCIsIkRpbW1lciIsIkxvYWRlciIsIlNlZ21lbnQiLCJUaW1lc3RhbXAiLCJodW1hbml6ZSIsIk51bWJlckZvcm1hdCIsIlJlYWN0SW50ZXJ2YWwiLCJMaW5rIiwiTGF5b3V0IiwibG90dGVyeUF0Iiwid2ViMyIsIndlYjNBdCIsIkVudGVyRm9ybSIsIlBpY2tXaW5uZXJGb3JtIiwiTnVtYmVyUGlja2VyIiwiTG90dGVyeSIsInByb3BzIiwibnVtYmVyUGlja2VyQ2FsbGJhY2siLCJudW1iZXJzNiIsInNldFN0YXRlIiwiaGFuZGxlTG9hZCIsImxvdHRlcnlBZGRyZXNzIiwic2V0RXZlbnRzTGlzdGVuZXJzIiwibG90dGVyeSIsImV2ZW50cyIsIlRpY2tldEJ1eSIsImVycm9yIiwiZGF0YSIsIm1ldGhvZHMiLCJmaW5hbEphY2tQb3QiLCJjYWxsIiwiamFja1BvdCIsImdldE51bWJlck9mUGxheWVycyIsInBsYXllcnNMZW5naHQiLCJXaW5uaW5nTnVtYmVyIiwid2lubmluZ051bWJlciIsImNhbkJ1eUxvdHRlcnkiLCJXaW5uZXJzUmVzdWx0IiwiY29uc29sZSIsImxvZyIsImdldEFsbFdpbm5lcnMiLCJhbGxXaW5uZXJzIiwiaiIsIndpbm5lcnMiLCJnZXRXaW5uZXJzIiwid2lubmVyc1N1bW1hcnkiLCJudW1iZXIiLCJhbGxvY2F0ZWQiLCJwdXNoIiwic2V0TG90dGVyeVZhbHVlcyIsInN0YXRlIiwiZ2V0U3VtbWFyeSIsInN1bW1hcnkiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibG90dGVyeVZhbHVlIiwiZGVhZGxpbmUiLCJsb3R0ZXJ5SGFzUGxheWVkIiwibGFzdExvdGVyeSIsImZhY3RvcnlBZGRyZXNzIiwib3duZXIiLCJ1c2VyQWNjb3VudCIsIkRhdGUiLCJub3ciLCJjYW5QaWNrV2lubmVyIiwibG9hZGluZyIsInVybCIsInF1ZXJ5IiwiYWRkcmVzcyIsIml0ZW1zIiwiaGVhZGVyIiwidXRpbHMiLCJmcm9tV2VpIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJnZXREZWFkbGluZSIsImhyZWYiLCJpIiwicGFyc2VJbnQiLCJhbnMiLCJsYXJnZXN0IiwicmVuZGVyQ2FyZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFNLEFBQVEsQUFBTSxBQUFRLEFBQVE7O0FBQzdDLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFPLEFBQWtCOzs7Ozs7Ozs7SUFHbkIsQTtxQ0FFRjs7cUJBQUEsQUFBWSxPQUFPO3FCQUFBOzs0Q0FBQTs7NElBQUEsQUFDVDs7Y0FEUyxBQXNCbkIsdUJBQXVCLFVBQUEsQUFBQyxVQUFhLEFBQ2pDO2tCQUFBLEFBQUssU0FBUyxFQUFDLFVBQWYsQUFBYyxBQUNqQjtBQXhCa0I7O2NBQUEsQUFnRG5CLGFBQWEsVUFBQSxBQUFDLGdCQUFtQixBQUM3QjtBQUVIOztBQW5Ea0I7O2NBQUEsQUFxRG5CLHFCQUFzQixVQUFBLEFBQUMsU0FBWSxBQUMvQjtvQkFBQSxBQUFRLE9BQVIsQUFBZSxVQUFmLEFBQXlCLGdCQUF6QjtvR0FBNkIsaUJBQUEsQUFBTyxPQUFQLEFBQWMsTUFBZDtpQ0FBQTtrRkFBQTtrQ0FBQTs2REFBQTtxQ0FBQTswQ0FDckIsU0FEcUIsQUFDWixPQURZO3dEQUFBO0FBQUE7QUFBQTs7b0RBQUE7MkNBRUMsUUFBQSxBQUFRLFFBQVIs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Q2xCO3VCQUFXLFNBQVMsV0FBcEIsQUFBVyxBQUFrQixBQUM3QjtnQkFBTSxNQUFNLGdDQUFTLFdBQVMsS0FBbEIsQUFBa0IsQUFBSyxPQUFPLEVBQUUsU0FBNUMsQUFBWSxBQUE4QixBQUFXLEFBQ3JEO21CQUFRLFdBQVcsS0FBWixBQUFZLEFBQUssUUFBakIsQUFBMEIsSUFBSSxXQUFBLEFBQVMsTUFBdkMsQUFBMkMsU0FBTyxhQUF6RCxBQUFvRSxBQUN2RTs7OztpQ0FFUSxBQUNMO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksQUFBQyx5Q0FBTyxRQUFVLEtBQUEsQUFBSyxNQUF2QixBQUE2Qjs4QkFBN0I7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMseUNBQU8sTUFBUixBQUFhOzhCQUFiO2dDQUFBO0FBQUE7ZUFGUixBQUNJLEFBQ0ksQUFFSiw2QkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFKSixBQUlJLEFBQ0EsaUNBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUF1Qjs4QkFBdkI7Z0NBQUEsQUFDTTtBQUROO29CQURKLEFBQ0ksQUFDTSxBQUFLLEFBRVgsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUF1Qjs4QkFBdkI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUM7eUJBQ1ksS0FBQSxBQUFLLE1BRGxCLEFBQ3dCLEFBQ3BCOytCQUFpQixLQUFBLEFBQUssTUFGMUIsQUFFZ0MsQUFDNUI7OEJBQWdCLEtBQUEsQUFBSyxNQUh6QixBQUcrQixBQUMzQjswQkFBWSxLQUFBLEFBQUssTUFKckIsQUFJMkI7OEJBSjNCO2dDQURKLEFBQ0ksQUFLQTtBQUxBO0FBQ0ksZ0NBSUosQUFBQyx3Q0FBYSxVQUFVLEtBQXhCLEFBQTZCOzhCQUE3QjtnQ0FQUixBQUNJLEFBTUksQUFFSjtBQUZJO2lDQUVKLEFBQUM7eUJBQ1ksS0FBQSxBQUFLLE1BRGxCLEFBQ3dCLEFBQ3BCOytCQUFpQixLQUFBLEFBQUssTUFGMUIsQUFFZ0M7OzhCQUZoQztnQ0FuQmhCLEFBQ0ksQUFLSSxBQUlJLEFBU0ksQUFRbkI7QUFSbUI7QUFDSTs7Ozs7QUE3Tk4sQSxBQXVPdEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibG90dGVyeS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9FdGhlcmV1bS9Xb3JsZHBheS9sb3R0ZXJ5LWNvbnRyYWN0In0=