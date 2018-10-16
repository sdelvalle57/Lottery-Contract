import Web3 from 'web3';

let web3;

const env = process.env.ENV || process.env.NODE_ENV || 'development';

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  web3 =  new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/ccef7c32fcd94fb1a7683538e5d18aa2'));
}

export default web3;