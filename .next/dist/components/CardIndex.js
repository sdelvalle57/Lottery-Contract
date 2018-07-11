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
            address: _this.props.address
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
                    lineNumber: 43
                }
            }, _react2.default.createElement(_semanticUiReact.Card, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(_semanticUiReact.Image, { src: '/static/eth.png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }), _react2.default.createElement(_semanticUiReact.Card.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, 'Draw number ', numOfLotteries), _react2.default.createElement(_semanticUiReact.Card.Meta, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('span', { className: 'date', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'Sarted on ', _react2.default.createElement(_reactTimestamp2.default, { time: timeStarted, format: 'full', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }))), _react2.default.createElement(_semanticUiReact.Card.Description, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Choose 4 numbers from 1 to 99')), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement(_routes.Link, { route: route, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'play', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }), 'Play Lottery')))));
        }
    }]);

    return CardIndex;
}(_react.Component);

exports.default = CardIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENhcmRJbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkljb24iLCJJbWFnZSIsIkNvbnRhaW5lciIsIkNhcmQiLCJ3ZWIzIiwiVGltZXN0YW1wIiwiTGluayIsIkNhcmRJbmRleCIsInN0YXRlIiwibG90dGVyeVByaWNlIiwicHJvcHMiLCJsb3R0ZXJ5SmFja1BvdCIsImRlYWRsaW5lIiwibnVtT2ZQbGF5ZXJzIiwibG90dGVyeUhhc1BsYXllZCIsIm51bU9mTG90dGVyaWVzIiwidGltZVN0YXJ0ZWQiLCJhZGRyZXNzIiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJsb3R0ZXJ5QWRkcmVzcyIsInJvdXRlIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVMsQUFBTSxBQUFPLEFBQVc7O0FBQ2pDLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPOzs7O0FBQ1AsQUFBUyxBQUFZOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7c04sQUFFRjswQkFDa0IsTUFBQSxBQUFLLE1BRGYsQUFDcUIsQUFDekI7NEJBQWdCLE1BQUEsQUFBSyxNQUZqQixBQUV1QixBQUMzQjtzQkFBVSxNQUFBLEFBQUssTUFIWCxBQUdpQixBQUNyQjswQkFBYyxNQUFBLEFBQUssTUFKZixBQUlxQixBQUN6Qjs4QkFBa0IsTUFBQSxBQUFLLE1BTG5CLEFBS3lCLEFBQzdCOzRCQUFnQixNQUFBLEFBQUssTUFOakIsQUFNdUIsQUFDM0I7eUJBQWEsTUFBQSxBQUFLLE1BUGQsQUFPb0IsQUFDeEI7cUJBQVMsTUFBQSxBQUFLLE1BUlYsQUFRZ0IsQTtBQVJoQixBQUNKOzs7OztrREFVc0IsQSxXQUFXLEFBQ2pDO2lCQUFBLEFBQUs7OEJBQ2EsVUFESixBQUNjLEFBQ3hCO2dDQUFnQixVQUZOLEFBRWdCLEFBQzFCOzBCQUFVLFVBSEEsQUFHVSxBQUNwQjs4QkFBYyxVQUpKLEFBSWMsQUFDeEI7a0NBQWtCLFVBTFIsQUFLa0IsQUFDNUI7Z0NBQWdCLFVBTk4sQUFNZ0IsQUFDMUI7NkJBQWEsVUFQSCxBQU9hLEFBQ3ZCO2dDQUFnQixLQUFBLEFBQUssTUFSekIsQUFBYyxBQVFpQixBQUVsQztBQVZpQixBQUNWOzs7O2lDQVlDO3lCQUdpRSxLQUhqRSxBQUdzRTtnQkFIdEUsQUFFRCxzQkFGQyxBQUVEO2dCQUZDLEFBRWEsd0JBRmIsQUFFYTtnQkFGYixBQUU2QixrQkFGN0IsQUFFNkI7Z0JBRjdCLEFBRXVDLHNCQUZ2QyxBQUV1QztnQkFGdkMsQUFHRCwwQkFIQyxBQUdEO2dCQUhDLEFBR2lCLHdCQUhqQixBQUdpQjtnQkFIakIsQUFHaUMscUJBSGpDLEFBR2lDO2dCQUhqQyxBQUc4Qyx3QkFIOUMsQUFHOEMsQUFDL0M7O2dCQUFJLHdCQUFKLEFBQTBCLEFBQzFCO2dCQUFBLEFBQUcsa0JBQWtCLEFBQ2pCO3dDQUFBLEFBQXNCLEFBQ3pCO0FBQ0w7bUNBQ0ksQUFBQyw0Q0FBVSxPQUFPLEVBQUMsV0FBRCxBQUFXLFNBQVMsU0FBcEIsQUFBNkIsUUFBUSxnQkFBdkQsQUFBa0IsQUFBcUQ7OEJBQXZFO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMsd0NBQU0sS0FBUCxBQUFXOzhCQUFYO2dDQURKLEFBQ0ksQUFDQTtBQURBO2dDQUNDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDQTtBQURBO0FBQUEsK0JBQ0MsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQTtBQUFBO0FBQUEsZUFBMEIsZ0JBRDFCLEFBQ0EsQUFDQSxpQ0FBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUEsVUFBTSxXQUFOLEFBQWdCOzhCQUFoQjtnQ0FBQTtBQUFBO2VBQ2MsOEJBQUEsQUFBQywwQ0FBVSxNQUFYLEFBQWlCLGFBQWEsUUFBOUIsQUFBcUM7OEJBQXJDO2dDQUpsQixBQUVBLEFBQ0ksQUFDYyxBQUdsQjtBQUhrQjtrQ0FHakIsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQTtBQUFBO0FBQUEsZUFUSixBQUVJLEFBT0EsQUFFQSxtREFBQyxjQUFELHNCQUFBLEFBQU0sV0FBUSxPQUFkOzhCQUFBO2dDQUFBLEFBQ0E7QUFEQTsrQkFDQSxBQUFDLDhCQUFLLE9BQU4sQUFBYzs4QkFBZDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx1Q0FBSyxNQUFOLEFBQVc7OEJBQVg7Z0NBREosQUFDSTtBQUFBO2dCQWhCcEIsQUFDSSxBQUNJLEFBV0ksQUFDQSxBQUNJLEFBU25COzs7OztBQTNEbUIsQSxBQStEeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ2FyZEluZGV4LmpzIiwic291cmNlUm9vdCI6IkU6L0V0aGVyZXVtL1dvcmxkcGF5L2xvdHRlcnktY29udHJhY3QifQ==