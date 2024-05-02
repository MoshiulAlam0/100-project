let array = [33, 22, 3, 74, 64, 76, 84, 25, 75];
function findBigNum (still_muchNumber){
    let result = {
        All_big_nums : [], 
        your_big_nums : []
    }
    for (let index = 0; index < array.length; index++) {
        const maxNum = Math.max(...array);
        result.All_big_nums.push(maxNum);

        let maxNumberIndex = array.indexOf(maxNum);
        array[maxNumberIndex] = 0;
    }
    if(still_muchNumber <= array.length){
        let slice = result.All_big_nums.slice(0, still_muchNumber);
        result.your_big_nums = [...slice];
    }
    return result;
}
let youNums = findBigNum(4)
console.log(youNums);