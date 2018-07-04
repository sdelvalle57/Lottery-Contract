const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const LotteryMock = artifacts.require('./LotteryMock.sol');

let accounts;
let lottery;
const lotteryValue = web3.utils.toWei('0.001', 'ether');

let number6 = '';
let numbers5 = [];
let numbers4 = [];

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
    //number6 = convertToBytes(finalNumbers);
    //numbers5 = convertEachToBytes(k_combinations(finalNumbers, 5));
    //numbers4 = convertEachToBytes(k_combinations(finalNumbers, 4));
});

contract('Lottery', () =>{
    const numberOfLottery1 = 1;
    const numberOfLottery2 = 2;
    const numberOfLottery3 = 3;
    const numberOfLottery4 = 4;
   
    
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
        const players = await lottery.methods.getPlayers().call();
        assert.equal(0, players.length);
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
        for(let i = 0; i<500; i++){
            const finalNumbers = createRandomEntry(6, 45);
            number6 = convertToBytes(finalNumbers);
            numbers5 = convertEachToBytes(k_combinations(finalNumbers, 5));
            numbers4 = convertEachToBytes(k_combinations(finalNumbers, 4));
            const acc = Math.floor((Math.random() * 9) + 1);
            
            try{
                await lottery.methods.enter(number6, numbers5, numbers4).send({
                    from: accounts[acc],
                    value: lotteryValue,
                    gas: '300000'
                })
                const jackPot = await lottery.methods.jackPot().call();
                assert.equal(lotteryValue*(i+1), jackPot);
                const players = await lottery.methods.getPlayers().call();
                assert.equal(i+1, playerstruffle.length);
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
        for(let i = 0; i<200; i++){
            const nums = createRandomEntry(6, 45);
            const finalNumbers = nums.sort(function (a, b) {  return a - b;  });
            number6 = convertToBytes(finalNumbers);
            numbers5 = convertEachToBytes(k_combinations(finalNumbers, 5));
            numbers4 = convertEachToBytes(k_combinations(finalNumbers, 4));
            const acc = Math.floor((Math.random() * 9) + 1);
            
            try{
                const enter = await lottery.methods.enter(number6, numbers5, numbers4).send({
                    from: accounts[acc],
                    value: lotteryValue,
                    gas: '3000000'
                })
                const jackPot = await lottery.methods.jackPot().call();
                assert.equal(lotteryValue*(i+1), jackPot);
                const players = await lottery.methods.getPlayers().call();
                assert.equal(i+1, players.length);
                console.log("Good "+i+" "+nums + " "+number6 + " "+enter.gasUsed);
            
            } catch(e) {
                console.log(number6);
                console.log(numbers5);
                console.log(numbers4);
                console.log(e);
                break;
            }
        }
        
    })
    
    it('checks numbers stored', async () => {
       let allNumbers6 = {};
       let allNumbers5 = [];
       let allNumbers4 = [];
        lottery = await new web3.eth.Contract(JSON.parse(JSON.stringify(LotteryMock.abi)))
            .deploy({
                data: LotteryMock.bytecode,
                arguments: [600, lotteryValue, 0x0]
            })
            .send({
                from: accounts[0], 
                gas: '4000000'
        });
        for(let i = 0; i<10; i++){
            const nums = createRandomEntry(6, 45);
            //const finalNumbers = nums.sort(function (a, b) {  return a - b;  });
            const finalNumbers = [1,9,15,24,26,35];
            number6 = convertToBytes(finalNumbers);
            numbers5 = convertEachToBytes(k_combinations(finalNumbers, 5));
            numbers4 = convertEachToBytes(k_combinations(finalNumbers, 4));
            
            if(allNumbers6[number6]==null){
                allNumbers6[number6] = 1;
            }else{
                allNumbers6[number6]++;
            }
            for(let j = 0; j < numbers5.length; j++){
                const number5 = numbers5[j];
                if(allNumbers5[number5]==null){
                    allNumbers5[number5] = 1;
                }else{
                    allNumbers5[number5]++;
                }
            }
            for(let j = 0; j < numbers4.length; j++){
                const number4 = numbers4[j];
                if(allNumbers4[number4]==null){
                    allNumbers4[number4] = 1;
                }else{
                    allNumbers4[number4]++;
                }
            }
            
            try{
                const enter = await lottery.methods.enter(number6, numbers5, numbers4).send({
                    from: accounts[1],
                    value: lotteryValue,
                    gas: '3000000'
                })
                const jackPot = await lottery.methods.jackPot().call();
                assert.equal(lotteryValue*(i+1), jackPot);
                const players = await lottery.methods.getPlayers().call();
                assert.equal(i+1, players.length);
                console.log("Good "+i+" "+finalNumbers + " "+number6 + " "+enter.gasUsed);
            
            } catch(e) {
                console.log("bad "+i+" "+nums + " "+number6);
            }
        }

        Object.keys(allNumbers6).forEach(async function(key) {
            const value = allNumbers6[key];
            const storedNumber = await lottery.methods.getStoredNumbers6(key, accounts[1]).call({
                from: accounts[1]
            });
            console.log(key + " "+value +" "+ storedNumber[0] + " "+storedNumber[1]);
        });

        Object.keys(allNumbers5).forEach(async function(key) {
            const value = allNumbers5[key];
            const storedNumber = await lottery.methods.getStoredNumbers5(key, accounts[1]).call({
                from: accounts[1]
            });
            console.log(key + " "+value +" "+ storedNumber[0] + " "+storedNumber[1]);
        });

        Object.keys(allNumbers4).forEach(async function(key) {
            const value = allNumbers4[key];
            const storedNumber = await lottery.methods.getStoredNumbers4(key, accounts[1]).call({
                from: accounts[1]
            });
            console.log(key + " "+value +" "+ storedNumber[0] + " "+storedNumber[1]);
        });        
    })
    

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
        let finalNumbers = [3,6,13,32,44,45];
        const number6Winner = convertToBytes(finalNumbers);
        let numbers5winners = convertEachToBytes(k_combinations(finalNumbers, 5));
        let numbers4winners = convertEachToBytes(k_combinations(finalNumbers, 4));
        let numbers3winners = convertEachToBytes(k_combinations(finalNumbers, 3));

         
        try{
            const enter = await lottery.methods.enter(number6Winner, numbers5winners, numbers4winners, numbers3winners).send({
                from: accounts[1],
                value: lotteryValue,
                gas: '4000000'
            })
            console.log("Good  "+finalNumbers + " "+number6Winner + " "+enter.gasUsed);
        
        } catch(e) {
            console.log("bad  "+finalNumbers + " "+number6Winner);
        }
       

        for(let i = 0; i<10; i++){
            const nums = createRandomEntry(6, 45);
            finalNumbers = nums.sort(function (a, b) {  return a - b;  });
            let number6 = convertToBytes(finalNumbers);
            let numbers5 = convertEachToBytes(k_combinations(finalNumbers, 5));
            let numbers4 = convertEachToBytes(k_combinations(finalNumbers, 4));
            let numbers3 = convertEachToBytes(k_combinations(finalNumbers, 3));
            try{
                const enter = await lottery.methods.enter(number6, numbers5, numbers4, numbers3).send({
                    from: accounts[1],
                    value: lotteryValue,
                    gas: '5000000'
                })
                console.log("Good "+i+" "+finalNumbers + " "+number6 + " "+enter.gasUsed);          
            } catch(e) {
                console.log("bad "+i+" "+nums + " "+number6);
            }
        }

        
        const play = await lottery.methods.playTheLottery().send({
            from: accounts[0],
            gas: '4000000'
        });
        console.log(play.gasUsed);
        const winnerNumber = await lottery.methods.getWinner().call();
        assert.equal(winnerNumber, number6Winner);
        for(let j = 0; j < numbers5winners.length; j++){
            const winnerNumber5 = await lottery.methods.getWinner5(j).call();
            assert.equal(winnerNumber5, numbers5winners[j]);
        }
        for(let j = 0; j < numbers4winners.length; j++){
            const winnerNumber4 = await lottery.methods.getWinner4(j).call();
            assert.equal(winnerNumber4, numbers4winners[j]);
        }
        for(let j = 0; j < numbers3winners.length; j++){
            const winnerNumber3 = await lottery.methods.getWinner3(j).call();
            assert.equal(winnerNumber3, numbers3winners[j]);
        }
        
        //assert.equal(number6Winner, winnerNumber);
    })
})





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