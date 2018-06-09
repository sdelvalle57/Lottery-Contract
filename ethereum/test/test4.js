const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const LotteryMock = artifacts.require('./LotteryMock.sol');
const LotteryFactoryMock = artifacts.require('./LotteryFactoryMock.sol');

let accounts;
const lotteryValue = web3.utils.toWei('0.001', 'ether');

let lotteryFactory;
let lotteryAddress;
let winners = [];
let winnersBC = [];
let playerTickets = {};
let ticketPlayers = {};
let tickets = [];
const winningNumber =  "0x03060d202c2d";
const mockNumber =  "0x03060d212c2d";
let jackPot;
let index = 0;
const numOfTickets = 200;
const numOfLotteries = 100;
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
    lotteryFactory = await new web3.eth.Contract(JSON.parse(JSON.stringify(LotteryFactoryMock.abi)))
        .deploy({
            data: LotteryFactoryMock.bytecode
        })
        .send({
            from: accounts[0], 
            gas: '6500000'
    });
    console.log(lotteryFactory.options.address);
    
    console.log(lotteryAddress);
    
});

contract('Lottery', () =>{  
    it('checks the lottery playing with random numbers', async() => {
        for(let h = 0; h < numOfLotteries; h++) {
            await createLottery();
            let lottery = new web3.eth.Contract(LotteryMock.abi, lotteryAddress);
            for(let i = 0; i<numOfTickets; i++){
                const nums = createRandomEntry(6, 45);
                finalNumbers = nums.sort(function (a, b) {  return a - b;  });
                let number6 = convertToBytes(finalNumbers);
                //if(i == 0) number6 = mockNumber;
                const acc = Math.floor((Math.random() * 9) + 1);
                //saveLocalTickets(number6, acc);
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
            //jackPot = await lottery.methods.jackPot().call();
            //assert.equal(lotteryValue*numOfTickets, jackPot);

            const play = await lottery.methods.playTheLottery().send({
                from: accounts[0],
                gas: '4000000'
            });
            const winningNumberBC = await lottery.methods.winningNumber().call();
            assert.equal(winningNumberBC, winningNumber);

            const ticketsLength = await lottery.methods.getTicketsLength().call();
            console.log("length "+ticketsLength);

            let indexBC = 0;
            //getLocalWinners();
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
            //await checkValidity();
        }
    })
})

async function createLottery() {
    const createLottery = await lotteryFactory.methods
        .createNewLottery(6000, lotteryValue)
        .send({
            from: accounts[0],
            gas: '6000000'
        });
    const lotteries = await lotteryFactory.methods.getLotteries().call();
    lotteryAddress = lotteries[lotteries.length-1];
}

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

async function checkValidity() {
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
    }
    console.log(winners);
    console.log(winnersBC);
   
}

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

function convertToBytes(numbers) {
	let final='';
	for(let i=0; i < numbers.length; i++){
		let hexNumber = numbers[i].toString(16);
		if(hexNumber.length==1) hexNumber = '0'+hexNumber;
		final+=hexNumber;
	}
	return '0x'+final;
}