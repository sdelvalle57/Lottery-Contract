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
            } else if (numbers.length < 4) {
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

            return _react2.default.createElement(_semanticUiReact.Table, { celled: true, textAlign: 'center' }, _react2.default.createElement(_semanticUiReact.Table.Header, null, _react2.default.createElement(_semanticUiReact.Table.Row, null, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, { colSpan: '9' }, 'Pick 4 Numbers'))), _react2.default.createElement(_semanticUiReact.Table.Body, null, _react2.default.createElement(_semanticUiReact.Table.Row, null, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + 1),
                    key: i + 1,
                    warning: _this2.state.numbersObj[i + 1].selected,
                    selectable: true }, _react2.default.createElement('a', { href: '#' }, i + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, null, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length + 1),
                    key: i + _this2.state.cells.length + 1,
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length + 1].selected,
                    selectable: true }, _react2.default.createElement('a', { href: '#' }, i + _this2.state.cells.length + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, null, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length * 2 + 1),
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length * 2 + 1].selected,
                    key: i + _this2.state.cells.length * 2 + 1,
                    selectable: true }, _react2.default.createElement('a', { href: '#' }, i + _this2.state.cells.length * 2 + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, null, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length * 3 + 1),
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length * 3 + 1].selected,
                    key: i + _this2.state.cells.length * 3 + 1,
                    selectable: true }, _react2.default.createElement('a', { href: '#' }, i + _this2.state.cells.length * 3 + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, null, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length * 4 + 1),
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length * 4 + 1].selected,
                    key: i + _this2.state.cells.length * 4 + 1,
                    selectable: true }, _react2.default.createElement('a', { href: '#' }, i + _this2.state.cells.length * 4 + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, null, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length * 5 + 1),
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length * 5 + 1].selected,
                    key: i + _this2.state.cells.length * 5 + 1,
                    selectable: true }, _react2.default.createElement('a', { href: '#' }, i + _this2.state.cells.length * 5 + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, null, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length * 7 + 1),
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length * 7 + 1].selected,
                    key: i + _this2.state.cells.length * 7 + 1,
                    selectable: true }, _react2.default.createElement('a', { href: '#' }, i + _this2.state.cells.length * 7 + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, null, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length * 8 + 1),
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length * 8 + 1].selected,
                    key: i + _this2.state.cells.length * 8 + 1,
                    selectable: true }, _react2.default.createElement('a', { href: '#' }, i + _this2.state.cells.length * 8 + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, null, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length * 9 + 1),
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length * 9 + 1].selected,
                    key: i + _this2.state.cells.length * 9 + 1,
                    selectable: true }, _react2.default.createElement('a', { href: '#' }, i + _this2.state.cells.length * 9 + 1));
            })), _react2.default.createElement(_semanticUiReact.Table.Row, null, this.state.cells.map(function (i) {
                return _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    onClick: _this2.cellClick.bind(_this2, i + _this2.state.cells.length * 10 + 1),
                    warning: _this2.state.numbersObj[i + _this2.state.cells.length * 10 + 1].selected,
                    key: i + _this2.state.cells.length * 10 + 1,
                    selectable: true }, _react2.default.createElement('a', { href: '#' }, i + _this2.state.cells.length * 10 + 1));
            }))), _react2.default.createElement(_semanticUiReact.Table.Footer, null, _react2.default.createElement(_semanticUiReact.Table.Row, null, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, { colSpan: '9' }, _react2.default.createElement(_semanticUiReact.Menu, { floated: 'right', pagination: true }, _react2.default.createElement(_semanticUiReact.Menu.Item, null, this.state.finalNumbers[0]), _react2.default.createElement(_semanticUiReact.Menu.Item, null, this.state.finalNumbers[1]), _react2.default.createElement(_semanticUiReact.Menu.Item, null, this.state.finalNumbers[2]), _react2.default.createElement(_semanticUiReact.Menu.Item, null, this.state.finalNumbers[3]))))));
        }
    }]);

    return NumberPicker;
}(_react.Component);

exports.default = NumberPicker;