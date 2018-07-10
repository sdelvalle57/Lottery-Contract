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

var _jsxFileName = 'E:\\Ethereum\\Worldpay\\lottery-contract\\components\\EnterForm.js';


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
                    loading: this.state.loading, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 91
                    }
                }, 'Buy');
            } else {
                return _react2.default.createElement(_semanticUiReact.Button, { negative: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 95
                    }
                }, 'Ended');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errroMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, 'Enter the lottery')), this.renderButton(), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errroMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }));
        }
    }]);

    return EnterForm;
}(_react.Component);

exports.default = EnterForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEVudGVyRm9ybS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJNZXNzYWdlIiwiQnV0dG9uIiwibG90dGVyeUF0Iiwid2ViMyIsIlJvdXRlciIsIkVudGVyRm9ybSIsInN0YXRlIiwidmFsdWUiLCJlcnJyb01lc3NhZ2UiLCJsb2FkaW5nIiwibnVtYmVyNCIsInByb3BzIiwibnVtYmVyczMiLCJjYW5QaWNrV2lubmVyIiwiY2FuQnV5TG90dGVyeSIsImxvdHRlcnlWYWx1ZSIsImxvdHRlcnlBZGRyZXNzIiwibmV0d29yayIsInByb3ZpZGVyIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibG90dGVyeSIsImNoZWNrTmV0d29yayIsImNhblNlbmRUeCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJlbnRlciIsInNlbmQiLCJmcm9tIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsInNwbGl0Iiwic2V0Q2hlY2tOZXR3b3JrSW50ZXJ2YWwiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwid2luZG93IiwidmVyc2lvbiIsImdldE5ldHdvcmsiLCJlcnIiLCJuZXRJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXh0UHJvcHMiLCJsZW5ndGgiLCJyZW5kZXJCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVM7O0FBQ3hCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0lBRWpCLEE7Ozs7Ozs7Ozs7Ozs7OztzTkFDRixBO21CQUFRLEFBQ0csQUFDUDswQkFGSSxBQUVTLEFBQ2I7cUJBSEksQUFHSyxBQUNUO3FCQUFTLE1BQUEsQUFBSyxNQUpWLEFBSWdCLEFBQ3BCO3NCQUFVLE1B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