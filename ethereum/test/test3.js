const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const Lottery = artifacts.require('./Lottery.sol');
const LotteryFactory = artifacts.require('./LotteryFactory.sol');

let accounts;
let lotteryFactory;
const lotteryValue = web3.utils.toWei('0.001', 'ether');

let number4 = '';
let numbers3 = [];
let itr = 0;

beforeEach(async () =>{
    accounts = await web3.eth.getAccounts();
    lotteryFactory = await new web3.eth.Contract(JSON.parse(JSON.stringify(LotteryFactory.abi)))
        .deploy({
            data: LotteryFactory.bytecode,
        })
        .send({
            from: accounts[0], 
            gas: '5000000'
        });  
});

contract('Lottery', () =>{

    it('deploys a Lottery', async ()=>{
        console.log(lotteryFactory.options.address);
        while(true) {
            await lotteryFactory.methods.createNewLottery(60, lotteryValue).send({
                from: accounts[0],
                gas: '5000000'
            });
            const lotteries = await lotteryFactory.methods.getLotteries().call();
            const lotteryAddress = lotteries[lotteries.length -1];
            let lottery = new web3.eth.Contract(Lottery.abi, lotteryAddress);
            let lotteryIsOpen = true;
            while(lotteryIsOpen) {
                await sleep(5000);
                const deadline = await lottery.methods.deadline().call();
                const blockNumber = await web3.eth.getBlockNumber();
                const block = await web3.eth.getBlock(blockNumber);
                if(deadline - 5 < block.timestamp) {
                    break;
                }
                buyTicket(lottery);  
            }
            await sleep(6000);
            const playTheLottery = await lottery.methods.playTheLottery().send({
                from: accounts[0],
                gas: '3000000'
            });
            let summary = await lottery.methods.getSummary().call();
            console.log("lottery played "+playTheLottery.gasUsed);
            console.log("winners "+summary[5])
            
            try{
                const payWinners = await lottery.methods.payWinners().send({
                    from: accounts[0],
                    gas: '5000000'
                });
                console.log("winners payed "+payWinners.gasUsed);               
            } catch(e) {

            }
            
            summary = await lottery.methods.getSummary().call();
            console.log("jackpot "+web3.utils.fromWei(summary[2]), 'ether');
            console.log("prize "+web3.utils.fromWei(summary[4]), 'ether');
            const balance = await web3.eth.getBalance(lotteryAddress);
            console.log("balance "+web3.utils.fromWei(balance), 'ether');
            await sleep(10000);
        }


    
    });



/*
    
    it('deploy a LotteryFactory', () => {
        assert.ok(lotteryFactory.options.address);
    })
    
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
        for(let i = 0; i<1000; i++){
            const finalNumbers = createRandomEntry(4, 99);
            number4 = convertToBytes(finalNumbers);
            numbers3 = convertEachToBytes(k_combinations(finalNumbers, 3));
            const acc = Math.floor((Math.random() * 9) + 1);
            
            try{
                await lottery.methods.enter(number4, numbers3).send({
                    from: accounts[acc],
                    value: lotteryValue,
                    gas: '300000'
                })
                const jackPot = await lottery.methods.jackPot().call();
                assert.equal(lotteryValue*(i+1), jackPot);
                const players = await lottery.methods.getPlayers().call();
                assert.equal(i+1, players.length);
                console.log("Good "+i+" "+finalNumbers + " "+number4);
            
            } catch(e) {
                console.log("bad "+i+" "+finalNumbers + " "+number4);
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
        for(let i = 0; i<50; i++){
            const nums = createRandomEntry(4, 99);
            const finalNumbers = nums.sort(function (a, b) {  return a - b;  });
            number4 = convertToBytes(finalNumbers);
            numbers3 = convertEachToBytes(k_combinations(finalNumbers, 3));
            const acc = Math.floor((Math.random() * 9) + 1);
            
            try{
                const enter = await lottery.methods.enter(number4, numbers3).send({
                    from: accounts[acc],
                    value: lotteryValue,
                    gas: '3000000'
                })
                const jackPot = await lottery.methods.jackPot().call();
                assert.equal(lotteryValue*(i+1), jackPot);
                const players = await lottery.methods.getPlayers().call();
                assert.equal(i+1, players.length);
                console.log("Good "+i+" "+nums + " "+number4 + " "+enter.gasUsed);
            
            } catch(e) {
                console.log(number4);
                console.log(numbers3);
                console.log(e);
                break;
            }
        }
        
    })

    it('check stored numbers', async() => {
        lottery = await new web3.eth.Contract(JSON.parse(JSON.stringify(LotteryMock.abi)))
        .deploy({
            data: LotteryMock.bytecode,
            arguments: [600, lotteryValue, 0x0]
        })
        .send({
            from: accounts[0], 
            gas: '4000000'
        });
        for(let i = 0; i<8; i++){
            const nums = createRandomEntry(4, 99);
            const finalNumbers = nums.sort(function (a, b) {  return a - b;  });
            number4 = convertToBytes(finalNumbers);
            numbers3 = convertEachToBytes(k_combinations(finalNumbers, 3));
            //const acc = i+1;
            const acc = Math.floor((Math.random() * 9) + 1);
            try{
                const enter = await lottery.methods.enter(number4, numbers3).send({
                    from: accounts[acc],
                    value: lotteryValue,
                    gas: '3000000'
                })
                const jackPot = await lottery.methods.jackPot().call();
                assert.equal(lotteryValue*(i+1), jackPot);
                const players = await lottery.methods.getPlayers().call();
                assert.equal(i+1, players.length);
                console.log("Good "+ " "+number4 + " "+  accounts[acc]);
                console.log("-------------Numbers by player--------------")
                const numbers4ByPlayer = await lottery.methods.getNumbers4ByPlayer().call({
                    from: accounts[acc] 
                });
                const numbers3ByPlayer = await lottery.methods.getNumbers3ByPlayer().call({
                    from: accounts[acc] 
                });
                console.log(numbers4ByPlayer);
                console.log(numbers3ByPlayer);
                console.log("-------------Players by number--------------");
                const playersByNumber4 = await lottery.methods.getPlayersByNumber4(number4).call();
                console.log(number4 + " "+playersByNumber4);
                for(let j  =0; j < numbers3.length; j++) {
                    const playersByNumber3 = await lottery.methods.getPlayersByNumber3(numbers3[j]).call()
                    console.log(numbers3[j] + " "+playersByNumber3);
                }
                console.log("--------------------------------------------");
            } catch(e) {
                console.log(e);
                console.log("Bad " + number4 + " "+finalNumbers);
                break;
            }
        }
    });
    */
    /*
   const winningNumber =  "0x0f4c595d";
   const numberOfTickets = 50;
    it('checks the winning number', async() => {
        lottery = await new web3.eth.Contract(JSON.parse(JSON.stringify(LotteryMock.abi)))
            .deploy({
                data: LotteryMock.bytecode,
                arguments: [50000, lotteryValue, 0x0]
            })
            .send({
                from: accounts[0], 
                gas: '5000000'
        });
        
        for(let i = 0; i<numberOfTickets; i++){
            const nums = createRandomEntry(4, 99);
            finalNumbers = nums.sort(function (a, b) {  return a - b;  });
            let number4 = convertToBytes(finalNumbers);
            let acc = Math.floor((Math.random() * 9) + 1);
            if(i == 0){
                finalNumbers = [15, 76, 89, 93];
                number4 = winningNumber;
            }
            if(i == 1){
                finalNumbers = [15, 76, 89, 90];
                number4 = "0x0f4c595a";
            }
            let numbers3 = convertEachToBytes(k_combinations(finalNumbers, 3));
            try{
                const enter = await lottery.methods.enter(number4, numbers3).send({
                    from: accounts[acc],
                    value: lotteryValue,
                    gas: '5000000'
                })
                console.log("Good "+i+" "+finalNumbers + " "+number4 + " "+enter.gasUsed+" "+accounts[acc]);          
            } catch(e) {
                console.log(e);
                console.log("bad "+i+" "+nums + " "+number4);
            }
        }

        let initialJackPot = await lottery.methods.jackPot().call();
        assert.equal(initialJackPot, numberOfTickets*lotteryValue);
        
        const play = await lottery.methods.playTheLottery().send({
            from: accounts[0],
            gas: '4000000'
        });
        
        console.log("-----------winning numbers----------")
        console.log(play.gasUsed);
        const winnerNumbers = await lottery.methods.getWinningNumbers().call();
        console.log(winnerNumbers);
        const playersByNumber = await lottery.methods.getPlayersByNumber4(winnerNumbers[0]).call();
        
        let winnersNumber3 = 0;
        for(let j  = 1; j < 5; j++) {
            const playersByNumber3 = await lottery.methods.getPlayersByNumber3(winnerNumbers[j]).call()
            winnersNumber3 += playersByNumber3.length;
            console.log(winnerNumbers[j] + " "+playersByNumber3);
        }
        console.log(winnersNumber3);        
        
        let jackPot = await lottery.methods.jackPot().call();

        let finalJackpot = playersByNumber.length > 0 ? (initialJackPot - initialJackPot/2): initialJackPot;
        finalJackpot = winnersNumber3 > 0 ? (finalJackpot - initialJackPot/2) : finalJackpot;
        assert.equal(jackPot, finalJackpot);

        
        //const allocationForWinners4 = (initialJackPot/2)/playersByNumber;
    })
    */
    
})


async function buyTicket(lottery) {
    let nums = createRandomEntry(4, 99);
    if(itr == 2){
        nums = [15, 76, 89, 90];
    }
    const finalNumbers = nums.sort(function (a, b) {  return a - b;  });
    number4 = convertToBytes(finalNumbers);
    numbers3 = convertEachToBytes(k_combinations(finalNumbers, 3));
    const acc = Math.floor((Math.random() * 9) + 1);
    try{
        const enter = await lottery.methods.enter(number4, numbers3).send({
            from: accounts[acc],
            value: lotteryValue,
            gas: '3000000'
        })
        console.log("Good "+itr+" "+nums + " "+number4 + " "+enter.gasUsed);
    } catch(e) {
        console.log("bad "+itr+" "+nums + " "+number4);
    }
    itr++;
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

function convertToNumbers(numByte) {
    let numbers = [];
    numByte = numByte.split("0x")[1];    
    for(let k = 0; k < numByte.length; k=k+2){
        const number = parseInt((numByte[k]+numByte[k+1]), 16);
        numbers.push(number);
    }
	return numbers;
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