//import assertRevert from './helpers/assertRevert';
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
let LotteryMock = artifacts.require('./LotteryMock.sol');

let lottery;
let accounts;
beforeEach(async () =>{
    accounts = await web3.eth.getAccounts();
    const amount =  web3.utils.toWei('0.001', 'ether');
    lottery = await new web3.eth.Contract(JSON.parse(JSON.stringify(LotteryMock.abi)))
        .deploy({
            data: LotteryMock.bytecode, 
            arguments: [5, amount]
        })
        .send({
            from: accounts[0], 
            gas: '3000000'
        });   
});

contract('Lottery', () =>{
    const numberOfLottery1 = 1;
    const numberOfLottery2 = 2;
    const numberOfLottery3 = 3;
    const numberOfLottery4 = 4;

    it('deploys a contract', ()=>{
        assert.ok(lottery.options.address);
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

    it('1 player enters, not allows to pick winner if caller is not owner, not allows to pick winner before deadline and allows to pick winner after deadline', async () =>{
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
        //try to pick winner after deadline, but caller is not owners
        await sleep(6*1000);
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
            console.log(e);            
        }
        assert.isUndefined(errorAfterDeadline);
        
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
        //mock a winning number
        await lottery.methods.setWinningNumber(numberOfLottery4).send({
            from: accounts[0],
            gas: '200000'
        });
        await sleep(6*1000);
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

    it('several players enter, not winners this time, owner tries to call transferjackpot before and after deadline', async() => {
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
        //mock a winning number
        await lottery.methods.setWinningNumber(numberOfLottery4).send({
            from: accounts[0],
            gas: '200000'
        });

        //deploy new lottery
        const amount =  web3.utils.toWei('0.001', 'ether');
        let newLottery = await new web3.eth.Contract(JSON.parse(JSON.stringify(LotteryMock.abi)))
        .deploy({
            data: LotteryMock.bytecode, 
            arguments: [5, amount]
        })
        .send({
            from: accounts[0], 
            gas: '3000000'
        });   
        assert.ok(newLottery.options.address);
        //try to transfer before deadline
        let transferError;
        try {
            await lottery.methods.createNewLottery(newLottery.options.address).send({
                from: accounts[0],
                gas: '200000'
            });
        } catch(e){
            transferError = e;
        }
        assert.isDefined(transferError);
        
        await sleep(6*1000);
        //pick a winner to set lottery played
        await lottery.methods.pickWinner().send({
            from: accounts[0],
            gas: '200000'
        });
        
        //check contract jackpot
        let jackpot = await lottery.methods.jackPot().call();
        assert.equal(web3.utils.toWei('0.003', 'ether'), jackpot);
        
        //transfer if lottery has played
        const lotteryHasPlayed = await lottery.methods.lotteryHasPlayed().call();
        assert.isTrue(lotteryHasPlayed);
        
        //check no winners
        const winners = await lottery.methods.getWinners().call();
        assert.equal(0, winners.length);
        
        //newLottery address is still 0
        let newLotteryAddress = await lottery.methods.newLotteryAddress().call();
        assert.equal(0, newLotteryAddress);
        
        await lottery.methods.transferJackPot(newLottery.options.address).send({
            from: accounts[0],
            gas: '200000'
        });

        //newLottery address is the new deployed contract, 
        newLotteryAddress = await lottery.methods.newLotteryAddress().call();
        assert.equal(newLotteryAddress, newLottery.options.address);
       
        //check both contracts's jackpot
        jackpot = await lottery.methods.jackPot().call();
        assert.equal(0, jackpot);
        const newJackpot =  await newLottery.methods.jackPot().call();        
        assert.equal(web3.utils.toWei('0.003', 'ether'), newJackpot);

        //check newLottery has balance equals to jackpot
        const balance = await web3.eth.getBalance(newLottery.options.address);
        assert.equal(balance, newJackpot);
        
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

        //mock a winning number
        await lottery.methods.setWinningNumber(numberOfLottery2).send({
            from: accounts[0],
            gas: '200000'
        });

        
        await sleep(6*1000);
        //check contract jackpot before we pick winner
        let jackpot = await lottery.methods.jackPot().call();
        assert.equal(web3.utils.toWei('0.003', 'ether'), jackpot);

        //pick a winner to set lottery played
        await lottery.methods.pickWinner().send({
            from: accounts[0],
            gas: '200000'
        });
        
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
        const balance = await web3.eth.getBalance(accounts[1]); 
        refund = await lottery.methods.refunds(accounts[1]).call();
        assert.equal(web3.utils.toWei('0.0034', 'ether'), refund);        
        //get winner balance after withdraw
        const txReceipt = await lottery.methods.withdraw().send({from: accounts[1]}); 
        const refunded = await lottery.methods.refunds(accounts[1]).call();
        assert.equal(0, refunded);  
        
        const newBalance = await web3.eth.getBalance(accounts[1]); 
                
        assert.isAbove(newBalance, balance, 'newBalance is strictly greater than balance');   
        
        //we try to call transferJackpot to set the new lotteryAddress, wont succeed cause there is no jackpot to transfer
        //deploy new lottery
        const amount =  web3.utils.toWei('0.001', 'ether');
        let newLottery = await new web3.eth.Contract(JSON.parse(JSON.stringify(LotteryMock.abi)))
        .deploy({
            data: LotteryMock.bytecode, 
            arguments: [5, amount]
        })
        .send({
            from: accounts[0], 
            gas: '3000000'
        });   
        assert.ok(newLottery.options.address);
        let transferError;
        try {
            await lottery.methods.transferJackPot(newLottery.options.address).send({
                from: accounts[0],
                gas: '200000'
            });
        } catch(e) {
            transferError = e;
        }
        assert.isDefined(transferError);
        
        //newLottery address is still 0 
        newLotteryAddress = await lottery.methods.newLotteryAddress().call();
        assert.equal(newLotteryAddress, 0);

        //we call setNewLotteryAddress when jackpot is 0
        //newLottery address is the new deployed contract, 
        await lottery.methods.setNewLotteryAddress(newLottery.options.address).send({
            from: accounts[0],
            gas: '200000'
        });
        newLotteryAddress = await lottery.methods.newLotteryAddress().call();
        assert.equal(newLotteryAddress, newLottery.options.address);

    });


    it('several players enter, there are 3 winners (accounts[1],[2],[3]), winners refunds the jackpot', async() => {
        await (lottery.methods.enter(numberOfLottery1).send({
            from: accounts[0],
            value: web3.utils.toWei('0.001', 'ether'),
            gas: '200000'
        }));
        await (lottery.methods.enter(numberOfLottery3).send({
            from: accounts[1],
            value: web3.utils.toWei('0.0012', 'ether'),
            gas: '200000'
        }));
        await (lottery.methods.enter(numberOfLottery3).send({
            from: accounts[2],
            value: web3.utils.toWei('0.0012', 'ether'),
            gas: '200000'
        }));
        await (lottery.methods.enter(numberOfLottery3).send({
            from: accounts[3],
            value: web3.utils.toWei('0.0013', 'ether'),
            gas: '200000'
        }));
        await (lottery.methods.enter(numberOfLottery4).send({
            from: accounts[4],
            value: web3.utils.toWei('0.0012', 'ether'),
            gas: '200000'
        }));
        await (lottery.methods.enter(numberOfLottery2).send({
            from: accounts[5],
            value: web3.utils.toWei('0.0011', 'ether'),
            gas: '200000'
        }));

        //mock a winning number
        await lottery.methods.setWinningNumber(numberOfLottery3).send({
            from: accounts[0],
            gas: '200000'
        });

        
        await sleep(6*1000);
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

    //now we will use ten winners, sww how we go trough the for loop


})

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

