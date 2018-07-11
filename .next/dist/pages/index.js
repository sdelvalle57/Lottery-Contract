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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _HeaderIndex = require('../components/HeaderIndex');

var _HeaderIndex2 = _interopRequireDefault(_HeaderIndex);

var _LotteryPlayedModal = require('../components/LotteryPlayedModal');

var _LotteryPlayedModal2 = _interopRequireDefault(_LotteryPlayedModal);

var _routes = require('../routes');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _web3Socket = require('../ethereum/web3Socket');

var _web3Socket2 = _interopRequireDefault(_web3Socket);

var _lottery = require('../ethereum/lottery');

var _lottery2 = _interopRequireDefault(_lottery);

var _vm = require('vm');

var _CardIndex = require('../components/CardIndex');

var _CardIndex2 = _interopRequireDefault(_CardIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Ethereum\\Worldpay\\lottery-contract\\pages\\index.js?entry';


var LotteryIndex = function (_Component) {
    (0, _inherits3.default)(LotteryIndex, _Component);

    function LotteryIndex() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, LotteryIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LotteryIndex.__proto__ || (0, _getPrototypeOf2.default)(LotteryIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            lotteryJackPot: _this.props.lotteryJackPot,
            numOfPlayers: _this.props.numOfPlayers,
            accounts: [],
            lotteryHasPlayed: false,
            winningNumber: _this.props.winningNumber,
            numOfWinners: _this.props.numOfWinners,
            prize: _this.props.prize,
            finalJackPot: _this.props.finalJackPot,
            lotteryPrice: _this.props.lotteryPrice,
            deadline: _this.props.deadline,
            lottery: '',
            numOfLotteries: _this.props.numOfLotteries,
            timeStarted: _this.props.timeStarted,
            lotteryAddress: _this.props.lotteryAddress
        }, _this.setFactoryEventsListeners = function (lotteryFactory) {
            _this.LotteryDeployedEvent = lotteryFactory.events.LotteryDeployed({}, function () {
                var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(error, data) {
                    var lotteryAddress, lottery, summary, lotteries, numOfLotteries, lotteryPrice, deadline, lotteryJackPot, numOfPlayers, prize, numOfWinners, finalJackPot, winningNumber, lotteryHasPlayed, timeStarted;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (!(error == null)) {
                                        _context.next = 26;
                                        break;
                                    }

                                    lotteryAddress = data.returnValues.deployedLottery;
                                    lottery = (0, _lottery2.default)(lotteryAddress, _web3Socket2.default);
                                    _context.next = 5;
                                    return lottery.methods.getSummary().call();

                                case 5:
                                    summary = _context.sent;
                                    _context.next = 8;
                                    return lotteryFactory.methods.getLotteries().call();

                                case 8:
                                    lotteries = _context.sent;
                                    numOfLotteries = lotteries.length;
                                    lotteryPrice = summary[0];
                                    deadline = summary[1];
                                    lotteryJackPot = summary[2];
                                    numOfPlayers = summary[3];
                                    prize = summary[4];
                                    numOfWinners = summary[5];
                                    finalJackPot = summary[6];
                                    winningNumber = summary[11];
                                    lotteryHasPlayed = summary[7];
                                    timeStarted = summary[12];

                                    lotteryPrice = _web2.default.utils.fromWei(lotteryPrice, 'ether');
                                    lotteryJackPot = _web2.default.utils.fromWei(lotteryJackPot, 'ether');
                                    finalJackPot = _web2.default.utils.fromWei(finalJackPot, 'ether');
                                    prize = _web2.default.utils.fromWei(prize, 'ether');
                                    _this.setEventsListeners(lottery);
                                    _this.setState({ lotteryJackPot: lotteryJackPot, numOfPlayers: numOfPlayers, lotteryHasPlayed: lotteryHasPlayed, winningNumber: winningNumber,
                                        numOfWinners: numOfWinners, prize: prize, finalJackPot: finalJackPot, lotteryPrice: lotteryPrice, deadline: deadline, numOfLotteries: numOfLotteries,
                                        timeStarted: timeStarted, lotteryAddress: lotteryAddress });

                                case 26:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2);
                }));

                return function (_x, _x2) {
                    return _ref2.apply(this, arguments);
                };
            }());
        }, _this.setEventsListeners = function (lottery) {
            _this.TicketBuyEvent = lottery.events.TicketBuy({}, function () {
                var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(error, data) {
                    var lotteryJackPot, numOfPlayers;
                    return _regenerator2.default.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    if (error == null) {
                                        lotteryJackPot = data.returnValues.jackPot;

                                        lotteryJackPot = _web2.default.utils.fromWei(lotteryJackPot, 'ether');
                                        numOfPlayers = data.returnValues.numOfPlayers;

                                        _this.setState({ lotteryJackPot: lotteryJackPot, numOfPlayers: numOfPlayers });
                                    }

                                case 1:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, _this2);
                }));

                return function (_x3, _x4) {
                    return _ref3.apply(this, arguments);
                };
            }());

            _this.LotteryHasPlayedEvent = lottery.events.LotteryHasPlayed({}, function () {
                var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(error, data) {
                    var numOfWinners, winningNumber, prize, finalJackPot;
                    return _regenerator2.default.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    if (error == null) {
                                        numOfWinners = data.returnValues.numOfWinners;
                                        winningNumber = data.returnValues.winningNumber;
                                        prize = data.returnValues.prize;
                                        finalJackPot = data.returnValues.finalJackPot;

                                        prize = _web2.default.utils.fromWei(prize, 'ether');
                                        finalJackPot = _web2.default.utils.fromWei(finalJackPot, 'ether');
                                        _this.setState({ lotteryHasPlayed: true, numOfWinners: numOfWinners,
                                            winningNumber: winningNumber, prize: prize, finalJackPot: finalJackPot });
                                    }

                                case 1:
                                case 'end':
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, _this2);
                }));

                return function (_x5, _x6) {
                    return _ref4.apply(this, arguments);
                };
            }());
        }, _this.setWindowListener = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
            var accounts;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            if (!(typeof window !== 'undefined' && typeof window.web3 !== 'undefined')) {
                                _context5.next = 6;
                                break;
                            }

                            _context5.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context5.sent;
                            _context5.next = 7;
                            break;

                        case 6:
                            window.addEventListener('load', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
                                var accounts;
                                return _regenerator2.default.wrap(function _callee4$(_context4) {
                                    while (1) {
                                        switch (_context4.prev = _context4.next) {
                                            case 0:
                                                _context4.next = 2;
                                                return _web2.default.eth.getAccounts();

                                            case 2:
                                                accounts = _context4.sent;

                                                _this.setIntervalFunction();

                                            case 4:
                                            case 'end':
                                                return _context4.stop();
                                        }
                                    }
                                }, _callee4, _this2);
                            })), false);

                        case 7:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(LotteryIndex, [{
        key: 'componentDidMount',
        value: function () {
            var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
                var lottery, lotteryFactory, lotteryHasPlayed, accounts;
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                lottery = (0, _lottery2.default)(this.props.lotteryAddress, _web3Socket2.default);
                                lotteryFactory = (0, _factory2.default)(this.props.factoryAddress, _web3Socket2.default);
                                _context6.next = 4;
                                return lottery.methods.lotteryHasPlayed().call();

                            case 4:
                                lotteryHasPlayed = _context6.sent;

                                this.setFactoryEventsListeners(lotteryFactory);
                                this.setEventsListeners(lottery, lotteryFactory);

                                if (!(typeof window !== 'undefined' && typeof window.web3 !== 'undefined')) {
                                    _context6.next = 14;
                                    break;
                                }

                                _context6.next = 10;
                                return _web2.default.eth.getAccounts();

                            case 10:
                                accounts = _context6.sent;

                                this.setState({ accounts: accounts });
                                _context6.next = 15;
                                break;

                            case 14:
                                this.setWindowListener();

                            case 15:
                                this.setState({ lotteryHasPlayed: lotteryHasPlayed, lottery: lottery });

                            case 16:
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
            this.TicketBuyEvent.unsubscribe();
            this.LotteryHasPlayedEvent.unsubscribe();
            this.LotteryDeployedEvent.unsubscribe();
        }
    }, {
        key: 'renderLotteries',
        value: function renderLotteries() {
            var items = this.props.lotteries.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: '/lotteries/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 168
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 169
                        }
                    }, 'View Lottery')),
                    fluid: true
                };
            });
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 175
                }
            });
        }
    }, {
        key: 'renderAdmin',
        value: function renderAdmin() {
            var _state = this.state,
                accounts = _state.accounts,
                lotteryHasPlayed = _state.lotteryHasPlayed;

            if (accounts.length > 0 && this.props.owner.toString() == accounts[0].toString() && lotteryHasPlayed) {
                return _react2.default.createElement(_semanticUiReact.Container, { style: { marginTop: '100px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 184
                    }
                }, _react2.default.createElement(_routes.Link, { route: '/lotteries/new/' + this.props.factoryAddress, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 185
                    }
                }, _react2.default.createElement('a', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 186
                    }
                }, _react2.default.createElement(_semanticUiReact.Button, {
                    floated: 'left',
                    content: 'Deploy Lottery',
                    icon: 'add',
                    primary: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 187
                    }
                }))));
            } else return null;
        }
    }, {
        key: 'renderIndex',
        value: function renderIndex() {
            return _react2.default.createElement(_HeaderIndex2.default, {
                lotteryPrice: this.state.lotteryPrice,
                lotteryJackPot: this.state.lotteryJackPot,
                deadline: this.state.deadline,
                numOfPlayers: this.state.numOfPlayers,
                lotteryHasPlayed: this.state.lotteryHasPlayed, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 200
                }
            });
        }
    }, {
        key: 'renderModal',
        value: function renderModal() {
            if (this.state.lotteryHasPlayed) {
                return _react2.default.createElement(_LotteryPlayedModal2.default, {
                    lotteryHasPlayed: this.state.lotteryHasPlayed,
                    numOfWinners: this.state.numOfWinners,
                    winningNumber: this.state.winningNumber,
                    prize: this.state.prize,
                    finalJackPot: this.state.finalJackPot,
                    showMessage: true,
                    winnersPaid: true,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 210
                    }
                });
            }
            return null;
        }
    }, {
        key: 'renderCardIndex',
        value: function renderCardIndex() {
            if (this.state.numOfLotteries > 0) {
                return _react2.default.createElement(_CardIndex2.default, {
                    lotteryPrice: this.state.lotteryPrice,
                    lotteryJackPot: this.state.lotteryJackPot,
                    deadline: this.state.deadline,
                    numOfPlayers: this.state.numOfPlayers,
                    lotteryHasPlayed: this.state.lotteryHasPlayed,
                    numOfLotteries: this.state.numOfLotteries,
                    timeStarted: this.state.timeStarted,
                    lotteryAddress: this.state.lotteryAddress,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 225
                    }
                });
            }
            return null;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 241
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 242
                }
            }, this.renderIndex(), this.renderModal(), this.renderCardIndex(), this.renderAdmin()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(_ref8) {
                var res = _ref8.res;
                var factoryAddress, lotteryFactory, owner, lotteries, numOfLotteries, lotteryAddress, lottery, summary, lotteryPrice, deadline, lotteryJackPot, numOfPlayers, prize, numOfWinners, finalJackPot, winningNumber, lotteryHasPlayed, timeStarted;
                return _regenerator2.default.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                factoryAddress = "0xfdb6707990732b46121a15d0284bd77282a64632";
                                lotteryFactory = (0, _factory2.default)(factoryAddress, _web2.default);
                                _context7.next = 4;
                                return lotteryFactory.methods.owner().call();

                            case 4:
                                owner = _context7.sent;

                                console.log(owner);
                                _context7.next = 8;
                                return lotteryFactory.methods.getLotteries().call();

                            case 8:
                                lotteries = _context7.sent;
                                numOfLotteries = lotteries.length;

                                if (!(numOfLotteries > 0)) {
                                    _context7.next = 33;
                                    break;
                                }

                                lotteryAddress = lotteries[numOfLotteries - 1];
                                lottery = (0, _lottery2.default)(lotteryAddress, _web2.default);
                                _context7.next = 15;
                                return lottery.methods.getSummary().call();

                            case 15:
                                summary = _context7.sent;
                                lotteryPrice = summary[0];
                                deadline = summary[1];
                                lotteryJackPot = summary[2];
                                numOfPlayers = summary[3];
                                prize = summary[4];
                                numOfWinners = summary[5];
                                finalJackPot = summary[6];
                                winningNumber = summary[11];
                                lotteryHasPlayed = summary[7];
                                timeStarted = summary[12];

                                lotteryPrice = _web2.default.utils.fromWei(lotteryPrice, 'ether');
                                lotteryJackPot = _web2.default.utils.fromWei(lotteryJackPot, 'ether');
                                finalJackPot = _web2.default.utils.fromWei(finalJackPot, 'ether');
                                prize = _web2.default.utils.fromWei(prize, 'ether');
                                return _context7.abrupt('return', { lotteries: lotteries, factoryAddress: factoryAddress, lotteryPrice: lotteryPrice, lotteryJackPot: lotteryJackPot,
                                    deadline: deadline, numOfPlayers: numOfPlayers, lotteryFactory: lotteryFactory, lotteryAddress: lotteryAddress, owner: owner,
                                    prize: prize, winningNumber: winningNumber, numOfWinners: numOfWinners, finalJackPot: finalJackPot, numOfLotteries: numOfLotteries,
                                    timeStarted: timeStarted });

                            case 33:
                                if (res) {
                                    res.writeHead(302, {
                                        Location: '/lotteries/new/' + factoryAddress
                                    });
                                    res.end();
                                    res.finished = true;
                                } else {
                                    _routes.Router.push('/lotteries/new/' + factoryAddress);
                                }
                                return _context7.abrupt('return');

                            case 35:
                            case 'end':
                                return _context7.stop();
                        }
                    }
                }, _callee7, this);
            }));

            function getInitialProps(_x7) {
                return _ref9.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return LotteryIndex;
}(_react.Component);

