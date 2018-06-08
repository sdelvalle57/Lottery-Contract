const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const LotteryMock = artifacts.require('./LotteryMock.sol');

let accounts;
let lottery;
const lotteryValue = web3.utils.toWei('0.001', 'ether');

let winners = [];
let winnersBC = [];
let playerTickets = {};
let ticketPlayers = {};
let tickets = [];
const winningNumber =  "0x03060d202c2d";
const mockNumber =  "0x03060d212c2d";
let jackPot;
let index = 0;
const numOfTickets = 10;
for(let j = 0; j < 4; j++) {
    let winner = {};
    winner["numberOfWinners"] = 0;
    winner["allocated"] = 0;
    winner["payed"] = 0;
    winner["winners"] = [];
    winner["tickets"] = [];
    winners.push(winner);
}


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
    
   

    it('checks the lottery playing with random numbers', async() => {
        lottery = await new web3.eth.Contract(JSON.parse(JSON.stringify(LotteryMock.abi)))
            .deploy({
                data: LotteryMock.bytecode,
                arguments: [60000, lotteryValue, 0x0]
            })
            .send({
                from: accounts[0], 
                gas: '5000000'
        });

        for(let i = 0; i<numOfTickets; i++){
            const nums = createRandomEntry(6, 45);
            finalNumbers = nums.sort(function (a, b) {  return a - b;  });
            let number6 = convertToBytes(finalNumbers);
            if(i == 0) number6 = mockNumber;
            const acc = Math.floor((Math.random() * 9) + 1);
            saveLocalTickets(number6, acc);
            try{
                const enter = await lottery.methods.enter(number6).send({
                    from: accounts[acc],
                    value: lotteryValue,
                    gas: '300000'
                })
                console.log("Good "+i+" "+finalNumbers + " "+number6 + " "+enter.gasUsed); 
            } catch(e) {
                console.log("bad "+i+" "+nums + " "+number6);
            }
        }
        jackPot = await lottery.methods.jackPot().call();
        assert.equal(lotteryValue*numOfTickets, jackPot);

        const play = await lottery.methods.playTheLottery().send({
            from: accounts[0],
            gas: '4000000'
        });
        const winningNumberBC = await lottery.methods.winningNumber().call();
        assert.equal(winningNumberBC, winningNumber);

        const ticketsLength = await lottery.methods.getTicketsLength().call();
        console.log("length "+ticketsLength);

        
        let indexBC = 0;
        getLocalWinners();
        while(parseInt(indexBC) < parseInt(ticketsLength)){            
            try {
                const setWinners = await lottery.methods.setWinners().send({
                    from: accounts[1],
                    gas: '6000000'
                });
                indexBC = await lottery.methods.index().call();
                console.log(indexBC + " "+setWinners.gasUsed);

            } catch (e) {
                console.log(e);
            }
        }
        
        
        for(let j = 3; j <= 6; j++) {
            const winnerBC = await lottery.methods.getWinners(j).call();
            winnersBC.push(winnerBC);            
        }     
        await checkValidity(lottery);
    })
})

function getLocalWinners() {
    while(index < numOfTickets) {
        const winningNumberArr = convertToArray(winningNumber);
        let savedTicket = tickets[index];
        let ticket = savedTicket["ticket"];
        let found = 0;
        let offset = 0;
        for(let j = 0; j < winningNumberArr.length; j++) {
            let chunk = winningNumberArr[j];
            let ticketArr = convertToArray(ticket);
            for(let k = offset; k < ticketArr.length; k++){
                if((found == 0 && k >= 3) || (found == 1 && k >=4)) break;
                if(chunk == ticketArr[k]) {
                    offset = k + 1;
                    found++;
                    break;
                }
            }
        }
        if(found >= 3 && !savedTicket["number3"]){
            savedTicket["number3"] = true;
            saveValues(0, ticket);
        }
        if(found >= 4 && !savedTicket["number4"]){
            savedTicket["number4"] = true;
            saveValues(1, ticket);
        }
        if(found >= 5 && !savedTicket["number5"]){
            savedTicket["number5"] = true;
            saveValues(2, ticket);
        }
        if(found == 6 && !savedTicket["number6"]){
            savedTicket["number6"] = true;
            saveValues(3, ticket);
        }
        index++;
        const allocation = jackPot/4;
        
        
        if(index == numOfTickets) {
            if(winners[0]["numberOfWinners"] > 0 && winners[0]["allocated"] == 0) {
                jackPot = jackPot - allocation;
                winners[0]["allocated"] = allocation;
            }
            if(winners[1]["numberOfWinners"] > 0 && winners[1]["allocated"] == 0) {
                jackPot = jackPot - allocation;
                winners[1]["allocated"] = allocation;
            }
            if(winners[2]["numberOfWinners"] > 0 && winners[2]["allocated"] == 0) {
                jackPot = jackPot - allocation;
                winners[2]["allocated"] = allocation;
            }
            if(winners[3]["numberOfWinners"] > 0 && winners[3]["allocated"] == 0) {
                jackPot = jackPot - allocation;
                winners[3]["allocated"] = allocation;
            }
        }
    }
}

