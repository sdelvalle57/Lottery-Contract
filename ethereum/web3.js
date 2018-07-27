import Web3 from 'web3';

let web3;

const env = process.env.ENV || process.env.NODE_ENV || 'development';
console.log(env);
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  if(env == 'development') {
    web3 = new Web3("http://localhost:9545")
  } else {
    const provider = new Web3.providers.HttpProvider(
      'https://rinkeby.infura.io/qAudSy87uo2SByV57ETq'
    );
    web3 = new Web3(provider);
  }
}
export default web3;