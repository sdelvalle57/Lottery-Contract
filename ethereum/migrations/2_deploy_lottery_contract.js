var LotteryFactory = artifacts.require("./LotteryFactory.sol");

module.exports = function(deployer) {
  deployer.deploy(LotteryFactory, {gas: 5000000});
};
