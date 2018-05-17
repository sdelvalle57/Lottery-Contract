const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const LotteryFactory = artifacts.require('./LotteryFactory.sol');
const Lottery = artifacts.require('./Lottery.sol');


let lotteryFactory;
let accounts;
let lottery;
const lotteryValue = web3.utils.toWei('0.001', 'ether');
beforeEach(async () =>{
    accounts = await web3.eth.getAccounts();
    const amount =  web3.utils.toWei('0.001', 'ether');
    lotteryFactory = await new web3.eth.Contract(JSON.parse(JSON.stringify(LotteryFactory.abi)))
        .deploy({
            data: LotteryFactory.bytecode,
            arguments: [5, lotteryValue]
        })
        .send({
            from: accounts[0], 
            gas: '5500000'
        });  

    let lotteries = await lotteryFactory.methods.getLotteries().call();
    assert.equal(lotteries.length, 1);
    lottery = new web3.eth.Contract(Lottery.abi, lotteries[lotteries.length-1]);
});

contract('Lottery', () =>{
    const numberOfLottery1 = 1;
    const numberOfLottery2 = 2;
    const numberOfLottery3 = 3;
    const numberOfLottery4 = 4;
    
    it('deploys a LotteryFactory', ()=>{
        assert.ok(lotteryFactory.options.address);
    });

    it('LotteryFactory creates a new lottery', ()=>{
        assert.ok(lottery.options.address);
    });

    it('Owner of new lottery is accounts[0]', async ()=>{
        const owner = await lottery.methods.owner().call();
        assert.equal(owner, accounts[0]);
    });
    
    it('allows one account to enter', async () =>{
        await lottery.methods.enter(numberOfLottery1).send({
            from: accounts[0],
            value: web3.utils.toWei('0.001', 'ether'),
            gas: '200000'
        });
        const player = await lottery.methods.players(0).call();
        assert.equal(accounts[0], player);
        const players = await lottery.methods.getPlayers().call();
        assert.equal(1, players.length);
    });
 
    it('allows five accounts to enter with one repeated number', async () =>{        
        await lottery.methods.enter(numberOfLottery1).send({
            from: accounts[0],
            value: web3.utils.toWei('0.001', 'ether'),
            gas: '200000'
        });
        await lottery.methods.enter(numberOfLottery2).send({
            from: accounts[1],
            value: web3.utils.toWei('0.001', 'ether'),
            gas: '200000'
        });
        await lottery.methods.enter(numberOfLottery3).send({
            from: accounts[2],
            value: web3.utils.toWei('0.001', 'ether'),
            gas: '200000'
        });
        await lottery.methods.enter(numberOfLottery4).send({
            from: accounts[3],
            value: web3.utils.toWei('0.001', 'ether'),
            gas: '200000'
        });
        await lottery.methods.enter(numberOfLottery1).send({
            from: accounts[4],
            value: web3.utils.toWei('0.001', 'ether'),
            gas: '200000'
        });
        const players = await lottery.methods.getPlayers().call();
        assert.equal(accounts[0], players[0]);
        assert.equal(accounts[1], players[1]);
        assert.equal(accounts[2], players[2]);
        assert.equal(accounts[3], players[3]);
        assert.equal(accounts[4], players[4]);
        assert.equal(5, players.length);
        const playersByNumber = await lottery.methods.getPlayersByLotteryNumber(numberOfLottery1).call();
        assert.equal(accounts[0], playersByNumber[0]);
        assert.equal(accounts[4], playersByNumber[1]);
    });   
    
    it('allows one account to enter several times', async () =>{
        await lottery.methods.enter(numberOfLottery1).send({
            from: accounts[0],
            value: web3.utils.toWei('0.001', 'ether'),
            gas: '200000'
        });
        await lottery.methods.enter(numberOfLottery2).send({
            from: accounts[0],
            value: web3.utils.toWei('0.001', 'ether'),
            gas: '200000'
        });
        await lottery.methods.enter(numberOfLottery3).send({
            from: accounts[0],
            value: web3.utils.toWei('0.001', 'ether'),
            gas: '200000'
        });
        const players = await lottery.methods.getPlayers().call();
        assert.equal(accounts[0], players[0]);
        assert.equal(accounts[0], players[1]);
        assert.equal(accounts[0], players[2]);
        
        let playersByNumber = await lottery.methods.getPlayersByLotteryNumber(numberOfLottery1).call();
        assert.equal(accounts[0], playersByNumber[0]);
        playersByNumber = await lottery.methods.getPlayersByLotteryNumber(numberOfLottery2).call();
        assert.equal(accounts[0], playersByNumber[0]);
        playersByNumber = await lottery.methods.getPlayersByLotteryNumber(numberOfLottery3).call();
        assert.equal(accounts[0], playersByNumber[0]);        
    });
    
    it('allows one account to enter several times the same number', async () =>{
        await lottery.methods.enter(numberOfLottery1).send({
            from: accounts[0],
            value: web3.utils.toWei('0.001', 'ether'),
            gas: '1000000'
        });
        await lottery.methods.enter(numberOfLottery1).send({
            from: accounts[0],
            value: web3.utils.toWei('0.001', 'ether'),
            gas: '1000000'
        });
        await lottery.methods.enter(numberOfLottery1).send({
            from: accounts[0],
            value: web3.utils.toWei('0.001', 'ether'),
            gas: '1000000'
        });
        const players = await lottery.methods.getPlayers().call();
        assert.equal(accounts[0], players[0]);
        assert.equal(accounts[0], players[1]);
        assert.equal(accounts[0], players[2]);
        assert.equal(3, players.length);
        const playersByNumber = await lottery.methods.getPlayersByLotteryNumber(numberOfLottery1).call();
        assert.equal(accounts[0], playersByNumber[0]);
        assert.equal(accounts[0], playersByNumber[1]);
        assert.equal(accounts[0], playersByNumber[2]);
        assert.equal(3, playersByNumber.length);
        
    });

    it('jackpot increasing when users enter', async () =>{
        await lottery.methods.enter(numberOfLottery1).send({
            from: accounts[3],
            value: web3.utils.toWei('0.001', 'ether'),
            gas: '200000'
        });
        await lottery.methods.enter(numberOfLottery2).send({
            from: accounts[1],
            value: web3.utils.toWei('0.001', 'ether'),
            gas: '200000'
        });
        await lottery.methods.enter(numberOfLottery3).send({
            from: accounts[2],
            value: web3.utils.toWei('0.001', 'ether'),
            gas: '200000'
        });
        const jackPot = await lottery.methods.jackPot().call();
        assert.equal(web3.utils.toWei('0.003', 'ether'), jackPot);
    });

    it('jackpot increasing when users enter and add money to refund when sends more than the lottery value', async () =>{
        await lottery.methods.enter(numberOfLottery1).send({
            from: accounts[3],
            value: web3.utils.toWei('0.0011', 'ether'),
            gas: '200000'
        });
        await lottery.methods.enter(numberOfLottery2).send({
            from: accounts[1],
            value: web3.utils.toWei('0.0012', 'ether'),
            gas: '200000'
        });
        await lottery.methods.enter(numberOfLottery3).send({
            from: accounts[1],
            value: web3.utils.toWei('0.0013', 'ether'),
            gas: '200000'
        });
        const jackPot = await lottery.methods.jackPot().call();
        assert.equal(web3.utils.toWei('0.003', 'ether'), jackPot);
        let refund = await lottery.methods.refunds(accounts[3]).call();
        assert.equal(web3.utils.toWei('0.0001', 'ether'), refund);
        refund = await lottery.methods.refunds(accounts[1]).call();
        assert.equal(web3.utils.toWei('0.0005', 'ether'), refund);
    });

    it('allows a player to enter before deadline and not allows a player to enter after deadline', async () =>{
        let error;
        try {
            await (lottery.methods.enter(numberOfLottery1).send({
                from: accounts[0],
                value: web3.utils.toWei('0.001', 'ether'),
                gas: '200000'
            }))
        } catch(e){
            error = e;
        }
        assert.isUndefined(error);

        await sleep(5*1000);
        try {
            await (lottery.methods.enter(numberOfLottery1).send({
                from: accounts[0],
                value: web3.utils.toWei('0.001', 'ether'),
                gas: '200000'
            }))
        } catch(e){
            error = e;
        }
        assert.isDefined(error);
    });

    it('1 player enters, not allows to pick winner if caller is not owner, pick winner before(not allowed) and after(is allowed) deadline', async () =>{
        //mock a probability of 10 
        await lottery.methods.setProbability(10).send({
            from: accounts[0],
            gas: '200000'
        });
        //try to enter with a value of 0
        let errorEnter;
        try {
            await (lottery.methods.enter(0).send({
                from: accounts[0],
                value: web3.utils.toWei('0.001', 'ether'),
                gas: '200000'
            }))
        } catch(e){
            errorEnter = e;
        }
        assert.isDefined(errorEnter);
        await (lottery.methods.enter(numberOfLottery1).send({
            from: accounts[0],
            value: web3.utils.toWei('0.001', 'ether'),
            gas: '200000'
        }))
        //try to pick winner before deadline
        let errorBeforeDeadline;
        try {
            await (lottery.methods.pickWinner().send({
                from: accounts[0],
                gas: '200000'
            }))
        } catch(e){
            errorBeforeDeadline = e;
        }
        assert.isDefined(errorBeforeDeadline);
        

        await sleep(6*1000);
        //try to pick winner after deadline, but caller is not owners
        
        let errorOwner;
        try {
            await (lottery.methods.pickWinner().send({
                from: accounts[1],
                gas: '200000'
            }))
        } catch(e){
            errorOwner = e;
        }
        assert.isDefined(errorOwner);
        //try to pick winner after deadline, caller is owner
        let errorAfterDeadline;
        try {
            await (lottery.methods.pickWinner().send({
                from: accounts[0],
                gas: '200000'
            }))
        } catch(e){
            errorAfterDeadline = e;
        }
        assert.isUndefined(errorAfterDeadline);

        //check if winning number is inside the probability
        const probability = await lottery.methods.probability().call();
        assert.equal(probability, 10);
        const winningNumber = await lottery.methods.winningNumber().call();
        assert.notEqual(winningNumber, 0);
        assert.isBelow(winningNumber, 10); 
    });

    it('several players enter, not winners this time, jackpot stays the same, account[1]  refund change', async() => {
        await (lottery.methods.enter(numberOfLottery1).send({
            from: accounts[0],
            value: web3.utils.toWei('0.001', 'ether'),
            gas: '200000'
        }));
        await (lottery.methods.enter(numberOfLottery2).send({
            from: accounts[1],
            value: web3.utils.toWei('0.0012', 'ether'),
            gas: '200000'
        }));
        await (lottery.methods.enter(numberOfLottery3).send({
            from: accounts[1],
            value: web3.utils.toWei('0.0012', 'ether'),
            gas: '200000'
        }));
        
        await sleep(6*1000);
        //simulate a winning number
        await lottery.methods.setWinningNumber(numberOfLottery4).send({
            from: accounts[0],
            gas: '200000'
        });
        await lottery.methods.pickWinner().send({
            from: accounts[0],
            gas: '200000'
        });
        //No winners
        const winners = await lottery.methods.getWinners().call();
        assert.equal(0, winners.length);
        //Jackpot stays the same
        const jackpot = await lottery.methods.jackPot().call();
        assert.equal(web3.utils.toWei('0.003', 'ether'), jackpot);
        //acccounts[1] refund balance and withdraw
        let refund = await lottery.methods.refunds(accounts[1]).call();
        assert.equal(web3.utils.toWei('0.0004', 'ether'), refund);
        await lottery.methods.withdraw().send({from: accounts[1]});
        refund = await lottery.methods.refunds(accounts[1]).call();
        assert.equal(0, refund);
    });

    it('several players enter, not winners this time, owner tries to call attempNewLottery before and after deadline', async() => {
        const enter1 = await (lottery.methods.enter(numberOfLottery1).send({
            from: accounts[0],
            value: web3.utils.toWei('0.0014', 'ether'),
            gas: '200000'
        }));
        assert.ok(enter1.events.RefundAdded);
        assert.equal(enter1.events.RefundAdded.returnValues.amount,  web3.utils.toWei('0.0004', 'ether'));

        await (lottery.methods.enter(numberOfLottery1).send({
            from: accounts[0],
            value: web3.utils.toWei('0.0014', 'ether'),
            gas: '200000'
        }));
        
        await (lottery.methods.enter(numberOfLottery3).send({
            from: accounts[1],
            value: web3.utils.toWei('0.0012', 'ether'),
            gas: '200000'
        }));
 
        //attemp to deploy new lottery
        let createLotteryError;
        try{
            await lottery.methods.attempNewLottery(5, lotteryValue).send({
                from: accounts[0], 
                gas: '4000000'
            });   
        } catch (e){
            createLotteryError = e;
        }
        assert.isDefined(createLotteryError);

        
        await sleep(6*1000);
        //simulate a winning number
        await lottery.methods.setWinningNumber(numberOfLottery4).send({
            from: accounts[0],
            gas: '200000'
        });

        //pick a winner to set lottery played
        await lottery.methods.pickWinner().send({
            from: accounts[0],
            gas: '200000'
        });

        //check contract jackpot
        let jackpot = await lottery.methods.jackPot().call();
        assert.equal(web3.utils.toWei('0.003', 'ether'), jackpot);
        
        //lottery has played
        const lotteryHasPlayed = await lottery.methods.lotteryHasPlayed().call();
        assert.isTrue(lotteryHasPlayed);

        //check no winners
        const winners = await lottery.methods.getWinners().call();
        assert.equal(0, winners.length);
    
        //attemp to deploy new lottery from another account
        let createLotteryError2;
        try{
            await lottery.methods.attempNewLottery(5, lotteryValue).send({
                from: accounts[1], 
                gas: '4000000'
            });   
        } catch (e){
            createLotteryError2 = e;
        }
        assert.isDefined(createLotteryError2);
        
        //call to create a new lottery and transfer the jackpot
        const attemp = await lottery.methods.attempNewLottery(5, lotteryValue).send({
            from: accounts[0], 
            gas: '4000000'
        });
        console.log(attemp.gasUsed);
        
                
        //load the new lottery
        let lotteries = await lotteryFactory.methods.getLotteries().call();  
        assert.equal(lotteries.length, 2);      
        let newLotteryAddress = lotteries[lotteries.length-1];        
        const newLottery = new web3.eth.Contract(Lottery.abi, newLotteryAddress);
        //check lastLottery of the deployed lottery
        const lastLotteryAddress = await newLottery.methods.lastLottery().call();
        assert.equal(lastLotteryAddress, lottery.options.address);

        //if there is no winners in the last lottery, so jackpot should be 0 
        //because function _transferJackPot has been called
        jackpot = await lottery.methods.jackPot().call();
        assert.equal(0, jackpot);

        //jackpot of new lottery should be the jackpot of last lottery
        jackpot = await newLottery.methods.jackPot().call();
        assert.equal(web3.utils.toWei('0.003', 'ether'), jackpot);
        const balance = await web3.eth.getBalance(newLotteryAddress);
        assert.equal(balance, jackpot);
    });    
    
    it('several players enter, there is a winner (accounts[1]), winner refunds the jackpot', async() => {
        await (lottery.methods.enter(numberOfLottery1).send({
            from: accounts[0],
            value: web3.utils.toWei('0.001', 'ether'),
            gas: '200000'
        }));
        await (lottery.methods.enter(numberOfLottery2).send({
            from: accounts[1],
            value: web3.utils.toWei('0.0012', 'ether'),
            gas: '200000'
        }));
        await (lottery.methods.enter(numberOfLottery3).send({
            from: accounts[1],
            value: web3.utils.toWei('0.0012', 'ether'),
            gas: '200000'
        }));

        await sleep(6*1000);
        //simulate a winning number
        await lottery.methods.setWinningNumber(numberOfLottery2).send({
            from: accounts[0],
            gas: '200000'
        });
        
        //check contract jackpot before we pick winner
        let jackpot = await lottery.methods.jackPot().call();
        assert.equal(web3.utils.toWei('0.003', 'ether'), jackpot);

        //pick a winner to set lottery played
        await lottery.methods.pickWinner().send({
            from: accounts[0],
            gas: '200000'
        });
        const winningNumber = await lottery.methods.winningNumber().call();
        assert.equal(winningNumber, numberOfLottery2);
        
        //if lottery has played
        const lotteryHasPlayed = await lottery.methods.lotteryHasPlayed().call();
        assert.isTrue(lotteryHasPlayed);
        
        //check one winner
        const winners = await lottery.methods.getWinners().call();
        assert.equal(1, winners.length);

        //check contract jackpot after we pick winner
        jackpot = await lottery.methods.jackPot().call();
        assert.equal(0, jackpot);

        //withdraw winner
        //get winner balance before withdraw, check if jackpot has been transfered to refunds
        let balance = await web3.eth.getBalance(accounts[1]); 
        refund = await lottery.methods.refunds(accounts[1]).call();
        assert.equal(web3.utils.toWei('0.0034', 'ether'), refund);        
        //get winner balance after withdraw
        const txReceipt = await lottery.methods.withdraw().send({from: accounts[1]}); 
        const refunded = await lottery.methods.refunds(accounts[1]).call();
        assert.equal(0, refunded);  
        
        const newBalance = await web3.eth.getBalance(accounts[1]); 
                
        assert.isAbove(newBalance, balance, 'newBalance is strictly greater than balance');   
        
        //we deploy new lottery, but this time the jackpot has not been transfered cause there was a winner
       //call to create a new lottery and transfer the jackpot
        await lottery.methods.attempNewLottery(5, lotteryValue).send({
            from: accounts[0], 
            gas: '4000000'
        });
        
        //load the new lottery
        let lotteries = await lotteryFactory.methods.getLotteries().call();  
        assert.equal(lotteries.length, 2);      
        let newLotteryAddress = lotteries[lotteries.length-1];        
        const newLottery = new web3.eth.Contract(Lottery.abi, newLotteryAddress);
        jackpot = await newLottery.methods.jackPot().call();
        assert.equal(0, jackpot);
        balance = await web3.eth.getBalance(newLotteryAddress);
        assert.equal(jackpot, balance);
    });

    it('several players enter, there are 3 winners (accounts[1],[2],[3]), winners refunds the jackpot', async() => {
        let entered = await (lottery.methods.enter(numberOfLottery1).send({
            from: accounts[0],
            value: web3.utils.toWei('0.001', 'ether'),
            gas: '200000'
        }));
        entered = await (lottery.methods.enter(numberOfLottery3).send({
            from: accounts[1],
            value: web3.utils.toWei('0.0012', 'ether'),
            gas: '200000'
        }));
        entered = await (lottery.methods.enter(numberOfLottery3).send({
            from: accounts[2],
            value: web3.utils.toWei('0.0012', 'ether'),
            gas: '200000'
        }));
        entered = await (lottery.methods.enter(numberOfLottery3).send({
            from: accounts[3],
            value: web3.utils.toWei('0.0013', 'ether'),
            gas: '200000'
        }));
        entered = await (lottery.methods.enter(numberOfLottery4).send({
            from: accounts[4],
            value: web3.utils.toWei('0.0012', 'ether'),
            gas: '200000'
        }));
        entered = await (lottery.methods.enter(numberOfLottery2).send({
            from: accounts[5],
            value: web3.utils.toWei('0.0011', 'ether'),
            gas: '200000'
        }));
        
        await sleep(6*1000);
        //simulate a winning number
        await lottery.methods.setWinningNumber(numberOfLottery3).send({
            from: accounts[0],
            gas: '200000'
        });

        //check contract jackpot before we pick winner
        let jackpot = await lottery.methods.jackPot().call();
        assert.equal(web3.utils.toWei('0.006', 'ether'), jackpot);

        //pick a winner to set lottery played
        const recipit = await lottery.methods.pickWinner().send({
            from: accounts[0],
            gas: '200000'
        });
        
        //if lottery has played
        const lotteryHasPlayed = await lottery.methods.lotteryHasPlayed().call();
        assert.isTrue(lotteryHasPlayed);
        
        //check one winner
        const winners = await lottery.methods.getWinners().call();
        assert.equal(3, winners.length);

        //check contract jackpot after we pick winner
        jackpot = await lottery.methods.jackPot().call();
        assert.equal(0, jackpot);

        //withdraw winner
        //check winners refunds
        let refund = await lottery.methods.refunds(accounts[0]).call();
        assert.equal(web3.utils.toWei('0', 'ether'), refund); 
        refund = await lottery.methods.refunds(accounts[1]).call();
        assert.equal(web3.utils.toWei('0.0022', 'ether'), refund); 
        refund = await lottery.methods.refunds(accounts[2]).call();
        assert.equal(web3.utils.toWei('0.0022', 'ether'), refund);
        refund = await lottery.methods.refunds(accounts[3]).call();
        assert.equal(web3.utils.toWei('0.0023', 'ether'), refund);
        refund = await lottery.methods.refunds(accounts[4]).call();
        assert.equal(web3.utils.toWei('0.0002', 'ether'), refund);
        refund = await lottery.methods.refunds(accounts[5]).call();
        assert.equal(web3.utils.toWei('0.0001', 'ether'), refund);
    });

    it('goes through the lottery', async() => {
        let entered = await (lottery.methods.enter(numberOfLottery1).send({
            from: accounts[0],
            value: web3.utils.toWei('0.001', 'ether'),
            gas: '200000'
        }));
        entered = await (lottery.methods.enter(numberOfLottery1).send({
            from: accounts[1],
            value: web3.utils.toWei('0.0012', 'ether'),
            gas: '200000'
        }));
        entered = await (lottery.methods.enter(numberOfLottery1).send({
            from: accounts[2],
            value: web3.utils.toWei('0.0012', 'ether'),
            gas: '200000'
        }));
        entered = await (lottery.methods.enter(numberOfLottery1).send({
            from: accounts[3],
            value: web3.utils.toWei('0.0013', 'ether'),
            gas: '200000'
        }));
        entered = await (lottery.methods.enter(numberOfLottery1).send({
            from: accounts[4],
            value: web3.utils.toWei('0.0012', 'ether'),
            gas: '200000'
        }));
        entered = await (lottery.methods.enter(numberOfLottery2).send({
            from: accounts[5],
            value: web3.utils.toWei('0.0011', 'ether'),
            gas: '200000'
        }));
        
        await sleep(6*1000);
        await lottery.methods.pickWinner().send({
            from: accounts[0],
            gas: '300000'
        });
        const winningNumber = await lottery.methods.winningNumber().call();
        console.log(winningNumber);
    })

    it('nobody enters the lottery, lottery balance is 0, then we pass some ether to it, we attemp to create another lottery', async() => {
        await sleep(6*1000);
        await lottery.methods.pickWinner().send({
            from: accounts[0],
            gas: '300000'
        });
        
        await lottery.methods.attempNewLottery(5, lotteryValue).send({
            from: accounts[0], 
            gas: '4000000'
        });
        let lotteries = await lotteryFactory.methods.getLotteries().call();  
        assert.equal(lotteries.length, 2);    

        let newLottery = new web3.eth.Contract(Lottery.abi, lotteries[lotteries.length-1]);
        await newLottery.methods.addJackPot().send({ from: accounts[0], value: web3.utils.toWei('1', 'ether') });
        let jackpot = await newLottery.methods.jackPot().call();
        assert.equal(jackpot, web3.utils.toWei('1', 'ether'));

        await sleep(6*1000);
        await newLottery.methods.pickWinner().send({
            from: accounts[0],
            gas: '300000'
        });
        
        await newLottery.methods.attempNewLottery(5, lotteryValue).send({
            from: accounts[0], 
            gas: '4000000'
        });
        lotteries = await lotteryFactory.methods.getLotteries().call();  
        assert.equal(lotteries.length, 3);    
        newLottery = new web3.eth.Contract(Lottery.abi, lotteries[lotteries.length-1]);
        const balance = await web3.eth.getBalance(lotteries[lotteries.length-1]); 
        assert.equal(jackpot, web3.utils.toWei('1', 'ether'));
        jackpot = await newLottery.methods.jackPot().call();
        assert.equal(jackpot, balance);
    });
})

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function awaitEvent (event, handler) {
    return new Promise((resolve, reject) => {
      function wrappedHandler (...args) {
        Promise.resolve(handler(...args)).then(resolve).catch(reject);
      }
  
      event.watch(wrappedHandler);
    });
  }

