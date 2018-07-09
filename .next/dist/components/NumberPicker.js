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
            if (finalNumbers.length < 4) {
                _this.props.callback({ number4: '', numbers3: [] });
                return;
            }
            var number4 = _this.convertToBytes(finalNumbers);
            var numbers3 = _this.convertEachToBytes(_this.k_combinations(finalNumbers, 3));
            _this.props.callback(number4, numbers3);
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
            for (var i = 1; i <= 100; i++) {
                if (i != 100) numbersObj[i] = { selected: false };
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
                    lineNumber: 115
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                }
            }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, { colSpan: '9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, 'Pick 4 Numbers'))), _react2.default.createElement(_semanticUiReact.Table.Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            }, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + 1),
                    key: i + 1,
                    warning: _this2.state.numbersObj[i + 1].selected,
                    selectable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 125
                    }
                }, _react2.default.createElement('a', { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 130
                    }
                }, i + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
                }
            }, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length + 1),
                    key: i + _this2.state.cells.length + 1,
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length + 1].selected,
                    selectable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 137
                    }
                }, _react2.default.createElement('a', { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 142
                    }
                }, i + _this2.state.cells.length + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 146
                }
            }, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length * 2 + 1),
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length * 2 + 1].selected,
                    key: i + _this2.state.cells.length * 2 + 1,
                    selectable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 148
                    }
                }, _react2.default.createElement('a', { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 153
                    }
                }, i + _this2.state.cells.length * 2 + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157
                }
            }, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length * 3 + 1),
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length * 3 + 1].selected,
                    key: i + _this2.state.cells.length * 3 + 1,
                    selectable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 159
                    }
                }, _react2.default.createElement('a', { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 164
                    }
                }, i + _this2.state.cells.length * 3 + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 167
                }
            }, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length * 4 + 1),
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length * 4 + 1].selected,
                    key: i + _this2.state.cells.length * 4 + 1,
                    selectable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 169
                    }
                }, _react2.default.createElement('a', { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 174
                    }
                }, i + _this2.state.cells.length * 4 + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 178
                }
            }, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length * 5 + 1),
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length * 5 + 1].selected,
                    key: i + _this2.state.cells.length * 5 + 1,
                    selectable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 180
                    }
                }, _react2.default.createElement('a', { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 185
                    }
                }, i + _this2.state.cells.length * 5 + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 189
                }
            }, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length * 7 + 1),
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length * 7 + 1].selected,
                    key: i + _this2.state.cells.length * 7 + 1,
                    selectable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 191
                    }
                }, _react2.default.createElement('a', { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 196
                    }
                }, i + _this2.state.cells.length * 7 + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 200
                }
            }, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length * 8 + 1),
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length * 8 + 1].selected,
                    key: i + _this2.state.cells.length * 8 + 1,
                    selectable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 202
                    }
                }, _react2.default.createElement('a', { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 207
                    }
                }, i + _this2.state.cells.length * 8 + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 211
                }
            }, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length * 9 + 1),
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length * 9 + 1].selected,
                    key: i + _this2.state.cells.length * 9 + 1,
                    selectable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 213
                    }
                }, _react2.default.createElement('a', { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 218
                    }
                }, i + _this2.state.cells.length * 9 + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 222
                }
            }, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length * 10 + 1),
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length * 10 + 1].selected,
                    key: i + _this2.state.cells.length * 10 + 1,
                    selectable: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 224
                    }
                }, _react2.default.createElement('a', { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 229
                    }
                }, i + _this2.state.cells.length * 10 + 1));
            }))), _react2.default.createElement(_semanticUiReact.Table.Footer, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 236
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 237
                }
            }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, { colSpan: '9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 238
                }
            }, _react2.default.createElement(_semanticUiReact.Menu, { floated: 'right', pagination: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 239
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 241
                }
            }, this.state.finalNumbers[0]), _react2.default.createElement(_semanticUiReact.Menu.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 242
                }
            }, this.state.finalNumbers[1]), _react2.default.createElement(_semanticUiReact.Menu.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 243
                }
            }, this.state.finalNumbers[2]), _react2.default.createElement(_semanticUiReact.Menu.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 244
                }
            }, this.state.finalNumbers[3]))))));
        }
    }]);

    return NumberPicker;
}(_react.Component);

