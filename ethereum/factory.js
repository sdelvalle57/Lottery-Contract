import web3 from './web3';
import LotteryFactory from './build/contracts/LotteryFactory.json'

const lotteryFactory = new web3.eth.Contract(LotteryFactory.abi, LotteryFactory.address);

export default function lotteryFactoryAt(lotteryFactoryAddress) {
    return new web3.eth.Contract(LotteryFactory.abi, lotteryFactoryAddress);
  }
