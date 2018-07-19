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
            lotteryAddress: _this.props.lotteryAddress
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
                lotteryAddress: this.props.lotteryAddress
            });
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
                lotteryAddress = _state.lotteryAddress;

            var route = '/lotteries/' + lotteryAddress;
            if (lotteryHasPlayed) {
                route = '/lotteries/' + lotteryAddress;
            }
            return _react2.default.createElement(_semanticUiReact.Container, { style: { marginTop: '100px', display: 'flex', justifyContent: 'center' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(_semanticUiReact.Card, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement(_semanticUiReact.Image, { src: '/static/eth.png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }), _react2.default.createElement(_semanticUiReact.Card.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'Draw number ', numOfLotteries), _react2.default.createElement(_semanticUiReact.Card.Meta, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement('span', { className: 'date', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'Sarted on ', _react2.default.createElement(_reactTimestamp2.default, { time: timeStarted, format: 'full', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }))), _react2.default.createElement(_semanticUiReact.Card.Description, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'Choose 4 numbers from 1 to 99')), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement(_routes.Link, { prefetch: true, route: route, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'play', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }), 'Play Lottery')))));
        }
    }]);

    return CardIndex;
}(_react.Component);

exports.default = CardIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENhcmRJbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkljb24iLCJJbWFnZSIsIkNvbnRhaW5lciIsIkNhcmQiLCJ3ZWIzIiwiVGltZXN0YW1wIiwiTGluayIsIkNhcmRJbmRleCIsInN0YXRlIiwibG90dGVyeVByaWNlIiwicHJvcHMiLCJsb3R0ZXJ5SmFja1BvdCIsImRlYWRsaW5lIiwibnVtT2ZQbGF5ZXJzIiwibG90dGVyeUhhc1BsYXllZCIsIm51bU9mTG90dGVyaWVzIiwidGltZVN0YXJ0ZWQiLCJhZGRyZXNzIiwibG90dGVyeUFkZHJlc3MiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsInJvdXRlIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVMsQUFBTSxBQUFPLEFBQVc7O0FBQ2pDLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPOzs7O0FBQ1AsQUFBUyxBQUFZOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7c04sQUFFRjswQkFDa0IsTUFBQSxBQUFLLE1BRGYsQUFDcUIsQUFDekI7NEJBQWdCLE1BQUEsQUFBSyxNQUZqQixBQUV1QixBQUMzQjtzQkFBVSxNQUFBLEFBQUssTUFIWCxBQUdpQixBQUNyQjswQkFBYyxNQUFBLEFBQUssTUFKZixBQUlxQixBQUN6Qjs4QkFBa0IsTUFBQSxBQUFLLE1BTG5CLEFBS3lCLEFBQzdCOzRCQUFnQixNQUFBLEFBQUssTUFOakIsQUFNdUIsQUFDM0I7eUJBQWEsTUFBQSxBQUFLLE1BUGQsQUFPb0IsQUFDeEI7cUJBQVMsTUFBQSxBQUFLLE1BUlYsQUFRZ0IsQUFDcEI7NEJBQWdCLE1BQUEsQUFBSyxNQVRqQixBQVN1QixBO0FBVHZCLEFBQ0o7Ozs7O2tEQVdzQixBLFdBQVcsQUFDakM7aUJBQUEsQUFBSzs4QkFDYSxVQURKLEFBQ2MsQUFDeEI7Z0NBQWdCLFVBRk4sQUFFZ0IsQUFDMUI7MEJBQVUsVUFIQSxBQUdVLEFBQ3BCOzhCQUFjLFVBSkosQUFJYyxBQUN4QjtrQ0FBa0IsVUFMUixBQUtrQixBQUM1QjtnQ0FBZ0IsVUFOTixBQU1nQixBQUMxQjs2QkFBYSxVQVBILEFBT2EsQUFDdkI7Z0NBQWdCLEtBQUEsQUFBSyxNQVJ6QixBQUFjLEFBUWlCLEFBRWxDO0FBVmlCLEFBQ1Y7Ozs7aUNBWUM7eUJBR2lFLEtBSGpFLEFBR3NFO2dCQUh0RSxBQUVELHNCQUZDLEFBRUQ7Z0JBRkMsQUFFYSx3QkFGYixBQUVhO2dCQUZiLEFBRTZCLGtCQUY3QixBQUU2QjtnQkFGN0IsQUFFdUMsc0JBRnZDLEFBRXVDO2dCQUZ2QyxBQUdELDBCQUhDLEFBR0Q7Z0JBSEMsQUFHaUIsd0JBSGpCLEFBR2lCO2dCQUhqQixBQUdpQyxxQkFIakMsQUFHaUM7Z0JBSGpDLEFBRzhDLHdCQUg5QyxBQUc4QyxBQUMvQzs7Z0JBQUksd0JBQUosQUFBMEIsQUFDMUI7Z0JBQUEsQUFBRyxrQkFBa0IsQUFDakI7d0NBQUEsQUFBc0IsQUFDekI7QUFDTDttQ0FDSSxBQUFDLDRDQUFVLE9BQU8sRUFBQyxXQUFELEFBQVcsU0FBUyxTQUFwQixBQUE2QixRQUFRLGdCQUF2RCxBQUFrQixBQUFxRDs4QkFBdkU7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx3Q0FBTSxLQUFQLEFBQVc7OEJBQVg7Z0NBREosQUFDSSxBQUNBO0FBREE7Z0NBQ0MsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBO0FBQUE7QUFBQSxlQUEwQixnQkFEMUIsQUFDQSxBQUNBLGlDQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQSxVQUFNLFdBQU4sQUFBZ0I7OEJBQWhCO2dDQUFBO0FBQUE7ZUFDYyw4QkFBQSxBQUFDLDBDQUFVLE1BQVgsQUFBaUIsYUFBYSxRQUE5QixBQUFxQzs4QkFBckM7Z0NBSmxCLEFBRUEsQUFDSSxBQUNjLEFBR2xCO0FBSGtCO2tDQUdqQixjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBO0FBQUE7QUFBQSxlQVRKLEFBRUksQUFPQSxBQUVBLG1EQUFDLGNBQUQsc0JBQUEsQUFBTSxXQUFRLE9BQWQ7OEJBQUE7Z0NBQUEsQUFDQTtBQURBOytCQUNBLEFBQUMsOEJBQUssVUFBTixNQUFlLE9BQWYsQUFBc0I7OEJBQXRCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHVDQUFLLE1BQU4sQUFBVzs4QkFBWDtnQ0FESixBQUNJO0FBQUE7Z0JBaEJwQixBQUNJLEFBQ0ksQUFXSSxBQUNBLEFBQ0ksQUFTbkI7Ozs7O0FBNURtQixBLEFBZ0V4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJDYXJkSW5kZXguanMiLCJzb3VyY2VSb290IjoiRTovRXRoZXJldW0vV29ybGRwYXkvbG90dGVyeS1jb250cmFjdCJ9