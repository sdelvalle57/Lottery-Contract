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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Ethereum\\Worldpay\\lottery-contract\\components\\NumberPicker.js';


var NumberPicker = function (_Component) {
    (0, _inherits3.default)(NumberPicker, _Component);

    function NumberPicker() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, NumberPicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NumberPicker.__proto__ || (0, _getPrototypeOf2.default)(NumberPicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            cells: [],
            numbers: [],
            numbersObj: [],
            finalNumbers: []

        }, _this.sortFinalNumbers = function () {
            var finalNumbers = _this.state.numbers.sort(function (a, b) {
                return a - b;
            });
            _this.setState({ finalNumbers: finalNumbers });
            if (finalNumbers.length < 6) {
                _this.props.callback({ numbers6: '', numbers5: [], numbers4: [] });
                return;
            }
            var numbers6 = _this.convertToBytes(finalNumbers);
            var numbers5 = _this.convertEachToBytes(_this.k_combinations(finalNumbers, 5));
            var numbers4 = _this.convertEachToBytes(_this.k_combinations(finalNumbers, 4));
            console.log(finalNumbers);
            console.log(numbers6);
            console.log(numbers5);
            console.log(numbers4);
            _this.props.callback(numbers6, numbers5, numbers4);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(NumberPicker, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var cells = [];
            var numbersObj = [];
            for (var j = 0; j < 9; j++) {
                cells[j] = j;
            }
            for (var i = 1; i <= 45; i++) {
                numbersObj[i] = { selected: false };
            }
            this.setState({ cells: cells, numbersObj: numbersObj });
        }
    }, {
        key: 'cellClick',
        value: function cellClick(item, e) {
            var numbersObj = this.state.numbersObj;
            var numbers = this.state.numbers;
            var index = numbers.indexOf(item);
            if (index > -1) {
                numbers.splice(index, 1);
                numbersObj[item].selected = false;
            } else if (numbers.length < 6) {
                numbers.push(item);
                numbersObj[item].selected = true;
            }
            this.sortFinalNumbers();
            this.setState({ numbersObj: numbersObj, numbers: numbers });
        }
    }, {
        key: 'checkSelected',
        value: function checkSelected(item) {
            for (var j = 0; j < this.state.numbers.length; j++) {
                if (this.state.numbers[j] == item) return true;
            }
            return false;
        }
    }, {
        key: 'convertToBytes',
        value: function convertToBytes(numbers) {
            var final = '';
            for (var i = 0; i < numbers.length; i++) {
                var hexNumber = numbers[i].toString(16);
                if (hexNumber.length == 1) hexNumber = '0' + hexNumber;
                final += hexNumber;
            }
            return '0x' + final;
        }
    }, {
        key: 'convertEachToBytes',
        value: function convertEachToBytes(combs) {
            var combsBytes = [];
            for (var i = 0; i < combs.length; i++) {
                combsBytes[i] = this.convertToBytes(combs[i]);
            }
            return combsBytes;
        }
    }, {
        key: 'k_combinations',
        value: function k_combinations(set, k) {
            var i = void 0,
                j = void 0,
                combs = void 0,
                head = void 0,
                tailcombs = void 0;
            if (k > set.length || k <= 0) {
                return [];
            }
            if (k == set.length) {
                return [set];
            }
            if (k == 1) {
                combs = [];
                for (i = 0; i < set.length; i++) {
                    combs.push([set[i]]);
                }
                return combs;
            }
            combs = [];
            for (i = 0; i < set.length - k + 1; i++) {
                head = set.slice(i, i + 1);
                tailcombs = this.k_combinations(set.slice(i + 1), k - 1);
                for (j = 0; j < tailcombs.length; j++) {
                    var comb = head.concat(tailcombs[j]);
                    comb = comb.sort(function (a, b) {
                        return a - b;
                    });
                    combs.push(comb);
                }
            }
            return combs;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(_semanticUiReact.Table, { celled: true, textAlign: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, { colSpan: '9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, 'Pick 6 Numbers'))), _react2.default.createElement(_semanticUiReact.Table.Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 125
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + 1),
                    key: i + 1,
                    warning: _this2.state.numbersObj[i + 1].selected,
                    selectable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 129
                    }
                }, _react2.default.createElement('a', { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 134
                    }
                }, i + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                }
            }, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length + 1),
                    key: i + _this2.state.cells.length + 1,
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length + 1].selected,
                    selectable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 141
                    }
                }, _react2.default.createElement('a', { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 146
                    }
                }, i + _this2.state.cells.length + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                }
            }, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length * 2 + 1),
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length * 2 + 1].selected,
                    key: i + _this2.state.cells.length * 2 + 1,
                    selectable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 152
                    }
                }, _react2.default.createElement('a', { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 157
                    }
                }, i + _this2.state.cells.length * 2 + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 161
                }
            }, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length * 3 + 1),
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length * 3 + 1].selected,
                    key: i + _this2.state.cells.length * 3 + 1,
                    selectable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 163
                    }
                }, _react2.default.createElement('a', { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 168
                    }
                }, i + _this2.state.cells.length * 3 + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 171
                }
            }, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length * 4 + 1),
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length * 4 + 1].selected,
                    key: i + _this2.state.cells.length * 4 + 1,
                    selectable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 173
                    }
                }, _react2.default.createElement('a', { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 178
                    }
                }, i + _this2.state.cells.length * 4 + 1));
            }))), _react2.default.createElement(_semanticUiReact.Table.Footer, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 183
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 184
                }
            }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, { colSpan: '9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 185
                }
            }, _react2.default.createElement(_semanticUiReact.Menu, { floated: 'right', pagination: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 186
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 188
                }
            }, this.state.finalNumbers[0]), _react2.default.createElement(_semanticUiReact.Menu.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 189
                }
            }, this.state.finalNumbers[1]), _react2.default.createElement(_semanticUiReact.Menu.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 190
                }
            }, this.state.finalNumbers[2]), _react2.default.createElement(_semanticUiReact.Menu.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 191
                }
            }, this.state.finalNumbers[3]), _react2.default.createElement(_semanticUiReact.Menu.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 192
                }
            }, this.state.finalNumbers[4]), _react2.default.createElement(_semanticUiReact.Menu.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 193
                }
            }, this.state.finalNumbers[5]))))));
        }
    }]);

    return NumberPicker;
}(_react.Component);

