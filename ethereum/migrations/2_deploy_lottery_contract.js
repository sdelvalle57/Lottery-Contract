var LotteryFactory = artifacts.require("./LotteryFactory.sol");

module.exports = function(deployer) {
  const amount =  web3.toWei('0.001', 'ether');
  deployer.deploy(LotteryFactory);
};
