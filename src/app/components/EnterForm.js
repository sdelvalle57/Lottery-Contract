import React, { Component } from 'react';
import { Form, Message, Button, Header } from 'semantic-ui-react';
import api from '../helpers/rwBlockchain';

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
        network: {},
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
        const {lotteryAddress, canBuyLottery, lotteryValue, number4, numbers3, network} = this.state;
        if(canBuyLottery){
            this.setState({ loading: true, errroMessage: '' });
            this.props.callback({step: 1});
            const response = await api.enterLottery(lotteryAddress, number4, numbers3, lotteryValue, network);
            if(response.error) {
                this.setState({ loading: false, errroMessage: response.message });
                return;
            }
            this.setState({ loading: false, value:'', errroMessage: ""});
            this.props.callback({step: 2});
        }
    }

    setCheckNetworkInterval = () => {
        this.interval = setInterval(() => {
            let network = {
                providerNotSet: false,
                networkNotSet: false,
                notLogged: false
            };

            if (typeof window.web3 == 'undefined') {
                network.providerNotSet = true;
                this.setState({network});
                return;
            }

            if (typeof window.web3 != 'undefined') {
                window.web3.version.getNetwork(async (err, netId) => {
                    if(netId == "4") {
                        const accounts = await api.getAccounts();
                        if(!accounts[0]) {
                            network.notLogged = true;
                        }
                    } else {
                        network.networkNotSet = true;
                    }
                    this.setState({network});
                });
            }
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