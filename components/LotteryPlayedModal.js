import React, {Component} from 'react';
import { Button, Header, Modal, Icon, Image } from 'semantic-ui-react';
import web3 from '../ethereum/web3';


class LotteryPlayedModal extends Component {

    state = { 
        open: this.props.lotteryHasPlayed,
        numOfWinners: this.props.numOfWinners,
        winningNumber: this.props.winningNumber,
        prize: this.props.prize, 
        finalJackPot: this.props.finalJackPot
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            open: nextProps.lotteryHasPlayed,
            numOfWinners: nextProps.numOfWinners,
            winningNumber: nextProps.winningNumber,
            prize: nextProps.prize,
        })
    }

    show = () => this.setState({open: true })
    close = () => this.setState({ open: false })

    convertToNumbers(numByte) {
        let numbers = [];
        let numbersString = "";
        numByte = numByte.split("0x")[1];    
        for(let k = 0; k < numByte.length; k=k+2){
            const number = parseInt((numByte[k]+numByte[k+1]), 16);
            numbers.push(number);
            numbersString += number +" ";
            //if(k!=numByte.length-1) numbersString += " - ";
        }
        return numbersString;
    }

    render() {
        let { open, numOfWinners, winningNumber, prize, finalJackPot } = this.state
        console.log(prize);

        return (
        <div>
            <Modal closeOnEscape = {false}
                closeOnDimmerClick = {true} 
                size='mini' 
                dimmer='inverted' 
                open={open} 
                onClose={this.close}>
            <Modal.Header>Lottery Result</Modal.Header>
            <Modal.Content image>
                <Image src='/static/eth2.png' size='small' />
                <Modal.Description>
                <Header> {this.convertToNumbers(winningNumber)} </Header>
                <p>There are {numOfWinners} winners </p>
                <p>Paid {prize} ETH</p>
                <p>JackPot left {finalJackPot} ETH</p>
                </Modal.Description>
            </Modal.Content>
                <Modal.Description>Next Lottery coming soon!</Modal.Description>
            </Modal>
        </div>
        )
    }
}


export default LotteryPlayedModal;

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