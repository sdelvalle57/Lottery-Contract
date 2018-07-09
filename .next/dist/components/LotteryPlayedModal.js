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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Ethereum\\Worldpay\\lottery-contract\\components\\LotteryPlayedModal.js';


var LotteryPlayedModal = function (_Component) {
    (0, _inherits3.default)(LotteryPlayedModal, _Component);

    function LotteryPlayedModal() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, LotteryPlayedModal);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LotteryPlayedModal.__proto__ || (0, _getPrototypeOf2.default)(LotteryPlayedModal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            open: _this.props.lotteryHasPlayed,
            numOfWinners: _this.props.numOfWinners,
            winningNumber: _this.props.winningNumber,
            prize: _this.props.prize,
            finalJackPot: _this.props.finalJackPot
        }, _this.show = function () {
            return _this.setState({ open: true });
        }, _this.close = function () {
            return _this.setState({ open: false });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(LotteryPlayedModal, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                open: nextProps.lotteryHasPlayed,
                numOfWinners: nextProps.numOfWinners,
                winningNumber: nextProps.winningNumber,
                prize: nextProps.prize
            });
        }
    }, {
        key: 'convertToNumbers',
        value: function convertToNumbers(numByte) {
            var numbers = [];
            var numbersString = "";
            numByte = numByte.split("0x")[1];
            for (var k = 0; k < numByte.length; k = k + 2) {
                var number = parseInt(numByte[k] + numByte[k + 1], 16);
                numbers.push(number);
                numbersString += number + " ";
                //if(k!=numByte.length-1) numbersString += " - ";
            }
            return numbersString;
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                open = _state.open,
                numOfWinners = _state.numOfWinners,
                winningNumber = _state.winningNumber,
                prize = _state.prize,
                finalJackPot = _state.finalJackPot;

            console.log(prize);

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_semanticUiReact.Modal, { closeOnEscape: false,
                closeOnDimmerClick: true,
                size: 'mini',
                dimmer: 'inverted',
                open: open,
                onClose: this.close, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_semanticUiReact.Modal.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Lottery Result'), _react2.default.createElement(_semanticUiReact.Modal.Content, { image: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(_semanticUiReact.Image, { src: '/static/eth2.png', size: 'small', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }), _react2.default.createElement(_semanticUiReact.Modal.Description, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement(_semanticUiReact.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, ' ', this.convertToNumbers(winningNumber), ' '), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'There are ', numOfWinners, ' winners '), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'Paid ', prize, ' ETH'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'JackPot left ', finalJackPot, ' ETH'))), _react2.default.createElement(_semanticUiReact.Modal.Description, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, 'Next Lottery coming soon!')));
        }
    }]);

    return LotteryPlayedModal;
}(_react.Component);

exports.default = LotteryPlayedModal;