function saveValues(pos, ticket) {
    winners[pos]["numberOfWinners"]++;
    winners[pos]["tickets"].push(ticket);
    const players = ticketPlayers[ticket];
    for(let l = 0; l < players.length; l++) {
        winners[pos]["winners"].push(players[l]);
    }   
}

function saveLocalTickets(number6, acc) {
    let ticket = {};
    ticket["ticket"] = number6;
    ticket["user"] = accounts[acc];
    ticket["number3"] = false;
    ticket["number4"] = false;
    ticket["number5"] = false;
    ticket["number6"] = false;
    ticket["processed"] = false;
    if(playerTickets[accounts[acc]] == null){
        playerTickets[accounts[acc]] = [];
    }
    playerTickets[accounts[acc]].push(ticket);
    if(ticketPlayers[number6] == null) {
        ticketPlayers[number6] = [];
    }
    ticketPlayers[number6].push(accounts[acc]);
    tickets.push(ticket);
}

async function checkValidity(lottery) {
    for(let j = 0; j < winnersBC.length; j++) {
        const winnerBC = winnersBC[j];
        const winner = winners[j];
        assert.equal(winnerBC["0"], winner["numberOfWinners"]);
        assert.equal(winnerBC["1"], winner["allocated"]);
        assert.equal(winnerBC["2"], winner["payed"]);
        assert.equal(winnerBC["3"].length, winner["winners"].length);
        assert.equal(winnerBC["4"].length, winner["tickets"].length);
        for(let i = 0; i < winnerBC["3"].length; i++){
            const playerBC = winnerBC["3"][i];
            const player = winner["winners"][i];
            assert.equal(playerBC, player);
        }
        for(let k = 0; k < winnerBC["4"].length; k++){
            const ticketBC = winnerBC["4"][k];
            const ticket = winner["tickets"][k];
            assert.equal(ticketBC, ticket);
        }
        //assert.equal(winnerBC["3"], winner["winners"]);
        //assert.equal(winnerBC["4"], winner["tickets"]);
        //console.log(winnerBC["0"]);
        //console.log("BC "+winnerBC["0"]);
        //console.log("LO "+winner["numberOfWinners"]);
    }
    console.log(winners);
    console.log(winnersBC);
   
}

/*
const nOfWinners = winners[0];
    const amountAllocated = winners[1];
    const payed = winners[2];
    const winnersAddress = winners[3];
    const winnersTickets = winners[4];
    assert.equal(nOfWinners, winnersAddress.length);
    assert.equal(nOfWinners, winnersTickets.length);
    for(let j = 0; j < nOfWinners; j++){
        const address = winnersAddress[j];
        const ticket = winnersTickets[j];
        const playerTicketsSize = await lottery.methods.getNumberOfTickets(address).call();
        for(let i = 0; i < playerTicketsSize; i++){
            const playerTicket = await lottery.methods.getPlayerTicket(address, i).call();
            if(playerTicket == ticket){
                console.log("t found "+j + " "+playerTicket + " "+address);
            }
        }
        
        const ticketAddresses = await lottery.methods.getPlayers(ticket).call();
        for(let k = 0; k < ticketAddresses.length; k++){
            const player = await lottery.methods.ticketPlayers(ticket, k).call();
            if(player == address){
                console.log("a found "+k +" " +ticket + " "+player);
            }
        }
        
    }
*/
function convertToArray(data) {
    arr = [];
    data = data.split("0x")[1];
    let j = 0;
    let pos = 0;
    while(j < 12) {
        arr[pos] = data.slice(j, j+2);
        j = j +2;
        pos++;
    }
    return arr;
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