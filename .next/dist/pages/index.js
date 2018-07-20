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
        }, _this.getEthPrice = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.setFactoryEventsListeners = function (lotteryFactory) {
            _this.LotteryDeployedEvent = lotteryFactory.events.LotteryDeployed({}, function () {
                var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(error, data) {
                    var lotteryAddress, lottery, summary, lotteries, numOfLotteries, lotteryPrice, deadline, lotteryJackPot, numOfPlayers, prize, numOfWinners, finalJackPot, winningNumber, lotteryHasPlayed, timeStarted;
                    return _regenerator2.default.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    if (!(error == null)) {
                                        _context2.next = 26;
                                        break;
                                    }

                                    lotteryAddress = data.returnValues.deployedLottery;
                                    lottery = (0, _lottery2.default)(lotteryAddress, _web3Socket2.default);
                                    _context2.next = 5;
                                    return lottery.methods.getSummary().call();

                                case 5:
                                    summary = _context2.sent;
                                    _context2.next = 8;
                                    return lotteryFactory.methods.getLotteries().call();

                                case 8:
                                    lotteries = _context2.sent;
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
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, _this2);
                }));

                return function (_x, _x2) {
                    return _ref3.apply(this, arguments);
                };
            }());
        }, _this.setEventsListeners = function (lottery) {
            _this.TicketBuyEvent = lottery.events.TicketBuy({}, function () {
                var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(error, data) {
                    var lotteryJackPot, numOfPlayers;
                    return _regenerator2.default.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    if (error == null) {
                                        lotteryJackPot = data.returnValues.jackPot;

                                        lotteryJackPot = _web2.default.utils.fromWei(lotteryJackPot, 'ether');
                                        numOfPlayers = data.returnValues.numOfPlayers;

                                        _this.setState({ lotteryJackPot: lotteryJackPot, numOfPlayers: numOfPlayers });
                                    }

                                case 1:
                                case 'end':
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, _this2);
                }));

                return function (_x3, _x4) {
                    return _ref4.apply(this, arguments);
                };
            }());

            _this.LotteryHasPlayedEvent = lottery.events.LotteryHasPlayed({}, function () {
                var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(error, data) {
                    var numOfWinners, winningNumber, prize, finalJackPot;
                    return _regenerator2.default.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
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
                                    return _context4.stop();
                            }
                        }
                    }, _callee4, _this2);
                }));

                return function (_x5, _x6) {
                    return _ref5.apply(this, arguments);
                };
            }());
        }, _this.setWindowListener = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
            var accounts;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            if (!(typeof window !== 'undefined' && typeof window.web3 !== 'undefined')) {
                                _context6.next = 6;
                                break;
                            }

                            _context6.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context6.sent;
                            _context6.next = 7;
                            break;

                        case 6:
                            window.addEventListener('load', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
                                var accounts;
                                return _regenerator2.default.wrap(function _callee5$(_context5) {
                                    while (1) {
                                        switch (_context5.prev = _context5.next) {
                                            case 0:
                                                _context5.next = 2;
                                                return _web2.default.eth.getAccounts();

                                            case 2:
                                                accounts = _context5.sent;

                                                _this.setIntervalFunction();

                                            case 4:
                                            case 'end':
                                                return _context5.stop();
                                        }
                                    }
                                }, _callee5, _this2);
                            })), false);

                        case 7:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(LotteryIndex, [{
        key: 'componentDidMount',
        value: function () {
            var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
                var lottery, lotteryFactory, lotteryHasPlayed, accounts;
                return _regenerator2.default.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                lottery = (0, _lottery2.default)(this.props.lotteryAddress, _web3Socket2.default);
                                lotteryFactory = (0, _factory2.default)(this.props.factoryAddress, _web3Socket2.default);
                                _context7.next = 4;
                                return lottery.methods.lotteryHasPlayed().call();

                            case 4:
                                lotteryHasPlayed = _context7.sent;

                                this.setFactoryEventsListeners(lotteryFactory);
                                this.setEventsListeners(lottery, lotteryFactory);

                                if (!(typeof window !== 'undefined' && typeof window.web3 !== 'undefined')) {
                                    _context7.next = 14;
                                    break;
                                }

                                _context7.next = 10;
                                return _web2.default.eth.getAccounts();

                            case 10:
                                accounts = _context7.sent;

                                this.setState({ accounts: accounts });
                                _context7.next = 15;
                                break;

                            case 14:
                                this.setWindowListener();

                            case 15:
                                this.setState({ lotteryHasPlayed: lotteryHasPlayed, lottery: lottery });

                            case 16:
                            case 'end':
                                return _context7.stop();
                        }
                    }
                }, _callee7, this);
            }));

            function componentDidMount() {
                return _ref8.apply(this, arguments);
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
                            lineNumber: 190
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 191
                        }
                    }, 'View Lottery')),
                    fluid: true
                };
            });
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 197
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
                        lineNumber: 206
                    }
                }, _react2.default.createElement(_routes.Link, { route: '/lotteries/new/' + this.props.factoryAddress, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 207
                    }
                }, _react2.default.createElement('a', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 208
                    }
                }, _react2.default.createElement(_semanticUiReact.Button, {
                    floated: 'left',
                    content: 'Deploy Lottery',
                    icon: 'add',
                    primary: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 209
                    }
                }))));
            } else return null;
        }
    }, {
        key: 'renderIndex',
        value: function renderIndex() {
            return _react2.default.createElement(_semanticUiReact.Container, { id: 'indexHeaderContainer', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 223
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', id: 'indexHeader', block: true, align: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 224
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
                        lineNumber: 239
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
                        lineNumber: 254
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
                    lineNumber: 271
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 272
                }
            }, this.renderIndex(), this.renderCardIndex(), this.renderAdmin()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(_ref9) {
                var res = _ref9.res;

                var factoryAddress, lotteryFactory, owner, lotteries, numOfLotteries, ethPrice, i, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref11, _ref12, key, value, lotteryAddress, lottery, summary, lotteryPrice, deadline, lotteryJackPot, numOfPlayers, prize, numOfWinners, finalJackPot, winningNumber, lotteryHasPlayed, timeStarted;

                return _regenerator2.default.wrap(function _callee8$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                            case 0:
                                factoryAddress = "0x1f878cb46383ce6ee5ab989c9896ebd411b13ab0";
                                lotteryFactory = (0, _factory2.default)(factoryAddress, _web2.default);
                                _context8.next = 4;
                                return lotteryFactory.methods.owner().call();

                            case 4:
                                owner = _context8.sent;

                                console.log(owner);
                                _context8.next = 8;
                                return lotteryFactory.methods.getLotteries().call();

                            case 8:
                                lotteries = _context8.sent;
                                numOfLotteries = lotteries.length;
                                _context8.next = 12;
                                return (0, _getEthPrice.getEthPriceNow)();

                            case 12:
                                ethPrice = _context8.sent;
                                i = 0;
                                _iteratorNormalCompletion = true;
                                _didIteratorError = false;
                                _iteratorError = undefined;
                                _context8.prev = 17;
                                _iterator = (0, _getIterator3.default)((0, _entries2.default)(ethPrice));

                            case 19:
                                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                    _context8.next = 30;
                                    break;
                                }

                                _ref11 = _step.value;
                                _ref12 = (0, _slicedToArray3.default)(_ref11, 2);
                                key = _ref12[0];
                                value = _ref12[1];

                                if (!(i == 0)) {
                                    _context8.next = 27;
                                    break;
                                }

                                ethPrice = value.ETH.USD;
                                return _context8.abrupt('break', 30);

                            case 27:
                                _iteratorNormalCompletion = true;
                                _context8.next = 19;
                                break;

                            case 30:
                                _context8.next = 36;
                                break;

                            case 32:
                                _context8.prev = 32;
                                _context8.t0 = _context8['catch'](17);
                                _didIteratorError = true;
                                _iteratorError = _context8.t0;

                            case 36:
                                _context8.prev = 36;
                                _context8.prev = 37;

                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }

                            case 39:
                                _context8.prev = 39;

                                if (!_didIteratorError) {
                                    _context8.next = 42;
                                    break;
                                }

                                throw _iteratorError;

                            case 42:
                                return _context8.finish(39);

                            case 43:
                                return _context8.finish(36);

                            case 44:
                                console.log(ethPrice);

                                if (!(numOfLotteries > 0)) {
                                    _context8.next = 68;
                                    break;
                                }

                                lotteryAddress = lotteries[numOfLotteries - 1];
                                lottery = (0, _lottery2.default)(lotteryAddress, _web2.default);
                                _context8.next = 50;
                                return lottery.methods.getSummary().call();

                            case 50:
                                summary = _context8.sent;
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
                                return _context8.abrupt('return', { lotteries: lotteries, factoryAddress: factoryAddress, lotteryPrice: lotteryPrice, lotteryJackPot: lotteryJackPot,
                                    deadline: deadline, numOfPlayers: numOfPlayers, lotteryFactory: lotteryFactory, lotteryAddress: lotteryAddress, owner: owner,
                                    prize: prize, winningNumber: winningNumber, numOfWinners: numOfWinners, finalJackPot: finalJackPot, numOfLotteries: numOfLotteries,
                                    timeStarted: timeStarted, ethPrice: ethPrice });

                            case 68:
                                if (res) {
                                    res.writeHead(302, {
                                        Location: '/lotteries/new/' + factoryAddress
                                    });
                                    res.end();
                                    res.finished = true;
                                } else {
                                    _routes.Router.push('/lotteries/new/' + factoryAddress);
                                }
                                return _context8.abrupt('return');

                            case 70:
                            case 'end':
                                return _context8.stop();
                        }
                    }
                }, _callee8, this, [[17, 32, 36, 44], [37,, 39, 43]]);
            }));

            function getInitialProps(_x7) {
                return _ref10.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return LotteryIndex;
}(_react.Component);

