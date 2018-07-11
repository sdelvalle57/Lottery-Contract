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
            return _react2.default.createElement(_semanticUiReact.Container, { style: { marginTop: '100px' } }, _react2.default.createElement(_semanticUiReact.Statistic.Group, { widths: 'four' }, _react2.default.createElement(_semanticUiReact.Statistic, null, _react2.default.createElement(_semanticUiReact.Statistic.Value, { text: true }, this.state.lotteryPrice, ' ', _react2.default.createElement('br', null), ' ETH'), _react2.default.createElement(_semanticUiReact.Statistic.Label, null, 'Ticket price')), _react2.default.createElement(_semanticUiReact.Statistic, null, _react2.default.createElement(_semanticUiReact.Statistic.Value, { text: true }, this.state.lotteryJackPot, ' ', _react2.default.createElement('br', null), 'ETH'), _react2.default.createElement(_semanticUiReact.Statistic.Label, null, 'Prize pool')), _react2.default.createElement(_semanticUiReact.Statistic, null, _react2.default.createElement(_semanticUiReact.Statistic.Value, { text: true }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'time' }), ' ', _react2.default.createElement('br', null), ' Deadline'), _react2.default.createElement(_semanticUiReact.Statistic.Label, null, _react2.default.createElement(_reactTimestamp2.default, {
                precision: 3,
                autoUpdate: true, time: this.state.deadline,
                actualSeconds: true }))), _react2.default.createElement(_semanticUiReact.Statistic, null, _react2.default.createElement(_semanticUiReact.Statistic.Value, { text: true }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'user' }), ' ', _react2.default.createElement('br', null), ' ', this.state.numOfPlayers), _react2.default.createElement(_semanticUiReact.Statistic.Label, null, 'Players'))));
        }
    }]);

    return HeaderIndex;
}(_react.Component);

exports.default = HeaderIndex;