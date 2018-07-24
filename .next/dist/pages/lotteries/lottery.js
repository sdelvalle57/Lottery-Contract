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
            return _react2.default.createElement('p', null, ending, ' ', _react2.default.createElement(_reactTimestamp2.default, {
                precision: 3,
                autoUpdate: true, time: deadline,
                actualSeconds: true }));
        }
    }, {
        key: 'renderStartTime',
        value: function renderStartTime(timeStarted) {
            return _react2.default.createElement('p', null, 'Started on ', _react2.default.createElement(_reactTimestamp2.default, { time: timeStarted, format: 'full' }));
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
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items });
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
                    lotteryHasPlayed: lotteryHasPlayed
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
                    isOwner: isOwner
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

            return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.loading }, _react2.default.createElement(_semanticUiReact.Loader, { size: 'large' }, 'Loading')), _react2.default.createElement(_semanticUiReact.Container, { style: { marginTop: '100px' } }, this.renderModal(), _react2.default.createElement(_semanticUiReact.Grid, null, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10 }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6 }, _react2.default.createElement(_semanticUiReact.Segment, null, _react2.default.createElement(_EnterForm2.default, {
                number4: number4,
                canPickWinner: canPickWinner,
                canBuyLottery: canBuyLottery,
                lotteryValue: lotteryValue,
                lotteryAddress: lotteryAddress,
                numbers3: numbers3
            }), _react2.default.createElement(_NumberPicker2.default, { callback: this.numberPickerCallback })), this.renderPickWinnerButton()))));
        }
    }]);

    return Lottery;
}(_react.Component);

exports.default = Lottery;