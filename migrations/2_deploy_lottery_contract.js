var Lottery = artifacts.require("./LotteryMock.sol");

module.exports = function(deployer) {
  const amount =  web3.toWei('0.001', 'ether');
  //deployer.deploy(Lottery, 3600, amount);
};
