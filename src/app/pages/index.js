import React, { Component } from 'react';
import { Card, Button, Container, Header } from 'semantic-ui-react';
import lotteryFactoryAt from '../ethereum/factory';
import Layout from '../components/Layout';
import LotteryHasPlayedModal from '../components/LotteryPlayedModal';
import { Link, Router } from '../routes';
import "isomorphic-fetch";
import web3 from '../ethereum/web3';
import web3Socket from '../ethereum/web3Socket';
import lotteryAt from '../ethereum/lottery';
import CardIndex from '../components/CardIndex';

class LotteryIndex extends Component {

    
    state = {
        lotteryJackPot: this.props.lotteryJackPot,
        numOfPlayers: this.props.numOfPlayers,
        accounts: [], 
        lotteryHasPlayed: false, 
        winningNumber: this.props.winningNumber,
        numOfWinners: this.props.numOfWinners, 
        prize: this.props.prize,
        finalJackPot: this.props.finalJackPot,
        lotteryPrice: this.props.lotteryPrice,
        deadline: this.props.deadline, 
        lottery:'',
        numOfLotteries: this.props.numOfLotteries, 
        timeStarted: this.props.timeStarted,
        lotteryAddress: this.props.lotteryAddress, 
        ethPrice: this.props.ethPrice
    }

   

