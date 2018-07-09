import React , { Component } from 'react';
import { Card, Button, Grid, Dimmer, Loader, Segment, Container } from 'semantic-ui-react';
import Timestamp from 'react-timestamp';
import { Link } from '../../routes';
import Layout from '../../components/Layout';
import lotteryAt from '../../ethereum/lottery';
import web3 from '../../ethereum/web3';
import web3Socket from '../../ethereum/web3Socket';
import EnterForm from '../../components/EnterForm';
import PickWinnerForm from '../../components/PickWinnerForm';
import NumberPicker from '../../components/NumberPicker';
import { runInThisContext } from 'vm';


class Lottery extends Component {  

    state = {
        lotteryAddress: this.props.url.query.lotteryAddress,
        lotteryValue: '',
        deadline: Date.now(),
        lotteryJackPot: '',
        lotteryHasPlayed: '',
        owner: '',
        accounts: '',
        canBuyLottery: '',
        canPickWinner: '',
        loading: true,
        timeStarted: '',
        number4:'',
        numbers3:[]
    }

    async componentDidMount() {
        const lotteryAddress = this.props.url.query.lotteryAddress;
        if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
            const lottery = lotteryAt(lotteryAddress, web3);
            await this.setLotteryValues(lottery);
            this.setIntervalFunction();
        } else {
            window.addEventListener('load', async () => {
                const lottery = lotteryAt(lotteryAddress, web3);
                await this.setLotteryValues(lottery);
                this.setIntervalFunction();
            }, false);
        }
        this.setEventsListeners(lotteryAt(lotteryAddress, web3Socket));
    }

    setLotteryValues = async (lottery) => {
        const lotteryAddress = this.state.lotteryAddress;
        const summary = await lottery.methods.getSummary().call();
        const accounts = await web3.eth.getAccounts(); 
        const lotteryValue = summary[0];
        const deadline = summary[1];
        const lotteryJackPot = summary[2];
        const lotteryHasPlayed = summary[7];
        const owner = summary[10];
        const timeStarted = summary[12];
        const canBuyLottery = !lotteryHasPlayed && Date.now()/1000 - deadline  < 0;
        const canPickWinner = !lotteryHasPlayed && Date.now()/1000 > deadline;
        this.setState({lotteryValue, deadline, lotteryJackPot, lotteryHasPlayed, owner, 
            accounts, canBuyLottery, canPickWinner, loading:false, timeStarted})
    }

    numberPickerCallback = (number4, numbers3) => {
        console.log("lt "+number4);
        this.setState({number4, numbers3});
    }

    

    setIntervalFunction = () => {
        this.interval = setInterval(() => {
            this.isLotteryOpen(); 
        }, 2000);  
    }

    setEventsListeners =  (lottery) => {
        lottery.events.TicketBuy({}, async (error, data) => {
            if (error == null) {
                let lotteryJackPot = data.returnValues.jackPot;
                this.setState({ lotteryJackPot })
            }
        });
        lottery.events.LotteryHasPlayed({}, (error, data) => {
            if(error == null) {
                const lotteryHasPlayed = true;
                const canBuyLottery = false;
                const canPickWinner = false;
                this.setState({ lotteryHasPlayed, canPickWinner, canBuyLottery });
            }
        })
    }

    isLotteryOpen = async () => {
        const {lotteryHasPlayed, deadline} = this.state;
        const canBuyLottery = !lotteryHasPlayed && Date.now()/1000 - deadline  < 0;
        const canPickWinner = !lotteryHasPlayed && Date.now()/1000 > deadline;
        console.log(lotteryHasPlayed + " " + canBuyLottery + " "+canPickWinner)
        
        this.setState({canBuyLottery, canPickWinner});
    }

    

    renderDeadline(deadline, canBuyLottery) {
        const ending = canBuyLottery ? "Ending ": "Ended";
        return <p>{ending} <Timestamp
                    precision={3} 
                    autoUpdate time={deadline} 
                    actualSeconds /></p>
    }

    renderStartTime(timeStarted) {
        return <p>Started on <Timestamp time={timeStarted} format='full' /></p>
    }

    renderCards() {
        let {lotteryValue, deadline, lotteryJackPot, timeStarted, canBuyLottery} = this.state;
        const isLotteryOpen = canBuyLottery? "Open": "Closed";
        const items = [
            {
                header: web3.utils.fromWei(this.state.lotteryValue, 'ether') + " Ether",
                meta: 'We accept just Ether as payment',
                description: 'This is the value of each ticket to enter the Lottery',
                style: { overflowWrap: 'break-word' },
            },
            {
                header: "Lottery is "+isLotteryOpen,
                meta:  this.renderDeadline(deadline, canBuyLottery),
                description: this.renderStartTime(timeStarted),
                style: { overflowWrap: 'break-word' }
            },
            {
                header: web3.utils.fromWei(lotteryJackPot, 'ether') + " Ether" ,
                meta: 'Lottery Jackpot',
                description: 'This jackpot will be release to the winners',
                style: { overflowWrap: 'break-word' }
            }
        ];
        return <Card.Group items={ items } />;
    }

    renderPickWinnerButton() {
        const {lotteryAddress, canPickWinner} = this.state;
        console.log(lotteryAddress);
        console.log(canPickWinner);
        return 
            <PickWinnerForm
                lotteryAddress
                canPickWinner
            />
    }

    render() {
        const {canPickWinner, canBuyLottery, number4} = this.state;
        return (
            <Layout >
                <Dimmer active = {this.state.loading}>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
                <Container style={{marginTop:'100px'}}>
                    <Grid >
                        <Grid.Column width = { 10 } >
                            { this.renderCards() }
                        </Grid.Column>
                        <Grid.Column width = { 6 }>
                            <Segment>
                                <EnterForm
                                    number4
                                    canPickWinner
                                    canBuyLottery
                                    />
                                <NumberPicker callback={this.numberPickerCallback} />
                            </Segment>
                            {this.renderPickWinnerButton()}
                        </Grid.Column>
                    </Grid>
                </Container>
            </Layout>
        )
    }
}

export default Lottery;