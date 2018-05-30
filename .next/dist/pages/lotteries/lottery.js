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

        _this.numberPickerCallback = function (numbers) {
            _this.setState({ numbers: numbers });
        };

        _this.setLotteryValues = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var lotteryAddress, lottery, summary, accounts, lotteryValue, deadline, jackPot, winningNumber, playersLenght, winnersLenght, lotteryHasPlayed, lastLotery, factoryAddress, owner, userAccount, canBuyLottery, canPickWinner;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            lotteryAddress = _this.state.lotteryAddress;
                            lottery = (0, _lottery2.default)(lotteryAddress);
                            _context.next = 4;
                            return lottery.methods.getSummary().call();

                        case 4:
                            summary = _context.sent;
                            _context.next = 7;
                            return _web2.default.eth.getAccounts();

                        case 7:
                            accounts = _context.sent;
                            lotteryValue = summary[0];
                            deadline = summary[1];
                            jackPot = summary[2];
                            winningNumber = summary[3];
                            playersLenght = summary[4];
                            winnersLenght = summary[5];
                            lotteryHasPlayed = summary[6];
                            lastLotery = summary[7];
                            factoryAddress = summary[8];
                            owner = summary[9];
                            userAccount = accounts[0];
                            canBuyLottery = !lotteryHasPlayed && deadline - Date.now() / 1000 > 0;
                            canPickWinner = !lotteryHasPlayed && deadline - Date.now() / 1000 < 0;

                            _this.setState({ lotteryValue: lotteryValue, deadline: deadline, jackPot: jackPot, winningNumber: winningNumber,
                                playersLenght: playersLenght, winnersLenght: winnersLenght, lotteryHasPlayed: lotteryHasPlayed, lastLotery: lastLotery, factoryAddress: factoryAddress,
                                owner: owner, userAccount: userAccount, canBuyLottery: canBuyLottery, canPickWinner: canPickWinner, loading: false });

                        case 22:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));

        _this.timer = function () {
            _this.setLotteryValues();
        };

        _this.state = {
            lotteryAddress: props.url.query.address,
            lotteryValue: '',
            deadline: '',
            jackPot: '',
            winningNumber: '',
            playersLenght: '',
            winnersLenght: '',
            lotteryHasPlayed: '',
            lastLotery: '',
            factoryAddress: '',
            owner: '',
            userAccount: '',
            canBuyLottery: '',
            canPickWinner: '',
            loading: true,
            numbers: []
        };
        return _this;
    }

    (0, _createClass3.default)(Lottery, [{
        key: 'componentDidMount',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.setLotteryValues();
                                this.intervalId = setInterval(this.timer.bind(this), 30000);

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function componentDidMount() {
                return _ref2.apply(this, arguments);
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
                        lineNumber: 82
                    }
                }, this.state.deadline),
                meta: 'Lottery selling ' + this.getDeadline(this.state.deadline),
                description: 'We sale tickets untils this date',
                style: { overflowWrap: 'break-word' }
            }, {
                header: _web2.default.utils.fromWei(this.state.jackPot, 'ether') + " Ether",
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
                header: this.state.winnersLenght,
                meta: 'Winners',
                description: 'Number of winners',
                style: { overflowWrap: 'break-word' }
            }, {
                href: '/lotteries/' + this.state.lastLotery,
                header: this.state.lastLotery,
                meta: 'Address of previous lottery',
                style: { overflowWrap: 'break-word' }
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            });
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
                    lineNumber: 134
                }
            }, _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135
                }
            }, _react2.default.createElement(_semanticUiReact.Loader, { size: 'large', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                }
            }, 'Loading')), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                }
            }, 'Lottery Show'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 143
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                }
            }, _react2.default.createElement(_EnterForm2.default, {
                address: this.state.lotteryAddress,
                canBuyLottery: this.state.canBuyLottery,
                lotteryValue: this.state.lotteryValue,
                numbers: this.state.numbers, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145
                }
            }), _react2.default.createElement(_NumberPicker2.default, { callback: this.numberPickerCallback, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                }
            })), _react2.default.createElement(_PickWinnerForm2.default, {
                address: this.state.lotteryAddress,
                canPickWinner: this.state.canPickWinner,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 152
                }
            }))));
        }
    }]);

    return Lottery;
}(_react.Component);

