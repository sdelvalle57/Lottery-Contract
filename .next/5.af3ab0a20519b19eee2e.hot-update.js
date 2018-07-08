webpackHotUpdate(5,{

/***/ 1178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(450);

var _web = __webpack_require__(473);

var _web2 = _interopRequireDefault(_web);

var _reactTimestamp = __webpack_require__(1179);

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
                    lineNumber: 26
                }
            }, _react2.default.createElement(_semanticUiReact.Statistic.Group, { widths: 'four', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement(_semanticUiReact.Statistic, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement(_semanticUiReact.Statistic.Value, { text: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, this.state.lotteryPrice, ' ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }), ' ETH'), _react2.default.createElement(_semanticUiReact.Statistic.Label, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, 'Ticket price')), _react2.default.createElement(_semanticUiReact.Statistic, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement(_semanticUiReact.Statistic.Value, { text: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, this.state.lotteryJackPot, ' ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }), 'ETH'), _react2.default.createElement(_semanticUiReact.Statistic.Label, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, 'Prize pool')), _react2.default.createElement(_semanticUiReact.Statistic, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement(_semanticUiReact.Statistic.Value, { text: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'time', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }), ' ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }), ' Deadline'), _react2.default.createElement(_semanticUiReact.Statistic.Label, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(_reactTimestamp2.default, { precision: 3, autoUpdate: true, time: this.state.deadline, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }))), _react2.default.createElement(_semanticUiReact.Statistic, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_semanticUiReact.Statistic.Value, { text: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'user', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }), ' ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }), ' ', this.state.numOfPlayers), _react2.default.createElement(_semanticUiReact.Statistic.Label, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Players'))));
        }
    }]);

    return HeaderIndex;
}(_react.Component);