    async componentDidMount() {

        const factoryAddress = "0x3F9E1c124CCFe558A95541E401C62E2C4d1e2e26";
        const lotteryFactory = lotteryFactoryAt(factoryAddress, web3);
        
        const owner = await lotteryFactory.methods.owner().call();
        const lotteries = await lotteryFactory.methods.getLotteries().call();
        const numOfLotteries = lotteries.length;
        let ethPrice = await fetch('https://api.coinmarketcap.com/v1/ticker/ethereum/');
        ethPrice = await ethPrice.json();
        ethPrice = ethPrice[0].price_usd;        
       
        if(numOfLotteries > 0) {
            const lotteryAddress = lotteries[numOfLotteries -1];
            const lottery = lotteryAt(lotteryAddress, web3);
            const summary = await lottery.methods.getSummary().call();
            let lotteryPrice = summary[0];
            const deadline = summary[1];
            let lotteryJackPot = summary[2];
            const numOfPlayers = summary[3];
            let prize = summary[4];
            const numOfWinners = summary[5]
            let finalJackPot = summary[6]
            const winningNumber = summary[11];
            const lotteryHasPlayed = summary[7];
            const timeStarted = summary[12];
            lotteryPrice = web3.utils.fromWei(lotteryPrice, 'ether') ;
            lotteryJackPot = web3.utils.fromWei(lotteryJackPot, 'ether');
            finalJackPot = web3.utils.fromWei(finalJackPot, 'ether');
            prize = web3.utils.fromWei(prize, 'ether');
            
            this.setState({lotteries, factoryAddress, lotteryPrice, lotteryJackPot,
                deadline, numOfPlayers, lotteryAddress, owner,
                prize, winningNumber, numOfWinners, finalJackPot, numOfLotteries,
                timeStarted, ethPrice });
        }


        const lottery = lotteryAt(this.state.lotteryAddress, web3Socket);
        const lotteryFactoryWS = lotteryFactoryAt(factoryAddress, web3Socket);
        const lotteryHasPlayed = await lottery.methods.lotteryHasPlayed().call();
        this.setFactoryEventsListeners(lotteryFactoryWS);
        this.setEventsListeners(lottery, lotteryFactoryWS);
        if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
            const accounts = await web3.eth.getAccounts();
            this.setState({accounts});
        } else {
            this.setWindowListener();
        }
        this.setState({lotteryHasPlayed});
    }

    componentWillUnmount() {
        if(typeof this.TicketBuyEvent !== "undefined")
            this.TicketBuyEvent.unsubscribe();
        if(typeof this.LotteryHasPlayedEvent !== "undefined")
            this.LotteryHasPlayedEvent.unsubscribe();
        if(typeof this.LotteryDeployedEvent !== "undefined")            
            this.LotteryDeployedEvent.unsubscribe();
    }

    setFactoryEventsListeners = (lotteryFactory) => {
        this.LotteryDeployedEvent = lotteryFactory.events.LotteryDeployed({}, async (error, data) => {
            if(error == null) {
                const lotteryAddress = data.returnValues.deployedLottery;
                const lottery = lotteryAt(lotteryAddress, web3Socket);
                const summary = await lottery.methods.getSummary().call();
                const lotteries = await lotteryFactory.methods.getLotteries().call();
                const numOfLotteries = lotteries.length;
                let lotteryPrice = summary[0];
                const deadline = summary[1];
                let lotteryJackPot = summary[2];
                const numOfPlayers = summary[3];
                let prize = summary[4];
                const numOfWinners = summary[5]
                let finalJackPot = summary[6]
                const winningNumber = summary[11];
                const lotteryHasPlayed = summary[7];
                const timeStarted = summary[12];
                lotteryPrice = web3.utils.fromWei(lotteryPrice, 'ether') ;
                lotteryJackPot = web3.utils.fromWei(lotteryJackPot, 'ether');
                finalJackPot = web3.utils.fromWei(finalJackPot, 'ether');
                prize = web3.utils.fromWei(prize, 'ether');
                this.setEventsListeners(lottery);
                this.setState({lotteryJackPot, numOfPlayers, lotteryHasPlayed, winningNumber,
                    numOfWinners, prize, finalJackPot, lotteryPrice, deadline, numOfLotteries,
                    timeStarted, lotteryAddress});    
            }
        })
    }

    setEventsListeners =  (lottery) => {
        this.TicketBuyEvent = lottery.events.TicketBuy({}, async (error, data) => {
            if (error == null) {
                let lotteryJackPot = data.returnValues.jackPot;
                lotteryJackPot = web3.utils.fromWei(lotteryJackPot, 'ether') ;
                const numOfPlayers = data.returnValues.numOfPlayers;
                this.setState({ lotteryJackPot, numOfPlayers })
            }
        });

        this.LotteryHasPlayedEvent = lottery.events.LotteryHasPlayed({}, async (error, data) => {
            if(error == null) {
                const numOfWinners = data.returnValues.numOfWinners;
                const winningNumber = data.returnValues.winningNumber;
                let prize = data.returnValues.prize;
                let finalJackPot = data.returnValues.finalJackPot;
                prize = web3.utils.fromWei(prize, 'ether');
                finalJackPot =  web3.utils.fromWei(finalJackPot, 'ether');
                this.setState({ lotteryHasPlayed: true, numOfWinners, 
                    winningNumber, prize, finalJackPot });
            }
        });
    }

    setWindowListener = async () => {
        if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
            const accounts = await web3.eth.getAccounts();
        } else {
            window.addEventListener('load', async () => {
                const accounts = await web3.eth.getAccounts();
                this.setIntervalFunction();
            }, false);
        }
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

    renderAdmin() {
        const { accounts, lotteryHasPlayed } = this.state;
        if(accounts.length > 0 && 
            this.state.owner.toString() == accounts[0].toString()
        && lotteryHasPlayed){
            return (
                <Container style={{marginTop:'100px'}} > 
                    <Link route={ `/lotteries/new/${this.props.factoryAddress}`} >
                            <a>
                                <Button 
                                    floated="left" 
                                    content="Deploy Lottery" 
                                    icon="add" 
                                    primary />
                            </a>
                        </Link>
                </Container>
            )
        } else return null;
    }

    renderIndex() {
        return(
            <Container id='indexHeaderContainer'  >
                <Header as='h1' id='indexHeader' block align='center'>
                    WORLDPAY LOTTERY
                </Header> 
            </Container>
            );
        /* <HeaderIndex
            lotteryPrice = { this.state.lotteryPrice }
            lotteryJackPot = { this.state.lotteryJackPot } 
            deadline = { this.state.deadline }
            numOfPlayers = { this.state.numOfPlayers }
            lotteryHasPlayed = { this.state.lotteryHasPlayed }/>;*/
    }

    renderModal() {
        if(this.state.lotteryHasPlayed) {
            return <LotteryHasPlayedModal
                lotteryHasPlayed = { this.state.lotteryHasPlayed }
                numOfWinners = { this.state.numOfWinners }
                winningNumber = { this.state.winningNumbery }
                prize = { this.state.prize }
                finalJackPot = { this.state.finalJackPot }
                showMessage = {true}
                winnersPaid = {true}
                />;
        }
        return null;
    }

    renderCardIndex() {
        if(this.state.numOfLotteries > 0) {
            return <CardIndex
                lotteryPrice = {this.state.lotteryPrice}
                lotteryJackPot = {this.state.lotteryJackPot}
                deadline = {this.state.deadline}
                numOfPlayers = {this.state.numOfPlayers}
                lotteryHasPlayed = {this.state.lotteryHasPlayed}
                numOfLotteries = {this.state.numOfLotteries}
                timeStarted = {this.state.timeStarted}
                lotteryAddress = {this.state.lotteryAddress}
                ethPrice = {this.state.ethPrice}
                />
        }
        return null;
    }

    renderDrawContainer() {
        return <Container id='drawContainer'>Draw {this.state.numOfLotteries}</Container>
    }

    renderArchive() {
        return (
            <Container style={{marginTop:'10px'}} > 
                <Link route={ `/lotteries/archive/${this.state.factoryAddress}`} >
                        <a>
                            <Button 
                                floated="left" 
                                content="Archive" 
                                icon="eye" 
                                primary />
                        </a>
                    </Link>
            </Container>
        )
    }
    
    

    render() {
        return (
            <Layout>
                <div>
                    {this.renderIndex()}
                    {/*this.renderModal()*/}
                    {this.renderCardIndex()}
                    {this.renderDrawContainer()}
                    {this.renderAdmin()}
                    {this.renderArchive()}
                  
                </div>
            </Layout>
        )
    }
}

export default LotteryIndex;