exports.default = NumberPicker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE51bWJlclBpY2tlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkljb24iLCJNZW51IiwiVGFibGUiLCJUYWJsZUJvZHkiLCJOdW1iZXJQaWNrZXIiLCJzdGF0ZSIsImNlbGxzIiwibnVtYmVycyIsIm51bWJlcnNPYmoiLCJmaW5hbE51bWJlcnMiLCJzb3J0RmluYWxOdW1iZXJzIiwic29ydCIsImEiLCJiIiwic2V0U3RhdGUiLCJsZW5ndGgiLCJwcm9wcyIsImNhbGxiYWNrIiwibnVtYmVyczYiLCJudW1iZXJzNSIsIm51bWJlcnM0IiwiY29udmVydFRvQnl0ZXMiLCJjb252ZXJ0RWFjaFRvQnl0ZXMiLCJrX2NvbWJpbmF0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJqIiwiaSIsInNlbGVjdGVkIiwiaXRlbSIsImUiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJwdXNoIiwiZmluYWwiLCJoZXhOdW1iZXIiLCJ0b1N0cmluZyIsImNvbWJzIiwiY29tYnNCeXRlcyIsInNldCIsImsiLCJoZWFkIiwidGFpbGNvbWJzIiwic2xpY2UiLCJjb21iIiwiY29uY2F0IiwibWFwIiwiY2VsbENsaWNrIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU0sQUFBTzs7Ozs7OztJQUV0QixBOzs7Ozs7Ozs7Ozs7Ozs0TkFFRixBO21CQUFRLEFBQ0csQUFDUDtxQkFGSSxBQUVLLEFBQ1Q7d0JBSEksQUFHUSxBQUNaOzBCQUpJLEEsQUFJVTs7QUFKVixBQUNKLGlCLEFBMENKLG1CQUFtQixZQUFLLEFBQ3BCO2dCQUFNLHFCQUFlLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsS0FBSyxVQUFBLEFBQVUsR0FBVixBQUFhLEdBQUcsQUFBRzt1QkFBTyxJQUFQLEFBQVcsQUFBSztBQUFoRixBQUFxQixBQUNyQixhQURxQjtrQkFDckIs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Z0NBQUEsQUFBYTtBQUFiO0FBQUEsb0JBQWEsQUFBSyxNQUFMLEFBQVcsYUFKNUIsQUFJSSxBQUFhLEFBQXdCLEFBQ3JDLHFCQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFBYTtBQUFiO0FBQUEsb0JBQWEsQUFBSyxNQUFMLEFBQVcsYUFMNUIsQUFLSSxBQUFhLEFBQXdCLEFBQ3JDLHFCQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFBYTtBQUFiO0FBQUEsb0JBQWEsQUFBSyxNQUFMLEFBQVcsYUFONUIsQUFNSSxBQUFhLEFBQXdCLEFBQ3JDLHFCQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFBYTtBQUFiO0FBQUEsb0JBQWEsQUFBSyxNQUFMLEFBQVcsYUEzRTVDLEFBQ0ksQUFnRUksQUFDSSxBQUNBLEFBQ0ksQUFPSSxBQUFhLEFBQXdCLEFBUTVEOzs7OztBQXJNc0IsQSxBQXVNM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTnVtYmVyUGlja2VyLmpzIiwic291cmNlUm9vdCI6IkU6L0V0aGVyZXVtL1dvcmxkcGF5L2xvdHRlcnktY29udHJhY3QifQ==