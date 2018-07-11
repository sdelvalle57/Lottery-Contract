import React, {Component} from 'react';
import { Icon, Image, Container, Card } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Timestamp from 'react-timestamp';
import { Link } from '../routes';

class CardIndex extends Component {
    
    state = {
        lotteryPrice: this.props.lotteryPrice,
        lotteryJackPot: this.props.lotteryJackPot,
        deadline: this.props.deadline,
        numOfPlayers: this.props.numOfPlayers,
        lotteryHasPlayed: this.props.lotteryHasPlayed,
        numOfLotteries: this.props.numOfLotteries, 
        timeStarted: this.props.timeStarted, 
        address: this.props.address,
        lotteryAddress: this.props.lotteryAddress
    };  

    componentWillReceiveProps(nextProps) {
        this.setState({
            lotteryPrice: nextProps.lotteryPrice,
            lotteryJackPot: nextProps.lotteryJackPot,
            deadline: nextProps.deadline,
            numOfPlayers: nextProps.numOfPlayers,
            lotteryHasPlayed: nextProps.lotteryHasPlayed,
            numOfLotteries: nextProps.numOfLotteries,
            timeStarted: nextProps.timeStarted,
            lotteryAddress: this.props.lotteryAddress
        });
    }
    

    render() {   
        let { 
            lotteryPrice, lotteryJackPot, deadline, numOfPlayers, 
            lotteryHasPlayed, numOfLotteries, timeStarted, lotteryAddress } = this.state
            let route = `/lotteries/${lotteryAddress}`;
            if(lotteryHasPlayed) {
                route = `/lotteries/${lotteryAddress}`;
            }
        return (
            <Container style={{marginTop:'100px', display: 'flex', justifyContent: 'center'}} >
                <Card>
                    <Image src='/static/eth.png' />
                    <Card.Content>
                    <Card.Header>Draw number {numOfLotteries}</Card.Header>
                    <Card.Meta>
                        <span className='date'>
                            Sarted on <Timestamp time={timeStarted} format='full' />
                        </span>
                    </Card.Meta>
                    <Card.Description>Choose 4 numbers from 1 to 99</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <Link prefetch route={route} >
                        <a>
                            <Icon name='play' />
                            Play Lottery
                        </a>
                    </Link>
                    </Card.Content>
                </Card>
            </Container>
        )
    }
}


export default CardIndex;