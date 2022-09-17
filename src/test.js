let test = [1,2,3]

function uniqueArrayDaysOfWeek(array){
    let uniqueArrayDaysOfWeekArray = [];
    for (let i = 1; i <= array.length; i++) {
        if (i == 1) {
          uniqueArrayDaysOfWeekArray.push('Monday');
        }
        else if (i == 2) {
          uniqueArrayDaysOfWeekArray.push['Tuesday'];
        }
        else if (i == 3) {
          uniqueArrayDaysOfWeekArray.push['Wednesday']
        }
        else if (i === 4) {
          uniqueArrayDaysOfWeekArray.push['Thursday']
        }
        else if (i === 5) {
          uniqueArrayDaysOfWeekArray.push['Friday']
        }
        else if (i === 6) {
          uniqueArrayDaysOfWeekArray.push['Saturday']
        }
        else if (i === 7) {
          uniqueArrayDaysOfWeekArray.push['Sunday']
        }
        else {
          return uniqueArrayDaysOfWeekArray;
        }
      }
    }

function secondTest (array) {
    for (let i = 1; i <= array.length; i++) {
    // console.log('secondTest',i);
    if (i === 1) {
        console.log('this has been the first test');
    } else if (i === 2) {
        console.log('this has been a second test');
    } else if (i === 3) {
        console.log('this has been the third test');
    }
    }}

secondTest(test);

console.log(uniqueArrayDaysOfWeek(test));


// const intersection = (arr1, arr2) => {
//     const res = [];
//     for(let i = 0; i < arr1.length; i++){
//         if(!arr2.includes(arr1[i])){
//             continue;
//         };
//         res.push(arr1[i]);
//     };
//     return res;
//     };
//     const intersectMany = (...arrs) => {
//     let res = arrs[0].slice();
//     for(let i = 1; i < arrs.length; i++){
//         res = intersection(res, arrs[i]);
//     };
//     return res;
// };

