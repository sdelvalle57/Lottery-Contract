import React, { Component } from 'react';
import { Form, Message, Button } from 'semantic-ui-react';
import lotteryAt from '../ethereum/lottery';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class EnterForm extends Component {
    state = {
        value: '',
        errroMessage:'',
        loading: false,
        numbers: ''
    }

    onSubmit = async event =>{  
        event.preventDefault();
        const {numbers6, numbers5, numbers4} = this.props;
        const lottery = lotteryAt(this.props.address);
        if(this.props.canBuyLottery){
            this.setState({ loading: true, errroMessage: '' });
            try {
                const accounts = await web3.eth.getAccounts();
                await lottery.methods.enter(numbers6, numbers5, numbers4).send({
                    from: accounts[0],
                    value: this.props.lotteryValue
                });
                Router.replaceRoute(`/lotteries/${this.props.address}`);
            } catch (err) {
                this.setState({ errroMessage: err.message.split("\n")[0] });
            }
            this.setState({ loading: false, value:''});
        }
    }

    renderButton() {
        if(this.props.canBuyLottery){
            return <Button 
                positive = {this.props.numbers.length==14} 
                loading={this.state.loading}>Buy</Button>
        }else{
            return <Button negative>Ended</Button>
        }
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errroMessage}>
                <Form.Field>
                    <label>Enter the lottery</label>
                </Form.Field>
                {this.renderButton()}
                <Message error header="Oops!" content={this.state.errroMessage} />
                
            </Form>
        )
    }
}
export default EnterForm;