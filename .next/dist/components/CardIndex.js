'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _routes = require('../routes');

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Ethereum\\Worldpay\\lottery-contract\\components\\CardIndex.js';


var CardIndex = function (_Component) {
    (0, _inherits3.default)(CardIndex, _Component);

    function CardIndex() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CardIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CardIndex.__proto__ || (0, _getPrototypeOf2.default)(CardIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            lotteryPrice: _this.props.lotteryPrice,
            lotteryJackPot: _this.props.lotteryJackPot,
            deadline: _this.props.deadline,
            numOfPlayers: _this.props.numOfPlayers,
            lotteryHasPlayed: _this.props.lotteryHasPlayed,
            numOfLotteries: _this.props.numOfLotteries,
            timeStarted: _this.props.timeStarted,
            address: _this.props.address,
            lotteryAddress: _this.props.lotteryAddress,
            ethPrice: _this.props.ethPrice
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CardIndex, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                lotteryPrice: nextProps.lotteryPrice,
                lotteryJackPot: nextProps.lotteryJackPot,
                deadline: nextProps.deadline,
                numOfPlayers: nextProps.numOfPlayers,
                lotteryHasPlayed: nextProps.lotteryHasPlayed,
                numOfLotteries: nextProps.numOfLotteries,
                timeStarted: nextProps.timeStarted,
                lotteryAddress: this.props.lotteryAddress,
                ethPrice: nextProps.ethPrice
            });
        }
    }, {
        key: 'renderMeta',
        value: function renderMeta(lotteryJackPot, ethPrice) {
            if (ethPrice >= 0) {
                var usdJackpot = lotteryJackPot * ethPrice;
                if (usdJackpot > 0) {
                    usdJackpot = (0, _numeral2.default)(usdJackpot).format('0,0');
                }
                return _react2.default.createElement(_semanticUiReact.Card.Meta, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                    }
                }, usdJackpot, ' USD');
            }
            return null;
        }
    }, {
        key: 'renderDeadline',
        value: function renderDeadline(deadline, lotteryHasPlayed) {
            var canBuyLottery = !lotteryHasPlayed && Date.now() / 1000 - deadline < 0;
            if (canBuyLottery) {
                return _react2.default.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    }
                }, 'Ends  ', _react2.default.createElement(_reactTimestamp2.default, {
                    precision: 2,

                    autoUpdate: true, time: deadline,
                    actualSeconds: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    }
                }));
            }
            return "Ended";
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                lotteryPrice = _state.lotteryPrice,
                lotteryJackPot = _state.lotteryJackPot,
                deadline = _state.deadline,
                numOfPlayers = _state.numOfPlayers,
                lotteryHasPlayed = _state.lotteryHasPlayed,
                numOfLotteries = _state.numOfLotteries,
                timeStarted = _state.timeStarted,
                lotteryAddress = _state.lotteryAddress,
                ethPrice = _state.ethPrice;

            var route = '/lotteries/' + lotteryAddress;
            if (lotteryHasPlayed) {
                route = '/lotteries/' + lotteryAddress;
            }
            return _react2.default.createElement(_semanticUiReact.Container, { id: 'indexCardContainer', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(_semanticUiReact.Card, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement(_semanticUiReact.Image, { verticalAlign: 'middle', size: 'medium', centered: true, circular: true, src: '/static/lottery_icon.png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }), _react2.default.createElement(_semanticUiReact.Card.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, lotteryJackPot, ' ETH'), this.renderMeta(lotteryJackPot, ethPrice), _react2.default.createElement(_semanticUiReact.Card.Description, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, this.renderDeadline(deadline, lotteryHasPlayed))), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement(_routes.Link, { prefetch: true, route: route, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { id: 'buyTicketButton', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, 'BUY TICKET')))));
        }
    }]);

    return CardIndex;
}(_react.Component);

