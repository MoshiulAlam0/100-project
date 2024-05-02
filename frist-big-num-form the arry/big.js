// const array = [2, 42, 55, 23, 40, 6, 34, 3, 25, 45, 6];
// let num = 0;
// let newArr = [];
// for(i = 0; i < array.length; i++){
//     let element = array[i];
//     // console.log(element);
//     if( num < element){
//         num = element;
//         newArr.push(element);
//     }
// }
// console.log(num);
// console.log(newArr);
// let maxNum = Math.max(...array);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
//     if(maxNum >)

// }
// const array = [2, 42, 55, 23, 40, 6, 34, 3, 25, 45, 6];
// let num = 0;
// let newArray = [];
// for (const element of array) {
//     if (num < element) {
//         num = element;
//         newArray.push(element);
//     }
// }
// console.log(newArray);
// let maxToMinArry = [];
// for (let index = newArray.length-1; index >= 0; index--) {
//     const element = newArray[index];
//     // console.log(element);
//     maxToMinArry.push(element);

// }
// let result = maxToMinArry.slice(0, 6);
// console.log(result);




const array = [2, 42, 55, 23, 40, 6, 34, 3, 25, 45, 6];
let maxNumberArray = [];
for(i = 0; i < array.length; i++){
    let maxNumber = Math.max(...array);

    maxNumberArray.push(maxNumber); /// max number has been set inside the new max number arry 

    let index = array.indexOf(maxNumber); /// index of max number has been finded form the array 
    // delete array[index]; 
    array[index] = 0;
    // array.splice(index, index-1); /// max has been cut form the arry by the splice ///in this situation it' not working 
    // console.log(array);
       
}
console.log(maxNumberArray);
