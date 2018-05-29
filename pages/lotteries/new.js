import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import lotteryFactoryAt from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class LotteryNew extends Component {

    state = {
        duration: "",
        entranceValue: "",
        errorMessage: "",
        loading: false,
        factoryAddress:''
    }

    static async getInitialProps(props) {
        return {
            factoryAddress: props.query.factoryAddress
        }
    }

    onSubmit = async (event) => {
        event.preventDefault();
        const {
            factoryAddress,
        } = this.props;
        try {
            this.setState({ loading:true, errorMessage:""});
            const accounts = await web3.eth.getAccounts();
            const lotteryFactory = lotteryFactoryAt(factoryAddress);
            const lotteries = await lotteryFactory.methods.getLotteries().call();
            await lotteryFactory.methods
                .createNewLottery(this.state.duration, web3.utils.toWei(this.state.entranceValue, 'ether'))
                .send({
                    from: accounts[0]
            });
            Router.pushRoute('/');
            
        } catch (err) {
            this.setState({ errorMessage: err.message.split("\n")[0] });
        }
        this.setState({ loading:false });
    }

    render() {
        return (
            <Layout>
                <h3>New Lottery</h3>

                <Form onSubmit={ this.onSubmit } error={ !!this.state.errorMessage }>
                    <Form.Group widths="equal">
                        <Form.Field>
                            <label>Duration</label>
                            <Input 
                                label="Seconds" 
                                labelPosition="right" 
                                type="number" 
                                value={this.state.duration}
                                onChange={event => 
                                    this.setState({ duration: event.target.value })}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Entrance Value</label>
                            <Input label="Eth" 
                                labelPosition="right"
                                type="number" 
                                value={this.state.entranceValue}
                                onChange={event => 
                                    this.setState({ entranceValue: event.target.value })}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Message error header="Ooops!" content={ this.state.errorMessage } />
                    <Button loading={ this.state.loading } primary>Create!</Button>
                </Form>
            </Layout>
        ) 
    }
}

export default LotteryNew;