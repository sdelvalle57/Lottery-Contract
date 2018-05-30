import React, { Component } from 'react';
import { Form, Message, Button } from 'semantic-ui-react';
import lotteryAt from '../ethereum/lottery';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class PickWinnerForm extends Component {
    state = {
        value: '',
        errroMessage:'',
        loading:false

    }

    onSubmit = async event =>{  
        event.preventDefault();
        const lottery = lotteryAt(this.props.address);
        if(this.props.canPickWinner){
            this.setState({ loading: true, errroMessage: '' });
            try {
                const accounts = await web3.eth.getAccounts();
                await lottery.methods.pickWinner().send({
                    from: accounts[0]
                });
                Router.replaceRoute(`/lotteries/${this.props.address}`);
            } catch (err) {
                this.setState({ errroMessage: err.message.split("\n")[0] });
            }
            this.setState({ loading: false, value:''});
        }
    }


    render() {
        if(this.props.canPickWinner){
            return (
                <Form onSubmit={this.onSubmit} error={!!this.state.errroMessage}>
                    <Form.Field>
                        <label>Enter the lottery</label>
                    </Form.Field>
                    <Button positive loading={this.state.loading}>pickWinner</Button>
                    <Message error header="Oops!" content={this.state.errroMessage} />               
                    
                </Form>
            )
        }else return null;
    }
}
export default PickWinnerForm;