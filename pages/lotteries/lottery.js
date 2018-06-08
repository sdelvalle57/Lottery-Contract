import React , { Component } from 'react';
import { Card, Button, Grid, Dimmer, Loader, Segment } from 'semantic-ui-react';
import Timestamp from 'react-moment';
import humanize from 'humanize-duration';
import NumberFormat from 'react-number-format'
import ReactInterval from 'react-interval';
import { Link } from '../../routes';
import Layout from '../../components/Layout';
import lotteryAt from '../../ethereum/lottery';
import web3 from '../../ethereum/web3';
import EnterForm from '../../components/EnterForm';
import PickWinnerForm from '../../components/PickWinnerForm';
import NumberPicker from '../../components/NumberPicker'


class Lottery extends Component {  

    constructor(props) {
        super(props);
        this.state = {
            lotteryAddress: props.url.query.address,
            lotteryValue: '',
            deadline: '',
            jackPot: '',
            winningNumber: '',
            playersLenght: '',
            lotteryHasPlayed: '',
            lastLotery: '',
            factoryAddress: '',
            owner: '',
            userAccount: '',
            canBuyLottery: '',
            canPickWinner: '',
            loading: true,
            numbers6: ''

        }
    }

    numberPickerCallback = (numbers6) => {
        this.setState({numbers6});
    }

    async componentDidMount() {
        const lottery = lotteryAt(this.props.url.query.address);
        this.setLotteryValues(lottery);
        this.intervalId = setInterval(this.timer.bind(this), 30000);
        
        /*
        let event = lottery.events.TicketBuy({}, (error, data) => {
            if (error)
              console.log("Error: " + error);
            else 
              console.log("Log data: " + data);
        });
        
       /*
       web3.eth.subscribe('logs', {
            address: '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0',  // EOS token is popular atm.
            topics: [], // A token transfer log would be good for now.
          }, function (err, result) {
            if (err) throw err
            console.log('Success!', result)
          })
          */
    }

    

    setLotteryValues = async (lottery) => {
        const lotteryAddress = this.state.lotteryAddress;
        const summary = await lottery.methods.getSummary().call();
        const accounts = await web3.eth.getAccounts(); 
        const lotteryValue = summary[0];
        const deadline = summary[1];
        const jackPot = summary[2];
        const playersLenght = summary[3];
        const lotteryHasPlayed = summary[4];
        const lastLotery = summary[5];
        const factoryAddress = summary[6];
        const owner = summary[7];
        const winningNumber = summary[8];
        const userAccount = accounts[0];
        const canBuyLottery = !lotteryHasPlayed && deadline - Date.now()/1000 > 0;
        const canPickWinner = !lotteryHasPlayed && deadline - Date.now()/1000 < 0;
        //const ticketBuyEvent = this.setTicketBuyEvent(lottery);
        this.setState({lotteryValue, deadline, jackPot, winningNumber,
            playersLenght, lotteryHasPlayed, lastLotery, factoryAddress,
            owner, userAccount, canBuyLottery, canPickWinner, loading:false})
    }

   

    renderCards() {
        const items = [
            {
                header: web3.utils.fromWei(this.state.lotteryValue, 'ether') + " Ether",
                meta: 'We accept just Ether as payment',
                description: 'This is the value of each ticket to enter the Lottery',
                style: { overflowWrap: 'break-word' },
            },
            {
                header: <Timestamp interval={1000} to={Date.now()}>{this.state.deadline}</Timestamp>,
                meta: 'Lottery selling '+this.getDeadline(this.state.deadline),
                description: 'We sale tickets untils this date',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: web3.utils.fromWei(this.state.jackPot, 'ether') + " Ether",
                meta: 'Lottery Jackpot',
                description: 'This jackpot will be release to the winners',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: this.state.playersLenght,
                meta: 'Participants',
                description: 'Number of tickets sold',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: this.state.winningNumber,
                meta: 'And the winner is...',
                description: 'This is the lottery winner number',
                style: { overflowWrap: 'break-word' }
            },
            {
                href: `/lotteries/${this.state.lastLotery}`,
                header: this.state.lastLotery,
                meta: 'Address of previous lottery',
                style: { overflowWrap: 'break-word' }
            }
        ];

        return <Card.Group items={ items } />;
    }

    getDeadline(deadline) {
        deadline = parseInt(deadline*1000);
        const ans = humanize(deadline-Date.now(), { largest: 2 });
        return (deadline - Date.now()) < 0 ? 'ended '+ans+' ago':'ends in '+ans;
    }

    timer = () => {
        this.setLotteryValues();
      }

    render() {
        return (
            <Layout>
                <Dimmer active = {this.state.loading}>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
                <h3>Lottery Show</h3>
                <Grid>
                    <Grid.Column width = { 10 }>
                        { this.renderCards() }
                    </Grid.Column>
                    <Grid.Column width = { 6 }>
                        <Segment>
                            <EnterForm
                                address={this.state.lotteryAddress} 
                                canBuyLottery = {this.state.canBuyLottery}
                                lotteryValue = {this.state.lotteryValue}
                                numbers6 = {this.state.numbers6} />
                            <NumberPicker callback={this.numberPickerCallback} />
                        </Segment>
                        <PickWinnerForm
                            address={this.state.lotteryAddress} 
                            canPickWinner = {this.state.canPickWinner}
                        />
                    </Grid.Column>
                </Grid>
            </Layout>
        )
    }
}

export default Lottery;