import Web3 from 'web3';

let web3;

const env = process.env.ENV || process.env.NODE_ENV || 'development';

if(env == 'development') {
  web3 = new Web3("http://localhost:9545")
} else {
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/qAudSy87uo2SByV57ETq'
  );
  web3 = new Web3(provider);
}

export default web3;