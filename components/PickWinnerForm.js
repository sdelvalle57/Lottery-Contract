import React, { Component } from 'react';
import { Form, Message, Button } from 'semantic-ui-react';
import lotteryAt from '../ethereum/lottery';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class PickWinnerForm extends Component {
    state = {
        value: '',
        errroMessage:'',
        loading: false,
        lotteryAddress: this.props.lotteryAddress
    }

    onSubmit = async event =>{  
        event.preventDefault();
        const lottery = lotteryAt(this.state.lotteryAddress, web3);
        this.setState({ loading: true, errroMessage: '' });
        try {
            const accounts = await web3.eth.getAccounts();
            await lottery.methods.playTheLottery().send({
                from: accounts[0]
            });
            //Router.replaceRoute(`/lotteries/${this.state.lotteryAddress}`);
        } catch (err) {
            this.setState({ errroMessage: err.message.split("\n")[0] });
        }
        this.setState({ loading: false, value:''});
    }


    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errroMessage}>
                <Button positive loading={this.state.loading}>Pick Winner</Button>
                <Message error header="Oops!" content={this.state.errroMessage} />               
            </Form>
        );
    }
}
export default PickWinnerForm;