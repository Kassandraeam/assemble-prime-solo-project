const Gab = [100, 200, 5];
const Bill = [100, 200, 10];
const Alex = [100, 200, 300, 15];
const Tuladai = [100, 200, 300, 400, 20];

const bigArray = [Gab, Bill, Alex, Tuladai];

console.log('BIG ARRAY BEFORE RUNNING FUNCTION:', bigArray);

const intersection = (arr1, arr2) => {
const res = [];
for(let i = 0; i < arr1.length; i++){
    if(!arr2.includes(arr1[i])){
        continue;
    };
    res.push(arr1[i]);
};
return res;
};
const intersectMany = (...arrs) => {
let res = arrs[0].slice();
for(let i = 1; i < arrs.length; i++){
    res = intersection(res, arrs[i]);
};
return res;
};
console.log('COMMON TIMES IN BIG ARRAY:',intersectMany(...bigArray));

// ! GOAL: See if any of the values in the first nested Array are in ALL of the other nested arrays. 
// compareArrays = [[1,1,1,1],[1,1,1,1,1]]
// ? Could I map through this 
// Can I split this up here, and then push that into the argument of intersectMany?

// Find the first thing in the big array? R0? 

// let test = [[1, 2, 3], [1, 2], [1]] // this is my compareArray

// const flatTest = test.flat(1);
// console.log('flatTest:',flatTest);
// /*
// let testFunction = (a) => {
//     for (let value of a) {
//     console.log(value);
// }
// };
// testFunction(test);
// console.log('testFunction running:',testFunction(test)) // this returns undefined.

// function testThis(array){
//     for (let value of array) {
//         console.log('the values given back in testThis:',value)
//     }
// }

// testThis(test);





// /*
// 1. I have one big ass array.
// 2. I need to split that big ass array up into tiny ass arrays.
// 3. Then I need to check those tiny ass arrays for commonalities.
// */

//  function help (a, b){
//     console.log(a+b)    
// }

// help(1,2);
//https://stackoverflow.com/questions/7106410/looping-through-arrays-of-arrays
// var printArray = function(arr) {
//     if ( typeof(arr) == "object") {
//         for (var i = 0; i < arr.length; i++) {
//             printArray(arr[i]);
//         }
//     }
//     else document.write(arr);
// }

// printArray(parentArray)

// console.table(test);
// console.log(test[0][0]);
