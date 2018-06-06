const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const LotteryMock = artifacts.require('./LotteryMock.sol');

let accounts;
let lottery;
const lotteryValue = web3.utils.toWei('0.001', 'ether');

let number6 = '';

beforeEach(async () =>{
    accounts = await web3.eth.getAccounts();
    lottery = await new web3.eth.Contract(JSON.parse(JSON.stringify(LotteryMock.abi)))
        .deploy({
            data: LotteryMock.bytecode,
            arguments: [5, lotteryValue, 0x0]
        })
        .send({
            from: accounts[0], 
            gas: '5000000'
        });  
    const nums = createRandomEntry(6, 45);
    const finalNumbers = nums.sort(function (a, b) {  return a - b;  });
    number6 = convertToBytes(finalNumbers);
});

contract('Lottery', () =>{  
        
    /*
    it('deploys a Lottery', ()=>{
        assert.ok(lottery.options.address);
    });

    it('checks arguments', async () => {
        const thisLotteryValue = await lottery.methods.lotteryValue().call();
        assert.equal(lotteryValue, thisLotteryValue);
        const factoryAddress = await lottery.methods.factoryAddress().call();
        assert.equal(accounts[0], factoryAddress);
        const lastLotteryAddress = await lottery.methods.lastLottery().call();
        assert.equal(0x0, lastLotteryAddress);
        const jackPot = await lottery.methods.jackPot().call();
        assert.equal(0, jackPot);
    });
    
    it('checks enter function requirements with bad numbers', async () => {
        lottery = await new web3.eth.Contract(JSON.parse(JSON.stringify(LotteryMock.abi)))
            .deploy({
                data: LotteryMock.bytecode,
                arguments: [600, lotteryValue, 0x0]
            })
            .send({
                from: accounts[0], 
                gas: '4000000'
        });
        for(let i = 0; i<50; i++){
            const finalNumbers = createRandomEntry(6, 45);
            number6 = convertToBytes(finalNumbers);
            const acc = Math.floor((Math.random() * 9) + 1);
            
            try{
                await lottery.methods.enter(number6).send({
                    from: accounts[acc],
                    value: lotteryValue,
                    gas: '300000'
                })
                const jackPot = await lottery.methods.jackPot().call();
                assert.equal(lotteryValue*(i+1), jackPot);
                console.log("Good "+i+" "+finalNumbers + " "+number6);
            
            } catch(e) {
                console.log("bad "+i+" "+finalNumbers + " "+number6);
            }
        }
    })
    
    it('checks enter function requirements', async () => {
        lottery = await new web3.eth.Contract(JSON.parse(JSON.stringify(LotteryMock.abi)))
            .deploy({
                data: LotteryMock.bytecode,
                arguments: [600, lotteryValue, 0x0]
            })
            .send({
                from: accounts[0], 
                gas: '4000000'
        });
        let accs = [];
        let numbers = [];
        for(let i = 0; i<50; i++){
            const nums = createRandomEntry(6, 45);
            const finalNumbers = nums.sort(function (a, b) {  return a - b;  });
            number6 = convertToBytes(finalNumbers);
            const acc = Math.floor((Math.random() * 9) + 1);
            
            try{
                const enter = await lottery.methods.enter(number6).send({
                    from: accounts[acc],
                    value: lotteryValue,
                    gas: '600000'
                })
                numbers.push(number6);
                accs.push(accounts[acc]);
                const jackPot = await lottery.methods.jackPot().call();
                assert.equal(lotteryValue*(i+1), jackPot);
                console.log("Good "+i+" "+nums + " "+number6 + " "+enter.gasUsed);
            } catch(e) {
                console.log(e);
                console.log("bad "+i+" "+finalNumbers + " "+number6);
            }
        }
        for(let i = 0; i < accs.length; i++){
            const ticket = await lottery.methods.tickets(i).call();
            assert.equal(accs[i], ticket['user']);
            assert.equal(numbers[i], ticket['ticket']);
        }
        
    })
    */
    
    it('checks the winning number', async() => {
        lottery = await new web3.eth.Contract(JSON.parse(JSON.stringify(LotteryMock.abi)))
            .deploy({
                data: LotteryMock.bytecode,
                arguments: [600, lotteryValue, 0x0]
            })
            .send({
                from: accounts[0], 
                gas: '5000000'
        });
        let accs = [];
        let numbers = [];
        let finalNumbers = [3,6,13,32,44,45];
        const number6Winner = convertToBytes(finalNumbers);

        try{
            const enter = await lottery.methods.enter(number6Winner).send({
                from: accounts[1],
                value: lotteryValue,
                gas: '300000'
            })
            console.log("Good  "+finalNumbers + " "+number6Winner + " "+enter.gasUsed);
            accs.push(accounts[1]);
            numbers.push(number6Winner);
        
        } catch(e) {
            console.log("bad  "+finalNumbers + " "+number6Winner);
        }
       
        for(let i = 0; i<100; i++){
            const nums = createRandomEntry(6, 45);
            finalNumbers = nums.sort(function (a, b) {  return a - b;  });
            let number6 = convertToBytes(finalNumbers);
            try{
                const enter = await lottery.methods.enter(number6).send({
                    from: accounts[1],
                    value: lotteryValue,
                    gas: '300000'
                })
                console.log("Good "+i+" "+finalNumbers + " "+number6 + " "+enter.gasUsed); 
                accs.push(accounts[1]);
                numbers.push(number6);         
            } catch(e) {
                console.log("bad "+i+" "+nums + " "+number6);
            }
        }

        const play = await lottery.methods.playTheLottery().send({
            from: accounts[0],
            gas: '4000000'
        });
        const winnerNumber = await lottery.methods.winningNumber().call();
        assert.equal(number6Winner, winnerNumber);
        let index = 0;
        while(index < 101){
            try {
                const setWinners = await lottery.methods.setWinners().send({
                    from: accounts[1],
                    gas: '500000'
                });
            } catch (e) {
                console.log(e);
            
            }
            index = await lottery.methods.index().call();
            console.log(index);
        }
        
        
    })
    
})

