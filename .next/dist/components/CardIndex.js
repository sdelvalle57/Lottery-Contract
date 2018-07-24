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

var _reactTimestamp = require('react-timestamp');

var _reactTimestamp2 = _interopRequireDefault(_reactTimestamp);

var _routes = require('../routes');

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardIndex = function (_Component) {
    (0, _inherits3.default)(CardIndex, _Component);

    function CardIndex() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CardIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CardIndex.__proto__ || (0, _getPrototypeOf2.default)(CardIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            lotteryPrice: _this.props.lotteryPrice,
            lotteryJackPot: _this.props.lotteryJackPot,
            deadline: _this.props.deadline,
            numOfPlayers: _this.props.numOfPlayers,
            lotteryHasPlayed: _this.props.lotteryHasPlayed,
            numOfLotteries: _this.props.numOfLotteries,
            timeStarted: _this.props.timeStarted,
            address: _this.props.address,
            lotteryAddress: _this.props.lotteryAddress,
            ethPrice: _this.props.ethPrice
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CardIndex, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                lotteryPrice: nextProps.lotteryPrice,
                lotteryJackPot: nextProps.lotteryJackPot,
                deadline: nextProps.deadline,
                numOfPlayers: nextProps.numOfPlayers,
                lotteryHasPlayed: nextProps.lotteryHasPlayed,
                numOfLotteries: nextProps.numOfLotteries,
                timeStarted: nextProps.timeStarted,
                lotteryAddress: this.props.lotteryAddress,
                ethPrice: nextProps.ethPrice
            });
        }
    }, {
        key: 'renderMeta',
        value: function renderMeta(lotteryJackPot, ethPrice) {
            if (ethPrice >= 0) {
                var usdJackpot = lotteryJackPot * ethPrice;
                if (usdJackpot > 0) {
                    usdJackpot = (0, _numeral2.default)(usdJackpot).format('0,0');
                }
                return _react2.default.createElement(_semanticUiReact.Card.Meta, null, usdJackpot, ' USD');
            }
            return null;
        }
    }, {
        key: 'renderDeadline',
        value: function renderDeadline(deadline, lotteryHasPlayed) {
            var canBuyLottery = !lotteryHasPlayed && Date.now() / 1000 - deadline < 0;
            if (canBuyLottery) {
                return _react2.default.createElement('p', null, 'Ends  ', _react2.default.createElement(_reactTimestamp2.default, {
                    precision: 2,

                    autoUpdate: true, time: deadline,
                    actualSeconds: true }));
            }
            return "Ended";
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                lotteryPrice = _state.lotteryPrice,
                lotteryJackPot = _state.lotteryJackPot,
                deadline = _state.deadline,
                numOfPlayers = _state.numOfPlayers,
                lotteryHasPlayed = _state.lotteryHasPlayed,
                numOfLotteries = _state.numOfLotteries,
                timeStarted = _state.timeStarted,
                lotteryAddress = _state.lotteryAddress,
                ethPrice = _state.ethPrice;

            var route = '/lotteries/' + lotteryAddress;
            if (lotteryHasPlayed) {
                route = '/lotteries/' + lotteryAddress;
            }
            return _react2.default.createElement(_semanticUiReact.Container, { id: 'indexCardContainer' }, _react2.default.createElement(_semanticUiReact.Card, null, _react2.default.createElement(_semanticUiReact.Image, { verticalAlign: 'middle', size: 'medium', centered: true, circular: true, src: '/static/lottery_icon.png' }), _react2.default.createElement(_semanticUiReact.Card.Content, null, _react2.default.createElement(_semanticUiReact.Card.Header, null, lotteryJackPot, ' ETH'), this.renderMeta(lotteryJackPot, ethPrice), _react2.default.createElement(_semanticUiReact.Card.Description, null, this.renderDeadline(deadline, lotteryHasPlayed))), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true }, _react2.default.createElement(_routes.Link, { prefetch: true, route: route }, _react2.default.createElement(_semanticUiReact.Button, { id: 'buyTicketButton' }, 'BUY TICKET')))));
        }
    }]);

    return CardIndex;
}(_react.Component);

exports.default = CardIndex;