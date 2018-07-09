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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Ethereum\\Worldpay\\lottery-contract\\components\\HeaderIndex.js';


var HeaderIndex = function (_Component) {
    (0, _inherits3.default)(HeaderIndex, _Component);

    function HeaderIndex() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, HeaderIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = HeaderIndex.__proto__ || (0, _getPrototypeOf2.default)(HeaderIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            lotteryPrice: _this.props.lotteryPrice,
            lotteryJackPot: _this.props.lotteryJackPot,
            deadline: _this.props.deadline,
            numOfPlayers: _this.props.numOfPlayers
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(HeaderIndex, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var lotteryJackPot = nextProps.lotteryJackPot;
            var numOfPlayers = nextProps.numOfPlayers;
            var deadline = nextProps.deadline;
            this.setState({ lotteryJackPot: lotteryJackPot, numOfPlayers: numOfPlayers, deadline: deadline });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_semanticUiReact.Container, { style: { marginTop: '100px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement(_semanticUiReact.Statistic.Group, { widths: 'four', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement(_semanticUiReact.Statistic, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement(_semanticUiReact.Statistic.Value, { text: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, this.state.lotteryPrice, ' ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }), ' ETH'), _react2.default.createElement(_semanticUiReact.Statistic.Label, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, 'Ticket price')), _react2.default.createElement(_semanticUiReact.Statistic, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement(_semanticUiReact.Statistic.Value, { text: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, this.state.lotteryJackPot, ' ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }), 'ETH'), _react2.default.createElement(_semanticUiReact.Statistic.Label, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, 'Prize pool')), _react2.default.createElement(_semanticUiReact.Statistic, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement(_semanticUiReact.Statistic.Value, { text: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'time', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }), ' ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }), ' Deadline'), _react2.default.createElement(_semanticUiReact.Statistic.Label, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement(_reactTimestamp2.default, {
                precision: 3,
                autoUpdate: true, time: this.state.deadline,
                actualSeconds: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }))), _react2.default.createElement(_semanticUiReact.Statistic, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(_semanticUiReact.Statistic.Value, { text: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'user', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }), ' ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }), ' ', this.state.numOfPlayers), _react2.default.createElement(_semanticUiReact.Statistic.Label, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Players'))));
        }
    }]);

    return HeaderIndex;
}(_react.Component);

exports.default = HeaderIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlckluZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSWNvbiIsIkltYWdlIiwiU3RhdGlzdGljIiwiQ29udGFpbmVyIiwid2ViMyIsIlRpbWVzdGFtcCIsIkhlYWRlckluZGV4Iiwic3RhdGUiLCJsb3R0ZXJ5UHJpY2UiLCJwcm9wcyIsImxvdHRlcnlKYWNrUG90IiwiZGVhZGxpbmUiLCJudW1PZlBsYXllcnMiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFTLEFBQU0sQUFBTyxBQUFXOztBQUNqQyxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7Ozs7Ozs7O0lBRUQsQTs7Ozs7Ozs7Ozs7Ozs7ME4sQUFFRjswQkFDa0IsTUFBQSxBQUFLLE1BRGYsQUFDcUIsQUFDekI7NEJBQWdCLE1BQUEsQUFBSyxNQUZqQixBQUV1QixBQUMzQjtzQkFBVSxNQUFBLEFBQUssTUFIWCxBQUdpQixBQUNyQjswQkFBYyxNQUFBLEFBQUssTUFKZixBLEFBSXFCO0FBSnJCLEFBQ0o7Ozs7O2tELEFBTXNCLFdBQVcsQUFDakM7Z0JBQU0saUJBQWlCLFVBQXZCLEFBQWlDLEFBQ2pDO2dCQUFNLGVBQWUsVUFBckIsQUFBK0IsQUFDL0I7Z0JBQU0sV0FBVyxVQUFqQixBQUEyQixBQUMzQjtpQkFBQSxBQUFLLFNBQVMsRUFBQyxnQkFBRCxnQkFBaUIsY0FBakIsY0FBK0IsVUFBN0MsQUFBYyxBQUNqQjs7OztpQ0FHUSxBQUNMO21DQUNJLEFBQUMsNENBQVUsT0FBTyxFQUFDLFdBQW5CLEFBQWtCLEFBQVc7OEJBQTdCO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNLLGNBQUQsMkJBQUEsQUFBVyxTQUFNLFFBQWpCLEFBQXdCOzhCQUF4QjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCwyQkFBQSxBQUFXLFNBQU0sTUFBakI7OEJBQUE7Z0NBQUEsQUFBdUI7QUFBdkI7b0JBQXVCLEFBQUssTUFBNUIsQUFBa0MsY0FBYzs7OEJBQUE7Z0NBQWhELEFBQWdEO0FBQUE7QUFBQSxnQkFEcEQsQUFDSSxBQUNBLHlCQUFDLGNBQUQsMkJBQUEsQUFBVzs7OEJBQVg7Z0NBQUE7QUFBQTtBQUFBLGVBSFIsQUFDSSxBQUVJLEFBR0osa0NBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCwyQkFBQSxBQUFXLFNBQU0sTUFBakI7OEJBQUE7Z0NBQUEsQUFBdUI7QUFBdkI7b0JBQXVCLEFBQUssTUFBNUIsQUFBa0MsZ0JBQWdCOzs4QkFBQTtnQ0FBbEQsQUFBa0Q7QUFBQTtBQUFBLGdCQUR0RCxBQUNJLEFBQ0Esd0JBQUMsY0FBRCwyQkFBQSxBQUFXOzs4QkFBWDtnQ0FBQTtBQUFBO0FBQUEsZUFSUixBQU1JLEFBRUksQUFHSixnQ0FBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELDJCQUFBLEFBQVcsU0FBTSxNQUFqQjs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyx1Q0FBSyxNQUFOLEFBQVc7OEJBQVg7Z0NBREosQUFDSTtBQUFBO2dCQUFxQjs7OEJBQUE7Z0NBRHpCLEFBQ3lCO0FBQUE7QUFBQSxnQkFGN0IsQUFDSSxBQUdBLDhCQUFDLGNBQUQsMkJBQUEsQUFBVzs7OEJBQVg7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQzsyQkFBRCxBQUNlLEFBQ1g7NEJBRkosTUFFZSxNQUFNLEtBQUEsQUFBSyxNQUYxQixBQUVnQyxBQUM1QjsrQkFISjs4QkFBQTtnQ0FoQlosQUFXSSxBQUlJLEFBQ0ksQUFPUjtBQVBRO0FBQ0ksa0NBTVosQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCwyQkFBQSxBQUFXLFNBQU0sTUFBakI7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsdUNBQUssTUFBTixBQUFXOzhCQUFYO2dDQURKLEFBQ0k7QUFBQTtnQkFBc0I7OzhCQUFBO2dDQUQxQixBQUMwQjtBQUFBO0FBQUEsZ0JBQVMsVUFBQSxBQUFLLE1BRjVDLEFBQ0ksQUFDOEMsQUFFOUMsK0JBQUMsY0FBRCwyQkFBQSxBQUFXOzs4QkFBWDtnQ0FBQTtBQUFBO0FBQUEsZUE3QmhCLEFBQ0ksQUFDSSxBQXVCSSxBQUlJLEFBS25COzs7OztBQXBEcUIsQSxBQXdEMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiSGVhZGVySW5kZXguanMiLCJzb3VyY2VSb290IjoiRTovRXRoZXJldW0vV29ybGRwYXkvbG90dGVyeS1jb250cmFjdCJ9