exports.default = CardIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENhcmRJbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkljb24iLCJJbWFnZSIsIkNvbnRhaW5lciIsIkNhcmQiLCJCdXR0b24iLCJUaW1lc3RhbXAiLCJMaW5rIiwibnVtZXJhbCIsIkNhcmRJbmRleCIsInN0YXRlIiwibG90dGVyeVByaWNlIiwicHJvcHMiLCJsb3R0ZXJ5SmFja1BvdCIsImRlYWRsaW5lIiwibnVtT2ZQbGF5ZXJzIiwibG90dGVyeUhhc1BsYXllZCIsIm51bU9mTG90dGVyaWVzIiwidGltZVN0YXJ0ZWQiLCJhZGRyZXNzIiwibG90dGVyeUFkZHJlc3MiLCJldGhQcmljZSIsIm5leHRQcm9wcyIsInNldFN0YXRlIiwidXNkSmFja3BvdCIsImZvcm1hdCIsImNhbkJ1eUxvdHRlcnkiLCJEYXRlIiwibm93Iiwicm91dGUiLCJyZW5kZXJNZXRhIiwicmVuZGVyRGVhZGxpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUyxBQUFNLEFBQU8sQUFBVyxBQUFNOztBQUN2QyxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFZOztBQUNyQixBQUFPOzs7Ozs7Ozs7SSxBQUVEOzs7Ozs7Ozs7Ozs7OztzTkFFRixBOzBCQUNrQixNQUFBLEFBQUssTUFEZixBQUNxQixBQUN6Qjs0QkFBZ0IsTUFBQSxBQUFLLE1BRmpCLEFBRXVCLEFBQzNCO3NCQUFVLE1BQUEsQUFBSyxNQUhYLEFBR2lCLEFBQ3JCOzBCQUFjLE1BQUEsQUFBSyxNQUpmLEFBSXFCLEFBQ3pCOzhCQUFrQixNQUFBLEFBQUssTUFMbkIsQUFLeUIsQUFDN0I7NEJBQWdCLE1BQUEsQUFBSyxNQU5qQixBQU11QixBQUMzQjt5QkFBYSxNQUFBLEFBQUssTUFQZCxBQU9vQixBQUN4QjtxQkFBUyxNQUFBLEFBQUssTUFSVixBQVFnQixBQUNwQjs0QkFBZ0IsTUFBQSxBQUFLLE1BVGpCLEFBU3VCLEFBQzNCO3NCQUFVLE1BQUEsQUFBSyxNQUFNLEEsQUFWakI7QUFBQSxBQUNKOzs7OztrREFZc0IsQSxXQUFXLEFBQ2pDO2lCQUFBLEFBQUs7OEJBQ2EsVUFESixBQUNjLEFBQ3hCO2dDQUFnQixVQUZOLEFBRWdCLEFBQzFCOzBCQUFVLFVBSEEsQUFHVSxBQUNwQjs4QkFBYyxVQUpKLEFBSWMsQUFDeEI7a0NBQWtCLFVBTFIsQUFLa0IsQUFDNUI7Z0NBQWdCLFVBTk4sQUFNZ0IsQUFDMUI7NkJBQWEsVUFQSCxBQU9hLEFBQ3ZCO2dDQUFnQixLQUFBLEFBQUssTUFSWCxBQVFpQixBQUMzQjswQkFBVSxVQVRkLEFBQWMsQUFTVSxBQUUzQjtBQVhpQixBQUNWOzs7O21DLEFBWUcsZ0JBQWdCLEEsVUFBVSxBQUNqQztnQkFBRyxZQUFILEFBQWUsR0FBRyxBQUNkO29CQUFJLGFBQWEsaUJBQWpCLEFBQWtDLEFBQ2xDO29CQUFHLGFBQUgsQUFBZ0IsR0FBRSxBQUNkO2lDQUFhLHVCQUFBLEFBQVEsWUFBUixBQUFvQixPQUFqQyxBQUFhLEFBQTJCLEFBQzNDO0FBQ0Q7dUNBQ0ssY0FBRCxzQkFBQSxBQUFNOztrQ0FBTjtvQ0FBQSxBQUNJO0FBREo7QUFBQSxpQkFBQSxFQUFBLFlBREosQUFDSSxBQUlQO0FBQ0Q7bUJBQUEsQUFBTyxBQUNWOzs7O3VDQUVjLEEsVSxBQUFVLGtCQUFrQixBQUN2QztnQkFBTSxnQkFBZ0IsQ0FBQSxBQUFDLG9CQUFvQixLQUFBLEFBQUssUUFBTCxBQUFXLE9BQVgsQUFBa0IsV0FBN0QsQUFBeUUsQUFDekU7Z0JBQUEsQUFBRyxlQUFlLEFBQ2Q7dUNBQU8sY0FBQTs7a0NBQUE7b0NBQUE7QUFBQTtBQUFBLGlCQUFBLEVBQVMsMEJBQUEsQUFBQzsrQkFBRCxBQUNHLEFBRVg7O2dDQUhRLE1BR0csTUFISCxBQUdTLEFBQ2pCO21DQUpRO2tDQUFBO29DQUFoQixBQUFPLEFBQVMsQUFLbkI7QUFMbUI7QUFDUjtBQUtaO21CQUFBLEFBQU8sQUFDVjs7OztpQ0FHUTt5QkFHMkUsS0FIM0UsQUFHZ0Y7Z0JBSGhGLEFBRUQsc0JBRkMsQUFFRDtnQkFGQyxBQUVhLHdCQUZiLEFBRWE7Z0JBRmIsQUFFNkIsa0JBRjdCLEFBRTZCO2dCQUY3QixBQUV1QyxzQkFGdkMsQUFFdUM7Z0JBRnZDLEFBR0QsMEJBSEMsQUFHRDtnQkFIQyxBQUdpQix3QkFIakIsQUFHaUI7Z0JBSGpCLEFBR2lDLHFCQUhqQyxBQUdpQztnQkFIakMsQUFHOEMsd0JBSDlDLEFBRzhDO2dCQUg5QyxBQUc4RCxrQkFIOUQsQUFHOEQsQUFDL0Q7O2dCQUFJLHdCQUFKLEFBQTBCLEFBQzFCO2dCQUFBLEFBQUcsa0JBQWtCLEFBQ2pCO3dDQUFBLEFBQXNCLEFBQ3pCO0FBQ0w7bUNBQ0ksQUFBQyw0Q0FBVSxJQUFYLEFBQWM7OEJBQWQ7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx3Q0FBTSxlQUFQLEFBQXFCLFVBQVMsTUFBOUIsQUFBbUMsVUFBUyxVQUE1QyxNQUFxRCxVQUFyRCxNQUE4RCxLQUE5RCxBQUFrRTs4QkFBbEU7Z0NBREosQUFDSSxBQUNBO0FBREE7Z0NBQ0MsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQWM7QUFBZDtBQUFBLGVBQUEsZ0JBREEsQUFDQSxBQUNDLGNBQUEsQUFBSyxXQUFMLEFBQWdCLGdCQUZqQixBQUVDLEFBQWdDLEFBQ2pDLDJCQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSztBQURMO0FBQUEsb0JBQ0ssQUFBSyxlQUFMLEFBQW9CLFVBTjdCLEFBRUksQUFHQSxBQUNLLEFBQThCLEFBR25DLHFDQUFDLGNBQUQsc0JBQUEsQUFBTSxXQUFRLE9BQWQ7OEJBQUE7Z0NBQUEsQUFDQTtBQURBOytCQUNBLEFBQUMsOEJBQUssVUFBTixNQUFlLE9BQWYsQUFBc0I7OEJBQXRCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLHlDQUFPLElBQVIsQUFBVzs4QkFBWDtnQ0FBQTtBQUFBO2VBYmhCLEFBQ0ksQUFDSSxBQVNJLEFBQ0EsQUFDSSxBQVFuQjs7Ozs7QUF0Rm1CLEEsQUEwRnhCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNhcmRJbmRleC5qcyIsInNvdXJjZVJvb3QiOiJFOi9FdGhlcmV1bS9Xb3JsZHBheS9sb3R0ZXJ5LWNvbnRyYWN0In0=