webpackHotUpdate(5,{

/***/ 391:
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

var _semanticUiReact = __webpack_require__(883);

var _factory = __webpack_require__(490);

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Ethereum\\Worldpay\\lottery-contract\\pages\\index.js?entry';
7;


var LotteryIndex = function (_Component) {
    (0, _inherits3.default)(LotteryIndex, _Component);

    function LotteryIndex() {
        (0, _classCallCheck3.default)(this, LotteryIndex);

        return (0, _possibleConstructorReturn3.default)(this, (LotteryIndex.__proto__ || (0, _getPrototypeOf2.default)(LotteryIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(LotteryIndex, [{
        key: 'renderLotteries',
        value: function renderLotteries() {
            var items = this.props.lotteries.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 16
                        }
                    }, 'View Lottery'),
                    fluid: true
                };
            });
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }), this.renderLotteries(), _react2.default.createElement(_semanticUiReact.Button, {
                content: 'Deploy the first Lottery',
                icon: 'add',
                primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var lotteryFactory, lotteries;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                lotteryFactory = (0, _factory2.default)("0xc074464985abc9b2cf200bf6658ebfd3c9862ea4");
                                _context.next = 3;
                                return lotteryFactory.methods.getLotteries().call();

                            case 3:
                                lotteries = _context.sent;
                                return _context.abrupt('return', { lotteries: lotteries });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return LotteryIndex;
}(_react.Component);

exports.default = LotteryIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJsb3R0ZXJ5RmFjdG9yeUF0IiwiTG90dGVyeUluZGV4IiwiaXRlbXMiLCJwcm9wcyIsImxvdHRlcmllcyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyTG90dGVyaWVzIiwibG90dGVyeUZhY3RvcnkiLCJtZXRob2RzIiwiZ2V0TG90dGVyaWVzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFzQjs7Ozs7OztBQUZZOzs7SUFJbkMsQTs7Ozs7Ozs7Ozs7MENBT2dCLEFBQ2Q7Z0JBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksbUJBQVcsQUFDOUM7OzRCQUFPLEFBQ0ssQUFDUjtpREFBYSxjQUFBOztzQ0FBQTt3Q0FBQTtBQUFBO0FBQUEscUJBQUEsRUFGVixBQUVVLEFBQ2I7MkJBSEosQUFBTyxBQUdJLEFBRWQ7QUFMVSxBQUNIO0FBRlIsQUFBYyxBQU9kLGFBUGM7aURBT1AsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FJRixBQUNMO21DQUFPLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0g7QUFERztBQUFBLGFBQUEsMENBQ0csS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7OEJBQTVCO2dDQURHLEFBQ0gsQUFDQztBQUREO3FCQURHLEFBRUYsQUFBSyxBQUNOLG1DQUFBLEFBQUM7eUJBQUQsQUFDWSxBQUNSO3NCQUZKLEFBRVMsQUFDTDt5QkFISjs4QkFBQTtnQ0FISixBQUFPLEFBR0gsQUFLUDtBQUxPO0FBQ0k7Ozs7Ozs7Ozs7aUNBdEJKO0EsaURBQWlCLHVCQUFBLEFBQWlCLEE7O3VDQUNkLGVBQUEsQUFBZSxRQUFmLEFBQXVCLGVBQXZCLEFBQXNDLEE7O2lDQUF4RDtBO2lFQUNDLEVBQUUsV0FBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSlksQSxBQStCM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovRXRoZXJldW0vV29ybGRwYXkvbG90dGVyeS1jb250cmFjdCJ9

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lMTAxOGM1Yzc1YWIzNmMyYTZjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ODNhOWZiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnOzdcclxuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBsb3R0ZXJ5RmFjdG9yeUF0IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xyXG5cclxuY2xhc3MgTG90dGVyeUluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICAgICAgbGV0IGxvdHRlcnlGYWN0b3J5ID0gbG90dGVyeUZhY3RvcnlBdChcIjB4YzA3NDQ2NDk4NWFiYzliMmNmMjAwYmY2NjU4ZWJmZDNjOTg2MmVhNFwiKTtcclxuICAgICAgICBjb25zdCBsb3R0ZXJpZXMgPSBhd2FpdCBsb3R0ZXJ5RmFjdG9yeS5tZXRob2RzLmdldExvdHRlcmllcygpLmNhbGwoKTtcclxuICAgICAgICByZXR1cm4geyBsb3R0ZXJpZXMgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJMb3R0ZXJpZXMoKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmxvdHRlcmllcy5tYXAoYWRkcmVzcyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogPGE+VmlldyBMb3R0ZXJ5PC9hPixcclxuICAgICAgICAgICAgICAgIGZsdWlkOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4yLjEyL3NlbWFudGljLm1pbi5jc3NcIj48L2xpbms+XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckxvdHRlcmllcygpfVxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiRGVwbG95IHRoZSBmaXJzdCBMb3R0ZXJ5XCJcclxuICAgICAgICAgICAgICAgIGljb249XCJhZGRcIlxyXG4gICAgICAgICAgICAgICAgcHJpbWFyeSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb3R0ZXJ5SW5kZXg7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBSEE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFVQTtBQUFBOztBQUdBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUpBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBS0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFDQTtBQUhBO0FBQUE7QUFLQTtBQUxBO0FBQ0E7Ozs7Ozs7Ozs7QUF0QkE7QUFBQTs7QUFDQTtBQUNBO0FBREE7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==