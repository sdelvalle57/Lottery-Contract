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
        canPickWinner: this.props.canPickWinner,
        lotteryAddress: this.props.lotteryAddress

    }

    componentDidMount() {
        console.log(this.state.canPickWinner);
        console.log(this.state.lotteryAddress);

    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({
            canPickWinner: nextProps.canPickWinner,
            lotteryAddress: nextProps.lotteryAddress
        })
    }

    onSubmit = async event =>{  
        event.preventDefault();
        const lottery = lotteryAt(this.state.lotteryAddress);
        if(this.state.canPickWinner){
            this.setState({ loading: true, errroMessage: '' });
            try {
                const accounts = await web3.eth.getAccounts();
                await lottery.methods.pickWinner().send({
                    from: accounts[0]
                });
                Router.replaceRoute(`/lotteries/${this.state.lotteryAddress}`);
            } catch (err) {
                this.setState({ errroMessage: err.message.split("\n")[0] });
            }
            this.setState({ loading: false, value:''});
        }
    }


    render() {
        if(this.state.canPickWinner){
            return (
                <Form onSubmit={this.onSubmit} error={!!this.state.errroMessage}>
                    
                    <Button positive loading={this.state.loading}>Pick Winner</Button>
                    <Message error header="Oops!" content={this.state.errroMessage} />               
                    
                </Form>
            )
        }else return null;
    }
}
export default PickWinnerForm;