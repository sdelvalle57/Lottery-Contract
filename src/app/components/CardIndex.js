import React, {Component} from 'react';
import { Image, Container, Card, Button } from 'semantic-ui-react';
import Timestamp from 'react-timestamp';
import { Link } from '../routes';
import numeral from 'numeral';

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
        lotteryAddress: this.props.lotteryAddress,
        ethPrice: this.props.ethPrice
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
            lotteryAddress: this.props.lotteryAddress,
            ethPrice: nextProps.ethPrice
        });
    }

    renderMeta(lotteryJackPot, ethPrice) {
        if(ethPrice >= 0) {
            let usdJackpot = lotteryJackPot * ethPrice;
            if(usdJackpot > 0){
                usdJackpot = numeral(usdJackpot).format('0,0');
            }
            return (
                <Card.Meta>
                   {usdJackpot} USD
                </Card.Meta>
            );
        }
        return null;
    }

    renderDeadline(deadline, lotteryHasPlayed) {
        const canBuyLottery = !lotteryHasPlayed && Date.now()/1000 - deadline  < 0;
        if(canBuyLottery) {
            return null;
            /*
            return <p>Ends  <Timestamp
                    precision={2} 
                    
                    autoUpdate time={deadline} 
                    actualSeconds /></p>
                    */
        }
        return "Ended";
    }
    

    render() {   
        let { 
            lotteryPrice, lotteryJackPot, deadline, numOfPlayers, 
            lotteryHasPlayed, numOfLotteries, timeStarted, lotteryAddress, ethPrice } = this.state
            let route = `/lotteries/${lotteryAddress}`;
            if(lotteryHasPlayed) {
                route = `/lotteries/${lotteryAddress}`;
            }
        return (
            <Container id='indexCardContainer' >
                <Card id='indexCard'>
                    <Image verticalAlign='middle' size='medium' centered circular src='/static/images/lottery_icon.png' />
                    <Card.Content>
                    <Card.Header>{lotteryJackPot} ETH</Card.Header>
                    {this.renderMeta(lotteryJackPot, ethPrice)}
                    <Card.Description>
                        {this.renderDeadline(deadline, lotteryHasPlayed)}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <Link prefetch route={route} >
                        <Button id='buyTicketButton'>
                            BUY TICKET
                        </Button>
                    </Link>
                    </Card.Content>
                </Card>
            </Container>
        )
    }
}


export default CardIndex;