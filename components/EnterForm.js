import React, { Component } from 'react';
import { Form, Message, Button, Header } from 'semantic-ui-react';
import lotteryAt from '../ethereum/lottery';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class EnterForm extends Component {
    state = {
        value: '',
        errroMessage:'',
        loading: false,
        number4: this.props.number4,
        numbers3: this.props.numbers3,
        canPickWinner: this.props.canPickWinner,
        canBuyLottery: this.props.canBuyLottery,
        lotteryValue: this.props.lotteryValue,
        lotteryAddress: this.props.lotteryAddress, 
        network: true,
        provider: true
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            this.setCheckNetworkInterval();
        } else {
            window.addEventListener('load', async () => {
                this.setCheckNetworkInterval();
            }, false);
        }
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            number4: nextProps.number4,
            numbers3: nextProps.numbers3,
            canPickWinner: nextProps.canPickWinner,
            canBuyLottery: nextProps.canBuyLottery,
            lotteryValue: nextProps.lotteryValue,
            
        })
    }

    onSubmit = async event =>{  
        event.preventDefault();
        const {lotteryAddress, canBuyLottery, lotteryValue, number4, numbers3} = this.state;
        const lottery = lotteryAt(lotteryAddress, web3);
        const canSendTx = await this.checkNetwork();
        if(canSendTx && canBuyLottery){
            this.setState({ loading: true, errroMessage: '' });
            try {
                const accounts = await web3.eth.getAccounts();
                await lottery.methods.enter(number4, numbers3).send({
                    from: accounts[0],
                    value: lotteryValue
                });
                Router.replaceRoute(`/lotteries/${lotteryAddress}`);
            } catch (err) {
                this.setState({ errroMessage: err.message.split("\n")[0] });
            }
            this.setState({ loading: false, value:''});
        }
    }

    checkNetwork = async () => {
        if(!this.state.provider) {
            this.setState({ errroMessage: "Use Mist or Metamask to send the Transaction" });
            return false;
        }else if(!this.state.network) {
            this.setState({ errroMessage: "Select The Rinkeby network" });
            return false;
        }
        return true;
    }

    setCheckNetworkInterval = () => {
        this.interval = setInterval(() => {
            if (typeof window.web3 == 'undefined') {
                this.setState({provider: false});
            }
            window.web3.version.getNetwork((err, netId) => {
                if(netId!=4) {
                    this.setState({network: false});
                }
            });
        }, 1000);
    }

    renderButton() {
        if(this.state.canBuyLottery){
            return ( <Button id='enterButton' 
                positive = {this.state.number4.length==10} 
                loading={this.state.loading}>Buy</Button>
                 
                );
        }else{
            return <Button negative>Ended</Button>
        }
    }

    renderHeader() {
        return <Header as='h4' id='enterHeader' align='center'>
        Choose 4 numbers from 1 to 99</Header>
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errroMessage}>
                {this.renderButton()}
                {this.renderHeader()}
                <Message error header="Oops!" content={this.state.errroMessage} />
                
            </Form>
        )
    }
}
export default EnterForm;