exports.default = HeaderIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlckluZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSWNvbiIsIkltYWdlIiwiU3RhdGlzdGljIiwiQ29udGFpbmVyIiwid2ViMyIsIlRpbWVzdGFtcCIsIkhlYWRlckluZGV4Iiwic3RhdGUiLCJsb3R0ZXJ5UHJpY2UiLCJwcm9wcyIsImxvdHRlcnlKYWNrUG90IiwiZGVhZGxpbmUiLCJudW1PZlBsYXllcnMiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFTLEFBQU0sQUFBTyxBQUFXOztBQUNqQyxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7Ozs7Ozs7O0ksQUFHRDs7Ozs7Ozs7Ozs7Ozs7ME4sQUFFRjswQkFDa0IsTUFBQSxBQUFLLE1BRGYsQUFDcUIsQUFDekI7NEJBQWdCLE1BQUEsQUFBSyxNQUZqQixBQUV1QixBQUMzQjtzQkFBVSxNQUFBLEFBQUssTUFIWCxBQUdpQixBQUNyQjswQkFBYyxNQUFBLEFBQUssTUFKZixBLEFBSXFCO0FBSnJCLEFBQ0o7Ozs7O2tEQU1zQixBLFdBQVcsQUFDakM7Z0JBQU0saUJBQWlCLFVBQXZCLEFBQWlDLEFBQ2pDO2dCQUFNLGVBQWUsVUFBckIsQUFBK0IsQUFDL0I7Z0JBQU0sV0FBVyxVQUFqQixBQUEyQixBQUMzQjtpQkFBQSxBQUFLLFNBQVMsRUFBQyxnQkFBRCxnQkFBaUIsY0FBakIsY0FBK0IsVUFBN0MsQUFBYyxBQUNqQjs7OztpQ0FHUSxBQUNMO21DQUNJLEFBQUMsNENBQVUsT0FBTyxFQUFDLFdBQW5CLEFBQWtCLEFBQVc7OEJBQTdCO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNLLGNBQUQsMkJBQUEsQUFBVyxTQUFNLFFBQWpCLEFBQXdCOzhCQUF4QjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCwyQkFBQSxBQUFXLFNBQU0sTUFBakI7OEJBQUE7Z0NBQUEsQUFBdUI7QUFBdkI7b0JBQXVCLEFBQUssTUFBNUIsQUFBa0MsY0FBYzs7OEJBQUE7Z0NBQWhELEFBQWdEO0FBQUE7QUFBQSxnQkFEcEQsQUFDSSxBQUNBLHlCQUFDLGNBQUQsMkJBQUEsQUFBVzs7OEJBQVg7Z0NBQUE7QUFBQTtBQUFBLGVBSFIsQUFDSSxBQUVJLEFBR0osa0NBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCwyQkFBQSxBQUFXLFNBQU0sTUFBakI7OEJBQUE7Z0NBQUEsQUFBdUI7QUFBdkI7b0JBQXVCLEFBQUssTUFBNUIsQUFBa0MsZ0JBQWdCOzs4QkFBQTtnQ0FBbEQsQUFBa0Q7QUFBQTtBQUFBLGdCQUR0RCxBQUNJLEFBQ0Esd0JBQUMsY0FBRCwyQkFBQSxBQUFXOzs4QkFBWDtnQ0FBQTtBQUFBO0FBQUEsZUFSUixBQU1JLEFBRUksQUFHSixnQ0FBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELDJCQUFBLEFBQVcsU0FBTSxNQUFqQjs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyx1Q0FBSyxNQUFOLEFBQVc7OEJBQVg7Z0NBREosQUFDSTtBQUFBO2dCQUFxQjs7OEJBQUE7Z0NBRHpCLEFBQ3lCO0FBQUE7QUFBQSxnQkFGN0IsQUFDSSxBQUdBLDhCQUFDLGNBQUQsMkJBQUEsQUFBVzs7OEJBQVg7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQywwQ0FBVSxXQUFYLEFBQXNCLEdBQUcsWUFBekIsTUFBb0MsTUFBTSxLQUFBLEFBQUssTUFBL0MsQUFBcUQ7OEJBQXJEO2dDQWhCWixBQVdJLEFBSUksQUFDSSxBQUlSO0FBSlE7a0NBSVIsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCwyQkFBQSxBQUFXLFNBQU0sTUFBakI7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsdUNBQUssTUFBTixBQUFXOzhCQUFYO2dDQURKLEFBQ0k7QUFBQTtnQkFBc0I7OzhCQUFBO2dDQUQxQixBQUMwQjtBQUFBO0FBQUEsZ0JBQVMsVUFBQSxBQUFLLE1BRjVDLEFBQ0ksQUFDOEMsQUFFOUMsK0JBQUMsY0FBRCwyQkFBQSxBQUFXOzs4QkFBWDtnQ0FBQTtBQUFBO0FBQUEsZUExQmhCLEFBQ0ksQUFDSSxBQW9CSSxBQUlJLEFBS25COzs7OztBQWpEcUIsQSxBQXFEMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiSGVhZGVySW5kZXguanMiLCJzb3VyY2VSb290IjoiRTovRXRoZXJldW0vV29ybGRwYXkvbG90dGVyeS1jb250cmFjdCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "E:\\Ethereum\\Worldpay\\lottery-contract\\components\\HeaderIndex.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Ethereum\\Worldpay\\lottery-contract\\components\\HeaderIndex.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hZjNhYjBhMjA1MTliMTllZWUyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXJJbmRleC5qcz8xMmI5MTZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJY29uLCBJbWFnZSwgU3RhdGlzdGljLCBDb250YWluZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5pbXBvcnQgVGltZXN0YW1wIGZyb20gJ3JlYWN0LXRpbWVzdGFtcCc7XHJcblxyXG5cclxuY2xhc3MgSGVhZGVySW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBsb3R0ZXJ5UHJpY2U6IHRoaXMucHJvcHMubG90dGVyeVByaWNlLFxyXG4gICAgICAgIGxvdHRlcnlKYWNrUG90OiB0aGlzLnByb3BzLmxvdHRlcnlKYWNrUG90LFxyXG4gICAgICAgIGRlYWRsaW5lOiB0aGlzLnByb3BzLmRlYWRsaW5lLFxyXG4gICAgICAgIG51bU9mUGxheWVyczogdGhpcy5wcm9wcy5udW1PZlBsYXllcnNcclxuICAgIH07ICBcclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGNvbnN0IGxvdHRlcnlKYWNrUG90ID0gbmV4dFByb3BzLmxvdHRlcnlKYWNrUG90O1xyXG4gICAgICAgIGNvbnN0IG51bU9mUGxheWVycyA9IG5leHRQcm9wcy5udW1PZlBsYXllcnM7XHJcbiAgICAgICAgY29uc3QgZGVhZGxpbmUgPSBuZXh0UHJvcHMuZGVhZGxpbmU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG90dGVyeUphY2tQb3QsIG51bU9mUGxheWVycywgZGVhZGxpbmV9KTtcclxuICAgIH1cclxuXHJcbiBcclxuICAgIHJlbmRlcigpIHsgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOicxMDBweCd9fSA+XHJcbiAgICAgICAgICAgICAgICA8U3RhdGlzdGljLkdyb3VwIHdpZHRocz0nZm91cicgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0aXN0aWM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGF0aXN0aWMuVmFsdWUgdGV4dD57dGhpcy5zdGF0ZS5sb3R0ZXJ5UHJpY2V9IDxiciAvPiBFVEg8L1N0YXRpc3RpYy5WYWx1ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXRpc3RpYy5MYWJlbD5UaWNrZXQgcHJpY2U8L1N0YXRpc3RpYy5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YXRpc3RpYz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YXRpc3RpYz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXRpc3RpYy5WYWx1ZSB0ZXh0Pnt0aGlzLnN0YXRlLmxvdHRlcnlKYWNrUG90fSA8YnIgLz5FVEg8L1N0YXRpc3RpYy5WYWx1ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXRpc3RpYy5MYWJlbD5Qcml6ZSBwb29sPC9TdGF0aXN0aWMuTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGF0aXN0aWM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0aXN0aWM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGF0aXN0aWMuVmFsdWUgdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J3RpbWUnIC8+IDxiciAvPiBEZWFkbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YXRpc3RpYy5WYWx1ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXRpc3RpYy5MYWJlbCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGltZXN0YW1wIHByZWNpc2lvbj17M30gYXV0b1VwZGF0ZSB0aW1lPXt0aGlzLnN0YXRlLmRlYWRsaW5lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YXRpc3RpYy5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YXRpc3RpYz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YXRpc3RpYz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXRpc3RpYy5WYWx1ZSB0ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0ndXNlcicgIC8+IDxiciAvPiB7IHRoaXMuc3RhdGUubnVtT2ZQbGF5ZXJzIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGF0aXN0aWMuVmFsdWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGF0aXN0aWMuTGFiZWw+UGxheWVyczwvU3RhdGlzdGljLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhdGlzdGljPlxyXG4gICAgICAgICAgICAgICAgPC9TdGF0aXN0aWMuR3JvdXA+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlckluZGV4O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVySW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7QUFPQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBSUE7QUFKQTtBQUlBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQVNBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=