exports.default = LotteryIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJDb250YWluZXIiLCJsb3R0ZXJ5RmFjdG9yeUF0IiwiTGF5b3V0IiwiSGVhZGVySW5kZXgiLCJMb3R0ZXJ5SGFzUGxheWVkTW9kYWwiLCJMaW5rIiwid2ViMyIsIndlYjNTb2NrZXQiLCJsb3R0ZXJ5QXQiLCJSb3V0ZXIiLCJydW5JblRoaXNDb250ZXh0IiwiQ2FyZEluZGV4IiwiTG90dGVyeUluZGV4Iiwic3RhdGUiLCJsb3R0ZXJ5SmFja1BvdCIsInByb3BzIiwibnVtT2ZQbGF5ZXJzIiwiYWNjb3VudHMiLCJsb3R0ZXJ5SGFzUGxheWVkIiwid2lubmluZ051bWJlciIsIm51bU9mV2lubmVycyIsInByaXplIiwiZmluYWxKYWNrUG90IiwibG90dGVyeVByaWNlIiwiZGVhZGxpbmUiLCJsb3R0ZXJ5IiwibnVtT2ZMb3R0ZXJpZXMiLCJ0aW1lU3RhcnRlZCIsImxvdHRlcnlBZGRyZXNzIiwic2V0RmFjdG9yeUV2ZW50c0xpc3RlbmVycyIsImxvdHRlcnlGYWN0b3J5IiwiTG90dGVyeURlcGxveWVkRXZlbnQiLCJldmVudHMiLCJMb3R0ZXJ5RGVwbG95ZWQiLCJlcnJvciIsImRhdGEiLCJyZXR1cm5WYWx1ZXMiLCJkZXBsb3llZExvdHRlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiZ2V0TG90dGVyaWVzIiwibG90dGVyaWVzIiwibGVuZ3RoIiwidXRpbHMiLCJmcm9tV2VpIiwic2V0RXZlbnRzTGlzdGVuZXJzIiwic2V0U3RhdGUiLCJUaWNrZXRCdXlFdmVudCIsIlRpY2tldEJ1eSIsImphY2tQb3QiLCJMb3R0ZXJ5SGFzUGxheWVkRXZlbnQiLCJMb3R0ZXJ5SGFzUGxheWVkIiwic2V0V2luZG93TGlzdGVuZXIiLCJ3aW5kb3ciLCJldGgiLCJnZXRBY2NvdW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRJbnRlcnZhbEZ1bmN0aW9uIiwiZmFjdG9yeUFkZHJlc3MiLCJ1bnN1YnNjcmliZSIsIml0ZW1zIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJvd25lciIsInRvU3RyaW5nIiwibWFyZ2luVG9wIiwicmVuZGVySW5kZXgiLCJyZW5kZXJNb2RhbCIsInJlbmRlckNhcmRJbmRleCIsInJlbmRlckFkbWluIiwicmVzIiwiY29uc29sZSIsImxvZyIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwiZmluaXNoZWQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFROztBQUN2QixBQUFPLEFBQXNCOzs7O0FBQzdCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBMkI7Ozs7QUFDbEMsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQWUsQUFDdEIsQUFBUyxBQUFjOzs7O0FBQ3ZCLEFBQVM7O0FBQ1QsQUFBTyxBQUFlOzs7Ozs7Ozs7SSxBQUVoQjs7Ozs7Ozs7Ozs7Ozs7OzROQUVGLEE7NEJBQ29CLE1BQUEsQUFBSyxNQURqQixBQUN1QixBQUMzQjswQkFBYyxNQUFBLEFBQUssTUFGZixBQUVxQixBQUN6QjtzQkFISSxBQUdNLEFBQ1Y7OEJBSkksQUFJYyxBQUNsQjsyQkFBZSxNQUFBLEFBQUssTUFMaEIsQUFLc0IsQUFDMUI7MEJBQWMsTUFBQSxBQUFLLE1BTmYsQUFNcUIsQUFDekI7bUJBQU8sTUFBQSxBQUFLLE1BUFIsQUFPYyxBQUNsQjswQkFBYyxNQUFBLEFBQUssTUFSZixBQVFxQixBQUN6QjswQkFBYyxNQUFBLEFBQUssTUFUZixBQVNxQixBQUN6QjtzQkFBVSxNQUFBLEFBQUssTUFWWCxBQVVpQixBQUNyQjtxQkFYSSxBQVdJLEFBQ1I7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QUNoRDt3Q0FBUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsT0FBM0IsQUFBUSxBQUEwQjtvRUFDMUIsV0FBRCxXQUFZLGdCQUFaLGdCQUE0QixjQUE1QixjQUEwQyxnQkFBMUMsQUFDSDs4Q0FERyxVQUNPLGNBRFAsY0FDcUIsZ0JBRHJCLGdCQUNxQyxnQkFEckMsZ0JBQ3FELE9BRHJELEFBRUg7MkNBRkcsS0FBQSxFQUVJLGVBRkosZUFFbUIsY0FGbkIsY0FFaUMsY0FGakMsY0FFK0MsZ0JBRi9DLEFBR0g7aURBSEcsQTs7aUNBS1A7b0NBQUEsQUFBSSxLQUFLLEFBQ0w7d0NBQUEsQUFBSSxVQUFKLEFBQWM7c0VBQWQsQUFBbUIsQUFDVyxBQUU5QjtBQUhtQixBQUNqQjt3Q0FFRixBQUFJLEFBQ0o7d0NBQUEsQUFBSSxXQUFKLEFBQWUsQUFDaEI7QUFOSCx1Q0FNUyxBQUNMO21EQUFBLEFBQU8seUJBQVAsQUFBOEIsQUFDL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXpEWSxBLEFBOE8zQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9FdGhlcmV1bS9Xb3JsZHBheS9sb3R0ZXJ5LWNvbnRyYWN0In0=