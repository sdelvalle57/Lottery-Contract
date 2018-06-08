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
                _this.props.callback({ numbers6: '' });
                return;
            }
            var numbers6 = _this.convertToBytes(finalNumbers);
            _this.props.callback(numbers6);
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
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(_semanticUiReact.Table, { celled: true, textAlign: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, { colSpan: '9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, 'Pick 6 Numbers'))), _react2.default.createElement(_semanticUiReact.Table.Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + 1),
                    key: i + 1,
                    warning: _this2.state.numbersObj[i + 1].selected,
                    selectable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 82
                    }
                }, _react2.default.createElement('a', { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 87
                    }
                }, i + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length + 1),
                    key: i + _this2.state.cells.length + 1,
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length + 1].selected,
                    selectable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 94
                    }
                }, _react2.default.createElement('a', { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 99
                    }
                }, i + _this2.state.cells.length + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length * 2 + 1),
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length * 2 + 1].selected,
                    key: i + _this2.state.cells.length * 2 + 1,
                    selectable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 105
                    }
                }, _react2.default.createElement('a', { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 110
                    }
                }, i + _this2.state.cells.length * 2 + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length * 3 + 1),
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length * 3 + 1].selected,
                    key: i + _this2.state.cells.length * 3 + 1,
                    selectable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 116
                    }
                }, _react2.default.createElement('a', { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 121
                    }
                }, i + _this2.state.cells.length * 3 + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            }, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length * 4 + 1),
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length * 4 + 1].selected,
                    key: i + _this2.state.cells.length * 4 + 1,
                    selectable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 126
                    }
                }, _react2.default.createElement('a', { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 131
                    }
                }, i + _this2.state.cells.length * 4 + 1));
            }))), _react2.default.createElement(_semanticUiReact.Table.Footer, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 137
                }
            }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, { colSpan: '9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                }
            }, _react2.default.createElement(_semanticUiReact.Menu, { floated: 'right', pagination: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                }
            }, this.state.finalNumbers[0]), _react2.default.createElement(_semanticUiReact.Menu.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 142
                }
            }, this.state.finalNumbers[1]), _react2.default.createElement(_semanticUiReact.Menu.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 143
                }
            }, this.state.finalNumbers[2]), _react2.default.createElement(_semanticUiReact.Menu.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                }
            }, this.state.finalNumbers[3]), _react2.default.createElement(_semanticUiReact.Menu.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145
                }
            }, this.state.finalNumbers[4]), _react2.default.createElement(_semanticUiReact.Menu.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 146
                }
            }, this.state.finalNumbers[5]))))));
        }
    }]);

    return NumberPicker;
}(_react.Component);

exports.default = NumberPicker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE51bWJlclBpY2tlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkljb24iLCJNZW51IiwiVGFibGUiLCJUYWJsZUJvZHkiLCJOdW1iZXJQaWNrZXIiLCJzdGF0ZSIsImNlbGxzIiwibnVtYmVycyIsIm51bWJlcnNPYmoiLCJmaW5hbE51bWJlcnMiLCJzb3J0RmluYWxOdW1iZXJzIiwic29ydCIsImEiLCJiIiwic2V0U3RhdGUiLCJsZW5ndGgiLCJwcm9wcyIsImNhbGxiYWNrIiwibnVtYmVyczYiLCJjb252ZXJ0VG9CeXRlcyIsImoiLCJpIiwic2VsZWN0ZWQiLCJpdGVtIiwiZSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJmaW5hbCIsImhleE51bWJlciIsInRvU3RyaW5nIiwibWFwIiwiY2VsbENsaWNrIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU0sQUFBTzs7Ozs7OztJQUV0QixBOzs7Ozs7Ozs7Ozs7Ozs0TixBQUVGO21CQUFRLEFBQ0csQUFDUDtxQkFGSSxBQUVLLEFBQ1Q7d0JBSEksQUFHUSxBQUNaOzBCQUpJLEFBSVUsQTs7QUFKVixBQUNKLGlCQTBDSixBLG1CQUFtQixZQUFLLEFBQ3BCO2dCQUFNLHFCQUFlLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsS0FBSyxVQUFBLEFBQVUsR0FBVixBQUFhLEdBQUcsQUFBRzt1QkFBTyxJQUFQLEFBQVcsQUFBSztBQUFoRixBQUFxQixBQUNyQixhQURxQjtrQkFDckIsQUFBSyxTQUFTLEVBQUMsY0FBZixBQUFjLEFBQ2Q7Z0JBQUcsYUFBQSxBQUFhLFNBQWhCLEFBQXVCLEdBQUUsQUFDckI7c0JBQUEsQUFBSyxNQUFMLEFBQVcsU0FBUyxFQUFDLFVBQXJCLEFBQW9CLEFBQVcsQUFDL0I7QUFDSDtBQUNEO2dCQUFNLFdBQVcsTUFBQSxB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QkFBQTtnQ0FBQSxBQUVJO0FBRko7K0JBRUssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUFhO0FBQWI7QUFBQSxvQkFBYSxBQUFLLE1BQUwsQUFBVyxhQUY1QixBQUVJLEFBQWEsQUFBd0IsQUFDckMscUJBQUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUFhO0FBQWI7QUFBQSxvQkFBYSxBQUFLLE1BQUwsQUFBVyxhQUg1QixBQUdJLEFBQWEsQUFBd0IsQUFDckMscUJBQUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUFhO0FBQWI7QUFBQSxvQkFBYSxBQUFLLE1BQUwsQUFBVyxhQUo1QixBQUlJLEFBQWEsQUFBd0IsQUFDckMscUJBQUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUFhO0FBQWI7QUFBQSxvQkFBYSxBQUFLLE1BQUwsQUFBVyxhQUw1QixBQUtJLEFBQWEsQUFBd0IsQUFDckMscUJBQUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUFhO0FBQWI7QUFBQSxvQkFBYSxBQUFLLE1BQUwsQUFBVyxhQU41QixBQU1JLEFBQWEsQUFBd0IsQUFDckMscUJBQUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUFhO0FBQWI7QUFBQSxvQkFBYSxBQUFLLE1BQUwsQUFBVyxhQTNFNUMsQUFDSSxBQWdFSSxBQUNJLEFBQ0EsQUFDSSxBQU9JLEFBQWEsQUFBd0IsQUFRNUQ7Ozs7O0FBdEpzQixBLEFBd0ozQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJOdW1iZXJQaWNrZXIuanMiLCJzb3VyY2VSb290IjoiRTovRXRoZXJldW0vV29ybGRwYXkvbG90dGVyeS1jb250cmFjdCJ9