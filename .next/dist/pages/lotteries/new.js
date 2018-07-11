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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _web3Socket = require('../../ethereum/web3Socket');

var _web3Socket2 = _interopRequireDefault(_web3Socket);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LotteryNew = function (_Component) {
    (0, _inherits3.default)(LotteryNew, _Component);

    function LotteryNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, LotteryNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LotteryNew.__proto__ || (0, _getPrototypeOf2.default)(LotteryNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            duration: "",
            entranceValue: "",
            errorMessage: "",
            loading: false,
            factoryAddress: _this.props.url.query.factoryAddress,
            accounts: [],
            lotteryFactory: ""
        }, _this.setEventsListeners = function () {
            var lotteryFactory = (0, _factory2.default)(_this.state.factoryAddress, _web3Socket2.default);
            _this.LotteryDeployedEvent = lotteryFactory.events.LotteryDeployed({}, function () {
                var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(error, data) {
                    var address;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (error == null) {
                                        address = data.returnValues.deployedLottery;

                                        _routes.Router.pushRoute('/lotteries/' + address);
                                    }

                                case 1:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2);
                }));

                return function (_x, _x2) {
                    return _ref2.apply(this, arguments);
                };
            }());
        }, _this.handleLoad = function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(factoryAddress) {
                var lotteryFactory, owner, accounts;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _this.setEventsListeners();
                                lotteryFactory = (0, _factory2.default)(factoryAddress, _web2.default);
                                _context2.next = 4;
                                return lotteryFactory.methods.owner().call();

                            case 4:
                                owner = _context2.sent;
                                _context2.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context2.sent;

                                _this.setState({ lotteryFactory: lotteryFactory, accounts: accounts, web3: _web2.default });

                            case 9:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }));

            return function (_x3) {
                return _ref3.apply(this, arguments);
            };
        }(), _this.onSubmit = function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
                var lotteryFactory, accounts;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                event.preventDefault();
                                lotteryFactory = _this.state.lotteryFactory;
                                accounts = _this.state.accounts;
                                _context3.prev = 3;

                                _this.setState({ loading: true, errorMessage: "" });
                                _context3.next = 7;
                                return lotteryFactory.methods.createNewLottery(_this.state.duration, _web2.default.utils.toWei(_this.state.entranceValue, 'ether')).send({
                                    from: accounts[0]
                                });

                            case 7:
                                _context3.next = 12;
                                break;

                            case 9:
                                _context3.prev = 9;
                                _context3.t0 = _context3['catch'](3);

                                _this.setState({ errorMessage: _context3.t0.message.split("\n")[0] });

                            case 12:
                                _this.setState({ loading: false });

                            case 13:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this2, [[3, 9]]);
            }));

            return function (_x4) {
                return _ref4.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(LotteryNew, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
                this.handleLoad(this.state.factoryAddress);
            } else {
                window.addEventListener('load', function () {
                    _this3.handleLoad(_this3.state.factoryAddress);
                }, false);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.LotteryDeployedEvent.unsubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement(_semanticUiReact.Container, { style: { marginTop: '100px' } }, _react2.default.createElement('h3', null, 'New Lottery'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage }, _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal' }, _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Duration'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'Seconds',
                labelPosition: 'right',
                type: 'number',
                value: this.state.duration,
                onChange: function onChange(event) {
                    return _this4.setState({ duration: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Entrance Value'), _react2.default.createElement(_semanticUiReact.Input, { label: 'Eth',
                labelPosition: 'right',
                type: 'number',
                value: this.state.entranceValue,
                onChange: function onChange(event) {
                    return _this4.setState({ entranceValue: event.target.value });
                }
            }))), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Ooops!', content: this.state.errorMessage }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true }, 'Create!'))));
        }
    }]);

    return LotteryNew;
}(_react.Component);

exports.default = LotteryNew;