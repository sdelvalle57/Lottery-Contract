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

var _lottery = require('../../ethereum/lottery');

var _lottery2 = _interopRequireDefault(_lottery);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Ethereum\\Worldpay\\lottery-contract\\pages\\lotteries\\lottery.js?entry';


var Lottery = function (_Component) {
    (0, _inherits3.default)(Lottery, _Component);

    function Lottery() {
        (0, _classCallCheck3.default)(this, Lottery);

        return (0, _possibleConstructorReturn3.default)(this, (Lottery.__proto__ || (0, _getPrototypeOf2.default)(Lottery)).apply(this, arguments));
    }

    (0, _createClass3.default)(Lottery, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                lotteryValue = _props.lotteryValue,
                deadline = _props.deadline,
                jackPot = _props.jackPot,
                winningNumber = _props.winningNumber,
                playersLenght = _props.playersLenght,
                winnersLenght = _props.winnersLenght,
                lotteryHasPlayed = _props.lotteryHasPlayed,
                lastLotery = _props.lastLotery,
                factoryAddress = _props.factoryAddress;

            var items = [{
                header: _web2.default.utils.fromWei(lotteryValue, 'ether'),
                meta: 'The Value of the Lottery is',
                description: 'This is the value of each ticket to enter the Lottery',
                style: { overflowWrap: 'break-word' }
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Lottery Show'), this.renderCards());
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var lottery, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                lottery = (0, _lottery2.default)(props.query.address);
                                _context.next = 3;
                                return lottery.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;
                                return _context.abrupt('return', {
                                    lotteryValue: summary[0],
                                    deadline: summary[1],
                                    jackPot: summary[2],
                                    winningNumber: summary[3],
                                    playersLenght: summary[4],
                                    winnersLenght: summary[5],
                                    lotteryHasPlayed: summary[6],
                                    lastLotery: summary[7],
                                    factoryAddress: summary[8]
                                });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Lottery;
}(_react.Component);

exports.default = Lottery;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxsb3R0ZXJpZXNcXGxvdHRlcnkuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiTGF5b3V0IiwibG90dGVyeUF0Iiwid2ViMyIsIkxvdHRlcnkiLCJwcm9wcyIsImxvdHRlcnlWYWx1ZSIsImRlYWRsaW5lIiwiamFja1BvdCIsIndpbm5pbmdOdW1iZXIiLCJwbGF5ZXJzTGVuZ2h0Iiwid2lubmVyc0xlbmdodCIsImxvdHRlcnlIYXNQbGF5ZWQiLCJsYXN0TG90ZXJ5IiwiZmFjdG9yeUFkZHJlc3MiLCJpdGVtcyIsImhlYWRlciIsInV0aWxzIiwiZnJvbVdlaSIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmVuZGVyQ2FyZHMiLCJsb3R0ZXJ5IiwicXVlcnkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTOztBQUNULEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFVOzs7Ozs7Ozs7SUFHWCxBOzs7Ozs7Ozs7OztzQ0FpQlk7eUJBV04sS0FYTSxBQVdEO2dCQVhDLEFBRU4sc0JBRk0sQUFFTjtnQkFGTSxBQUdOLGtCQUhNLEFBR047Z0JBSE0sQUFJTixpQkFKTSxBQUlOO2dCQUpNLEFBS04sdUJBTE0sQUFLTjtnQkFMTSxBQU1OLHVCQU5NLEFBTU47Z0JBTk0sQUFPTix1QkFQTSxBQU9OO2dCQVBNLEFBUU4sMEJBUk0sQUFRTjtnQkFSTSxBQVNOLG9CQVRNLEFBU047Z0JBVE0sQUFVTix3QkFWTSxBQVVOLEFBR0o7O2dCQUFNO3dCQUVVLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixjQUQvQixBQUNZLEFBQWlDLEFBQ3pDO3NCQUZKLEFBRVUsQUFDTjs2QkFISixBQUdpQixBQUNiO3VCQUFPLEVBQUUsY0FMakIsQUFBYyxBQUNWLEFBSVcsQUFBZ0IsQUFJL0I7QUFSSSxBQUNJLGFBRk07O2lEQVNQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBb0I7OEJBQXBCO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBR0YsQUFDTDttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDRSxzQkFIVixBQUNJLEFBRU0sQUFBSyxBQUdsQjs7Ozs7aUgsQUFoRDRCOzs7OztpQ0FDbkI7QSwwQ0FBVSx1QkFBVSxNQUFBLEFBQU0sTSxBQUFoQixBQUFzQjs7dUNBQ2hCLFFBQUEsQUFBUSxRQUFSLEFBQWdCLGFBQWhCLEFBQTZCLEE7O2lDQUE3QztBOztrREFFWSxRQURYLEFBQ1csQUFBUSxBQUN0Qjs4Q0FBVSxRQUZQLEFBRU8sQUFBUSxBQUNsQjs2Q0FBUyxRQUhOLEFBR00sQUFBUSxBQUNqQjttREFBZSxRQUpaLEFBSVksQUFBUSxBQUN2QjttREFBZSxRQUxaLEFBS1ksQUFBUSxBQUN2QjttREFBZSxRQU5aLEFBTVksQUFBUSxBQUN2QjtzREFBa0IsUUFQZixBQU9lLEFBQVEsQUFDMUI7Z0RBQVksUUFSVCxBQVFTLEFBQVEsQUFDcEI7b0RBQWdCLFFBVGIsQUFTYSxBQUFRLEE7QUFUckIsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUxVLEEsQUFvRHRCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImxvdHRlcnkuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovRXRoZXJldW0vV29ybGRwYXkvbG90dGVyeS1jb250cmFjdCJ9