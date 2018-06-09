webpackHotUpdate(6,{

/***/ 1300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _semanticUiReact = __webpack_require__(451);

var _factory = __webpack_require__(1301);

var _factory2 = _interopRequireDefault(_factory);

var _Layout = __webpack_require__(1005);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(527);

var _web = __webpack_require__(682);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Ethereum\\Worldpay\\lottery-contract\\pages\\index.js?entry';


var LotteryIndex = function (_Component) {
    (0, _inherits3.default)(LotteryIndex, _Component);

    function LotteryIndex(props) {
        (0, _classCallCheck3.default)(this, LotteryIndex);

        var _this = (0, _possibleConstructorReturn3.default)(this, (LotteryIndex.__proto__ || (0, _getPrototypeOf2.default)(LotteryIndex)).call(this, props));

        _this.state = {
            lotteries: props.lotteries
        };
        return _this;
    }

    (0, _createClass3.default)(LotteryIndex, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var lotteryFactory = (0, _factory2.default)(this.props.factoryAddress, _web2.default);
            var event = lotteryFactory.events.LotteryDeployed({}, function () {
                var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(error, data) {
                    var lotteries;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (!(error == null)) {
                                        _context.next = 5;
                                        break;
                                    }

                                    _context.next = 3;
                                    return lotteryFactory.methods.getLotteries().call();

                                case 3:
                                    lotteries = _context.sent;

                                    _this2.setState({ lotteries: lotteries });

                                case 5:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2);
                }));

                return function (_x, _x2) {
                    return _ref.apply(this, arguments);
                };
            }());
        }
    }, {
        key: 'renderLotteries',
        value: function renderLotteries() {
            var items = this.state.lotteries.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: '/lotteries/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                        }
                    }, 'View Lottery')),
                    fluid: true
                };
            });
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Open lotteries'), _react2.default.createElement(_routes.Link, { route: '/lotteries/new/' + this.props.factoryAddress, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Deploy Lottery',
                icon: 'add',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }))), this.renderLotteries()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var factoryAddress, lotteryFactory, lotteries;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                factoryAddress = "0x6bFcF6E2Ce867C935490f1F96088946a70DBef61";
                                lotteryFactory = (0, _factory2.default)(factoryAddress, _web2.default);
                                _context2.next = 4;
                                return lotteryFactory.methods.getLotteries().call();

                            case 4:
                                lotteries = _context2.sent;
                                return _context2.abrupt('return', { factoryAddress: factoryAddress, lotteries: lotteries });

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps() {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return LotteryIndex;
}(_react.Component);