exports.default = Lottery;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxsb3R0ZXJpZXNcXGxvdHRlcnkuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiR3JpZCIsIkRpbW1lciIsIkxvYWRlciIsIlNlZ21lbnQiLCJUaW1lc3RhbXAiLCJodW1hbml6ZSIsIk51bWJlckZvcm1hdCIsIlJlYWN0SW50ZXJ2YWwiLCJMaW5rIiwiTGF5b3V0IiwibG90dGVyeUF0Iiwid2ViMyIsIkVudGVyRm9ybSIsIlBpY2tXaW5uZXJGb3JtIiwiTnVtYmVyUGlja2VyIiwiTG90dGVyeSIsInByb3BzIiwibnVtYmVyUGlja2VyQ2FsbGJhY2siLCJudW1iZXJzIiwic2V0U3RhdGUiLCJzZXRMb3R0ZXJ5VmFsdWVzIiwibG90dGVyeUFkZHJlc3MiLCJzdGF0ZSIsImxvdHRlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImxvdHRlcnlWYWx1ZSIsImRlYWRsaW5lIiwiamFja1BvdCIsIndpbm5pbmdOdW1iZXIiLCJwbGF5ZXJzTGVuZ2h0Iiwid2lubmVyc0xlbmdodCIsImxvdHRlcnlIYXNQbGF5ZWQiLCJsYXN0TG90ZXJ5IiwiZmFjdG9yeUFkZHJlc3MiLCJvd25lciIsInVzZXJBY2NvdW50IiwiY2FuQnV5TG90dGVyeSIsIkRhdGUiLCJub3ciLCJjYW5QaWNrV2lubmVyIiwibG9hZGluZyIsInRpbWVyIiwidXJsIiwicXVlcnkiLCJhZGRyZXNzIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwiYmluZCIsIml0ZW1zIiwiaGVhZGVyIiwidXRpbHMiLCJmcm9tV2VpIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJnZXREZWFkbGluZSIsImhyZWYiLCJwYXJzZUludCIsImFucyIsImxhcmdlc3QiLCJyZW5kZXJDYXJkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7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LEFBQUssQUFFWCxnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQXVCOzhCQUF2QjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQzt5QkFDWSxLQUFBLEFBQUssTUFEbEIsQUFDd0IsQUFDcEI7K0JBQWlCLEtBQUEsQUFBSyxNQUYxQixBQUVnQyxBQUM1Qjs4QkFBZ0IsS0FBQSxBQUFLLE1BSHpCLEFBRytCLEFBQzNCO3lCQUFXLEtBQUEsQUFBSyxNQUpwQixBQUkwQjs4QkFKMUI7Z0NBREosQUFDSSxBQUtBO0FBTEE7QUFDSSxnQ0FJSixBQUFDLHdDQUFhLFVBQVUsS0FBeEIsQUFBNkI7OEJBQTdCO2dDQVBSLEFBQ0ksQUFNSSxBQUVKO0FBRkk7aUNBRUosQUFBQzt5QkFDWSxLQUFBLEFBQUssTUFEbEIsQUFDd0IsQUFDcEI7K0JBQWlCLEtBQUEsQUFBSyxNQUYxQixBQUVnQzs7OEJBRmhDO2dDQW5CaEIsQUFDSSxBQUtJLEFBSUksQUFTSSxBQVFuQjtBQVJtQjtBQUNJOzs7OztBQXpJTixBLEFBbUp0Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJsb3R0ZXJ5LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L0V0aGVyZXVtL1dvcmxkcGF5L2xvdHRlcnktY29udHJhY3QifQ==