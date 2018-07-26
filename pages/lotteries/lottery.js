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
        winnersPaid: true
    }


    async componentDidMount() {
        const lotteryAddress = this.props.url.query.lotteryAddress;
        const lottery = lotteryAt(lotteryAddress, web3Socket);
        await this.setLotteryValues(lottery);
        this.setIntervalFunction();
        this.setEventsListeners(lottery);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    setLotteryValues = async (lottery) => {
        const summary = await lottery.methods.getSummary().call();
        const accounts = await web3.eth.getAccounts(); 
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
        console.log(summary);
        this.setState({lotteryValue, deadline, lotteryJackPot, lotteryHasPlayed, owner, 
            accounts, canBuyLottery, canPickWinner, loading:false, timeStarted, prize,
            numOfWinners, winningNumber, winnersPaid})
    }

    numberPickerCallback = (number4, numbers3) => {
        this.setState({number4, numbers3});
    }

    setIntervalFunction = () => {
        this.interval = setInterval(() => {
            this.isLotteryOpen(); 
        }, 2000);  
    }

    setEventsListeners =  (lottery) => {
        window.addEventListener('load', async () => {
            await this.setLotteryValues(lotteryAt(lotteryAddress, web3));
            this.setIntervalFunction();
        }, false);
        lottery.events.TicketBuy({}, async (error, data) => {
            if (error == null) {
                let lotteryJackPot = data.returnValues.jackPot;
                this.setState({ lotteryJackPot })
            }
        });
        lottery.events.LotteryHasPlayed({}, async (error, data) => {
            if(error == null) {
                const summary = await lottery.methods.getSummary().call();
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
            lotteryAddress, numbers3} = this.state;
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
                        <Grid.Column width = { 10 }>
                            <Segment compact>
                                <EnterForm
                                    number4 = {number4}
                                    canPickWinner = {canPickWinner}
                                    canBuyLottery = {canBuyLottery}
                                    lotteryValue = {lotteryValue}
                                    lotteryAddress = {lotteryAddress}
                                    numbers3 = {numbers3}
                                    />
                                <NumberPicker callback={this.numberPickerCallback} />
                            </Segment>
                            {this.renderPickWinnerButton()}
                        </Grid.Column>
                    </Grid>
                </Container>
                <Divider />
            </Layout>
        )
    }
}

export default Lottery;