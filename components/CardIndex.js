import React, {Component} from 'react';
import { Icon, Image, Container } from 'semantic-ui-react';
import web3 from '../ethereum/web3';


class CardIndex extends Component {
    
    state = {
        lotteryPrice: this.props.lotteryPrice,
        lotteryJackPot: this.props.lotteryJackPot,
        deadline: this.props.deadline,
        numOfPlayers: this.props.numOfPlayers
    };  

    getDeadline(deadline) {
        deadline = parseInt(deadline*1000);
        const ans = humanize(deadline-Date.now(), { largest: 2 });
        return (deadline - Date.now()) < 0 ? 'ended '+ans+' ago':'ends in '+ans;
    }

    render() {   
        return (
            <Container style={{marginTop:'100px'}} >
                
            </Container>
        )
    }
}


export default CardIndex;