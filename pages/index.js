import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react'
import lotteryFactoryAt from '../ethereum/factory';
import Layout from '../components/Layout';

class LotteryIndex extends Component {
    static async getInitialProps() {
        let lotteryFactory = lotteryFactoryAt("0xc074464985abc9b2cf200bf6658ebfd3c9862ea4");
        const lotteries = await lotteryFactory.methods.getLotteries().call();
        return { lotteries };
    }

    renderLotteries() {
        const items = this.props.lotteries.map(address => {
            return {
                header: address,
                description: <a>View Lottery</a>,
                fluid: true
            };
        });
        return <Card.Group items={items} />;
    }
    

    render() {
        return (
            <Layout>
                <div>
                    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
                    <h3>Open lotteries</h3>
                    <Button 
                        floated="right" 
                        content="Deploy the first Lottery" 
                        icon="add" 
                        primary 
                    />
                    {this.renderLotteries()}
                </div>
            </Layout>
        )
    }
}

export default LotteryIndex;