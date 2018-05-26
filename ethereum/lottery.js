import web3 from './web3';
import Lottery from './build/contracts/Lottery.json';

export default function lotteryAt(lotteryAddress) {
    return new web3.eth.Contract(Lottery.abi, lotteryAddress);
}