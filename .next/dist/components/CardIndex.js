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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _reactTimestamp = require('react-timestamp');

var _reactTimestamp2 = _interopRequireDefault(_reactTimestamp);

var _routes = require('../routes');

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
                return _react2.default.createElement(_semanticUiReact.Card.Meta, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                    }
                }, lotteryJackPot * ethPrice, ' USD');
            }
            return null;
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
                    lineNumber: 57
                }
            }, _react2.default.createElement(_semanticUiReact.Card, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement(_semanticUiReact.Image, { verticalAlign: 'middle', size: 'medium', centered: true, circular: true, src: '/static/lottery_icon.png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }), _react2.default.createElement(_semanticUiReact.Card.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, lotteryJackPot, ' ETH'), this.renderMeta(lotteryJackPot, ethPrice), _react2.default.createElement(_semanticUiReact.Card.Description, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement('span', { className: 'date', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'Sarted on ', _react2.default.createElement(_reactTimestamp2.default, { time: timeStarted, format: 'full', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            })))), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(_routes.Link, { prefetch: true, route: route, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'play', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }), 'Play Lottery')))));
        }
    }]);

    return CardIndex;
}(_react.Component);

exports.default = CardIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENhcmRJbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkljb24iLCJJbWFnZSIsIkNvbnRhaW5lciIsIkNhcmQiLCJ3ZWIzIiwiVGltZXN0YW1wIiwiTGluayIsIkNhcmRJbmRleCIsInN0YXRlIiwibG90dGVyeVByaWNlIiwicHJvcHMiLCJsb3R0ZXJ5SmFja1BvdCIsImRlYWRsaW5lIiwibnVtT2ZQbGF5ZXJzIiwibG90dGVyeUhhc1BsYXllZCIsIm51bU9mTG90dGVyaWVzIiwidGltZVN0YXJ0ZWQiLCJhZGRyZXNzIiwibG90dGVyeUFkZHJlc3MiLCJldGhQcmljZSIsIm5leHRQcm9wcyIsInNldFN0YXRlIiwicm91dGUiLCJyZW5kZXJNZXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVMsQUFBTSxBQUFPLEFBQVc7O0FBQ2pDLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPOzs7O0FBQ1AsQUFBUyxBQUFZOzs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7Ozs7c04sQUFFRjswQkFDa0IsTUFBQSxBQUFLLE1BRGYsQUFDcUIsQUFDekI7NEJBQWdCLE1BQUEsQUFBSyxNQUZqQixBQUV1QixBQUMzQjtzQkFBVSxNQUFBLEFBQUssTUFIWCxBQUdpQixBQUNyQjswQkFBYyxNQUFBLEFBQUssTUFKZixBQUlxQixBQUN6Qjs4QkFBa0IsTUFBQSxBQUFLLE1BTG5CLEFBS3lCLEFBQzdCOzRCQUFnQixNQUFBLEFBQUssTUFOakIsQUFNdUIsQUFDM0I7eUJBQWEsTUFBQSxBQUFLLE1BUGQsQUFPb0IsQUFDeEI7cUJBQVMsTUFBQSxBQUFLLE1BUlYsQUFRZ0IsQUFDcEI7NEJBQWdCLE1BQUEsQUFBSyxNQVRqQixBQVN1QixBQUMzQjtzQkFBVSxNQUFBLEFBQUssTSxBQVZYLEFBVWlCO0FBVmpCLEFBQ0o7Ozs7O2tEQVlzQixBLFdBQVcsQUFDakM7aUJBQUEsQUFBSzs4QkFDYSxVQURKLEFBQ2MsQUFDeEI7Z0NBQWdCLFVBRk4sQUFFZ0IsQUFDMUI7MEJBQVUsVUFIQSxBQUdVLEFBQ3BCOzhCQUFjLFVBSkosQUFJYyxBQUN4QjtrQ0FBa0IsVUFMUixBQUtrQixBQUM1QjtnQ0FBZ0IsVUFOTixBQU1nQixBQUMxQjs2QkFBYSxVQVBILEFBT2EsQUFDdkI7Z0NBQWdCLEtBQUEsQUFBSyxNQVJYLEFBUWlCLEFBQzNCOzBCQUFVLFVBVGQsQUFBYyxBQVNVLEFBRTNCO0FBWGlCLEFBQ1Y7Ozs7bUMsQUFZRyxnQkFBZ0IsQSxVQUFVLEFBQ2pDO2dCQUFHLFlBQUgsQUFBZSxHQUFHLEFBQ2Q7dUNBQ0ssY0FBRCxzQkFBQSxBQUFNOztrQ0FBTjtvQ0FBQSxBQUNLO0FBREw7QUFBQSxpQkFBQSxtQkFBQSxBQUNzQixVQUYxQixBQUNJLEFBSVA7QUFDRDttQkFBQSxBQUFPLEFBQ1Y7Ozs7aUNBR1E7eUJBRzJFLEtBSDNFLEFBR2dGO2dCQUhoRixBQUVELHNCQUZDLEFBRUQ7Z0JBRkMsQUFFYSx3QkFGYixBQUVhO2dCQUZiLEFBRTZCLGtCQUY3QixBQUU2QjtnQkFGN0IsQUFFdUMsc0JBRnZDLEFBRXVDO2dCQUZ2QyxBQUdELDBCQUhDLEFBR0Q7Z0JBSEMsQUFHaUIsd0JBSGpCLEFBR2lCO2dCQUhqQixBQUdpQyxxQkFIakMsQUFHaUM7Z0JBSGpDLEFBRzhDLHdCQUg5QyxBQUc4QztnQkFIOUMsQUFHOEQsa0JBSDlELEFBRzhELEFBQy9EOztnQkFBSSx3QkFBSixBQUEwQixBQUMxQjtnQkFBQSxBQUFHLGtCQUFrQixBQUNqQjt3Q0FBQSxBQUFzQixBQUN6QjtBQUNMO21DQUNJLEFBQUMsNENBQVUsSUFBWCxBQUFjOzhCQUFkO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMsd0NBQU0sZUFBUCxBQUFxQixVQUFTLE1BQTlCLEFBQW1DLFVBQVMsVUFBNUMsTUFBcUQsVUFBckQsTUFBOEQsS0FBOUQsQUFBa0U7OEJBQWxFO2dDQURKLEFBQ0ksQUFDQTtBQURBO2dDQUNDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDQTtBQURBO0FBQUEsK0JBQ0MsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUFjO0FBQWQ7QUFBQSxlQUFBLGdCQURBLEFBQ0EsQUFDQyxjQUFBLEFBQUssV0FBTCxBQUFnQixnQkFGakIsQUFFQyxBQUFnQyxBQUVqQywyQkFBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUEsVUFBTSxXQUFOLEFBQWdCOzhCQUFoQjtnQ0FBQTtBQUFBO2VBQ2MsOEJBQUEsQUFBQywwQ0FBVSxNQUFYLEFBQWlCLGFBQWEsUUFBOUIsQUFBcUM7OEJBQXJDO2dDQVJ0QixBQUVJLEFBSUEsQUFDSSxBQUNjLEFBSWxCO0FBSmtCO21DQUlqQixjQUFELHNCQUFBLEFBQU0sV0FBUSxPQUFkOzhCQUFBO2dDQUFBLEFBQ0E7QUFEQTsrQkFDQSxBQUFDLDhCQUFLLFVBQU4sTUFBZSxPQUFmLEFBQXNCOzhCQUF0QjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx1Q0FBSyxNQUFOLEFBQVc7OEJBQVg7Z0NBREosQUFDSTtBQUFBO2dCQWpCcEIsQUFDSSxBQUNJLEFBWUksQUFDQSxBQUNJLEFBU25COzs7OztBQTFFbUIsQSxBQThFeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ2FyZEluZGV4LmpzIiwic291cmNlUm9vdCI6IkU6L0V0aGVyZXVtL1dvcmxkcGF5L2xvdHRlcnktY29udHJhY3QifQ==