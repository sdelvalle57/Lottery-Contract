import Web3 from 'web3';


export default function web3At(windowProvider) {
  if (typeof windowProvider !== 'undefined' && typeof windowProvider.web3 !== 'undefined') {
    return new Web3(windowProvider.web3.currentProvider);
  } else {
    /*
    const provider = new Web3.providers.HttpProvider(
      'https://rinkeby.infura.io/qAudSy87uo2SByV57ETq'
    );
    return new Web3(provider);
    */
    return new Web3("ws://localhost:8545")
  }
}






