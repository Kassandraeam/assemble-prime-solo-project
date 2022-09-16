// ! This is the function that finds the common elements in each array passed through it.
/*
const Gab = [100, 200, 5];
const Bill = [100, 200, 10];
const Alex = [100, 200, 300, 15];
const Tuladai = [100, 200, 300, 400, 20];
const bigArray = [Gab, Bill, Alex, Tuladai];
console.log('BIG ARRAY BEFORE RUNNING FUNCTION:', bigArray);
const intersection = (arr1, arr2) => {
    const res = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            continue;
        };
        res.push(arr1[i]);
    };
    return res;
};
const intersectMany = (...arrs) => {
    let res = arrs[0].slice();
    for (let i = 1; i < arrs.length; i++) {
        res = intersection(res, arrs[i]);
    };
    return res;
};
console.log('COMMON TIMES IN BIG ARRAY:', intersectMany(...bigArray));
 */

// ! This is the function that gets unique elements in any array passed through it. 
/*
function getUnique(array) {
  let uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}
*/

// ! Loop through a test batch of unique common days

// * The array uniqueCommonDays will be sent through here.
/*
function sendEachUniqueDay(array){
    for (let day of array) {
        // console.log(day);
        // for each day I get back, I need to run that SQL statement.
        // maybe check what the value of it is and determine a local state to hold it in?
        if (day === 1) {
            console.log('1 is being sent');
            // dispatch with type: that gets me to a saga that gets me to router that inserts that info as a value.
            // get that information back as an array. 
            // Store in local state mondayTimes (maybe a reducer instead?)
            // Run that local state through the logic to get 
                // 1. The common times amoung the selected users.
        } else if (day === 2) {
            console.log('2 is being sent');
        } else if (day === 3) {
            console.log('3 is being sent');
        } else if (day === 4) {
            console.log('4 is being sent');
        } else {
            console.log('Invalid number')
        }
    }
}
*/

// I'm in the Fetchallusers saga.
/*
So I'm going to the route, but I need to give it the day from the unique day as the value. 
So from the component I need to dispatch the day. Just as a test hardcode it on submit because that's when this is gonna run.
*/

// * The array uniqueCommonDays will be sent through here. So array = uniqueCommonDays
function sendEachUniqueDay(array){
    for (let day of array) {
        switch (day) {
            case 1:
            console.log('1 is being sent');
            dispatch({
                type: 'GET_AVAILABLE_TIMES',
                payload: day
            })
                break;

            case 2:
            console.log('2 is being sent');
            dispatch({
                type: 'GET_AVAILABLE_TIMES',
                payload: day
            })
                break;

            case 3:
            console.log('3 is being sent');
            dispatch({
                type: 'GET_AVAILABLE_TIMES',
                payload: day
            })
                break;

            case 4:
            console.log('4 is being sent');
            dispatch({
                type: 'GET_AVAILABLE_TIMES',
                payload: day
            })
                break;

            case 5:
            console.log('5 is being sent');
            dispatch({
                type: 'GET_AVAILABLE_TIMES',
                payload: day
            })
                break;

            case 6:
            console.log('6 is being sent');   
            dispatch({
                type: 'GET_AVAILABLE_TIMES',
                payload: day
            })
                break;

            case 7:
            console.log('7 is being sent');
            dispatch({
                type: 'GET_AVAILABLE_TIMES',
                payload: day
            })
                break;
            default:
                break;
        }
    }
};
sendEachUniqueDay([1,2,3,5]);


function ifElseFunction(array){
    for (let day of array) {
        if (day === 1) {
            console.log('1 is being sent');
        } else if (day === 2) {
            console.log('2 is being sent');
        } else if (day === 3) {
            console.log('3 is being sent');
        } else if (day === 4) {
            console.log('4 is being sent');
        } else if (day === 5) {
            console.log('5 is being sent');
        } else if (day === 6) {
            console.log('6 is being sent');
        } else if (day === 7) {
            console.log('7 is being sent');
        } else {
            console.log('invalid number')
        }
    }
};
