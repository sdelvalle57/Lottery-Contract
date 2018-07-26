import Web3 from 'web3';

let web3;
const env = process.env.ENV || 'development';

if(env == 'development') {
    web3 = new Web3("ws://localhost:9545");
  } else {
    web3 =  new Web3(new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/_ws'));
  }
export default web3;