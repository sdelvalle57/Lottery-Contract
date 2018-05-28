webpackHotUpdate(6,{

/***/ 1179:
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

var _reactTimestamp = __webpack_require__(1182);

var _reactTimestamp2 = _interopRequireDefault(_reactTimestamp);

var _humanizeDuration = __webpack_require__(1183);

var _humanizeDuration2 = _interopRequireDefault(_humanizeDuration);

var _reactNumberFormat = __webpack_require__(1184);

var _reactNumberFormat2 = _interopRequireDefault(_reactNumberFormat);

var _routes = __webpack_require__(726);

var _Layout = __webpack_require__(1160);

var _Layout2 = _interopRequireDefault(_Layout);

var _lottery = __webpack_require__(1180);

var _lottery2 = _interopRequireDefault(_lottery);

var _web = __webpack_require__(1005);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4yOWQ4M2RjY2Y5ODMyODQzNDY3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG90dGVyaWVzL2xvdHRlcnkuanM/MzdiNWUyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uLCBHcmlkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgVGltZXN0YW1wIGZyb20gJ3JlYWN0LXRpbWVzdGFtcCc7XHJcbmltcG9ydCBodW1hbml6ZSBmcm9tICdodW1hbml6ZS1kdXJhdGlvbic7XHJcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSAncmVhY3QtbnVtYmVyLWZvcm1hdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgbG90dGVyeUF0IGZyb20gJy4uLy4uL2V0aGVyZXVtL2xvdHRlcnknO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcclxuXHJcblxyXG5cclxuY2xhc3MgTG90dGVyeSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgbG90dGVyeSA9IGxvdHRlcnlBdChwcm9wcy5xdWVyeS5hZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgbG90dGVyeS5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbG90dGVyeVZhbHVlOiBzdW1tYXJ5WzBdLFxyXG4gICAgICAgICAgICBkZWFkbGluZTogc3VtbWFyeVsxXSxcclxuICAgICAgICAgICAgamFja1BvdDogc3VtbWFyeVsyXSxcclxuICAgICAgICAgICAgd2lubmluZ051bWJlcjogc3VtbWFyeVszXSxcclxuICAgICAgICAgICAgcGxheWVyc0xlbmdodDogc3VtbWFyeVs0XSxcclxuICAgICAgICAgICAgd2lubmVyc0xlbmdodDogc3VtbWFyeVs1XSxcclxuICAgICAgICAgICAgbG90dGVyeUhhc1BsYXllZDogc3VtbWFyeVs2XSxcclxuICAgICAgICAgICAgbGFzdExvdGVyeTogc3VtbWFyeVs3XSxcclxuICAgICAgICAgICAgZmFjdG9yeUFkZHJlc3M6IHN1bW1hcnlbOF1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2FyZHMoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBsb3R0ZXJ5VmFsdWUsXHJcbiAgICAgICAgICAgIGRlYWRsaW5lLFxyXG4gICAgICAgICAgICBqYWNrUG90LFxyXG4gICAgICAgICAgICB3aW5uaW5nTnVtYmVyLFxyXG4gICAgICAgICAgICBwbGF5ZXJzTGVuZ2h0LFxyXG4gICAgICAgICAgICB3aW5uZXJzTGVuZ2h0LFxyXG4gICAgICAgICAgICBsb3R0ZXJ5SGFzUGxheWVkLFxyXG4gICAgICAgICAgICBsYXN0TG90ZXJ5LFxyXG4gICAgICAgICAgICBmYWN0b3J5QWRkcmVzc1xyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiB3ZWIzLnV0aWxzLmZyb21XZWkobG90dGVyeVZhbHVlLCAnZXRoZXInKSArIFwiIEV0aGVyXCIsXHJcbiAgICAgICAgICAgICAgICBtZXRhOiAnV2UgYWNjZXB0IGp1c3QgRXRoZXIgYXMgcGF5bWVudCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgdGhlIHZhbHVlIG9mIGVhY2ggdGlja2V0IHRvIGVudGVyIHRoZSBMb3R0ZXJ5JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiA8VGltZXN0YW1wIHRpbWU9e2RlYWRsaW5lfSBmb3JtYXQ9J2Z1bGwnIGluY2x1ZGVEYXkvPixcclxuICAgICAgICAgICAgICAgIG1ldGE6ICdMb3R0ZXJ5IHNlbGxpbmcgJyt0aGlzLmdldERlYWRsaW5lKGRlYWRsaW5lKSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnV2Ugc2FsZSB0aWNrZXRzIHVudGlscyB0aGlzIGRhdGUnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShqYWNrUG90LCAnZXRoZXInKSArIFwiIEV0aGVyXCIsXHJcbiAgICAgICAgICAgICAgICBtZXRhOiAnTG90dGVyeSBKYWNrcG90JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBqYWNrcG90IHdpbGwgYmUgcmVsZWFzZSB0byB0aGUgd2lubmVycycsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogcGxheWVyc0xlbmdodCxcclxuICAgICAgICAgICAgICAgIG1ldGE6ICdQYXJ0aWNpcGFudHMnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdOdW1iZXIgb2YgdGlja2V0cyBzb2xkJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiB3aW5uaW5nTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgbWV0YTogJ0FuZCB0aGUgd2lubmVyIGlzLi4uJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyB0aGUgbG90dGVyeSB3aW5uZXIgbnVtYmVyJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiB3aW5uZXJzTGVuZ2h0LFxyXG4gICAgICAgICAgICAgICAgbWV0YTogJ1dpbm5lcnMnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdOdW1iZXIgb2Ygd2lubmVycycsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhyZWY6IGAvbG90dGVyaWVzLyR7bGFzdExvdGVyeX1gLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBsYXN0TG90ZXJ5LFxyXG4gICAgICAgICAgICAgICAgbWV0YTogJ0FkZHJlc3Mgb2YgcHJldmlvdXMgbG90dGVyeScsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXsgYC9sb3R0ZXJpZXMvJHtsYXN0TG90ZXJ5fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5WaWV3IExvdHRlcnk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiksXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9eyBpdGVtcyB9IC8+O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckVudGVyQ2FyZCgpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGxvdHRlcnlWYWx1ZSxcclxuICAgICAgICAgICAgbG90dGVyeUhhc1BsYXllZFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6ICdFbnRlciB0aGUgbG90dGVyeScsXHJcbiAgICAgICAgICAgICAgICBtZXRhOiAnVmFsdWUgb2YgdGhlIGxvdHRlcnkgaXMgJysgd2ViMy51dGlscy5mcm9tV2VpKGxvdHRlcnlWYWx1ZSwgJ2V0aGVyJykgKyBcIiBFdGhlclwiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkJ1eUxvdHRlcnkoKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbmVnYXRpdmU+RW5kZWQ8L0J1dHRvbj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcG9zaXRpdmUgb25DbGljaz17dGhpcy5vbkNsaWNrfT5FbnRlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9eyBpdGVtcyB9IC8+O1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkJ1eUxvdHRlcnkoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBkZWFkbGluZSxcclxuICAgICAgICAgICAgbG90dGVyeUhhc1BsYXllZFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gbG90dGVyeUhhc1BsYXllZCB8fCBkZWFkbGluZSA8IERhdGUubm93KCkvMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZWFkbGluZShkZWFkbGluZSkge1xyXG4gICAgICAgIGRlYWRsaW5lID0gcGFyc2VJbnQoZGVhZGxpbmUqMTAwMCk7XHJcbiAgICAgICAgY29uc3QgYW5zID0gaHVtYW5pemUoZGVhZGxpbmUtRGF0ZS5ub3coKSwgeyBsYXJnZXN0OiAyIH0pO1xyXG4gICAgICAgIHJldHVybiAoZGVhZGxpbmUgLSBEYXRlLm5vdygpKSA8IDAgPyAnZW5kZWQgJythbnMrJyBhZ28nOidlbmRzIGluICcrYW5zO1xyXG4gICAgICAgIC8vcmV0dXJuIGRlYWRsaW5lIDwgcGFyc2VJbnQoRGF0ZS5ub3coKSkgPyAnZW5kcyBpbiAnK2FuczogJ2VuZGVkJ2FucztcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICB0aW1lciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGN1cnJlbnRDb3VudDogdGhpcy5zdGF0ZS5jdXJyZW50Q291bnQgKyAxXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmN1cnJlbnRDb3VudCAlIDUgPT0gMCkgeyBcclxuICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8aDM+TG90dGVyeSBTaG93PC9oMz5cclxuICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aCA9IHsgMTAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckNhcmRzKCkgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoID0geyA2IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJFbnRlckNhcmQoKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvdHRlcnk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvbG90dGVyaWVzL2xvdHRlcnkuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUF5R0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7Ozs7OztBQTVHQTtBQVdBO0FBVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBSEE7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFBQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBUEE7QUFDQTtBQVVBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUFHQTtBQUlBO0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFTQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBR0E7QUFJQTtBQUZBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTs7OztBQVlBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQU9BOzs7Ozs7Ozs7O0FBaEpBO0FBQUE7O0FBQ0E7QUFDQTtBQURBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9