async function setWinners(lottery, acc) {
    
}



function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function createRandomEntry(size, max){
    let nums = [];
    i= 0;
    while(i<size){
        num =  Math.floor((Math.random() * max) + 1);
        if(nums.indexOf(num) >-1){
            continue;
        }
        nums[i]=num;
        i++;
    }
    return nums;
}

function convertEachToBytes(combs) {
	const combsBytes = [];
	for(let i= 0; i < combs.length; i++){
		combsBytes[i] = convertToBytes(combs[i]);
	}
	return combsBytes;
}

function convertToBytes(numbers) {
	let final='';
	for(let i=0; i < numbers.length; i++){
		let hexNumber = numbers[i].toString(16);
		if(hexNumber.length==1) hexNumber = '0'+hexNumber;
		final+=hexNumber;
	}
	return '0x'+final;
}

function k_combinations(set, k) {
	let i, j, combs, head, tailcombs;
	if (k > set.length || k <= 0) {
		return [];
	}
	if (k == set.length) {
        return [set];
	}
	if (k == 1) {
		combs = [];
		for (i = 0; i < set.length; i++) {
			combs.push([set[i]]);
        }
		return combs;
	}
	combs = [];
	for (i = 0; i < set.length - k + 1; i++) {
        head = set.slice(i, i + 1);
        tailcombs = k_combinations(set.slice(i + 1), k - 1);
		for (j = 0; j < tailcombs.length; j++) {
            let comb = head.concat(tailcombs[j]);
            comb = comb.sort(function (a, b) {  return a - b;  });
			combs.push(comb);
		}
    }
    return combs;
}

function k_combinations2(elements, K){
    let combs = [];
    let N = elements.length;
    let combination = [K];
    let r = 0;      
    let index = 0;
    let nIndex = 0;
    while(r >= 0){
        if(index <= (N + (r - K))){
            combination[r] = index;
            if(r == K-1){
                let comb = [];
                for(let j = 0; j < combination.length; j++){
                    comb.push(elements[combination[j]]);
                }
                combs.push(comb);
                nIndex++;
                index++;     
            }
            else{
                index = combination[r]+1;
                r++;                                        
            }
        }
        else{
            r--;
            if(r > 0)
                index = combination[r]+1;
            else
                index = combination[0]+1;   
        }           
    }
    return combs;
}