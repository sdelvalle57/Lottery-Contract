import Web3 from 'web3';

let web3;
const env = process.env.ENV || process.env.NODE_ENV || 'development';
web3 =  new Web3(new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws'));
//web3 =  new Web3(new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws'));
/*
if(env == 'development') {
    web3 = new Web3("ws://localhost:9545");
  } else {
    web3 =  new Web3(new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws'));
  }
  */
export default web3;