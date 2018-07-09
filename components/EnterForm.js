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
        number4: this.props.number4,
        canPickWinner: this.props.canPickWinner,
        canBuyLottery: this.props.canBuyLottery
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            number4: nextProps.number4,
            canPickWinner: nextProps.canPickWinner,
            canBuyLottery: nextProps.canBuyLottery
        })
    }

    onSubmit = async event =>{  
        /*
        event.preventDefault();
        const {numbers6, numbers5, numbers4} = this.props;
        const lottery = lotteryAt(this.props.lotteryAddress);
        if(this.props.canBuyLottery){
            this.setState({ loading: true, errroMessage: '' });
            try {
                const accounts = await web3.eth.getAccounts();
                await lottery.methods.enter(numbers6, numbers5, numbers4).send({
                    from: accounts[0],
                    value: this.props.lotteryValue
                });
                Router.replaceRoute(`/lotteries/${this.props.lotteryAddress}`);
            } catch (err) {
                this.setState({ errroMessage: err.message.split("\n")[0] });
            }
            this.setState({ loading: false, value:''});
        }
        */
    }

    renderButton() {
        
        if(this.state.canBuyLottery){
            return <Button 
                positive = {this.state.number4.length==10} 
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