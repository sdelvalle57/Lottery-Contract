import React , { Component } from 'react';
import { Card, Grid, Dimmer, Loader, Segment, Container, Feed, Label, Icon, Divider } from 'semantic-ui-react';
import Timestamp from 'react-timestamp';
import Layout from '../../components/Layout';
import lotteryAt from '../../ethereum/lottery';
import web3 from '../../ethereum/web3';
import web3Socket from '../../ethereum/web3Socket';
import EnterForm from '../../components/EnterForm';
import PickWinnerForm from '../../components/PickWinnerForm';
import NumberPicker from '../../components/NumberPicker';
import LotteryPlayedModal from '../../components/LotteryPlayedModal';
import PlayedNumbers from '../../components/PlayedNumbers';
import api from '../../helpers/rwBlockchain';

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
        numbers3:[],
        prize:'',
        numOfWinners:'',
        winningNumber:'',
        winnersPaid: true,
        numbersPlayed: [],
        step: 0
    }


    async componentDidMount() {
        const lotteryAddress = this.props.url.query.lotteryAddress;
        await this.setLotteryValues(lotteryAddress);
        this.setEventsListeners();
        this.setIntervalFunction(lotteryAddress);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    setLotteryValues = async (lotteryAddress) => {
        const summary = await api.getSummary(lotteryAddress);
        const lotteryValue = summary[0];
        const deadline = summary[1];
        let lotteryJackPot = summary[2];
        const lotteryHasPlayed = summary[7];
        const owner = summary[10];
        const timeStarted = summary[12];
        const canBuyLottery = !lotteryHasPlayed && Date.now()/1000 - deadline  < 0;
        const canPickWinner = !lotteryHasPlayed && Date.now()/1000 > deadline;
        if(lotteryHasPlayed) lotteryJackPot = summary[6];
        const prize = web3.utils.fromWei(summary[4], 'ether');
        const numOfWinners = summary[5];
        const winningNumber = summary[11];
        const winnersPaid = summary[13];
        this.setState({lotteryValue, deadline, lotteryJackPot, lotteryHasPlayed, owner, canBuyLottery, 
            canPickWinner, loading:false, timeStarted, prize, numOfWinners, winningNumber, winnersPaid})
    }

    numberPickerCallback = (number4, numbers3) => {
        this.setState({number4, numbers3});
    }

    ticketBoughtCallback = (step) => {
        this.setState({step: step.step});
    }

    setIntervalFunction =  (lotteryAddress) => {
        this.interval = setInterval(async () => {
            const accounts = await api.getAccounts();
            if(accounts[0]) {
                const numbersPlayed = await api.getNumbersByPlayer(accounts[0], lotteryAddress);
                this.setState({numbersPlayed});
            }
            this.setState({accounts});
            this.isLotteryOpen(); 
        }, 2000);  
    }

    setEventsListeners =  () => {
        const lotteryAddress = this.props.url.query.lotteryAddress;
        const lottery = lotteryAt(lotteryAddress, web3Socket);
        lottery.events.TicketBuy({}, async (error, data) => {
            if (error == null) {
                let lotteryJackPot = data.returnValues.jackPot;
                this.setState({ lotteryJackPot })
            }
        });
        lottery.events.LotteryHasPlayed({}, async (error, data) => {
            if(error == null) {
                const summary = await api.getSummary(lottery.options.address);
                const lotteryJackPot = summary[6];
                const prize = web3.utils.fromWei(summary[4], 'ether');
                const numOfWinners = summary[5];
                const winningNumber = summary[11];
                const winnersPaid = summary[13];
                const lotteryHasPlayed = true;
                const canBuyLottery = false;
                const canPickWinner = false;
                this.setState({ lotteryHasPlayed, canPickWinner, canBuyLottery, lotteryJackPot,
                    winningNumber, prize, numOfWinners, winnersPaid });
            }
        });
    }

    isLotteryOpen = async () => {
        const {lotteryHasPlayed, deadline} = this.state;
        const canBuyLottery = !lotteryHasPlayed && Date.now()/1000 - deadline  < 0;
        const canPickWinner = !lotteryHasPlayed && Date.now()/1000 > deadline;
        this.setState({canBuyLottery, canPickWinner});
    }

    

    renderDeadline(deadline, canBuyLottery) {
        const ending = canBuyLottery ? "Ending ": "Ended";
        return <p>{ending} <Timestamp
                    precision={2} 
                    autoUpdate time={deadline} 
                    actualSeconds /></p>
    }

    renderStartTime(timeStarted) {
        return <p>Started on <Timestamp time={timeStarted} format='full' /></p>
    }

    renderMainCard() {
        let {deadline, timeStarted, canBuyLottery} = this.state;
        const isLotteryOpen = canBuyLottery? "Open": "Closed";
        return (
            <Card id='mainCard'>
                <Card.Content>
                <Feed>
                    <Feed.Event>
                    <Feed.Label image='/static/lottery_icon.png' />
                    <Feed.Content>
                        <Feed.Extra  >
                            <Label className="feedExtraLabel">
                                <Icon name='clock' />
                                Lottery is {isLotteryOpen}
                                
                            </Label>
                        </Feed.Extra>
                        <Feed.Summary>
                            {this.renderDeadline(deadline, canBuyLottery)}
                        </Feed.Summary>
                        <Feed.Summary>
                            {this.renderStartTime(timeStarted)}
                        </Feed.Summary>
                    </Feed.Content>
                    </Feed.Event>
                </Feed>
                </Card.Content>
            </Card>
        )
    }

    renderCards() {
        let {lotteryValue, lotteryJackPot} = this.state;
        const items = [
            {
                header :web3.utils.fromWei(lotteryValue, 'ether') + " Ether",
                meta:  <p>Lottery price</p>,
                description: 'Pay this amount to buy a ticket',
                style: { overflowWrap: 'break-word' },
                className: 'regularCards'
            },
            {
                header: web3.utils.fromWei(lotteryJackPot, 'ether') + " Ether" ,
                meta: <p>Lottery jackpot</p>,
                description: 'This jackpot will be release to the winners',
                style: { overflowWrap: 'break-word' },
                className: 'regularCards'
            }
        ];
        return <Card.Group id='cardsLottery' items={ items } />;
    }

    renderNumbers() {
        return <PlayedNumbers 
            numbersPlayed = {this.state.numbersPlayed}/>
    }

    renderMyNumbersCard() {
        let {accounts} = this.state;
        if(accounts[0]) {
            const items = [
                {
                    header: 'My tickets' ,
                    meta: <p>{accounts[0].slice(0, 20)}... </p>,
                    description: this.renderNumbers(),
                    style: { overflowWrap: 'break-word' },
                    className: 'regularCards myTickets'
                }
            ];
            return <Card.Group id='cardsLottery' items={ items } />;
        }else {
            return null;
        }
    }

    renderPickWinnerButton() {
        const {lotteryAddress, canPickWinner, lotteryHasPlayed, owner, accounts} = this.state;
        if(!lotteryHasPlayed && canPickWinner && accounts.length > 0 && 
            owner.toString() == accounts[0].toString()) {
            return (
                <PickWinnerForm
                    lotteryAddress = {lotteryAddress}
                    canPickWinner = {canPickWinner}
                    lotteryHasPlayed = {lotteryHasPlayed}
                />);
        }
        return null;
    }

    renderModal() {
        
        const { lotteryHasPlayed, numOfWinners, winningNumber, prize, lotteryJackPot, 
            winnersPaid, lotteryAddress, owner, accounts} = this.state;
        const jackPot = web3.utils.fromWei(lotteryJackPot, 'ether');
        const isOwner = accounts.length > 0 && owner.toString() == accounts[0].toString();
        if(lotteryHasPlayed) {
            return <LotteryPlayedModal
                lotteryHasPlayed = { lotteryHasPlayed }
                numOfWinners = { numOfWinners }
                winningNumber = { winningNumber }
                prize = { prize }
                finalJackPot = { jackPot }
                showMessage = {false}
                winnersPaid = {winnersPaid}
                lotteryAddress = {lotteryAddress}
                isOwner = {isOwner}
                />;
        }
        
        return null;
    }

    render() {
        const {canPickWinner, canBuyLottery, number4,lotteryValue, 
            lotteryAddress, numbers3, step} = this.state;
        return (
            <Layout >
                <Divider />
                <Dimmer active = {this.state.loading}>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
                
                <Container style={{marginTop:'100px'}}>
                { this.renderModal() }
                    <Grid >
                        <Grid.Column width = { 6 } >
                            { this.renderMainCard() }
                            { this.renderCards() }
                        </Grid.Column>
                        <Grid.Column width = { 8 }>
                            <Segment compact>
                                <EnterForm
                                    number4 = {number4}
                                    canPickWinner = {canPickWinner}
                                    canBuyLottery = {canBuyLottery}
                                    lotteryValue = {lotteryValue}
                                    lotteryAddress = {lotteryAddress}
                                    numbers3 = {numbers3}
                                    callback={this.ticketBoughtCallback}
                                    />
                                <NumberPicker 
                                    callback={this.numberPickerCallback} 
                                    step = {step}
                                />
                            </Segment>
                            {this.renderPickWinnerButton()}
                        </Grid.Column>
                        <Grid.Column width= { 2 }>
                            { this.renderMyNumbersCard() }
                        </Grid.Column>
                    </Grid>
                </Container>
                <Divider />
            </Layout>
        )
    }
}

export default Lottery;