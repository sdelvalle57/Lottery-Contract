import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react'
import lotteryFactoryAt from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';
import web3 from '../ethereum/web3'

class LotteryIndex extends Component {
    static async getInitialProps() {
        
        const factoryAddress = "0x93206b9548772d918249b8aeaf9ebe1f5914598a";
        let lotteryFactory = lotteryFactoryAt(factoryAddress);
        const lotteries = await lotteryFactory.methods.getLotteries().call();
        return { lotteries, factoryAddress };
    }

    renderLotteries() {
        const items = this.props.lotteries.map(address => {
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