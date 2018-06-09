import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react'
import lotteryFactoryAt from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';
import web3 from '../ethereum/web3'

class LotteryIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lotteries: props.lotteries,
        }
    }

    static async getInitialProps() {
        const factoryAddress = "0x6bFcF6E2Ce867C935490f1F96088946a70DBef61";
        const lotteryFactory = lotteryFactoryAt(factoryAddress, web3);
        const lotteries = await lotteryFactory.methods.getLotteries().call();
        return { factoryAddress, lotteries };
    }

    componentDidMount() {
        const lotteryFactory = lotteryFactoryAt(this.props.factoryAddress, web3);
        let event = lotteryFactory.events.LotteryDeployed({}, async (error, data) => {
            if (error == null) {
                const lotteries = await lotteryFactory.methods.getLotteries().call();
                this.setState({ lotteries });
            }
              
        });
        
    }

    renderLotteries() {
        const items = this.state.lotteries.map(address => {
            return {
                header: address,
                description: (
                    <Link route={ `/lotteries/${address}`}>
                        <a>View Lottery</a>
                    </Link>
                ),
                fluid: true
            };
        });
        return <Card.Group items={items} />;
    }
    

    render() {
        return (
            <Layout>
                <div>
                    <h3>Open lotteries</h3>
                    <Link route={ `/lotteries/new/${this.props.factoryAddress}`} >
                        <a>
                            <Button 
                                floated="right" 
                                content="Deploy Lottery" 
                                icon="add" 
                                primary 
                            />
                        </a>
                    </Link>
                    {this.renderLotteries()}
                </div>
            </Layout>
        )
    }
}

export default LotteryIndex;