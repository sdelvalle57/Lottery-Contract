webpackHotUpdate(7,{

/***/ 1181:
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

var _semanticUiReact = __webpack_require__(480);

var _Layout = __webpack_require__(1160);

var _Layout2 = _interopRequireDefault(_Layout);

var _lottery = __webpack_require__(1182);

var _lottery2 = _interopRequireDefault(_lottery);

var _web = __webpack_require__(1005);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Ethereum\\Worldpay\\lottery-contract\\pages\\lotteries\\lottery.js?entry';


var Lottery = function (_Component) {
    (0, _inherits3.default)(Lottery, _Component);

    function Lottery() {
        (0, _classCallCheck3.default)(this, Lottery);

        return (0, _possibleConstructorReturn3.default)(this, (Lottery.__proto__ || (0, _getPrototypeOf2.default)(Lottery)).apply(this, arguments));
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
                header: _web2.default.utils.fromWei(lotteryValue, 'ether'),
                meta: 'The Value of the Lottery is',
                description: 'This is the value of each ticket to enter the Lottery',
                style: { overflowWrap: 'break-word' }
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Lottery Show'), this.renderCards());
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var lottery, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                lottery = (0, _lottery2.default)(props.query.address);
                                _context.next = 3;
                                return lottery.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;
                                return _context.abrupt('return', {
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
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Lottery;
}(_react.Component);

exports.default = Lottery;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxsb3R0ZXJpZXNcXGxvdHRlcnkuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiTGF5b3V0IiwibG90dGVyeUF0Iiwid2ViMyIsIkxvdHRlcnkiLCJwcm9wcyIsImxvdHRlcnlWYWx1ZSIsImRlYWRsaW5lIiwiamFja1BvdCIsIndpbm5pbmdOdW1iZXIiLCJwbGF5ZXJzTGVuZ2h0Iiwid2lubmVyc0xlbmdodCIsImxvdHRlcnlIYXNQbGF5ZWQiLCJsYXN0TG90ZXJ5IiwiZmFjdG9yeUFkZHJlc3MiLCJpdGVtcyIsImhlYWRlciIsInV0aWxzIiwiZnJvbVdlaSIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmVuZGVyQ2FyZHMiLCJsb3R0ZXJ5IiwicXVlcnkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTOztBQUNULEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFVOzs7Ozs7Ozs7SUFHWCxBOzs7Ozs7Ozs7OztzQ0FpQlk7eUJBV04sS0FYTSxBQVdEO2dCQVhDLEFBRU4sc0JBRk0sQUFFTjtnQkFGTSxBQUdOLGtCQUhNLEFBR047Z0JBSE0sQUFJTixpQkFKTSxBQUlOO2dCQUpNLEFBS04sdUJBTE0sQUFLTjtnQkFMTSxBQU1OLHVCQU5NLEFBTU47Z0JBTk0sQUFPTix1QkFQTSxBQU9OO2dCQVBNLEFBUU4sMEJBUk0sQUFRTjtnQkFSTSxBQVNOLG9CQVRNLEFBU047Z0JBVE0sQUFVTix3QkFWTSxBQVVOLEFBR0o7O2dCQUFNO3dCQUVVLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixjQUQvQixBQUNZLEFBQWlDLEFBQ3pDO3NCQUZKLEFBRVUsQUFDTjs2QkFISixBQUdpQixBQUNiO3VCQUFPLEVBQUUsY0FMakIsQUFBYyxBQUNWLEFBSVcsQUFBZ0IsQUFJL0I7QUFSSSxBQUNJLGFBRk07O2lEQVNQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBb0I7OEJBQXBCO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBR0YsQUFDTDttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDRSxzQkFIVixBQUNJLEFBRU0sQUFBSyxBQUdsQjs7Ozs7aUgsQUFoRDRCOzs7OztpQ0FDbkI7QSwwQ0FBVSx1QkFBVSxNQUFBLEFBQU0sTSxBQUFoQixBQUFzQjs7dUNBQ2hCLFFBQUEsQUFBUSxRQUFSLEFBQWdCLGFBQWhCLEFBQTZCLEE7O2lDQUE3QztBOztrREFFWSxRQURYLEFBQ1csQUFBUSxBQUN0Qjs4Q0FBVSxRQUZQLEFBRU8sQUFBUSxBQUNsQjs2Q0FBUyxRQUhOLEFBR00sQUFBUSxBQUNqQjttREFBZSxRQUpaLEFBSVksQUFBUSxBQUN2QjttREFBZSxRQUxaLEFBS1ksQUFBUSxBQUN2QjttREFBZSxRQU5aLEFBTVksQUFBUSxBQUN2QjtzREFBa0IsUUFQZixBQU9lLEFBQVEsQUFDMUI7Z0RBQVksUUFSVCxBQVFTLEFBQVEsQUFDcEI7b0RBQWdCLFFBVGIsQUFTYSxBQUFRLEE7QUFUckIsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUxVLEEsQUFvRHRCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImxvdHRlcnkuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovRXRoZXJldW0vV29ybGRwYXkvbG90dGVyeS1jb250cmFjdCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "E:\\Ethereum\\Worldpay\\lottery-contract\\pages\\lotteries\\lottery.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Ethereum\\Worldpay\\lottery-contract\\pages\\lotteries\\lottery.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/lotteries\\lottery")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy41NDk2ZTk4NDkyYjUxY2Y0MGMwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG90dGVyaWVzL2xvdHRlcnkuanM/MThmNGQ2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBsb3R0ZXJ5QXQgZnJvbSAnLi4vLi4vZXRoZXJldW0vbG90dGVyeSc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5cclxuXHJcbmNsYXNzIExvdHRlcnkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IGxvdHRlcnkgPSBsb3R0ZXJ5QXQocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcbiAgICAgICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGxvdHRlcnkubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxvdHRlcnlWYWx1ZTogc3VtbWFyeVswXSxcclxuICAgICAgICAgICAgZGVhZGxpbmU6IHN1bW1hcnlbMV0sXHJcbiAgICAgICAgICAgIGphY2tQb3Q6IHN1bW1hcnlbMl0sXHJcbiAgICAgICAgICAgIHdpbm5pbmdOdW1iZXI6IHN1bW1hcnlbM10sXHJcbiAgICAgICAgICAgIHBsYXllcnNMZW5naHQ6IHN1bW1hcnlbNF0sXHJcbiAgICAgICAgICAgIHdpbm5lcnNMZW5naHQ6IHN1bW1hcnlbNV0sXHJcbiAgICAgICAgICAgIGxvdHRlcnlIYXNQbGF5ZWQ6IHN1bW1hcnlbNl0sXHJcbiAgICAgICAgICAgIGxhc3RMb3Rlcnk6IHN1bW1hcnlbN10sXHJcbiAgICAgICAgICAgIGZhY3RvcnlBZGRyZXNzOiBzdW1tYXJ5WzhdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNhcmRzKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgbG90dGVyeVZhbHVlLFxyXG4gICAgICAgICAgICBkZWFkbGluZSxcclxuICAgICAgICAgICAgamFja1BvdCxcclxuICAgICAgICAgICAgd2lubmluZ051bWJlcixcclxuICAgICAgICAgICAgcGxheWVyc0xlbmdodCxcclxuICAgICAgICAgICAgd2lubmVyc0xlbmdodCxcclxuICAgICAgICAgICAgbG90dGVyeUhhc1BsYXllZCxcclxuICAgICAgICAgICAgbGFzdExvdGVyeSxcclxuICAgICAgICAgICAgZmFjdG9yeUFkZHJlc3NcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogd2ViMy51dGlscy5mcm9tV2VpKGxvdHRlcnlWYWx1ZSwgJ2V0aGVyJyksXHJcbiAgICAgICAgICAgICAgICBtZXRhOiAnVGhlIFZhbHVlIG9mIHRoZSBMb3R0ZXJ5IGlzJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyB0aGUgdmFsdWUgb2YgZWFjaCB0aWNrZXQgdG8gZW50ZXIgdGhlIExvdHRlcnknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXsgaXRlbXMgfSAvPjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxoMz5Mb3R0ZXJ5IFNob3c8L2gzPlxyXG4gICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckNhcmRzKCkgfVxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvdHRlcnk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvbG90dGVyaWVzL2xvdHRlcnkuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQVdBO0FBVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBSEE7QUFDQTtBQU1BO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBM0NBO0FBQUE7O0FBQ0E7QUFDQTtBQURBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9