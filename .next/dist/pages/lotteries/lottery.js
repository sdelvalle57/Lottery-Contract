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

var _routes = require('../../routes');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _lottery = require('../../ethereum/lottery');

var _lottery2 = _interopRequireDefault(_lottery);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

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

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Lottery.__proto__ || (0, _getPrototypeOf2.default)(Lottery)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.timer = function () {
            _this.setState({
                currentCount: _this.state.currentCount + 1
            });
            if (_this.state.currentCount % 5 == 0) {
                _this.render();
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Lottery, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                lotteryValue = _props.lotteryValue,
                deadline = _props.deadline,
                jackPot = _props.jackPot,
                winningNumber = _props.winningNumber,
                playersLenght = _props.playersLenght,
                winnersLenght = _props.winnersLenght,
                lotteryHasPlayed = _props.lotteryHasPlayed,
                lastLotery = _props.lastLotery,
                factoryAddress = _props.factoryAddress;

            var items = [{
                header: _web2.default.utils.fromWei(lotteryValue, 'ether') + " Ether",
                meta: 'We accept just Ether as payment',
                description: 'This is the value of each ticket to enter the Lottery',
                style: { overflowWrap: 'break-word' }
            }, {
                header: _react2.default.createElement(_reactTimestamp2.default, { time: deadline, format: 'full', includeDay: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 55
                    }
                }),
                meta: 'Lottery selling ' + this.getDeadline(deadline),
                description: 'We sale tickets untils this date',
                style: { overflowWrap: 'break-word' }
            }, {
                header: _web2.default.utils.fromWei(jackPot, 'ether') + " Ether",
                meta: 'Lottery Jackpot',
                description: 'This jackpot will be release to the winners',
                style: { overflowWrap: 'break-word' }
            }, {
                header: playersLenght,
                meta: 'Participants',
                description: 'Number of tickets sold',
                style: { overflowWrap: 'break-word' }
            }, {
                header: winningNumber,
                meta: 'And the winner is...',
                description: 'This is the lottery winner number',
                style: { overflowWrap: 'break-word' }
            }, {
                header: winnersLenght,
                meta: 'Winners',
                description: 'Number of winners',
                style: { overflowWrap: 'break-word' }
            }, {
                href: '/lotteries/' + lastLotery,
                header: lastLotery,
                meta: 'Address of previous lottery',
                description: _react2.default.createElement(_routes.Link, { route: '/lotteries/' + lastLotery, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 89
                    }
                }, _react2.default.createElement('a', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 90
                    }
                }, 'View Lottery')),
                style: { overflowWrap: 'break-word' }
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            });
        }
    }, {
        key: 'renderEnterCard',
        value: function renderEnterCard() {
            var _props2 = this.props,
                lotteryValue = _props2.lotteryValue,
                lotteryHasPlayed = _props2.lotteryHasPlayed;

            var items = [{
                header: 'Enter the lottery',
                meta: 'Value of the lottery is ' + _web2.default.utils.fromWei(lotteryValue, 'ether') + " Ether",
                description: this.canBuyLottery() ? _react2.default.createElement(_semanticUiReact.Button, { negative: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 110
                    }
                }, 'Ended') : _react2.default.createElement(_semanticUiReact.Button, { positive: true, onClick: this.onClick, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 111
                    }
                }, 'Enter')
            }];
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            });
        }
    }, {
        key: 'canBuyLottery',
        value: function canBuyLottery() {
            var _props3 = this.props,
                deadline = _props3.deadline,
                lotteryHasPlayed = _props3.lotteryHasPlayed;

            return lotteryHasPlayed || deadline < Date.now() / 1000;
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
                    lineNumber: 146
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 147
                }
            }, 'Lottery Show'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 148
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 152
                }
            }, this.renderEnterCard())));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var lottery, summary;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                lottery = (0, _lottery2.default)(props.query.address);
                                _context2.next = 3;
                                return lottery.methods.getSummary().call();

                            case 3:
                                summary = _context2.sent;
                                return _context2.abrupt('return', {
                                    lotteryValue: summary[0],
                                    deadline: summary[1],
                                    jackPot: summary[2],
                                    winningNumber: summary[3],
                                    playersLenght: summary[4],
                                    winnersLenght: summary[5],
                                    lotteryHasPlayed: summary[6],
                                    lastLotery: summary[7],
                                    factoryAddress: summary[8]
                                });

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Lottery;
}(_react.Component);

