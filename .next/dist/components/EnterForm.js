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
            canPickWinner: _this.props.canPickWinner,
            canBuyLottery: _this.props.canBuyLottery
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(EnterForm, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                number4: nextProps.number4,
                canPickWinner: nextProps.canPickWinner,
                canBuyLottery: nextProps.canBuyLottery
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
                        lineNumber: 50
                    }
                }, 'Buy');
            } else {
                return _react2.default.createElement(_semanticUiReact.Button, { negative: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    }
                }, 'Ended');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errroMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, 'Enter the lottery')), this.renderButton(), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errroMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }));
        }
    }]);

    return EnterForm;
}(_react.Component);

exports.default = EnterForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEVudGVyRm9ybS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJNZXNzYWdlIiwiQnV0dG9uIiwibG90dGVyeUF0Iiwid2ViMyIsIlJvdXRlciIsIkVudGVyRm9ybSIsInN0YXRlIiwidmFsdWUiLCJlcnJyb01lc3NhZ2UiLCJsb2FkaW5nIiwibnVtYmVyNCIsInByb3BzIiwiY2FuUGlja1dpbm5lciIsImNhbkJ1eUxvdHRlcnkiLCJvblN1Ym1pdCIsImV2ZW50IiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJsZW5ndGgiLCJyZW5kZXJCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVM7O0FBQ3hCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0lBRWpCLEE7Ozs7Ozs7Ozs7Ozs7OztzTixBQUNGO21CQUFRLEFBQ0csQUFDUDswQkFGSSxBQUVTLEFBQ2I7cUJBSEksQUFHSyxBQUNUO3FCQUFTLE1BQUEsQUFBSyxNQUpWLEFBSWdCLEFBQ3BCOzJCQUFlLE1BQUEsQUFBSyxNQUxoQixBQUtzQixBQUMxQjsyQkFBZSxNQUFBLEFBQUssTUFOaEIsQSxBQU1zQjtBQU50QixBQUNKLGlCLEFBZ0JKO2lHQUFXLGlCQUFBLEFBQU0sT0FBTjs4RUFBQTs4QkFBQTt5REFBQTtpQ0FBQTtpQ0FBQTtnREFBQTs7QUFBQTs0QkFBQTtBOzs7Ozs7Ozs7O2tEQVJlLEEsV0FBVyxBQUNqQztpQkFBQSxBQUFLO3lCQUNRLFVBREMsQUFDUyxBQUNuQjsrQkFBZSxVQUZMLEFBRWUsQUFDekI7K0JBQWUsVUFIbkIsQUFBYyxBQUdlLEFBRWhDO0FBTGlCLEFBQ1Y7Ozs7dUNBNEJPLEFBRVg7O2dCQUFHLEtBQUEsQUFBSyxNQUFSLEFBQWMsZUFBYyxBQUN4Qjt1Q0FBTyxBQUFDOzhCQUNRLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixVQUQ1QixBQUNvQyxBQUN2Qzs2QkFBUyxLQUFBLEFBQUssTUFGWCxBQUVpQjtrQ0FGakI7b0NBQUE7QUFBQTtBQUNILGlCQURHLEVBQVAsQUFBTyxBQUdWO0FBSkQsbUJBSUssQUFDRDt1Q0FBTyxBQUFDLHlDQUFPLFVBQVI7a0NBQUE7b0NBQUE7QUFBQTtpQkFBQSxFQUFQLEFBQU8sQUFDVjtBQUVKOzs7O2lDQUVRLEFBQ0w7bUNBQ0ksQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EOzhCQUFuRDtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZSLEFBQ0ksQUFDSSxBQUVILDRCQUpMLEFBSUssQUFBSyxBQUNOLGdDQUFBLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDs4QkFBbEQ7Z0NBTlIsQUFDSSxBQUtJLEFBSVg7QUFKVzs7Ozs7O0FBM0RRLEEsQUFpRXhCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkVudGVyRm9ybS5qcyIsInNvdXJjZVJvb3QiOiJFOi9FdGhlcmV1bS9Xb3JsZHBheS9sb3R0ZXJ5LWNvbnRyYWN0In0=