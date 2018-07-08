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
            console.log(nextProps);
            this.setState({
                open: nextProps.lotteryHasPlayed,
                numOfWinners: nextProps.numOfWinners,
                winningNumber: nextProps.winningNumber,
                prize: nextProps.prize
            });
            console.log(winningNumber);
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
                    lineNumber: 49
                }
            }, _react2.default.createElement(_semanticUiReact.Modal, { closeOnEscape: false,
                closeOnDimmerClick: true,
                size: 'mini',
                dimmer: 'inverted',
                open: open,
                onClose: this.close, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement(_semanticUiReact.Modal.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Lottery Result'), _react2.default.createElement(_semanticUiReact.Modal.Content, { image: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'smile', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }), _react2.default.createElement(_semanticUiReact.Modal.Description, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement(_semanticUiReact.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, ' ', this.convertToNumbers(winningNumber), ' '), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'There are ', numOfWinners, ' winners '), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, 'Paid ', prize, ' ETH'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, 'JackPot left ', finalJackPot, ' ETH'))), _react2.default.createElement(_semanticUiReact.Modal.Description, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExvdHRlcnlQbGF5ZWRNb2RhbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkhlYWRlciIsIk1vZGFsIiwiSWNvbiIsIndlYjMiLCJMb3R0ZXJ5UGxheWVkTW9kYWwiLCJzdGF0ZSIsIm9wZW4iLCJwcm9wcyIsImxvdHRlcnlIYXNQbGF5ZWQiLCJudW1PZldpbm5lcnMiLCJ3aW5uaW5nTnVtYmVyIiwicHJpemUiLCJmaW5hbEphY2tQb3QiLCJzaG93Iiwic2V0U3RhdGUiLCJjbG9zZSIsIm5leHRQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJudW1CeXRlIiwibnVtYmVycyIsIm51bWJlcnNTdHJpbmciLCJzcGxpdCIsImsiLCJsZW5ndGgiLCJudW1iZXIiLCJwYXJzZUludCIsInB1c2giLCJjb252ZXJ0VG9OdW1iZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVMsQUFBUSxBQUFRLEFBQU87O0FBQ2hDLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFHWDs7Ozs7Ozs7Ozs7Ozs7d09BRUYsQTtrQkFDVSxNQUFBLEFBQUssTUFEUCxBQUNhLEFBQ2pCOzBCQUFjLE1BQUEsQUFBSyxNQUZmLEFBRXFCLEFBQ3pCOzJCQUFlLE1BQUEsQUFBSyxNQUhoQixBQUdzQixBQUMxQjttQkFBTyxNQUFBLEFBQUssTUFKUixBQUljLEFBQ2xCOzBCQUFjLE1BQUEsQUFBSyxNQUxmLEEsQUFLcUI7QUFMckIsQUFDSixpQkFtQkosQSxPQUFPLFlBQUE7bUJBQU0sTUFBQSxBQUFLLFNBQVMsRUFBQyxNQUFyQixBQUFNLEFBQWMsQUFBTztBLGlCQUNsQyxBLFFBQVEsWUFBQTttQkFBTSxNQUFBLEFBQUssU0FBUyxFQUFFLE1BQXRCLEFBQU0sQUFBYyxBQUFRO0E7Ozs7O2tEQWJWLEEsV0FBVyxBQUNqQztvQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO2lCQUFBLEFBQUs7c0JBQ0ssVUFESSxBQUNNLEFBQ2hCOzhCQUFjLFVBRkosQUFFYyxBQUN4QjsrQkFBZSxVQUhMLEFBR2UsQUFDekI7dUJBQU8sVUFKWCxBQUFjLEFBSU8sQUFFckI7QUFOYyxBQUNWO29CQUtKLEFBQVEsSUFBUixBQUFZLEFBRWY7Ozs7eUNBS2dCLEEsU0FBUyxBQUN0QjtnQkFBSSxVQUFKLEFBQWMsQUFDZDtnQkFBSSxnQkFBSixBQUFvQixBQUNwQjtzQkFBVSxRQUFBLEFBQVEsTUFBUixBQUFjLE1BQXhCLEFBQVUsQUFBb0IsQUFDOUI7aUJBQUksSUFBSSxJQUFSLEFBQVksR0FBRyxJQUFJLFFBQW5CLEFBQTJCLFFBQVEsSUFBRSxJQUFyQyxBQUF1QyxHQUFFLEFBQ3JDO29CQUFNLFNBQVMsU0FBVSxRQUFBLEFBQVEsS0FBRyxRQUFRLElBQTdCLEFBQXFCLEFBQVUsSUFBOUMsQUFBZSxBQUFvQyxBQUNuRDt3QkFBQSxBQUFRLEtBQVIsQUFBYSxBQUNiO2lDQUFpQixTQUFqQixBQUF5QixBQUN6QjtBQUNIO0FBQ0Q7bUJBQUEsQUFBTyxBQUNWOzs7O2lDQUVRO3lCQUM0RCxLQUQ1RCxBQUNpRTtnQkFEakUsQUFDQyxjQURELEFBQ0M7Z0JBREQsQUFDTyxzQkFEUCxBQUNPO2dCQURQLEFBQ3FCLHVCQURyQixBQUNxQjtnQkFEckIsQUFDb0MsZUFEcEMsQUFDb0M7Z0JBRHBDLEFBQzJDLHNCQUQzQyxBQUMyQyxBQUNoRDs7b0JBQUEsQUFBUSxJQUFSLEFBQVksQUFFWjs7bUNBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDLHdDQUFNLGVBQVAsQUFBd0IsQUFDcEI7b0NBREosQUFDMEIsQUFDdEI7c0JBRkosQUFFUyxBQUNMO3dCQUhKLEFBR1csQUFDUDtzQkFKSixBQUlVLEFBQ047eUJBQVMsS0FMYixBQUtrQjs4QkFMbEI7Z0NBQUEsQUFNQTtBQU5BOytCQU1DLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUE7QUFBQTtBQUFBLGVBTkEsQUFNQSxBQUNBLG1DQUFDLGNBQUQsdUJBQUEsQUFBTyxXQUFRLE9BQWY7OEJBQUE7Z0NBQUEsQUFDQTtBQURBOytCQUNBLEFBQUMsdUNBQUssTUFBTixBQUFXOzhCQUFYO2dDQURBLEFBQ0EsQUFDSTtBQURKO2dDQUNLLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDQTtBQURBO0FBQUEsK0JBQ0EsQUFBQzs7OEJBQUQ7Z0NBQUE7QUFBQTtBQUFBLGVBQVUsVUFBQSxBQUFLLGlCQUFmLEFBQVUsQUFBc0IsZ0JBRGhDLEFBQ0EsQUFDQSxzQkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBYyxjQUFkLGNBRkEsQUFFQSxBQUNBLDhCQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFTLFNBQVQsT0FIQSxBQUdBLEFBQ0EseUJBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQWlCLGlCQUFqQixjQWJKLEFBT0EsQUFFSSxBQUlBLEFBR0EsMkJBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQTtBQUFBO0FBQUEsZUFsQlIsQUFDQSxBQUNJLEFBZ0JJLEFBSVg7Ozs7O0FBaEU0QixBLEFBb0VqQzs7a0JBQUEsQUFBZTs7QUFFZiIsImZpbGUiOiJMb3R0ZXJ5UGxheWVkTW9kYWwuanMiLCJzb3VyY2VSb290IjoiRTovRXRoZXJldW0vV29ybGRwYXkvbG90dGVyeS1jb250cmFjdCJ9