import React, { Component } from 'react';
import lotteryFactoryAt from '../ethereum/factory';

class LotteryIndex extends Component {
    static async getInitialProps() {
        let lotteryFactory = lotteryFactoryAt("0xc074464985abc9b2cf200bf6658ebfd3c9862ea4");
        const lotteries = await lotteryFactory.methods.getLotteries().call();
        return { lotteries };
    }
    

    render() {
        return <div>{this.props.lotteries[0]}</div>
    }
}

export default LotteryIndex;