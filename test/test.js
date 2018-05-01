var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
let Lottery = artifacts.require('./Lottery.sol');

let lottery;
let accounts;
beforeEach(async () =>{
    accounts = await web3.eth.getAccounts();
    lottery = await new web3.eth.Contract(JSON.parse(JSON.stringify(Lottery.abi)))
        .deploy({data: Lottery.bytecode})
        .send({from: accounts[0], gas: '1000000'});   
});

contract('Lottery', () =>{
    it('deploys a contract', ()=>{
        assert.ok(lottery.options.address);
    });

    it('allows one account to enter', async () =>{
        const numberOfLottery = 123456;
        await lottery.methods.enter(numberOfLottery).send({
            from: accounts[0],
            value: web3.utils.toWei('3', 'ether'),
            gas: '1000000'
        });
        const players = await lottery.methods.getAllPlayers().call();
        const playersByNumber = await lottery.methods.getPlayersByLotteryNumber(numberOfLottery).call();
        assert.equal(accounts[0], players[0]);
        assert.equal(accounts[0], playersByNumber[0]);
        assert.equal(1, players.length);
    });
    it('allows five accounts to enter with one repeated number', async () =>{
        const numberOfLottery1 = 123456;
        const numberOfLottery2 = 654321;
        const numberOfLottery3 = 987654;
        const numberOfLottery4 = 456789;
        const numberOfLottery5 = 123456;
        
        await lottery.methods.enter(numberOfLottery1).send({
            from: accounts[0],
            value: web3.utils.toWei('3', 'ether'),
            gas: '1000000'
        });
        await lottery.methods.enter(numberOfLottery2).send({
            from: accounts[1],
            value: web3.utils.toWei('3', 'ether'),
            gas: '1000000'
        });
        await lottery.methods.enter(numberOfLottery3).send({
            from: accounts[2],
            value: web3.utils.toWei('3', 'ether'),
            gas: '1000000'
        });
        await lottery.methods.enter(numberOfLottery4).send({
            from: accounts[3],
            value: web3.utils.toWei('3', 'ether'),
            gas: '1000000'
        });
        await lottery.methods.enter(numberOfLottery5).send({
            from: accounts[4],
            value: web3.utils.toWei('3', 'ether'),
            gas: '1000000'
        });
        const players = await lottery.methods.getAllPlayers().call();
        assert.equal(accounts[0], players[0]);
        assert.equal(accounts[1], players[1]);
        assert.equal(accounts[2], players[2]);
        assert.equal(accounts[3], players[3]);
        assert.equal(accounts[4], players[4]);
        assert.equal(5, players.length);
        let playersByNumber = await lottery.methods.getPlayersByLotteryNumber(numberOfLottery1).call();
        assert.equal(2, playersByNumber.length);
        assert.equal(accounts[0], playersByNumber[0]);
        assert.equal(accounts[4], playersByNumber[1]);
        playersByNumber = await lottery.methods.getPlayersByLotteryNumber(numberOfLottery2).call();
        assert.equal(1, playersByNumber.length);
        playersByNumber = await lottery.methods.getPlayersByLotteryNumber(numberOfLottery3).call();
        assert.equal(1, playersByNumber.length);
        playersByNumber = await lottery.methods.getPlayersByLotteryNumber(numberOfLottery4).call();
        assert.equal(1, playersByNumber.length);
        playersByNumber = await lottery.methods.getPlayersByLotteryNumber(numberOfLottery5).call();
        assert.equal(2, playersByNumber.length);
        assert.equal(accounts[0], playersByNumber[0]);
        assert.equal(accounts[4], playersByNumber[1]);    
    });
    it('allows one account to enter several times', async () =>{
        const numberOfLottery1 = 123456;
        const numberOfLottery2 = 654321;
        const numberOfLottery3 = 987654;

        await lottery.methods.enter(numberOfLottery1).send({
            from: accounts[0],
            value: web3.utils.toWei('3', 'ether'),
            gas: '1000000'
        });
        await lottery.methods.enter(numberOfLottery2).send({
            from: accounts[0],
            value: web3.utils.toWei('3', 'ether'),
            gas: '1000000'
        });
        await lottery.methods.enter(numberOfLottery3).send({
            from: accounts[0],
            value: web3.utils.toWei('3', 'ether'),
            gas: '1000000'
        });
        const players = await lottery.methods.getAllPlayers().call();
        assert.equal(accounts[0], players[0]);
        assert.equal(accounts[0], players[1]);
        assert.equal(accounts[0], players[2]);
        assert.equal(3, players.length);
        let playersByNumber = await lottery.methods.getPlayersByLotteryNumber(numberOfLottery1).call();
        assert.equal(accounts[0], playersByNumber[0]);
        playersByNumber = await lottery.methods.getPlayersByLotteryNumber(numberOfLottery2).call();
        assert.equal(accounts[0], playersByNumber[0]);
        playersByNumber = await lottery.methods.getPlayersByLotteryNumber(numberOfLottery3).call();
        assert.equal(accounts[0], playersByNumber[0]);        
    });
    it('allows one account to enter several times the same number', async () =>{
        const numberOfLottery = 123456;
        await lottery.methods.enter(numberOfLottery).send({
            from: accounts[0],
            value: web3.utils.toWei('3', 'ether'),
            gas: '1000000'
        });
        await lottery.methods.enter(numberOfLottery).send({
            from: accounts[0],
            value: web3.utils.toWei('3', 'ether'),
            gas: '1000000'
        });
        await lottery.methods.enter(numberOfLottery).send({
            from: accounts[0],
            value: web3.utils.toWei('3', 'ether'),
            gas: '1000000'
        });
        const players = await lottery.methods.getAllPlayers().call();
        assert.equal(accounts[0], players[0]);
        assert.equal(accounts[0], players[1]);
        assert.equal(accounts[0], players[2]);
        assert.equal(3, players.length);
        const playersByNumber = await lottery.methods.getPlayersByLotteryNumber(numberOfLottery).call();
        assert.equal(accounts[0], playersByNumber[0]);
        assert.equal(accounts[0], playersByNumber[1]);
        assert.equal(accounts[0], playersByNumber[2]);
        assert.equal(3, playersByNumber.length);
        
    });
})

