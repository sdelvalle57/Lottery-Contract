//import assertRevert from './helpers/assertRevert';
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
let LotteryMock = artifacts.require('./LotteryMock.sol');

let lottery;
let accounts;
beforeEach(async () =>{
    accounts = await web3.eth.getAccounts();
    const bn = web3.utils.toBN(1);
    const amount =  web3.utils.toWei(bn, 'ether');
    lottery = await new web3.eth.Contract(JSON.parse(JSON.stringify(LotteryMock.abi)))
        .deploy({
            data: LotteryMock.bytecode, 
            arguments: [240, amount]
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
        const time = 5;
        await lottery.methods.setDeadline(time).send({from: accounts[0], gas: '3000000'});
        const deadline = await lottery.methods.deadline().call();
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
        assert.assert.isDefined(error);
    });

    it('1 player enters, not allows to pick winner if caller is not owner, not allows to pick winner before deadline and allows to pick winner after deadline', async () =>{
        const time = 5;
        await lottery.methods.setDeadline(time).send({from: accounts[0], gas: '3000000'});
        const deadline = await lottery.methods.deadline().call();
        await (lottery.methods.enter(numberOfLottery1).send({
            from: accounts[0],
            value: web3.utils.toWei('0.001', 'ether'),
            gas: '200000'
        }))
        
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
        await sleep(5.1*1000);
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
        
    });
})

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