exports.default = LotteryIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJDb250YWluZXIiLCJIZWFkZXIiLCJsb3R0ZXJ5RmFjdG9yeUF0IiwiTGF5b3V0IiwiSGVhZGVySW5kZXgiLCJMb3R0ZXJ5SGFzUGxheWVkTW9kYWwiLCJMaW5rIiwid2ViMyIsIndlYjNTb2NrZXQiLCJsb3R0ZXJ5QXQiLCJSb3V0ZXIiLCJydW5JblRoaXNDb250ZXh0IiwiQ2FyZEluZGV4IiwiZ2V0RXRoUHJpY2VOb3ciLCJMb3R0ZXJ5SW5kZXgiLCJzdGF0ZSIsImxvdHRlcnlKYWNrUG90IiwicHJvcHMiLCJudW1PZlBsYXllcnMiLCJhY2NvdW50cyIsImxvdHRlcnlIYXNQbGF5ZWQiLCJ3aW5uaW5nTnVtYmVyIiwibnVtT2ZXaW5uZXJzIiwicHJpemUiLCJmaW5hbEphY2tQb3QiLCJsb3R0ZXJ5UHJpY2UiLCJkZWFkbGluZSIsImxvdHRlcnkiLCJudW1PZkxvdHRlcmllcyIsInRpbWVTdGFydGVkIiwibG90dGVyeUFkZHJlc3MiLCJldGhQcmljZSIsImdldEV0aFByaWNlIiwic2V0RmFjdG9yeUV2ZW50c0xpc3RlbmVycyIsImxvdHRlcnlGYWN0b3J5IiwiTG90dGVyeURlcGxveWVkRXZlbnQiLCJldmVudHMiLCJMb3R0ZXJ5RGVwbG95ZWQiLCJlcnJvciIsImRhdGEiLCJyZXR1cm5WYWx1ZXMiLCJkZXBsb3llZExvdHRlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiZ2V0TG90dGVyaWVzIiwibG90dGVyaWVzIiwibGVuZ3RoIiwidXRpbHMiLCJmcm9tV2VpIiwic2V0RXZlbnRzTGlzdGVuZXJzIiwic2V0U3RhdGUiLCJUaWNrZXRCdXlFdmVudCIsIlRpY2tldEJ1eSIsImphY2tQb3QiLCJMb3R0ZXJ5SGFzUGxheWVkRXZlbnQiLCJMb3R0ZXJ5SGFzUGxheWVkIiwic2V0V2luZG93TGlzdGVuZXIiLCJ3aW5kb3ciLCJldGgiLCJnZXRBY2NvdW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRJbnRlcnZhbEZ1bmN0aW9uIiwiZmFjdG9yeUFkZHJlc3MiLCJ1bnN1YnNjcmliZSIsIml0ZW1zIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJvd25lciIsInRvU3RyaW5nIiwibWFyZ2luVG9wIiwid2lubmluZ051bWJlcnkiLCJyZW5kZXJJbmRleCIsInJlbmRlckNhcmRJbmRleCIsInJlbmRlckFkbWluIiwicmVzIiwiY29uc29sZSIsImxvZyIsImkiLCJrZXkiLCJ2YWx1ZSIsIkVUSCIsIlVTRCIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwiZmluaXNoZWQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFRLEFBQVc7O0FBQ2xDLEFBQU8sQUFBc0I7Ozs7QUFDN0IsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUEyQjs7OztBQUNsQyxBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBZSxBQUN0QixBQUFTLEFBQWM7Ozs7QUFDdkIsQUFBUzs7QUFDVCxBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBUTs7Ozs7OztJQUdGLEE7Ozs7Ozs7Ozs7Ozs7Ozs0TkFFRixBOzRCQUNvQixNQUFBLEFBQUssTUFEakIsQUFDdUIsQUFDM0I7MEJBQWMsTUFBQSxBQUFLLE1BRmYsQUFFcUIsQUFDekI7c0JBSEksQUFHTSxBQUNWOzhCQUpJLEFBSWMsQUFDbEI7MkJBQWUsTUFBQSxBQUFLLE1BTGhCLEFBS3NCLEFBQzFCOzBCQUFjLE1BQUEsQUFBSyxNQU5mLEFBTXFCLEFBQ3pCO21CQUFPLE1BQUEsQUFBSyxNQVBSLEFBT2MsQUFDbEI7MEJB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QixBQUFWLEFBQTBCLEFBQzNDO0EsMENBQVUsdUIsQUFBQSxBQUFVLEFBQWdCOzt1Q0FDcEIsUUFBQSxBQUFRLFFBQVIsQUFBZ0IsYUFBYSxBLEFBQTdCOztpQ0FBaEI7QSxvREFDRjtBLCtDQUFlLFFBQUEsQUFBUSxBQUNyQixBO0EsMkNBQVcsUUFBQSxBLEFBQVEsQUFDckI7QSxpREFBaUIsUUFBQSxBLEFBQVEsQUFDdkI7QSwrQ0FBZSxRLEFBQUEsQUFBUSxBQUN6QjtBLHdDQUFRLFEsQUFBQSxBQUFRLEFBQ2Q7QSwrQ0FBZSxRQUFBLEEsQUFBUSxBQUN6QjtBLCtDQUFlLFFBQUEsQUFBUSxBQUNyQixBO0EsZ0RBQWdCLFFBQUEsQUFBUSxBLEFBQ3hCO0EsbURBQW1CLFFBQUEsQUFBUSxBQUMzQixBO0EsOENBQWMsUUFBQSxBQUFRLEEsQUFDNUI7OytDQUFlLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixjQUFsQyxBQUFlLEFBQWlDLEFBQ2hEO2lEQUFpQixjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsZ0JBQXBDLEFBQWlCLEFBQW1DLEFBQ3BEOytDQUFlLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixjQUFsQyxBQUFlLEFBQWlDLEFBQ2hEO3dDQUFRLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixPQUEzQixBQUFRLEFBQTBCO29FQUMxQixXQUFELFdBQVksZ0JBQVosZ0JBQTRCLGNBQTVCLGNBQTBDLGdCQUExQyxBQUNIOzhDQURHLFVBQ08sY0FEUCxjQUNxQixnQkFEckIsZ0JBQ3FDLGdCQURyQyxnQkFDcUQsT0FEckQsQUFFSDsyQ0FGRyxLQUFBLEVBRUksZUFGSixlQUVtQixjQUZuQixjQUVpQyxjQUZqQyxjQUUrQyxnQkFGL0MsQUFHSDtpREFIRyxhQUdVLFVBSFYsQTs7aUNBS1A7b0NBQUEsQUFBSSxLQUFLLEFBQ0w7d0NBQUEsQUFBSSxVQUFKLEFBQWM7c0VBQWQsQUFBbUIsQUFDVyxBQUU5QjtBQUhtQixBQUNqQjt3Q0FFRixBQUFJLEFBQ0o7d0NBQUEsQUFBSSxXQUFKLEFBQWUsQUFDaEI7QUFOSCx1Q0FNUyxBQUNMO21EQUFBLEFBQU8seUJBQVAsQUFBOEIsQUFDL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXRFWSxBLEFBMFEzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9FdGhlcmV1bS9Xb3JsZHBheS9sb3R0ZXJ5LWNvbnRyYWN0In0=