let array = [33, 22, 3, 74, 64, 76, 84, 25, 75];
function findBigNum (still_muchNumber){
    let result = {
        All_big_nums : [], 
        your_big_nums : []
    }
    for (let index = 0; index < array.length; index++) { // stap1: loop has been thrown still array length
        const maxNum = Math.max(...array); //stap2: find big number
        result.All_big_nums.push(maxNum); // step3 : set big number insede obj property

        let maxNumberIndex = array.indexOf(maxNum); // step4: get max num index for set 0 insted of max num
        array[maxNumberIndex] = 0;
    }
    if(still_muchNumber <= array.length){ // step5: The still_muchNumber should not exceed the length of the array
        let slice = result.All_big_nums.slice(0, still_muchNumber);
        result.your_big_nums = [...slice]; // step6: set slice array inside the object property 
    }
    return result;
}
let youNums = findBigNum(4)
console.log(youNums);