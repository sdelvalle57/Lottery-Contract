import React , { Component } from 'react';
import { Card, Button, Grid } from 'semantic-ui-react';
import Timestamp from 'react-timestamp';
import humanize from 'humanize-duration';
import NumberFormat from 'react-number-format'
import { Link } from '../../routes';
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

    onClick = async () => {

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
                header: web3.utils.fromWei(lotteryValue, 'ether') + " Ether",
                meta: 'We accept just Ether as payment',
                description: 'This is the value of each ticket to enter the Lottery',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: <Timestamp time={deadline} format='full' includeDay/>,
                meta: 'Lottery selling '+this.getDeadline(deadline),
                description: 'We sale tickets untils this date',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: web3.utils.fromWei(jackPot, 'ether') + " Ether",
                meta: 'Lottery Jackpot',
                description: 'This jackpot will be release to the winners',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: playersLenght,
                meta: 'Participants',
                description: 'Number of tickets sold',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: winningNumber,
                meta: 'And the winner is...',
                description: 'This is the lottery winner number',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: winnersLenght,
                meta: 'Winners',
                description: 'Number of winners',
                style: { overflowWrap: 'break-word' }
            },
            {
                href: `/lotteries/${lastLotery}`,
                header: lastLotery,
                meta: 'Address of previous lottery',
                description: (
                    <Link route={ `/lotteries/${lastLotery}`}>
                        <a>View Lottery</a>
                    </Link>),
                style: { overflowWrap: 'break-word' }
            }
        ];

        return <Card.Group items={ items } />;
    }

    renderEnterCard() {
        const {
            lotteryValue,
            lotteryHasPlayed
        } = this.props;
        const items = [
            {
                header: 'Enter the lottery',
                meta: 'Value of the lottery is '+ web3.utils.fromWei(lotteryValue, 'ether') + " Ether",
                description: (
                    this.canBuyLottery() ?
                        <Button negative>Ended</Button>:
                        <Button positive onClick={this.onClick}>Enter</Button>
                )
            }
        ];
        return <Card.Group items={ items } />;
    }

    canBuyLottery() {
        const {
            deadline,
            lotteryHasPlayed
        } = this.props;

        return lotteryHasPlayed || deadline < Date.now()/1000;
    }

    getDeadline(deadline) {
        deadline = parseInt(deadline*1000);
        const ans = humanize(deadline-Date.now(), { largest: 2 });
        return (deadline - Date.now()) < 0 ? 'ended '+ans+' ago':'ends in '+ans;
        //return deadline < parseInt(Date.now()) ? 'ends in '+ans: 'ended'ans;
        
    }

    timer = () => {
        this.setState({
          currentCount: this.state.currentCount + 1
        })
        if(this.state.currentCount % 5 == 0) { 
          this.render();
        }
      }

    render() {
        return (
            <Layout>
                <h3>Lottery Show</h3>
                <Grid>
                    <Grid.Column width = { 10 }>
                        { this.renderCards() }
                    </Grid.Column>
                    <Grid.Column width = { 6 }>
                        { this.renderEnterCard() }
                    </Grid.Column>
                </Grid>
                
            </Layout>
        )
    }
}

export default Lottery;