/*
import React, {Component} from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import web3 from '../ethereum/web3';


class LotteryPlayedModal extends Component {

    

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ lotteryHasPlayed: false })

  render() {
    const { lotteryHasPlayed, dimmer } = this.state

    return (
      <div>
        <Modal dimmer={dimmer} open={lotteryHasPlayed} onClose={this.close}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='/images/lottery.jpg' />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We've found the following gravatar image associated with your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content="Ok"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}


export default LotteryPlayedModal;
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExvdHRlcnlQbGF5ZWRNb2RhbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkhlYWRlciIsIk1vZGFsIiwiSWNvbiIsIkltYWdlIiwid2ViMyIsIkxvdHRlcnlQbGF5ZWRNb2RhbCIsInN0YXRlIiwib3BlbiIsInByb3BzIiwibG90dGVyeUhhc1BsYXllZCIsIm51bU9mV2lubmVycyIsIndpbm5pbmdOdW1iZXIiLCJwcml6ZSIsImZpbmFsSmFja1BvdCIsInNob3ciLCJzZXRTdGF0ZSIsImNsb3NlIiwibmV4dFByb3BzIiwibnVtQnl0ZSIsIm51bWJlcnMiLCJudW1iZXJzU3RyaW5nIiwic3BsaXQiLCJrIiwibGVuZ3RoIiwibnVtYmVyIiwicGFyc2VJbnQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImNvbnZlcnRUb051bWJlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUyxBQUFRLEFBQVEsQUFBTyxBQUFNOztBQUN0QyxBQUFPLEFBQVU7Ozs7Ozs7OztJQUdYLEE7Ozs7Ozs7Ozs7Ozs7O3dPLEFBRUY7a0JBQ1UsTUFBQSxBQUFLLE1BRFAsQUFDYSxBQUNqQjswQkFBYyxNQUFBLEFBQUssTUFGZixBQUVxQixBQUN6QjsyQkFBZSxNQUFBLEFBQUssTUFIaEIsQUFHc0IsQUFDMUI7bUJBQU8sTUFBQSxBQUFLLE1BSlIsQUFJYyxBQUNsQjswQkFBYyxNQUFBLEFBQUssTUFMZixBQUtxQixBO0FBTHJCLEFBQ0osaUJBZ0JKLEEsT0FBTyxZQUFBO21CQUFNLE1BQUEsQUFBSyxTQUFTLEVBQUMsTUFBckIsQUFBTSxBQUFjLEFBQU87QSxpQixBQUNsQyxRQUFRLFlBQUE7bUJBQU0sTUFBQSxBQUFLLFNBQVMsRUFBRSxNQUF0QixBQUFNLEFBQWMsQUFBUTtBOzs7OztrRCxBQVZWLFdBQVcsQUFDakM7aUJBQUEsQUFBSztzQkFDSyxVQURJLEFBQ00sQUFDaEI7OEJBQWMsVUFGSixBQUVjLEFBQ3hCOytCQUFlLFVBSEwsQUFHZSxBQUN6Qjt1QkFBTyxVQUpYLEFBQWMsQUFJTyxBQUV4QjtBQU5pQixBQUNWOzs7O3lDLEFBVVMsU0FBUyxBQUN0QjtnQkFBSSxVQUFKLEFBQWMsQUFDZDtnQkFBSSxnQkFBSixBQUFvQixBQUNwQjtzQkFBVSxRQUFBLEFBQVEsTUFBUixBQUFjLE1BQXhCLEFBQVUsQUFBb0IsQUFDOUI7aUJBQUksSUFBSSxJQUFSLEFBQVksR0FBRyxJQUFJLFFBQW5CLEFBQTJCLFFBQVEsSUFBRSxJQUFyQyxBQUF1QyxHQUFFLEFBQ3JDO29CQUFNLFNBQVMsU0FBVSxRQUFBLEFBQVEsS0FBRyxRQUFRLElBQTdCLEFBQXFCLEFBQVUsSUFBOUMsQUFBZSxBQUFvQyxBQUNuRDt3QkFBQSxBQUFRLEtBQVIsQUFBYSxBQUNiO2lDQUFpQixTQUFqQixBQUF5QixBQUN6QjtBQUNIO0FBQ0Q7bUJBQUEsQUFBTyxBQUNWOzs7O2lDQUVRO3lCQUM0RCxLQUQ1RCxBQUNpRTtnQkFEakUsQUFDQyxjQURELEFBQ0M7Z0JBREQsQUFDTyxzQkFEUCxBQUNPO2dCQURQLEFBQ3FCLHVCQURyQixBQUNxQjtnQkFEckIsQUFDb0MsZUFEcEMsQUFDb0M7Z0JBRHBDLEFBQzJDLHNCQUQzQyxBQUMyQyxBQUNoRDs7b0JBQUEsQUFBUSxJQUFSLEFBQVksQUFFWjs7bUNBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDLHdDQUFNLGVBQVAsQUFBd0IsQUFDcEI7b0NBREosQUFDMEIsQUFDdEI7c0JBRkosQUFFUyxBQUNMO3dCQUhKLEFBR1csQUFDUDtzQkFKSixBQUlVLEFBQ047eUJBQVMsS0FMYixBQUtrQjs4QkFMbEI7Z0NBQUEsQUFNQTtBQU5BOytCQU1DLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUE7QUFBQTtBQUFBLGVBTkEsQUFNQSxBQUNBLG1DQUFDLGNBQUQsdUJBQUEsQUFBTyxXQUFRLE9BQWY7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsd0NBQU0sS0FBUCxBQUFXLG9CQUFtQixNQUE5QixBQUFtQzs4QkFBbkM7Z0NBREosQUFDSSxBQUNBO0FBREE7Z0NBQ0MsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxBQUFDOzs4QkFBRDtnQ0FBQTtBQUFBO0FBQUEsZUFBVSxVQUFBLEFBQUssaUJBQWYsQUFBVSxBQUFzQixnQkFEaEMsQUFDQSxBQUNBLHNCQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFjLGNBQWQsY0FGQSxBQUVBLEFBQ0EsOEJBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQVMsU0FBVCxPQUhBLEFBR0EsQUFDQSx5QkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBaUIsaUJBQWpCLGNBYkosQUFPQSxBQUVJLEFBSUEsQUFHQSwyQkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQWxCUixBQUNBLEFBQ0ksQUFnQkksQUFJWDs7Ozs7QUE3RDRCLEEsQUFpRWpDOztrQkFBQSxBQUFlOztBQUVmIiwiZmlsZSI6IkxvdHRlcnlQbGF5ZWRNb2RhbC5qcyIsInNvdXJjZVJvb3QiOiJFOi9FdGhlcmV1bS9Xb3JsZHBheS9sb3R0ZXJ5LWNvbnRyYWN0In0=