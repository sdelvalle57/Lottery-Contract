import React, {Component} from 'react';
import { Icon, Image, Statistic, Container } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Timestamp from 'react-timestamp';


class HeaderIndex extends Component {
    
    state = {
        lotteryPrice: this.props.lotteryPrice,
        lotteryJackPot: this.props.lotteryJackPot,
        deadline: this.props.deadline,
        numOfPlayers: this.props.numOfPlayers
    };  

    componentWillReceiveProps(nextProps) {
        const lotteryJackPot = nextProps.lotteryJackPot;
        const numOfPlayers = nextProps.numOfPlayers;
        const deadline = nextProps.deadline;
        this.setState({lotteryJackPot, numOfPlayers, deadline});
    }

 
    render() {   
        return (
            <Container style={{marginTop:'100px'}} >
                <Statistic.Group widths='four' >
                    <Statistic>
                        <Statistic.Value text>{this.state.lotteryPrice} <br /> ETH</Statistic.Value>
                        <Statistic.Label>Ticket price</Statistic.Label>
                    </Statistic>

                    <Statistic>
                        <Statistic.Value text>{this.state.lotteryJackPot} <br />ETH</Statistic.Value>
                        <Statistic.Label>Prize pool</Statistic.Label>
                    </Statistic>

                    <Statistic>
                        <Statistic.Value text>
                            <Icon name='time' /> <br /> Deadline
                        </Statistic.Value>
                        <Statistic.Label >
                            <Timestamp precision={3} autoUpdate time={this.state.deadline} />
                        </Statistic.Label>
                    </Statistic>

                    <Statistic>
                        <Statistic.Value text>
                            <Icon name='user'  /> <br /> { this.state.numOfPlayers }
                        </Statistic.Value>
                        <Statistic.Label>Players</Statistic.Label>
                    </Statistic>
                </Statistic.Group>
            </Container>
        )
    }
}


export default HeaderIndex;