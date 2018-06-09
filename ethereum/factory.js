import LotteryFactory from './build/contracts/LotteryFactoryMock.json'

export default function lotteryFactoryAt(lotteryFactoryAddress, web3) {
    return new web3.eth.Contract(LotteryFactory.abi, lotteryFactoryAddress);
}

