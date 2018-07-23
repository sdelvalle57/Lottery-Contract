'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _LotteryPlayedModal = require('../components/LotteryPlayedModal');

var _LotteryPlayedModal2 = _interopRequireDefault(_LotteryPlayedModal);

var _routes = require('../routes');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _web3Socket = require('../ethereum/web3Socket');

var _web3Socket2 = _interopRequireDefault(_web3Socket);

var _lottery = require('../ethereum/lottery');

var _lottery2 = _interopRequireDefault(_lottery);

var _CardIndex = require('../components/CardIndex');

var _CardIndex2 = _interopRequireDefault(_CardIndex);

var _getEthPrice = require('get-eth-price');

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
            lotteryAddress: _this.props.lotteryAddress,
            ethPrice: _this.props.ethPrice
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
                            lineNumber: 181
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 182
                        }
                    }, 'View Lottery')),
                    fluid: true
                };
            });
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 188
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
                        lineNumber: 197
                    }
                }, _react2.default.createElement(_routes.Link, { route: '/lotteries/new/' + this.props.factoryAddress, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 198
                    }
                }, _react2.default.createElement('a', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 199
                    }
                }, _react2.default.createElement(_semanticUiReact.Button, {
                    floated: 'left',
                    content: 'Deploy Lottery',
                    icon: 'add',
                    primary: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 200
                    }
                }))));
            } else return null;
        }
    }, {
        key: 'renderIndex',
        value: function renderIndex() {
            return _react2.default.createElement(_semanticUiReact.Container, { id: 'indexHeaderContainer', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 214
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', id: 'indexHeader', block: true, align: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 215
                }
            }, 'WORLDPAY LOTTERY'));
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
                    winningNumber: this.state.winningNumbery,
                    prize: this.state.prize,
                    finalJackPot: this.state.finalJackPot,
                    showMessage: true,
                    winnersPaid: true,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 230
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
                    ethPrice: this.state.ethPrice,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 245
                    }
                });
            }
            return null;
        }
    }, {
        key: 'renderDrawContainer',
        value: function renderDrawContainer() {
            return _react2.default.createElement(_semanticUiReact.Container, { id: 'drawContainer', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 261
                }
            }, 'Draw ', this.state.numOfLotteries);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 266
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 267
                }
            }, this.renderIndex(), this.renderCardIndex(), this.renderDrawContainer(), this.renderAdmin()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(_ref8) {
                var res = _ref8.res;

                var factoryAddress, lotteryFactory, owner, lotteries, numOfLotteries, ethPrice, i, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref10, _ref11, key, value, lotteryAddress, lottery, summary, lotteryPrice, deadline, lotteryJackPot, numOfPlayers, prize, numOfWinners, finalJackPot, winningNumber, lotteryHasPlayed, timeStarted;

                return _regenerator2.default.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                factoryAddress = "0xE7FdE5dbce8893a29BD36827AE1A63Ebc4D7532e";
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
                                _context7.next = 12;
                                return (0, _getEthPrice.getEthPriceNow)();

                            case 12:
                                ethPrice = _context7.sent;
                                i = 0;
                                _iteratorNormalCompletion = true;
                                _didIteratorError = false;
                                _iteratorError = undefined;
                                _context7.prev = 17;
                                _iterator = (0, _getIterator3.default)((0, _entries2.default)(ethPrice));

                            case 19:
                                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                    _context7.next = 30;
                                    break;
                                }

                                _ref10 = _step.value;
                                _ref11 = (0, _slicedToArray3.default)(_ref10, 2);
                                key = _ref11[0];
                                value = _ref11[1];

                                if (!(i == 0)) {
                                    _context7.next = 27;
                                    break;
                                }

                                ethPrice = value.ETH.USD;
                                return _context7.abrupt('break', 30);

                            case 27:
                                _iteratorNormalCompletion = true;
                                _context7.next = 19;
                                break;

                            case 30:
                                _context7.next = 36;
                                break;

                            case 32:
                                _context7.prev = 32;
                                _context7.t0 = _context7['catch'](17);
                                _didIteratorError = true;
                                _iteratorError = _context7.t0;

                            case 36:
                                _context7.prev = 36;
                                _context7.prev = 37;

                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }

                            case 39:
                                _context7.prev = 39;

                                if (!_didIteratorError) {
                                    _context7.next = 42;
                                    break;
                                }

                                throw _iteratorError;

                            case 42:
                                return _context7.finish(39);

                            case 43:
                                return _context7.finish(36);

                            case 44:
                                if (!(numOfLotteries > 0)) {
                                    _context7.next = 67;
                                    break;
                                }

                                lotteryAddress = lotteries[numOfLotteries - 1];
                                lottery = (0, _lottery2.default)(lotteryAddress, _web2.default);
                                _context7.next = 49;
                                return lottery.methods.getSummary().call();

                            case 49:
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
                                    timeStarted: timeStarted, ethPrice: ethPrice });

                            case 67:
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

                            case 69:
                            case 'end':
                                return _context7.stop();
                        }
                    }
                }, _callee7, this, [[17, 32, 36, 44], [37,, 39, 43]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJDb250YWluZXIiLCJIZWFkZXIiLCJsb3R0ZXJ5RmFjdG9yeUF0IiwiTGF5b3V0IiwiTG90dGVyeUhhc1BsYXllZE1vZGFsIiwiTGluayIsIndlYjMiLCJ3ZWIzU29ja2V0IiwibG90dGVyeUF0IiwiUm91dGVyIiwiQ2FyZEluZGV4IiwiZ2V0RXRoUHJpY2VOb3ciLCJMb3R0ZXJ5SW5kZXgiLCJzdGF0ZSIsImxvdHRlcnlKYWNrUG90IiwicHJvcHMiLCJudW1PZlBsYXllcnMiLCJhY2NvdW50cyIsImxvdHRlcnlIYXNQbGF5ZWQiLCJ3aW5uaW5nTnVtYmVyIiwibnVtT2ZXaW5uZXJzIiwicHJpemUiLCJmaW5hbEphY2tQb3QiLCJsb3R0ZXJ5UHJpY2UiLCJkZWFkbGluZSIsImxvdHRlcnkiLCJudW1PZkxvdHRlcmllcyIsInRpbWVTdGFydGVkIiwibG90dGVyeUFkZHJlc3MiLCJldGhQcmljZSIsInNldEZhY3RvcnlFdmVudHNMaXN0ZW5lcnMiLCJsb3R0ZXJ5RmFjdG9yeSIsIkxvdHRlcnlEZXBsb3llZEV2ZW50IiwiZXZlbnRzIiwiTG90dGVyeURlcGxveWVkIiwiZXJyb3IiLCJkYXRhIiwicmV0dXJuVmFsdWVzIiwiZGVwbG95ZWRMb3R0ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsImdldExvdHRlcmllcyIsImxvdHRlcmllcyIsImxlbmd0aCIsInV0aWxzIiwiZnJvbVdlaSIsInNldEV2ZW50c0xpc3RlbmVycyIsInNldFN0YXRlIiwiVGlja2V0QnV5RXZlbnQiLCJUaWNrZXRCdXkiLCJqYWNrUG90IiwiTG90dGVyeUhhc1BsYXllZEV2ZW50IiwiTG90dGVyeUhhc1BsYXllZCIsInNldFdpbmRvd0xpc3RlbmVyIiwid2luZG93IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0SW50ZXJ2YWxGdW5jdGlvbiIsImZhY3RvcnlBZGRyZXNzIiwidW5zdWJzY3JpYmUiLCJpdGVtcyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwib3duZXIiLCJ0b1N0cmluZyIsIm1hcmdpblRvcCIsIndpbm5pbmdOdW1iZXJ5IiwicmVuZGVySW5kZXgiLCJyZW5kZXJDYXJkSW5kZXgiLCJyZW5kZXJEcmF3Q29udGFpbmVyIiwicmVuZGVyQWRtaW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiaSIsImtleSIsInZhbHVlIiwiRVRIIiwiVVNEIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJmaW5pc2hlZCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVEsQUFBVzs7QUFDbEMsQUFBTyxBQUFzQjs7OztBQUM3QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUEyQjs7OztBQUNsQyxBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBZSxBQUN0QixBQUFTLEFBQWM7Ozs7QUFDdkIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQVE7Ozs7Ozs7SUFFRixBOzs7Ozs7Ozs7Ozs7Ozs7NE4sQUFFRjs0QkFDb0IsTUFBQSxBQUFLLE1BRGpCLEFBQ3VCLEFBQzNCOzBCQUFjLE1BQUEsQUFBSyxNQUZmLEFBRXFCLEFBQ3pCO3NCQUhJLEFBR00sQUFDVjs4QkFKSSxBQUljLEFBQ2xCOzJCQUFlLE1BQUEsQUFBSyxNQUxoQixBQUtzQixBQUMxQjswQkFBYyxNQUFBLEFBQUssTUFOZixBQU1xQixBQUN6QjttQkFBTyxNQUFBLEFBQUssTUFQUixBQU9jLEFBQ2xCOzBCQUFjLE1BQUEsQUFBSyxNQVJmLEFBUXFCLEFBQ3pCOzBCQUFjLE1BQUEsQUFBSyxNQVRmLEFBU3FC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