exports.default = NumberPicker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE51bWJlclBpY2tlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkljb24iLCJNZW51IiwiVGFibGUiLCJUYWJsZUJvZHkiLCJOdW1iZXJQaWNrZXIiLCJzdGF0ZSIsImNlbGxzIiwibnVtYmVycyIsIm51bWJlcnNPYmoiLCJmaW5hbE51bWJlcnMiLCJzb3J0RmluYWxOdW1iZXJzIiwic29ydCIsImEiLCJiIiwic2V0U3RhdGUiLCJsZW5ndGgiLCJwcm9wcyIsImNhbGxiYWNrIiwibnVtYmVyNCIsIm51bWJlcnMzIiwiY29udmVydFRvQnl0ZXMiLCJjb252ZXJ0RWFjaFRvQnl0ZXMiLCJrX2NvbWJpbmF0aW9ucyIsImoiLCJpIiwic2VsZWN0ZWQiLCJpdGVtIiwiZSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJmaW5hbCIsImhleE51bWJlciIsInRvU3RyaW5nIiwiY29tYnMiLCJjb21ic0J5dGVzIiwic2V0IiwiayIsImhlYWQiLCJ0YWlsY29tYnMiLCJzbGljZSIsImNvbWIiLCJjb25jYXQiLCJtYXAiLCJjZWxsQ2xpY2siLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTSxBQUFPOzs7Ozs7O0ksQUFFdEI7Ozs7Ozs7Ozs7Ozs7OzROQUVGLEE7bUJBQVEsQUFDRyxBQUNQO3FCQUZJLEFBRUssQUFDVDt3QkFISSxBQUdRLEFBQ1o7MEJBSkksQSxBQUlVOztBQUpWLEFBQ0osaUIsQUEyQ0osbUJBQW1CLFlBQUssQUFDcEI7Z0JBQU0scUJBQWUsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixLQUFLLFVBQUEsQUFBVSxHQUFWLEFBQWEsR0FBRyxBQUFHO3VCQUFPLElBQVAsQUFBVyxBQUFLO0FBQWhGLEFBQXFCLEFBQ3JCLGFBRHFCO2tCQUNyQixBQUFLLFNBQVMsRUFBQyxjQUFmLEFBQWMsQUFD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dUJBQUEsQUFBTzs2QkFDTSxPQUFBLEFBQUssVUFBTCxBQUFlLGFBQVcsSUFBRSxPQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsU0FBbkIsQUFBMEIsS0FEakUsQUFDYSxBQUF1RCxBQUNoRTs2QkFBUyxPQUFBLEFBQUssTUFBTCxBQUFXLFdBQVcsSUFBRSxPQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsU0FBbkIsQUFBMEIsS0FBaEQsQUFBbUQsR0FGaEUsQUFFbUUsQUFDL0Q7eUJBQUssSUFBRSxPQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsU0FBbkIsQUFBMEIsS0FIbkMsQUFHc0MsQUFDbEM7Z0NBSko7a0NBQUE7b0NBQUEsQUFLUTtBQUxSO0FBQ0ksaUJBREosa0JBS1EsY0FBQSxPQUFHLE1BQUgsQUFBUTtrQ0FBUjtvQ0FBQSxBQUFhO0FBQWI7dUJBQWUsT0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLFNBQW5CLEFBQTBCLEtBTjdCLEFBQ2xCLEFBS1EsQUFBMEM7QUFsSGxFLEFBTUksQUFxR0ksQUFDSyxBQWFULGtDQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQyxjQUFELHVCQUFBLEFBQU8sY0FBVyxTQUFsQixBQUEwQjs4QkFBMUI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsdUNBQUssU0FBTixBQUFjLFNBQVEsWUFBdEI7OEJBQUE7Z0NBQUEsQUFFSTtBQUZKOytCQUVLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFBYTtBQUFiO0FBQUEsb0JBQWEsQUFBSyxNQUFMLEFBQVcsYUFGNUIsQUFFSSxBQUFhLEFBQXdCLEFBQ3JDLHFCQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFBYTtBQUFiO0FBQUEsb0JBQWEsQUFBSyxNQUFMLEFBQVcsYUFINUIsQUFHSSxBQUFhLEFBQXdCLEFBQ3JDLHFCQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFBYTtBQUFiO0FBQUEsb0JBQWEsQUFBSyxNQUFMLEFBQVcsYUFKNUIsQUFJSSxBQUFhLEFBQXdCLEFBQ3JDLHFCQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFBYTtBQUFiO0FBQUEsb0JBQWEsQUFBSyxNQUFMLEFBQVcsYUFsSTVDLEFBQ0ksQUF5SEksQUFDSSxBQUNBLEFBQ0ksQUFLSSxBQUFhLEFBQXdCLEFBTzVEOzs7OztBQXZQc0IsQSxBQXlQM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTnVtYmVyUGlja2VyLmpzIiwic291cmNlUm9vdCI6IkU6L0V0aGVyZXVtL1dvcmxkcGF5L2xvdHRlcnktY29udHJhY3QifQ==