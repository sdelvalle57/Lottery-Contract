'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _lottery = require('../ethereum/lottery');

var _lottery2 = _interopRequireDefault(_lottery);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnterForm = function (_Component) {
    (0, _inherits3.default)(EnterForm, _Component);

    function EnterForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, EnterForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnterForm.__proto__ || (0, _getPrototypeOf2.default)(EnterForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            errroMessage: '',
            loading: false,
            number4: _this.props.number4,
            numbers3: _this.props.numbers3,
            canPickWinner: _this.props.canPickWinner,
            canBuyLottery: _this.props.canBuyLottery,
            lotteryValue: _this.props.lotteryValue,
            lotteryAddress: _this.props.lotteryAddress,
            network: true,
            provider: true
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var _this$state, lotteryAddress, canBuyLottery, lotteryValue, number4, numbers3, lottery, canSendTx, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this$state = _this.state, lotteryAddress = _this$state.lotteryAddress, canBuyLottery = _this$state.canBuyLottery, lotteryValue = _this$state.lotteryValue, number4 = _this$state.number4, numbers3 = _this$state.numbers3;
                                lottery = (0, _lottery2.default)(lotteryAddress, _web2.default);
                                _context.next = 5;
                                return _this.checkNetwork();

                            case 5:
                                canSendTx = _context.sent;

                                if (!(canSendTx && canBuyLottery)) {
                                    _context.next = 21;
                                    break;
                                }

                                _this.setState({ loading: true, errroMessage: '' });
                                _context.prev = 8;
                                _context.next = 11;
                                return _web2.default.eth.getAccounts();

                            case 11:
                                accounts = _context.sent;
                                _context.next = 14;
                                return lottery.methods.enter(number4, numbers3).send({
                                    from: accounts[0],
                                    value: lotteryValue
                                });

                            case 14:
                                _routes.Router.replaceRoute('/lotteries/' + lotteryAddress);
                                _context.next = 20;
                                break;

                            case 17:
                                _context.prev = 17;
                                _context.t0 = _context['catch'](8);

                                _this.setState({ errroMessage: _context.t0.message.split("\n")[0] });

                            case 20:
                                _this.setState({ loading: false, value: '' });

                            case 21:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[8, 17]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.checkNetwork = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            if (_this.state.provider) {
                                _context2.next = 5;
                                break;
                            }

                            _this.setState({ errroMessage: "Use Mist or Metamask to send the Transaction" });
                            return _context2.abrupt('return', false);

                        case 5:
                            if (_this.state.network) {
                                _context2.next = 8;
                                break;
                            }

                            _this.setState({ errroMessage: "Select The Rinkeby network" });
                            return _context2.abrupt('return', false);

                        case 8:
                            return _context2.abrupt('return', true);

                        case 9:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        })), _this.setCheckNetworkInterval = function () {
            _this.interval = setInterval(function () {
                if (typeof window.web3 == 'undefined') {
                    _this.setState({ provider: false });
                }
                window.web3.version.getNetwork(function (err, netId) {
                    if (netId != 4) {
                        _this.setState({ network: false });
                    }
                });
            }, 1000);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(EnterForm, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            if (typeof window !== 'undefined') {
                this.setCheckNetworkInterval();
            } else {
                window.addEventListener('load', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
                    return _regenerator2.default.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    _this3.setCheckNetworkInterval();

                                case 1:
                                case 'end':
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, _this3);
                })), false);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                number4: nextProps.number4,
                numbers3: nextProps.numbers3,
                canPickWinner: nextProps.canPickWinner,
                canBuyLottery: nextProps.canBuyLottery,
                lotteryValue: nextProps.lotteryValue

            });
        }
    }, {
        key: 'renderButton',
        value: function renderButton() {
            if (this.state.canBuyLottery) {
                return _react2.default.createElement(_semanticUiReact.Button, {
                    positive: this.state.number4.length == 10,
                    loading: this.state.loading }, 'Buy');
            } else {
                return _react2.default.createElement(_semanticUiReact.Button, { negative: true }, 'Ended');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errroMessage }, _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Enter the lottery')), this.renderButton(), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errroMessage }));
        }
    }]);

    return EnterForm;
}(_react.Component);

exports.default = EnterForm;