import React, {Component} from 'react';
import { Button, Header, Modal, Icon, Image } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import { Router } from '../routes';
import lotteryAt from '../ethereum/lottery';


class LotteryPlayedModal extends Component {

    state = { 
        open: this.props.lotteryHasPlayed,
        numOfWinners: this.props.numOfWinners,
        winningNumber: this.props.winningNumber,
        prize: this.props.prize, 
        finalJackPot: this.props.finalJackPot, 
        showMessage: this.props.showMessage,
        winnersPaid: this.props.winnersPaid,
        lotteryAddress: this.props.lotteryAddress,
        loading: false,
        errroMessage: '',
        isOwner: this.props.isOwner
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            open: nextProps.lotteryHasPlayed,
            numOfWinners: nextProps.numOfWinners,
            winningNumber: nextProps.winningNumber,
            prize: nextProps.prize,
            winnersPaid: nextProps.winnersPaid,
            isOwner: nextProps.isOwner
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
        }
        return numbersString;
    }

    goHome() {
        //Router.push(`/`)
    }

    payWinners = async () => {
        this.setState({ loading: true, errroMessage: '' });
        const lottery = lotteryAt(this.state.lotteryAddress, web3);
        try {
            const accounts = await web3.eth.getAccounts();
            await lottery.methods.payWinners().send({
                from: accounts[0]
            });
            this.setState({ winnersPaid: true });
        } catch (err) {
            this.setState({ errroMessage: err.message.split("\n")[0] });
        }
        this.setState({ loading: false });
    }

    showMessage(showMessage) {
        if(showMessage) {
            return("Next Lottery coming soon!");
        }
        return null;
    }

    renderPayButton(showMessage, winnersPaid) {
        if(!showMessage && !winnersPaid && this.props.isOwner && this.props.numOfWinners>0 ) {
            return(
                <Button
                    primary
                    content="Pay Winners"
                    onClick={this.payWinners}
                    loading={this.state.loading}
                />
            )
        }
        return null;
    }

    renderMessage(){
        if(!!this.state.errroMessage){
            return(
                <Modal.Content>
                    {this.state.errroMessage}
                </Modal.Content>
            )
        }
        return null;
    }

    renderButton(showMessage) {
        if(!showMessage){
            return(
                <Button
                    positive
                    icon='checkmark'
                    labelPosition='right'
                    content="Ok!"
                    onClick={this.goHome}
                />
            )
        }
        return null;
    }

    render() {
        let { open, numOfWinners, winningNumber, prize, finalJackPot, showMessage, winnersPaid } = this.state
        return (
        <div>
            <Modal closeOnEscape = {false}
                closeOnDimmerClick = {showMessage} 
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
                <Modal.Description>{this.showMessage(showMessage)}</Modal.Description>
                <Modal.Actions>
                    {this.renderPayButton(showMessage, winnersPaid)}                    
                    {this.renderButton(showMessage)}
                </Modal.Actions>
                    {this.renderMessage()}
                
            </Modal>
        </div>
        )
    }
}


export default LotteryPlayedModal;