import React , { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import lotteryAt from '../../ethereum/lottery';
import web3 from '../../ethereum/web3';


class Lottery extends Component {
    static async getInitialProps(props) {
        const lottery = lotteryAt(props.query.address);
        const summary = await lottery.methods.getSummary().call();
        return {
            lotteryValue: summary[0],
            deadline: summary[1],
            jackPot: summary[2],
            winningNumber: summary[3],
            playersLenght: summary[4],
            winnersLenght: summary[5],
            lotteryHasPlayed: summary[6],
            lastLotery: summary[7],
            factoryAddress: summary[8]
        }
    }

    renderCards() {
        const {
            lotteryValue,
            deadline,
            jackPot,
            winningNumber,
            playersLenght,
            winnersLenght,
            lotteryHasPlayed,
            lastLotery,
            factoryAddress
        } = this.props;

        const items = [
            {
                header: web3.utils.fromWei(lotteryValue, 'ether'),
                meta: 'The Value of the Lottery is',
                description: 'This is the value of each ticket to enter the Lottery',
                style: { overflowWrap: 'break-word' }
            }
        ];

        return <Card.Group items={ items } />;
    }

    render() {
        return (
            <Layout>
                <h3>Lottery Show</h3>
                { this.renderCards() }
            </Layout>
        )
    }
}

export default Lottery;