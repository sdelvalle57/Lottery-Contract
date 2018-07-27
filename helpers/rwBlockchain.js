import web3Socket from '../ethereum/web3Socket';
import web3 from '../ethereum/web3';
import lotteryAt from '../ethereum/lottery';
import lotteryFactoryAt from '../ethereum/factory';

/* reading functions */
async function getSummary(lotteryAddress) {
  const lottery = lotteryAt(lotteryAddress, web3Socket);
  const summary  = await lottery.methods.getSummary().call();
  return summary;
}

async function getNumbersByPlayer(account, lotteryAddress) {
  const lottery = lotteryAt(lotteryAddress, web3Socket);
  const numbers = await lottery.methods.getNumbers4ByPlayer().call({
    from: account
  });
  return numbers;
}

async function getAccounts() {
  const accounts = await web3.eth.getAccounts(); 
  return accounts;
}

async function getLotteries(factoryAddress) {
  const lotteryFactory = lotteryFactoryAt(factoryAddress, web3Socket);
  const lotteries = await lotteryFactory.methods.getLotteries().call();
  return lotteries;
}


/* writing functions */
async function enterLottery(lotteryAddress, number4, numbers3, lotteryValue, network) {
  console.log(network);
  let response = {
    error: false,
    message: ""
  };
  if(network.providerNotSet) {
    return this.errorMessage("Use Mist or Metamask to send the Transaction");
  } else if(network.networkNotSet) {
    return this.errorMessage("Select the Rinkeby network");
  } else if(network.notLogged) {
    return this.errorMessage("Login to the Rinkeby network");
  }
  const lottery = lotteryAt(lotteryAddress, web3);
  try {
    const accounts = await web3.eth.getAccounts();
    await lottery.methods.enter(number4, numbers3).send({
        from: accounts[0],
        value: lotteryValue
    });
    return response;
  } catch (err) {
    return this.errorMessage(err.message.split("\n")[0]);
  }
}

function errorMessage(message) {
  let response = {};
  response['error'] = true;
  response['message'] = message;
  return response;
}


export default {
  getSummary, getAccounts, enterLottery, errorMessage, getNumbersByPlayer, getLotteries
}

 