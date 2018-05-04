var Lottery = artifacts.require("./Lottery.sol");

module.exports = function(deployer) {
  const amount =  web3.toWei(1, 'ether');
  deployer.deploy(Lottery, 600, amount);
};
