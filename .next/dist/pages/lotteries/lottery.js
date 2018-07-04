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
                    return _regenerator2.default.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    if (error == null) {
                                        _this.setState({ winningNumber: data, canBuyLottery: false });
                                    }

                                case 1:
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
                        lineNumber: 142
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
                        lineNumber: 148
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
                    lineNumber: 202
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
                    lineNumber: 218
                }
            }, _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 219
                }
            }, _react2.default.createElement(_semanticUiReact.Loader, { size: 'large', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 220
                }
            }, 'Loading')), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 222
                }
            }, 'Lottery Show'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 223
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 224
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 227
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 228
                }
            }, _react2.default.createElement(_EnterForm2.default, {
                address: this.state.lotteryAddress,
                canBuyLottery: this.state.canBuyLottery,
                lotteryValue: this.state.lotteryValue,
                numbers6: this.state.numbers6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 229
                }
            }), _react2.default.createElement(_NumberPicker2.default, { callback: this.numberPickerCallback, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 234
                }
            })), _react2.default.createElement(_PickWinnerForm2.default, {
                address: this.state.lotteryAddress,
                canPickWinner: this.state.canPickWinner,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 236
                }
            }))));
        }
    }]);

    return Lottery;
}(_react.Component);

exports.default = Lottery;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxsb3R0ZXJpZXNcXGxvdHRlcnkuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiR3JpZCIsIkRpbW1lciIsIkxvYWRlciIsIlNlZ21lbnQiLCJUaW1lc3RhbXAiLCJodW1hbml6ZSIsIk51bWJlckZvcm1hdCIsIlJlYWN0SW50ZXJ2YWwiLCJMaW5rIiwiTGF5b3V0IiwibG90dGVyeUF0Iiwid2ViMyIsIndlYjNBdCIsIkVudGVyRm9ybSIsIlBpY2tXaW5uZXJGb3JtIiwiTnVtYmVyUGlja2VyIiwiTG90dGVyeSIsInByb3BzIiwibnVtYmVyUGlja2VyQ2FsbGJhY2siLCJudW1iZXJzNiIsInNldFN0YXRlIiwiaGFuZGxlTG9hZCIsImxvdHRlcnlBZGRyZXNzIiwic2V0RXZlbnRzTGlzdGVuZXJzIiwibG90dGVyeSIsImV2ZW50cyIsIlRpY2tldEJ1eSIsImVycm9yIiwiZGF0YSIsIm1ldGhvZHMiLCJmaW5hbEphY2tQb3QiLCJjYWxsIiwiamFja1BvdCIsImdldE51bWJlck9mUGxheWVycyIsInBsYXllcnNMZW5naHQiLCJXaW5uaW5nTnVtYmVyIiwid2lubmluZ051bWJlciIsImNhbkJ1eUxvdHRlcnkiLCJXaW5uZXJzUmVzdWx0IiwiY29uc29sZSIsImxvZyIsImdldEFsbFdpbm5lcnMiLCJhbGxXaW5uZXJzIiwiaiIsIndpbm5lcnMiLCJnZXRXaW5uZXJzIiwid2lubmVyc1N1bW1hcnkiLCJudW1iZXIiLCJhbGxvY2F0ZWQiLCJwdXNoIiwic2V0TG90dGVyeVZhbHVlcyIsInN0YXRlIiwiZ2V0U3VtbWFyeSIsInN1bW1hcnkiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibG90dGVyeVZhbHVlIiwiZGVhZGxpbmUiLCJsb3R0ZXJ5SGFzUGxheWVkIiwibGFzdExvdGVyeSIsImZhY3RvcnlBZGRyZXNzIiwib3duZXIiLCJ1c2VyQWNjb3VudCIsIkRhdGUiLCJub3ciLCJjYW5QaWNrV2lubmVyIiwibG9hZGluZyIsInVybCIsInF1ZXJ5IiwiYWRkcmVzcyIsIml0ZW1zIiwiaGVhZGVyIiwidXRpbHMiLCJmcm9tV2VpIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJnZXREZWFkbGluZSIsImhyZWYiLCJpIiwicGFyc2VJbnQiLCJhbnMiLCJsYXJnZXN0IiwicmVuZGVyQ2FyZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFNLEFBQVEsQUFBTSxBQUFRLEFBQVE7O0FBQzdDLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFPLEFBQWtCOzs7Ozs7Ozs7SSxBQUduQjtxQ0FFRjs7cUJBQUEsQUFBWSxPQUFPO3FCQUFBOzs0Q0FBQTs7NElBQUEsQUFDVDs7Y0FEUyxBQXNCbkIsdUJBQXVCLFVBQUEsQUFBQyxVQUFhLEFBQ2pDO2tCQUFBLEFBQUssU0FBUyxFQUFDLFVBQWYsQUFBYyxBQUNqQjtBQXhCa0I7O2NBQUEsQUFnRG5CLGFBQWEsVUFBQSxBQUFDLGdCQUFtQixBQUM3QjtBQUVIOztBQW5Ea0I7O2NBQUEsQUFxRG5CLHFCQUFzQixVQUFBLEFBQUMsU0FBWSxBQUMvQjtvQkFBQSxBQUFRLE9BQVIsQUFBZSxVQUFmLEFBQXlCLGdCQUF6QjtvR0FBNkIsaUJBQUEsQUFBTyxPQUFQLEFBQWMsTUFBZDtpQ0FBQTtrRkFBQTtrQ0FBQTs2REFBQTtxQ0FBQTswQ0FDckIsU0FEcUIsQUFDWixPQURZO3dEQUFBO0FBQUE7QUFBQTs7b0RBQUE7MkNBRUMsUUFBQSxBQUFRLFFBQVIs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QTVDLEFBQVksQUFBOEIsQUFBVyxBQUNyRDttQkFBUSxXQUFXLEtBQVosQUFBWSxBQUFLLFFBQWpCLEFBQTBCLElBQUksV0FBQSxBQUFTLE1BQXZDLEFBQTJDLFNBQU8sYUFBekQsQUFBb0UsQUFDdkU7Ozs7aUNBRVEsQUFDTDttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUMseUNBQU8sUUFBVSxLQUFBLEFBQUssTUFBdkIsQUFBNkI7OEJBQTdCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLHlDQUFPLE1BQVIsQUFBYTs4QkFBYjtnQ0FBQTtBQUFBO2VBRlIsQUFDSSxBQUNJLEFBRUosNkJBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSkosQUFJSSxBQUNBLGlDQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBdUI7OEJBQXZCO2dDQUFBLEFBQ007QUFETjtvQkFESixBQUNJLEFBQ00sQUFBSyxBQUVYLGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBdUI7OEJBQXZCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDO3lCQUNZLEtBQUEsQUFBSyxNQURsQixBQUN3QixBQUNwQjsrQkFBaUIsS0FBQSxBQUFLLE1BRjFCLEFBRWdDLEFBQzVCOzhCQUFnQixLQUFBLEFBQUssTUFIekIsQUFHK0IsQUFDM0I7MEJBQVksS0FBQSxBQUFLLE1BSnJCLEFBSTJCOzhCQUozQjtnQ0FESixBQUNJLEFBS0E7QUFMQTtBQUNJLGdDQUlKLEFBQUMsd0NBQWEsVUFBVSxLQUF4QixBQUE2Qjs4QkFBN0I7Z0NBUFIsQUFDSSxBQU1JLEFBRUo7QUFGSTtpQ0FFSixBQUFDO3lCQUNZLEtBQUEsQUFBSyxNQURsQixBQUN3QixBQUNwQjsrQkFBaUIsS0FBQSxBQUFLLE1BRjFCLEFBRWdDOzs4QkFGaEM7Z0NBbkJoQixBQUNJLEFBS0ksQUFJSSxBQVNJLEFBUW5CO0FBUm1CO0FBQ0k7Ozs7O0FBNU5OLEEsQUFzT3RCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImxvdHRlcnkuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovRXRoZXJldW0vV29ybGRwYXkvbG90dGVyeS1jb250cmFjdCJ9