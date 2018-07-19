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
            if (typeof this.TicketBuyEvent !== "undefined") this.TicketBuyEvent.unsubscribe();
            if (typeof this.LotteryHasPlayedEvent !== "undefined") this.LotteryHasPlayedEvent.unsubscribe();
            if (typeof this.LotteryDeployedEvent !== "undefined") this.LotteryDeployedEvent.unsubscribe();
        }
    }, {
        key: 'renderLotteries',
        value: function renderLotteries() {
            var items = this.props.lotteries.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: '/lotteries/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 171
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 172
                        }
                    }, 'View Lottery')),
                    fluid: true
                };
            });
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 178
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
                        lineNumber: 187
                    }
                }, _react2.default.createElement(_routes.Link, { route: '/lotteries/new/' + this.props.factoryAddress, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 188
                    }
                }, _react2.default.createElement('a', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 189
                    }
                }, _react2.default.createElement(_semanticUiReact.Button, {
                    floated: 'left',
                    content: 'Deploy Lottery',
                    icon: 'add',
                    primary: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 190
                    }
                }))));
            } else return null;
        }
    }, {
        key: 'renderIndex',
        value: function renderIndex() {
            return _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', block: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 204
                }
            }, 'WORLDPAY LOTTERY');
            /* <HeaderIndex
                lotteryPrice = { this.state.lotteryPrice }
                lotteryJackPot = { this.state.lotteryJackPot } 
                deadline = { this.state.deadline }
                numOfPlayers = { this.state.numOfPlayers }
                lotteryHasPlayed = { this.state.lotteryHasPlayed }/>*/;
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
                        lineNumber: 217
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
                        lineNumber: 232
                    }
                });
            }
            return null;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, { style: { marginTop: '100px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 248
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 249
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
                                factoryAddress = "0x1f878cb46383ce6ee5ab989c9896ebd411b13ab0";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJDb250YWluZXIiLCJIZWFkZXIiLCJsb3R0ZXJ5RmFjdG9yeUF0IiwiTGF5b3V0IiwiSGVhZGVySW5kZXgiLCJMb3R0ZXJ5SGFzUGxheWVkTW9kYWwiLCJMaW5rIiwid2ViMyIsIndlYjNTb2NrZXQiLCJsb3R0ZXJ5QXQiLCJSb3V0ZXIiLCJydW5JblRoaXNDb250ZXh0IiwiQ2FyZEluZGV4IiwiTG90dGVyeUluZGV4Iiwic3RhdGUiLCJsb3R0ZXJ5SmFja1BvdCIsInByb3BzIiwibnVtT2ZQbGF5ZXJzIiwiYWNjb3VudHMiLCJsb3R0ZXJ5SGFzUGxheWVkIiwid2lubmluZ051bWJlciIsIm51bU9mV2lubmVycyIsInByaXplIiwiZmluYWxKYWNrUG90IiwibG90dGVyeVByaWNlIiwiZGVhZGxpbmUiLCJsb3R0ZXJ5IiwibnVtT2ZMb3R0ZXJpZXMiLCJ0aW1lU3RhcnRlZCIsImxvdHRlcnlBZGRyZXNzIiwic2V0RmFjdG9yeUV2ZW50c0xpc3RlbmVycyIsImxvdHRlcnlGYWN0b3J5IiwiTG90dGVyeURlcGxveWVkRXZlbnQiLCJldmVudHMiLCJMb3R0ZXJ5RGVwbG95ZWQiLCJlcnJvciIsImRhdGEiLCJyZXR1cm5WYWx1ZXMiLCJkZXBsb3llZExvdHRlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiZ2V0TG90dGVyaWVzIiwibG90dGVyaWVzIiwibGVuZ3RoIiwidXRpbHMiLCJmcm9tV2VpIiwic2V0RXZlbnRzTGlzdGVuZXJzIiwic2V0U3RhdGUiLCJUaWNrZXRCdXlFdmVudCIsIlRpY2tldEJ1eSIsImphY2tQb3QiLCJMb3R0ZXJ5SGFzUGxheWVkRXZlbnQiLCJMb3R0ZXJ5SGFzUGxheWVkIiwic2V0V2luZG93TGlzdGVuZXIiLCJ3aW5kb3ciLCJldGgiLCJnZXRBY2NvdW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRJbnRlcnZhbEZ1bmN0aW9uIiwiZmFjdG9yeUFkZHJlc3MiLCJ1bnN1YnNjcmliZSIsIml0ZW1zIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJvd25lciIsInRvU3RyaW5nIiwibWFyZ2luVG9wIiwicmVuZGVySW5kZXgiLCJyZW5kZXJNb2RhbCIsInJlbmRlckNhcmRJbmRleCIsInJlbmRlckFkbWluIiwicmVzIiwiY29uc29sZSIsImxvZyIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwiZmluaXNoZWQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFRLEFBQVc7O0FBQ2xDLEFBQU8sQUFBc0I7Ozs7QUFDN0IsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUEyQjs7OztBQUNsQyxBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBZSxBQUN0QixBQUFTLEFBQWM7Ozs7QUFDdkIsQUFBUzs7QUFDVCxBQUFPLEFBQWU7Ozs7Ozs7OztJQUVoQixBOzs7Ozs7Ozs7Ozs7Ozs7NE5BRUYsQTs0QkFDb0IsTUFBQSxBQUFLLE1BRGpCLEFBQ3VCLEFBQzNCOzBCQUFjLE1BQUEsQUFBSyxNQUZmLEFBRXFCLEFBQ3pCO3NCQUhJLEFBR00sQUFDVjs4QkFKSSxBQUljLEFBQ2xCOzJCQUFlLE1BQUEsQUFBSyxNQUxoQixBQUtzQixBQUMxQjswQkFBYyxNQUFBLEFBQUssTUFOZixBQU1xQixBQUN6QjttQkFBTyxNQUFBLEFBQUssTUFQUixBQU9jLEFBQ2xCOzBCQUFjLE1BQUEsQUFBSyxNQVJmLEFBUXFCLEFBQ3pCOzBCQUFjLE1BQUEsQUFBSyxNQVRmLEFBU3FCLEFBQ3pCO3NCQUFVLE1BQUEsQUFBSyxNQVZYLEFBVWlCLEFBQ3JCO3FC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SyxNQUFMLEFBQVcsUUFBWCxBQUFtQixjQUFsQyxBQUFlLEFBQWlDLEFBQ2hEO3dDQUFRLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixPQUEzQixBQUFRLEFBQTBCO29FQUMxQixXQUFELFdBQVksZ0JBQVosZ0JBQTRCLGNBQTVCLGNBQTBDLGdCQUExQyxBQUNIOzhDQURHLFVBQ08sY0FEUCxjQUNxQixnQkFEckIsZ0JBQ3FDLGdCQURyQyxnQkFDcUQsT0FEckQsQUFFSDsyQ0FGRyxLQUFBLEVBRUksZUFGSixlQUVtQixjQUZuQixjQUVpQyxjQUZqQyxjQUUrQyxnQkFGL0MsQUFHSDtpREFIRyxBOztpQ0FLUDtvQ0FBQSxBQUFJLEtBQUssQUFDTDt3Q0FBQSxBQUFJLFVBQUosQUFBYztzRUFBZCxBQUFtQixBQUNXLEFBRTlCO0FBSG1CLEFBQ2pCO3dDQUVGLEFBQUksQUFDSjt3Q0FBQSxBQUFJLFdBQUosQUFBZSxBQUNoQjtBQU5ILHVDQU1TLEFBQ0w7bURBQUEsQUFBTyx5QkFBUCxBQUE4QixBQUMvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBekRZLEEsQUFxUDNCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L0V0aGVyZXVtL1dvcmxkcGF5L2xvdHRlcnktY29udHJhY3QifQ==