exports.default = LotteryIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJsb3R0ZXJ5RmFjdG9yeUF0IiwiTGF5b3V0IiwiTGluayIsIndlYjMiLCJMb3R0ZXJ5SW5kZXgiLCJwcm9wcyIsInN0YXRlIiwibG90dGVyaWVzIiwibG90dGVyeUZhY3RvcnkiLCJmYWN0b3J5QWRkcmVzcyIsImV2ZW50IiwiZXZlbnRzIiwiTG90dGVyeURlcGxveWVkIiwiZXJyb3IiLCJkYXRhIiwibWV0aG9kcyIsImdldExvdHRlcmllcyIsImNhbGwiLCJzZXRTdGF0ZSIsIml0ZW1zIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyZW5kZXJMb3R0ZXJpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBc0I7Ozs7QUFDN0IsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVYOzBDQUVGOzswQkFBQSxBQUFZLE9BQU87NENBQUE7O3NKQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLO3VCQUNVLE1BSEEsQUFFZixBQUFhLEFBQ1E7QUFEUixBQUNUO2VBRVA7Ozs7OzRDQVNtQjt5QkFDaEI7O2dCQUFNLGlCQUFpQix1QkFBaUIsS0FBQSxBQUFLLE1BQTdDLEFBQXVCLEFBQTRCLEFBQWdCLEFBQ25FO2dCQUFJLHVCQUFRLEFBQWUsT0FBZixBQUFzQixnQkFBdEIsQUFBc0MsZ0JBQXRDO29HQUEwQyxpQkFBQSxBQUFPLE9BQVAsQUFBYyxNQUFkO3dCQUFBO2tGQUFBO2tDQUFBOzZEQUFBO3FDQUFBOzBDQUM5QyxTQUQ4QyxBQUNyQyxPQURxQzt3REFBQTtBQUFBO0FBQUE7O29EQUFBOzJDQUV0QixlQUFBLEFBQWUsUUFBZixBQUF1QixlQUZELEFBRXRCLEFBQXNDOztxQ0FBeEQ7QUFGd0MseURBRzlDOzsyQ0FBQSxBQUFLLFNBQVMsRUFBRSxXQUg4QixBQUc5QyxBQUFjOztxQ0FIZ0M7cUNBQUE7b0RBQUE7O0FBQUE7Z0NBQUE7QUFBMUM7OzBDQUFBOzRDQUFBO0FBQUE7QUFBWixBQVFILGVBUmU7Ozs7MENBVUUsQUFDZDtnQkFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxtQkFBVyxBQUM5Qzs7NEJBQU8sQUFDSyxBQUNSO2lEQUNJLEFBQUMsOEJBQUssdUJBQU4sQUFBNEI7c0NBQTVCO3dDQUFBLEFBQ0k7QUFESjtxQkFBQSxrQkFDSSxjQUFBOztzQ0FBQTt3Q0FBQTtBQUFBO0FBQUEsdUJBSkwsQUFHQyxBQUNJLEFBR1I7MkJBUEosQUFBTyxBQU9JLEFBRWQ7QUFUVSxBQUNIO0FBRlIsQUFBYyxBQVdkLGFBWGM7aURBV1AsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FJRixBQUNMO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLG1DQUFBLEFBQUMsOEJBQUssMkJBQTBCLEtBQUEsQUFBSyxNQUFyQyxBQUEyQzs4QkFBM0M7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUM7eUJBQUQsQUFDWSxBQUNSO3lCQUZKLEFBRVksQUFDUjtzQkFISixBQUdTLEFBQ0w7eUJBSko7OzhCQUFBO2dDQUpaLEFBRUksQUFDSSxBQUNJLEFBUVA7QUFSTztBQUNJLHVCQVB4QixBQUNJLEFBQ0ksQUFZSyxBQUFLLEFBSXJCOzs7Ozs7Ozs7O2lDQXJEUztBLGlEQUFpQixBLEFBQ2pCO0EsaURBQWlCLHVCLEFBQUEsQUFBaUIsQUFBZ0I7O3VDQUNoQyxlQUFBLEFBQWUsUUFBZixBQUF1QixlQUFlLEEsQUFBdEM7O2lDQUFsQjtBO2tFQUNDLEVBQUUsZ0JBQUYsZ0JBQWtCLFdBQWxCLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFiWSxBLEFBa0UzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9FdGhlcmV1bS9Xb3JsZHBheS9sb3R0ZXJ5LWNvbnRyYWN0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "E:\\Ethereum\\Worldpay\\lottery-contract\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Ethereum\\Worldpay\\lottery-contract\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5mMWVjNjA0YjllM2M3OWRkNjhkYS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/YzAwOWE3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IGxvdHRlcnlGYWN0b3J5QXQgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMydcclxuXHJcbmNsYXNzIExvdHRlcnlJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbG90dGVyaWVzOiBwcm9wcy5sb3R0ZXJpZXMsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICAgICAgY29uc3QgZmFjdG9yeUFkZHJlc3MgPSBcIjB4NmJGY0Y2RTJDZTg2N0M5MzU0OTBmMUY5NjA4ODk0NmE3MERCZWY2MVwiO1xyXG4gICAgICAgIGNvbnN0IGxvdHRlcnlGYWN0b3J5ID0gbG90dGVyeUZhY3RvcnlBdChmYWN0b3J5QWRkcmVzcywgd2ViMyk7XHJcbiAgICAgICAgY29uc3QgbG90dGVyaWVzID0gYXdhaXQgbG90dGVyeUZhY3RvcnkubWV0aG9kcy5nZXRMb3R0ZXJpZXMoKS5jYWxsKCk7XHJcbiAgICAgICAgcmV0dXJuIHsgZmFjdG9yeUFkZHJlc3MsIGxvdHRlcmllcyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IGxvdHRlcnlGYWN0b3J5ID0gbG90dGVyeUZhY3RvcnlBdCh0aGlzLnByb3BzLmZhY3RvcnlBZGRyZXNzLCB3ZWIzKTtcclxuICAgICAgICBsZXQgZXZlbnQgPSBsb3R0ZXJ5RmFjdG9yeS5ldmVudHMuTG90dGVyeURlcGxveWVkKHt9LCBhc3luYyAoZXJyb3IsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvdHRlcmllcyA9IGF3YWl0IGxvdHRlcnlGYWN0b3J5Lm1ldGhvZHMuZ2V0TG90dGVyaWVzKCkuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvdHRlcmllcyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckxvdHRlcmllcygpIHtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuc3RhdGUubG90dGVyaWVzLm1hcChhZGRyZXNzID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9eyBgL2xvdHRlcmllcy8ke2FkZHJlc3N9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlZpZXcgTG90dGVyeTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgZmx1aWQ6IHRydWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+T3BlbiBsb3R0ZXJpZXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXsgYC9sb3R0ZXJpZXMvbmV3LyR7dGhpcy5wcm9wcy5mYWN0b3J5QWRkcmVzc31gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiRGVwbG95IExvdHRlcnlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiYWRkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTG90dGVyaWVzKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb3R0ZXJ5SW5kZXg7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFFQTtBQUNBO0FBSkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBUUE7Ozs7QUFHQTtBQUFBOztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBUkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUFLQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFKQTs7QUFBQTtBQVFBO0FBUkE7QUFDQTs7Ozs7Ozs7OztBQTFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBREE7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==