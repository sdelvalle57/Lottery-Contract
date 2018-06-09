import Lottery from './build/contracts/LotteryMock.json';

export default function lotteryAt(lotteryAddress, web3) {
    return new web3.eth.Contract(Lottery.abi, lotteryAddress);
}