const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
const Lottery = artifacts.require('./Lottery.sol');
const LotteryFactory = artifacts.require('./LotteryFactory.sol');

let accounts;
let lotteryFactory;
const lotteryValue = web3.utils.toWei('0.001', 'ether');

let number4 = '';
let numbers3 = [];
let itr = 0;
//15 76 89 93

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
            await lotteryFactory.methods.createNewLottery(600, lotteryValue).send({
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
            await sleep(30000);
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
            await sleep(30000);
        }
    });    
})


async function buyTicket(lottery) {
    let nums = createRandomEntry(4, 99);
    if(itr == 2){
        nums = [15, 76, 89, 90];
    }
    const finalNumbers = nums.sort(function (a, b) {  return a - b;  });
    number4 = convertToBytes(finalNumbers);
    numbers3 = convertEachToBytes(k_combinations(finalNumbers, 3));
    const acc = Math.floor((Math.random() * 4));
    try{
        const enter = await lottery.methods.enter(number4, numbers3).send({
            from: accounts[acc],
            value: lotteryValue,
            gas: '3000000'
        })
        console.log("Good "+itr+" "+nums + " "+number4 + " "+enter.gasUsed+" acc"+acc);
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