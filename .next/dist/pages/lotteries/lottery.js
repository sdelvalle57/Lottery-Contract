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
            numbers3: []
        }, _this.setLotteryValues = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(lottery) {
                var lotteryAddress, summary, accounts, lotteryValue, deadline, lotteryJackPot, lotteryHasPlayed, owner, timeStarted, canBuyLottery, canPickWinner;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                lotteryAddress = _this.state.lotteryAddress;
                                _context.next = 3;
                                return lottery.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                lotteryValue = summary[0];
                                deadline = summary[1];
                                lotteryJackPot = summary[2];
                                lotteryHasPlayed = summary[7];
                                owner = summary[10];
                                timeStarted = summary[12];
                                canBuyLottery = !lotteryHasPlayed && Date.now() / 1000 - deadline < 0;
                                canPickWinner = !lotteryHasPlayed && Date.now() / 1000 > deadline;

                                _this.setState({ lotteryValue: lotteryValue, deadline: deadline, lotteryJackPot: lotteryJackPot, lotteryHasPlayed: lotteryHasPlayed, owner: owner,
                                    accounts: accounts, canBuyLottery: canBuyLottery, canPickWinner: canPickWinner, loading: false, timeStarted: timeStarted });

                            case 16:
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
            console.log("lt " + number4);
            _this.setState({ number4: number4, numbers3: numbers3 });
        }, _this.setIntervalFunction = function () {
            _this.interval = setInterval(function () {
                _this.isLotteryOpen();
            }, 2000);
        }, _this.setEventsListeners = function (lottery) {
            lottery.events.TicketBuy({}, function () {
                var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(error, data) {
                    var lotteryJackPot;
                    return _regenerator2.default.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    if (error == null) {
                                        lotteryJackPot = data.returnValues.jackPot;

                                        _this.setState({ lotteryJackPot: lotteryJackPot });
                                    }

                                case 1:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, _this2);
                }));

                return function (_x2, _x3) {
                    return _ref3.apply(this, arguments);
                };
            }());
            lottery.events.LotteryHasPlayed({}, function (error, data) {
                if (error == null) {
                    var lotteryHasPlayed = true;
                    var canBuyLottery = false;
                    var canPickWinner = false;
                    _this.setState({ lotteryHasPlayed: lotteryHasPlayed, canPickWinner: canPickWinner, canBuyLottery: canBuyLottery });
                }
            });
        }, _this.isLotteryOpen = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            var _this$state, lotteryHasPlayed, deadline, canBuyLottery, canPickWinner;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _this$state = _this.state, lotteryHasPlayed = _this$state.lotteryHasPlayed, deadline = _this$state.deadline;
                            canBuyLottery = !lotteryHasPlayed && Date.now() / 1000 - deadline < 0;
                            canPickWinner = !lotteryHasPlayed && Date.now() / 1000 > deadline;

                            console.log(lotteryHasPlayed + " " + canBuyLottery + " " + canPickWinner);

                            _this.setState({ canBuyLottery: canBuyLottery, canPickWinner: canPickWinner });

                        case 5:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Lottery, [{
        key: 'componentDidMount',
        value: function () {
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
                var _this3 = this;

                var lotteryAddress, lottery;
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                lotteryAddress = this.props.url.query.lotteryAddress;

                                if (!(typeof window !== 'undefined' && typeof window.web3 !== 'undefined')) {
                                    _context5.next = 8;
                                    break;
                                }

                                lottery = (0, _lottery2.default)(lotteryAddress, _web2.default);
                                _context5.next = 5;
                                return this.setLotteryValues(lottery);

                            case 5:
                                this.setIntervalFunction();
                                _context5.next = 9;
                                break;

                            case 8:
                                window.addEventListener('load', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
                                    var lottery;
                                    return _regenerator2.default.wrap(function _callee4$(_context4) {
                                        while (1) {
                                            switch (_context4.prev = _context4.next) {
                                                case 0:
                                                    lottery = (0, _lottery2.default)(lotteryAddress, _web2.default);
                                                    _context4.next = 3;
                                                    return _this3.setLotteryValues(lottery);

                                                case 3:
                                                    _this3.setIntervalFunction();

                                                case 4:
                                                case 'end':
                                                    return _context4.stop();
                                            }
                                        }
                                    }, _callee4, _this3);
                                })), false);

                            case 9:
                                this.setEventsListeners((0, _lottery2.default)(lotteryAddress, _web3Socket2.default));

                            case 10:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function componentDidMount() {
                return _ref5.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'renderDeadline',
        value: function renderDeadline(deadline, canBuyLottery) {
            var ending = canBuyLottery ? "Ending " : "Ended";
            return _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            }, ending, ' ', _react2.default.createElement(_reactTimestamp2.default, {
                precision: 3,
                autoUpdate: true, time: deadline,
                actualSeconds: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            }));
        }
    }, {
        key: 'renderStartTime',
        value: function renderStartTime(timeStarted) {
            return _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, 'Started on ', _react2.default.createElement(_reactTimestamp2.default, { time: timeStarted, format: 'full', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
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
                    lineNumber: 141
                }
            });
        }
    }, {
        key: 'renderPickWinnerButton',
        value: function renderPickWinnerButton() {
            var _state2 = this.state,
                lotteryAddress = _state2.lotteryAddress,
                canPickWinner = _state2.canPickWinner;

            console.log(lotteryAddress);
            console.log(canPickWinner);
            return;
            _react2.default.createElement(_PickWinnerForm2.default, {
                lotteryAddress: true,
                canPickWinner: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state3 = this.state,
                canPickWinner = _state3.canPickWinner,
                canBuyLottery = _state3.canBuyLottery,
                number4 = _state3.number4;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 158
                }
            }, _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 159
                }
            }, _react2.default.createElement(_semanticUiReact.Loader, { size: 'large', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160
                }
            }, 'Loading')), _react2.default.createElement(_semanticUiReact.Container, { style: { marginTop: '100px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 162
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 163
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 167
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 168
                }
            }, _react2.default.createElement(_EnterForm2.default, {
                number4: true,
                canPickWinner: true,
                canBuyLottery: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 169
                }
            }), _react2.default.createElement(_NumberPicker2.default, { callback: this.numberPickerCallback, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 174
                }
            })), this.renderPickWinnerButton()))));
        }
    }]);

    return Lottery;
}(_react.Component);

