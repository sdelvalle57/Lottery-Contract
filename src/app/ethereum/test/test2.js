
contract('Combs', () =>{
    const numberOfLottery1 = 1;
    const numberOfLottery2 = 2;
    const numberOfLottery3 = 3;
    const numberOfLottery4 = 4;

    it('calculates probability', () => {
        let nums = [];
        i= 0;
        while(i<4){
            num =  Math.floor((Math.random() * 99) + 1);
            if(nums.indexOf(num) >-1){
                continue;
            }
            nums[i]=num;
            i++;
		}
		nums = [16, 19, 66, 88];
		let combs = k_combinations(nums, 3);
		console.log(combs); 
		let combsBytes = convertEachToBytes(combs); 
		console.log(combsBytes);    
		
	});
	/*
	
	it('checks repeated numbers', () => {
		let numbers = [4, 6, 16, 19, 37, 44]
		assert.isOk(checkNoRepeated(numbers));
		numbers = [1,2,2,7,8,10]
		assert.isNotOk(checkNoRepeated(numbers));
	})

	it('converts numbers to bytes6', () =>{
		let numbers = [4, 6, 16, 19, 37, 44];
		let final='';
		for(let i=0; i < numbers.length; i++){
			let hexNumber = numbers[i].toString(16);
			if(hexNumber.length==1) hexNumber = '0'+hexNumber;
			final+=hexNumber;
		}
		const theFinal = '0x'+final;
		
		console.log(theFinal);
		console.log(theFinal.split('0x')[1]);
		console.log(parseInt(theFinal, 16));
		console.log(parseInt(theFinal, 16).toString(16));
		

	})
	*/

})

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

function checkNoRepeated(numbers) {
	for(let i = 0; i < numbers.length; i++){
		let num = numbers[i];
		for(let j = i+1; j < numbers.length; j++){
			if(num==numbers[j]) return false;
		}
	}
	return true;
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


function combinations(set) {
	var k, i, combs, k_combs;
	combs = [];
	for (k = 1; k <= set.length; k++) {
		k_combs = k_combinations(set, k);
		for (i = 0; i < k_combs.length; i++) {
			combs.push(k_combs[i]);
		}
	}
	return combs;
}