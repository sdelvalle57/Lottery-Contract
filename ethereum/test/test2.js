const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const LotteryFactory = artifacts.require('./LotteryFactory.sol');
const Lottery = artifacts.require('./Lottery.sol');


let lotteryFactory;
let accounts;
let lottery;
const lotteryValue = web3.utils.toWei('0.001', 'ether');
/*
beforeEach(async () =>{
    accounts = await web3.eth.getAccounts();
    const amount =  web3.utils.toWei('0.001', 'ether');
    lotteryFactory = await new web3.eth.Contract(JSON.parse(JSON.stringify(LotteryFactory.abi)))
        .deploy({
            data: LotteryFactory.bytecode,
        })
        .send({
            from: accounts[0], 
            gas: '4000000'
        });  
    await lotteryFactory.methods.createNewLottery(5, lotteryValue).send({
        from: accounts[0],
        gas: '2000000'
    })
    let lotteries = await lotteryFactory.methods.getLotteries().call();
    assert.equal(lotteries.length, 1);
    lottery = new web3.eth.Contract(Lottery.abi, lotteries[lotteries.length-1]);
});
*/

contract('Lottery', () =>{
    const numberOfLottery1 = 1;
    const numberOfLottery2 = 2;
    const numberOfLottery3 = 3;
    const numberOfLottery4 = 4;

    it('calculates probability', () => {
        //let probability = 45*44*43*42*41/(5!)
        let numbers = 2;
        let maximum = 45;
        let iteractions = 0;
        let prob = probability(numbers, maximum); 
        assert.equal(prob, 45*44/(1*2));
        let n = [];
        for(let i = 0; i < numbers; i++){
            n[i] = i+1;
        }
        console.log(prob);
        
        /*
        for(let i = 0; i<prob; i++){
            console.log(n[0]*n[1]/2);
            n = calc(n);
            
            
        }
        */
        

/*
        let response = 1;
        for(let i = n[0]; i <= maximum; i++){
            for(let j = n[n.length-2]; j <= maximum; j++){
                for(let k = n[n.length-1]; k <= maximum; k++){
                    let mul = n[0]*n[n.length-2]*n[n.length-1];
                    console.log(n[0] + " "+n[n.length-2]+ " "+n[n.length-1]);
                    iteractions++;
                }
                n[n.length-2]++;
                n[n.length-1] = n[n.length-2]+1;
            }
            n[0]++;
            n[n.length-2]=n[n.length-3]+1;
            n[n.length-1]=n[n.length-2]+1;
        }
        assert.equal(prob, iteractions);
*/

       

    });

})

function calc(n){
    
    if(n[n.length-1]==45){
        if(n[n.length-2]==45){
            return n;
            /*
            if(n[n.length-3]==45){
                console.log(iteractions);
                return n;
            }else{
                n[n.length-3]++;
                n[n.length-2]=n[n.length-3]+1;
                n[n.length-1]=n[n.length-2]+1;
                return n;
            }
            */
        }else{
            n[n.length-2]++;
            n[n.length-1]=n[n.length-2]+1;
            return n;
        }
    }else{
        n[n.length-1]++;
        return n;
    }
    iteractions++;

}