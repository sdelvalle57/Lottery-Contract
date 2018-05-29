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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Ethereum\\Worldpay\\lottery-contract\\pages\\lotteries\\lottery.js?entry';


var Lottery = function (_Component) {
    (0, _inherits3.default)(Lottery, _Component);

    function Lottery(props) {
        var _this2 = this;

        (0, _classCallCheck3.default)(this, Lottery);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Lottery.__proto__ || (0, _getPrototypeOf2.default)(Lottery)).call(this, props));

        _this.setLotteryValues = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var lotteryAddress, lottery, summary, accounts, lotteryValue, deadline, jackPot, winningNumber, playersLenght, winnersLenght, lotteryHasPlayed, lastLotery, factoryAddress, owner, userAccount, canBuyLottery;
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

                            _this.setState({ lotteryValue: lotteryValue, deadline: deadline, jackPot: jackPot, winningNumber: winningNumber,
                                playersLenght: playersLenght, winnersLenght: winnersLenght, lotteryHasPlayed: lotteryHasPlayed, lastLotery: lastLotery, factoryAddress: factoryAddress,
                                owner: owner, userAccount: userAccount, canBuyLottery: canBuyLottery });

                        case 21:
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
            canBuyLottery: ''
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
                                console.log("did");
                                this.setLotteryValues();
                                this.intervalId = setInterval(this.timer.bind(this), 1000);

                            case 3:
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
                header: _react2.default.createElement(_reactTimestamp2.default, { time: this.state.deadline, format: 'full', includeDay: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                    }
                }),
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
                    lineNumber: 111
                }
            });
        }
    }, {
        key: 'getDeadline',
        value: function getDeadline(deadline) {
            deadline = parseInt(deadline * 1000);
            var ans = (0, _humanizeDuration2.default)(deadline - Date.now(), { largest: 2 });
            return deadline - Date.now() < 0 ? 'ended ' + ans + ' ago' : 'ends in ' + ans;
            //return deadline < parseInt(Date.now()) ? 'ends in '+ans: 'ended'ans; 
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }, 'Lottery Show'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                }
            }, _react2.default.createElement(_EnterForm2.default, {
                address: this.props.address,
                canBuyLottery: this.props.canBuyLottery,
                lotteryValue: this.props.lotteryValue,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
                }
            }))));
        }
    }]);

    return Lottery;
}(_react.Component);

exports.default = Lottery;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxsb3R0ZXJpZXNcXGxvdHRlcnkuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiR3JpZCIsIlRpbWVzdGFtcCIsImh1bWFuaXplIiwiTnVtYmVyRm9ybWF0IiwiUmVhY3RJbnRlcnZhbCIsIkxpbmsiLCJMYXlvdXQiLCJsb3R0ZXJ5QXQiLCJ3ZWIzIiwiRW50ZXJGb3JtIiwiTG90dGVyeSIsInByb3BzIiwic2V0TG90dGVyeVZhbHVlcyIsImxvdHRlcnlBZGRyZXNzIiwic3RhdGUiLCJsb3R0ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJsb3R0ZXJ5VmFsdWUiLCJkZWFkbGluZSIsImphY2tQb3QiLCJ3aW5uaW5nTnVtYmVyIiwicGxheWVyc0xlbmdodCIsIndpbm5lcnNMZW5naHQiLCJsb3R0ZXJ5SGFzUGxheWVkIiwibGFzdExvdGVyeSIsImZhY3RvcnlBZGRyZXNzIiwib3duZXIiLCJ1c2VyQWNjb3VudCIsImNhbkJ1eUxvdHRlcnkiLCJEYXRlIiwibm93Iiwic2V0U3RhdGUiLCJ0aW1lciIsInVybCIsInF1ZXJ5IiwiYWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJiaW5kIiwiaXRlbXMiLCJoZWFkZXIiLCJ1dGlscyIsImZyb21XZWkiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsImdldERlYWRsaW5lIiwiaHJlZiIsInBhcnNlSW50IiwiYW5zIiwibGFyZ2VzdCIsInJlbmRlckNhcmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFROztBQUN2QixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFD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TSxnQ0FBUyxXQUFTLEtBQWxCLEFBQWtCLEFBQUssT0FBTyxFQUFFLFNBQTVDLEFBQVksQUFBOEIsQUFBVyxBQUNyRDttQkFBUSxXQUFXLEtBQVosQUFBWSxBQUFLLFFBQWpCLEFBQTBCLElBQUksV0FBQSxBQUFTLE1BQXZDLEFBQTJDLFNBQU8sYUFBekQsQUFBb0UsQUFDcEU7QUFDSDs7OztpQ0FNUSxBQUNMO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLGlDQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBdUI7OEJBQXZCO2dDQUFBLEFBQ007QUFETjtvQkFESixBQUNJLEFBQ00sQUFBSyxBQUVYLGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBdUI7OEJBQXZCO2dDQUFBLEFBQ0c7QUFESDsrQkFDRyxBQUFDO3lCQUNhLEtBQUEsQUFBSyxNQURuQixBQUN5QixBQUNwQjsrQkFBaUIsS0FBQSxBQUFLLE1BRjNCLEFBRWlDLEFBQzVCOzhCQUFnQixLQUFBLEFBQUssTUFIMUIsQUFHZ0M7OzhCQUhoQztnQ0FSZixBQUNJLEFBRUksQUFJSSxBQUNHLEFBVWxCO0FBVmtCO0FBQ0s7Ozs7O0FBekhOLEEsQUFxSXRCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImxvdHRlcnkuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovRXRoZXJldW0vV29ybGRwYXkvbG90dGVyeS1jb250cmFjdCJ9