exports.default = Lottery;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxsb3R0ZXJpZXNcXGxvdHRlcnkuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiR3JpZCIsIkRpbW1lciIsIkxvYWRlciIsIlNlZ21lbnQiLCJDb250YWluZXIiLCJUaW1lc3RhbXAiLCJMaW5rIiwiTGF5b3V0IiwibG90dGVyeUF0Iiwid2ViMyIsIndlYjNTb2NrZXQiLCJFbnRlckZvcm0iLCJQaWNrV2lubmVyRm9ybSIsIk51bWJlclBpY2tlciIsInJ1bkluVGhpc0NvbnRleHQiLCJMb3R0ZXJ5Iiwic3RhdGUiLCJsb3R0ZXJ5QWRkcmVzcyIsInByb3BzIiwidXJsIiwicXVlcnkiLCJsb3R0ZXJ5VmFsdWUiLCJkZWFkbGluZSIsIkRhdGUiLCJub3ciLCJsb3R0ZXJ5SmFja1BvdCIsImxvdHRlcnlIYXNQbGF5ZWQiLCJvd25lciIsImFjY291bnRzIiwiY2FuQnV5TG90dGVyeSIsImNhblBpY2tXaW5uZXIiLCJsb2FkaW5nIiwidGltZVN0YXJ0ZWQiLCJudW1iZXI0IiwibnVtYmVyczMiLCJzZXRMb3R0ZXJ5VmFsdWVzIiwibG90dGVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJldGgiLCJnZXRBY2NvdW50cyIsInNldFN0YXRlIiwibnVtYmVyUGlja2VyQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwic2V0SW50ZXJ2YWxGdW5jdGlvbiIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJpc0xvdHRlcnlPcGVuIiwic2V0RXZlbnRzTGlzdGVuZXJzIiwiZXZlbnRzIiwiVGlja2V0QnV5IiwiZXJyb3IiLCJkYXRhIiwicmV0dXJuVmFsdWVzIiwiamFja1BvdCIsIkxvdHRlcnlIYXNQbGF5ZWQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZW5kaW5nIiwiaXRlbXMiLCJoZWFkZXIiLCJ1dGlscyIsImZyb21XZWkiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInJlbmRlckRlYWRsaW5lIiwicmVuZGVyU3RhcnRUaW1lIiwibWFyZ2luVG9wIiwicmVuZGVyQ2FyZHMiLCJyZW5kZXJQaWNrV2lubmVyQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFRLEFBQU0sQUFBUSxBQUFRLEFBQVM7O0FBQ3RELEFBQU87Ozs7QUFDUCxBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFTOzs7Ozs7O0ksQUFHSDs7Ozs7Ozs7Ozs7Ozs7O2tOLEFBRUY7NEJBQ29CLE1BQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLE1BRDNCLEFBQ2lDLEFBQ3JDOzBCQUZJLEFBRVUsQUFDZDtzQkFBVSxLQUhOLEFBR00sQUFBSyxBQUNmOzRCQUpJLEFBSVksQUFDaEI7OEJBTEksQUFLYyxBQUNsQjttQkFOSSxBQU1HLEFBQ1A7c0JBUEksQUFPTSxBQUNWOzJCQVJJLEFBUVcsQUFDZjsyQkFUSSxBQVNXLEFBQ2Y7cUJBVkksQUFVSyxBQUNUO3lCQVhJLEFBV1MsQUFDYjtxQkFaSSxBQVlJLEFBQ1I7c0JBYkksQSxBQWFLO0FBYkwsQUFDSixpQixBQStCSjtpR0FBbUIsaUJBQUEsQUFBTyxTQUFQO29KQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNUO0FBRFMsaURBQ1EsTUFBQSxBQUFLLE1BRGIsQUFDbUI7Z0RBRG5CO3VDQUVPLFFBQUEsQUFBUSxRQUFSLEFBQWdCLGFBRnZCLEFBRU8sQUFBNkI7O2lDQUE3QztBQUZTLG1EQUFBO2dEQUFBO3VDQUdRLGNBQUEsQUFBSyxJQUhiLEFBR1EsQUFBUzs7aUNBQTFCO0FBSFMsb0RBSVQ7QUFKUywrQ0FJTSxRQUpOLEFBSU0sQUFBUSxBQUN2QjtBQUxTLDJDQUtFLFFBTEYsQUFLRSxBQUFRLEFBQ25CO0FBTlMsaURBTVEsUUFOUixBQU1RLEFBQVEsQUFDekI7QUFQUyxtREFPVSxRQVBWLEFBT1UsQUFBUSxBQUMzQjtBQVJTLHdDQVFELFFBUkMsQUFRRCxBQUFRLEFBQ2hCO0FBVFMsOENBU0ssUUFUTCxBQVNLLEFBQVEsQUFDdEI7QUFWUyxnREFVTyxDQUFBLEFBQUMsb0JBQW9CLEtBQUEsQUFBSyxRQUFMLEFBQVcsT0FBWCxBQUFrQixXQVY5QyxBQVUwRCxBQUNuRTtBQVhTLGdEQVdPLENBQUEsQUFBQyxvQkFBb0IsS0FBQSxBQUFLLFFBQUwsQUFBVyxPQVh2QyxBQVc4QyxBQUM3RDs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsY0FBRCxjQUFlLFVBQWYsVUFBeUIsZ0JBQXpCLGdCQUF5QyxrQkFBekMsa0JBQTJELE9BQTNELEFBQ1Y7OENBRFUsVUFDQSxlQURBLGVBQ2UsZUFEZixlQUM4QixTQUQ5QixBQUNzQyxPQUFPLGFBYjVDLEFBWWYsQUFBYzs7aUNBWkM7aUNBQUE7Z0RBQUE7O0FBQUE7NEJBQUE7QTs7Ozs7bUIsQUFnQm5CLHVCQUF1QixVQUFBLEFBQUMsU0FBRCxBQUFVLFVBQWEsQUFDMUM7b0JBQUEsQUFBUSxJQUFJLFFBQVosQUFBa0IsQUFDbEI7a0JBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxTQUFVLFVBQXhCLEFBQWMsQUFDakI7QSxpQkFJRCxBLHNCQUFzQixZQUFNLEFBQ3hCO2tCQUFBLEFBQUssdUJBQXVCLFlBQU0sQUFDOUI7c0JBQUEsQUFBSyxBQUNSO0FBRmUsYUFBQSxFQUFoQixBQUFnQixBQUViLEFBQ047QSxpQixBQUVELHFCQUFzQixVQUFBLEFBQUMsU0FBWSxBQUMvQjtvQkFBQSxBQUFRLE9BQVIsQUFBZSxVQUFmLEFBQXlCLGdCQUF6QjtxR0FBNkIsa0JBQUEsQUFBTyxPQUFQLEFBQWMsTUFBZDt3QkFBQTtvRkFBQTtrQ0FBQTsrREFBQTtxQ0FDekI7d0NBQUksU0FBSixBQUFhLE1BQU0sQUFDWDtBQURXLHlEQUNNLEtBQUEsQUFBSyxhQURYLEFBQ3dCLEFBQ3ZDOzs4Q0FBQSxBQUFLLFNBQVMsRUFBRSxnQkFBaEIsQUFBYyxBQUNqQjtBQUp3Qjs7cUNBQUE7cUNBQUE7cURBQUE7O0FBQUE7aUNBQUE7QUFBN0I7OzJDQUFBOzZDQUFBO0FBQUE7QUFNQTtvQkFBQSxBQUFRLE9BQVIsQUFBZSxpQkFBZixBQUFnQyxJQUFJLFVBQUEsQUFBQyxPQUFELEFBQVEsTUFBUyxBQUNqRDtvQkFBRyxTQUFILEFBQVksTUFBTSxBQUNkO3dCQUFNLG1CQUFOLEFBQXlCLEFBQ3pCO3dCQUFNLGdCQUFOLEFBQXNCLEFBQ3RCO3dCQUFNLGdCQUFOLEFBQXNCLEFBQ3RCOzBCQUFBLEFBQUssU0FBUyxFQUFFLGtCQUFGLGtCQUFvQixlQUFwQixlQUFtQyxlQUFqRCxBQUFjLEFBQ2pCO0FBQ0o7QUFQRCxBQVFIO0EsaUIsQUFFRCx5RkFBZ0Isb0JBQUE7d0VBQUE7OzRFQUFBOzBCQUFBO3VEQUFBOzZCQUFBOzBDQUN5QixNQUR6QixBQUM4QixPQUQ5QixBQUNMLCtCQURLLEFBQ0wsa0JBREssQUFDYSx1QkFEYixBQUNhLEFBQ25CO0FBRk0sNENBRVUsQ0FBQSxBQUFDLG9CQUFvQixLQUFBLEFBQUssUUFBTCxBQUFXLE9BQVgsQUFBa0IsV0FGakQsQUFFNkQsQUFDbkU7QUFITSw0Q0FHVSxDQUFBLEFBQUMsb0JBQW9CLEtBQUEsQUFBSyxRQUFMLEFBQVcsT0FIMUMsQUFHaUQsQUFDN0Q7O29DQUFBLEFBQVEsSUFBSSxtQkFBQSxBQUFtQixNQUFuQixBQUF5QixnQkFBekIsQUFBeUMsTUFBckQsQUFBeUQsQUFFekQ7O2tDQUFBLEFBQUssU0FBUyxFQUFDLGVBQUQsZUFBZ0IsZUFObEIsQUFNWixBQUFjOzs2QkFORjs2QkFBQTs2Q0FBQTs7QUFBQTt5QkFBQTtBOzs7Ozs7Ozs7Ozs7O2lDQTdETjtBLGlEQUFpQixLQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxNQUFNLEE7O3NDQUN4QyxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQU8sT0FBUCxBQUFjLFNBQVMsQTs7O0FBQ2xEOztBLDBDQUFVLHVCQUFBLEFBQVUsQUFBZ0IsQTs7dUNBQ3BDLEtBQUEsQUFBSyxpQkFBTCxBQUFzQixBOztpQ0FDNUI7cUNBQUEsQUFBSzs7OztpQ0FFTDt1Q0FBQSxBQUFPLGlCQUFQLEFBQXdCLGlGQUFRLG9CQUFBO3dDQUFBO29HQUFBO2tEQUFBOytFQUFBO3FEQUN0QjtBQURzQiw4REFDWix1QkFEWSxBQUNaLEFBQVUsQUFBZ0I7cUVBRGQ7MkRBRXRCLE9BQUEsQUFBSyxpQkFGaUIsQUFFdEIsQUFBc0I7O3FEQUM1QjsyREFINEIsQUFHNUIsQUFBSzs7cURBSHVCO3FEQUFBO3FFQUFBOztBQUFBO2lEQUFBO0FBQWhDLHFDQUFBLEFBSUc7O2lDQUVQO3FDQUFBLEFBQUssbUJBQW1CLHVCQUF4QixBQUF3QixBQUFVLEFBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUMsQUE0RHZDLFUsQUFBVSxlQUFlLEFBQ3BDO2dCQUFNLFNBQVMsZ0JBQUEsQUFBZ0IsWUFBL0IsQUFBMEMsQUFDMUM7bUNBQU8sY0FBQTs7OEJBQUE7Z0NBQUEsQUFBSTtBQUFKO0FBQUEsYUFBQSxFQUFBLFFBQVkscUJBQUEsQUFBQzsyQkFBRCxBQUNJLEFBQ1g7NEJBRk8sTUFFSSxNQUZKLEFBRVUsQUFDakI7K0JBSE87OEJBQUE7Z0NBQW5CLEFBQU8sQUFBWSxBQUl0QjtBQUpzQjtBQUNQOzs7O3dDLEFBS0EsYUFBYSxBQUN6QjttQ0FBTyxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsYUFBQSxFQUFjLCtCQUFBLEFBQUMsMENBQVUsTUFBWCxBQUFpQixhQUFhLFFBQTlCLEFBQXFDOzhCQUFyQztnQ0FBckIsQUFBTyxBQUFjLEFBQ3hCO0FBRHdCOzs7OztzQ0FHWDt5QkFDaUUsS0FEakUsQUFDc0U7Z0JBRHRFLEFBQ0wsc0JBREssQUFDTDtnQkFESyxBQUNTLGtCQURULEFBQ1M7Z0JBRFQsQUFDbUIsd0JBRG5CLEFBQ21CO2dCQURuQixBQUNtQyxxQkFEbkMsQUFDbUM7Z0JBRG5DLEFBQ2dELHVCQURoRCxBQUNnRCxBQUMxRDs7Z0JBQU0sZ0JBQWdCLGdCQUFBLEFBQWUsU0FBckMsQUFBNkMsQUFDN0M7Z0JBQU07d0JBRVUsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLEtBQUEsQUFBSyxNQUF4QixBQUE4QixjQUE5QixBQUE0QyxXQUR4RCxBQUNtRSxBQUMvRDtzQkFGSixBQUVVLEFBQ047NkJBSEosQUFHaUIsQUFDYjt1QkFBTyxFQUFFLGNBTEgsQUFDVixBQUlXLEFBQWdCO0FBSjNCLEFBQ0ksYUFGTTt3QkFRRSxnQkFEWixBQUMwQixBQUN0QjtzQkFBTyxLQUFBLEFBQUssZUFBTCxBQUFvQixVQUYvQixBQUVXLEFBQThCLEFBQ3JDOzZCQUFhLEtBQUEsQUFBSyxnQkFIdEIsQUFHaUIsQUFBcUIsQUFDbEM7dUJBQU8sRUFBRSxjQVhILEFBT1YsQUFJVyxBQUFnQjtBQUozQixBQUNJO3dCQU1RLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixnQkFBbkIsQUFBbUMsV0FEL0MsQUFDMEQsQUFDdEQ7c0JBRkosQUFFVSxBQUNOOzZCQUhKLEFBR2lCLEFBQ2I7dUJBQU8sRUFBRSxjQWpCakIsQUFBYyxBQWFWLEFBSVcsQUFBZ0IsQUFHL0I7QUFQSSxBQUNJO2lEQU1ELEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBb0I7OEJBQXBCO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aURBR2M7MEJBQ21CLEtBRG5CLEFBQ3dCO2dCQUR4QixBQUNkLHlCQURjLEFBQ2Q7Z0JBRGMsQUFDRSx3QkFERixBQUNFLEFBQ3ZCOztvQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO29CQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7QUFDSTs0QkFBQSxBQUFDO2dDQUFELEFBRUk7K0JBRko7OzhCQUFBO2dDQUFBLEFBSVA7QUFKTztBQUNJOzs7O2lDQUtIOzBCQUMyQyxLQUQzQyxBQUNnRDtnQkFEaEQsQUFDRSx3QkFERixBQUNFO2dCQURGLEFBQ2lCLHdCQURqQixBQUNpQjtnQkFEakIsQUFDZ0Msa0JBRGhDLEFBQ2dDLEFBQ3JDOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUMseUNBQU8sUUFBVSxLQUFBLEFBQUssTUFBdkIsQUFBNkI7OEJBQTdCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLHlDQUFPLE1BQVIsQUFBYTs4QkFBYjtnQ0FBQTtBQUFBO2VBRlIsQUFDSSxBQUNJLEFBRUosNkJBQUEsQUFBQyw0Q0FBVSxPQUFPLEVBQUMsV0FBbkIsQUFBa0IsQUFBVzs4QkFBN0I7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBdUI7OEJBQXZCO2dDQUFBLEFBQ007QUFETjtvQkFESixBQUNJLEFBQ00sQUFBSyxBQUVYLGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBdUI7OEJBQXZCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDO3lCQUFELEFBRUk7K0JBRkosQUFHSTsrQkFISjs7OEJBQUE7Z0NBREosQUFDSSxBQUtBO0FBTEE7QUFDSSxnQ0FJSixBQUFDLHdDQUFhLFVBQVUsS0FBeEIsQUFBNkI7OEJBQTdCO2dDQVBSLEFBQ0ksQUFNSSxBQUVIO0FBRkc7c0JBakJ4QixBQUNJLEFBSUksQUFDSSxBQUlJLEFBU0ssQUFBSyxBQU03Qjs7Ozs7QUF2S2lCLEEsQUEwS3RCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImxvdHRlcnkuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovRXRoZXJldW0vV29ybGRwYXkvbG90dGVyeS1jb250cmFjdCJ9