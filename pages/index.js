import React, { Component } from 'react';
import { Card, Button, Container } from 'semantic-ui-react'
import lotteryFactoryAt from '../ethereum/factory';
import Layout from '../components/Layout';
import HeaderIndex from '../components/HeaderIndex';
import LotteryHasPlayedModal from '../components/LotteryPlayedModal';
import { Link } from '../routes';
import web3 from '../ethereum/web3'
import web3Socket from '../ethereum/web3Socket'
import lotteryAt from '../ethereum/lottery';
import { Router } from '../routes';
import { runInThisContext } from 'vm';

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
        lottery:''
    }

    static async getInitialProps({res}) {
        const factoryAddress = "0x1B4C3151B92CDe20395d0E398AA0439BE4EC287B";
        let lotteryFactory = lotteryFactoryAt(factoryAddress, web3);
        const owner = await lotteryFactory.methods.owner().call();
        const lotteries = await lotteryFactory.methods.getLotteries().call();
        if(lotteries.length > 0) {
            const lotteryAddress = lotteries[lotteries.length -1];
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
            lotteryPrice = web3.utils.fromWei(lotteryPrice, 'ether') ;
            lotteryJackPot = web3.utils.fromWei(lotteryJackPot, 'ether');
            finalJackPot = web3.utils.fromWei(finalJackPot, 'ether');
            prize = web3.utils.fromWei(prize, 'ether');
            return {lotteries, factoryAddress, lotteryPrice, lotteryJackPot,
                deadline, numOfPlayers, lotteryFactory, lotteryAddress, owner,
                prize, winningNumber, numOfWinners, finalJackPot };
        } else {
            if (res) {
                res.writeHead(302, {
                  Location: `/lotteries/new/${factoryAddress}`
                })
                res.end()
                res.finished = true
              } else {
                Router.push(`/lotteries/new/${factoryAddress}`)
              }
            return;
        }
    }

    async componentDidMount() {
        const lottery = lotteryAt(this.props.lotteryAddress, web3Socket);
        const lotteryFactory = lotteryFactoryAt(this.props.factoryAddress, web3Socket);
        const lotteryHasPlayed = await lottery.methods.lotteryHasPlayed().call();
        this.setFactoryEventsListeners(lotteryFactory);
        this.setEventsListeners(lottery, lotteryFactory);
        this.setState({lotteryHasPlayed, lottery});
    }

    setFactoryEventsListeners = (lotteryFactory) => {
        lotteryFactory.events.LotteryDeployed({}, async (error, data) => {
            if(error == null) {
                const newLotteryAddress = data.returnValues.deployedLottery;
                const lottery = lotteryAt(newLotteryAddress, web3Socket);
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
                lotteryPrice = web3.utils.fromWei(lotteryPrice, 'ether') ;
                lotteryJackPot = web3.utils.fromWei(lotteryJackPot, 'ether');
                finalJackPot = web3.utils.fromWei(finalJackPot, 'ether');
                prize = web3.utils.fromWei(prize, 'ether');
                this.setEventsListeners(lottery);
                this.setState({lotteryJackPot, numOfPlayers, lotteryHasPlayed, winningNumber,
                    numOfWinners, prize, finalJackPot, lotteryPrice, deadline});
                    
            }
        })
    }

    setEventsListeners =  (lottery) => {
        lottery.events.TicketBuy({}, async (error, data) => {
            if (error == null) {
                let lotteryJackPot = data.returnValues.jackPot;
                lotteryJackPot = web3.utils.fromWei(lotteryJackPot, 'ether') ;
                const numOfPlayers = data.returnValues.numOfPlayers;
                this.setState({ lotteryJackPot, numOfPlayers })
            }
        });

        lottery.events.LotteryHasPlayed({}, async (error, data) => {
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

        window.addEventListener('load', async () => {
            const accounts = await web3.eth.getAccounts();
            this.setState({accounts});
        }, false);
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
        if(this.state.accounts.length > 0 && 
            this.props.owner.toLowerCase() == this.state.accounts[0].toLowerCase()){
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
        return <HeaderIndex
            lotteryPrice = { this.state.lotteryPrice }
            lotteryJackPot = { this.state.lotteryJackPot } 
            deadline = { this.state.deadline }
            numOfPlayers = { this.state.numOfPlayers }/>;
    }

    renderModal() {
        if(this.state.lotteryHasPlayed) {
            return <LotteryHasPlayedModal
                lotteryHasPlayed = { this.state.lotteryHasPlayed }
                numOfWinners = { this.state.numOfWinners }
                winningNumber = { this.state.winningNumber }
                prize = { this.state.prize }
                finalJackPot = { this.state.finalJackPot }
                />;
        }
        return null;
    }

    render() {
        return (
            <Layout >
                <div>
                    {this.renderIndex()}
                    {this.renderModal()}
                    {this.renderAdmin()}
                </div>
            </Layout>
        )
    }
}

export default LotteryIndex;