exports.default = Lottery;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxsb3R0ZXJpZXNcXGxvdHRlcnkuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiR3JpZCIsIlRpbWVzdGFtcCIsImh1bWFuaXplIiwiTnVtYmVyRm9ybWF0IiwiTGluayIsIkxheW91dCIsImxvdHRlcnlBdCIsIndlYjMiLCJMb3R0ZXJ5Iiwib25DbGljayIsInRpbWVyIiwic2V0U3RhdGUiLCJjdXJyZW50Q291bnQiLCJzdGF0ZSIsInJlbmRlciIsInByb3BzIiwibG90dGVyeVZhbHVlIiwiZGVhZGxpbmUiLCJqYWNrUG90Iiwid2lubmluZ051bWJlciIsInBsYXllcnNMZW5naHQiLCJ3aW5uZXJzTGVuZ2h0IiwibG90dGVyeUhhc1BsYXllZCIsImxhc3RMb3RlcnkiLCJmYWN0b3J5QWRkcmVzcyIsIml0ZW1zIiwiaGVhZGVyIiwidXRpbHMiLCJmcm9tV2VpIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJnZXREZWFkbGluZSIsImhyZWYiLCJjYW5CdXlMb3R0ZXJ5IiwiRGF0ZSIsIm5vdyIsInBhcnNlSW50IiwiYW5zIiwibGFyZ2VzdCIsInJlbmRlckNhcmRzIiwicmVuZGVyRW50ZXJDYXJkIiwibG90dGVyeSIsInF1ZXJ5IiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFNLEFBQVE7O0FBQ3ZCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVU7Ozs7Ozs7OztJQUlYLEE7Ozs7Ozs7Ozs7Ozs7OztrTixBQWlCRixtRkFBVSxtQkFBQTswRUFB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UyxLQUExQixBQUErQjtrQ0FBL0I7b0NBQUE7QUFBQTtpQkFBQSxFQVBoQixBQUFjLEFBQ1YsQUFNWSxBQUloQjtBQVZJLEFBQ0ksYUFGTTtpREFXUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW9COzhCQUFwQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O3dDQUdLOzBCQUlSLEtBSlEsQUFJSDtnQkFKRyxBQUVSLG1CQUZRLEFBRVI7Z0JBRlEsQUFHUiwyQkFIUSxBQUdSLEFBR0o7O21CQUFPLG9CQUFvQixXQUFXLEtBQUEsQUFBSyxRQUEzQyxBQUFpRCxBQUNwRDs7OztvQyxBQUVXLFVBQVUsQUFDbEI7dUJBQVcsU0FBUyxXQUFwQixBQUFXLEFBQWtCLEFBQzdCO2dCQUFNLE1BQU0sZ0NBQVMsV0FBUyxLQUFsQixBQUFrQixBQUFLLE9BQU8sRUFBRSxTQUE1QyxBQUFZLEFBQThCLEFBQVcsQUFDckQ7bUJBQVEsV0FBVyxLQUFaLEFBQVksQUFBSyxRQUFqQixBQUEwQixJQUFJLFdBQUEsQUFBUyxNQUF2QyxBQUEyQyxTQUFPLGFBQXpELEFBQW9FLEFBQ3BFO0FBRUg7Ozs7aUNBV1EsQUFDTDttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxpQ0FBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQXVCOzhCQUF2QjtnQ0FBQSxBQUNNO0FBRE47b0JBREosQUFDSSxBQUNNLEFBQUssQUFFWCxnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQXVCOzhCQUF2QjtnQ0FBQSxBQUNNO0FBRE47b0JBUFosQUFDSSxBQUVJLEFBSUksQUFDTSxBQUFLLEFBTTFCOzs7OzttSCxBQWpKNEI7Ozs7O2lDQUNuQjtBLDBDQUFVLHVCQUFVLE1BQUEsQUFBTSxNQUFoQixBQUFzQixBOzt1Q0FDaEIsUUFBQSxBQUFRLFFBQVIsQUFBZ0IsYUFBaEIsQSxBQUE2Qjs7aUNBQTdDO0E7O2tEQUVZLFFBRFgsQUFDVyxBQUFRLEFBQ3RCOzhDQUFVLFFBRlAsQUFFTyxBQUFRLEFBQ2xCOzZDQUFTLFFBSE4sQUFHTSxBQUFRLEFBQ2pCO21EQUFlLFFBSlosQUFJWSxBQUFRLEFBQ3ZCO21EQUFlLFFBTFosQUFLWSxBQUFRLEFBQ3ZCO21EQUFlLFFBTlosQUFNWSxBQUFRLEFBQ3ZCO3NEQUFrQixRQVBmLEFBT2UsQUFBUSxBQUMxQjtnREFBWSxRQVJULEFBUVMsQUFBUSxBQUNwQjtvREFBZ0IsUUFUYixBQVNhLEFBQVEsQTtBQVRyQixBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTFUsQSxBQXFKdEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibG90dGVyeS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9FdGhlcmV1bS9Xb3JsZHBheS9sb3R0ZXJ5LWNvbnRyYWN0In0=