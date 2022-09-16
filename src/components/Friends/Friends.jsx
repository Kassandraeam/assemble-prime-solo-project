import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import MyNav from '../MyNav/MyNav';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Friends.css'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { common, deepOrange, deepPurple } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Compare Times' } };

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
function getUnique(array) {
  let uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}


function Friends() {
  const store = useSelector((store) => store);
  const allUsers = useSelector((store) => store.multipleUsersReducer)
  const freeTime = useSelector((store) => store.multipleUserFreeTimeReducer)
  const history = useHistory();
  const [heading, setHeading] = useState('Users');
  const [compareArray, setCompareArray] = useState([]);
  const [commonalities, setCommonalities] = useState();
  const [uniqueCommonDays, setUniqueCommonDays] = useState([]);

  const [monday, setMonday] = useState([]);
  const [commonMondays, setCommonMondays] = useState([]);

  console.log('freetime:',freeTime)
  const dispatch = useDispatch();
  const ref = useRef(null);
  let runSubmitOnce = false;
  // console.log('all users:',allUsers)
  // console.log(typeof(allUsers))
  console.log('uniqueCommonDays:', uniqueCommonDays)

  function stringToColor(string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}`,
    };
  }
  // function sendEachUniqueDay(array) {
  //   for (let day of array) {
  //     switch (day) {
  //       case 1:
  //         console.log('1 is being sent');
  //         dispatch({
  //           type: 'GET_AVAILABLE_TIMES',
  //           payload: day
  //         })
  //         break;

  //       case 2:
  //         console.log('2 is being sent');
  //         dispatch({
  //           type: 'GET_AVAILABLE_TIMES',
  //           payload: day
  //         })
  //         break;

  //       case 3:
  //         console.log('3 is being sent');
  //         dispatch({
  //           type: 'GET_AVAILABLE_TIMES',
  //           payload: day
  //         })
  //         break;

  //       case 4:
  //         console.log('4 is being sent');
  //         dispatch({
  //           type: 'GET_AVAILABLE_TIMES',
  //           payload: day
  //         })
  //         break;

  //       case 5:
  //         console.log('5 is being sent');
  //         dispatch({
  //           type: 'GET_AVAILABLE_TIMES',
  //           payload: day
  //         })
  //         break;

  //       case 6:
  //         console.log('6 is being sent');
  //         dispatch({
  //           type: 'GET_AVAILABLE_TIMES',
  //           payload: day
  //         })
  //         break;

  //       case 7:
  //         console.log('7 is being sent');
  //         dispatch({
  //           type: 'GET_AVAILABLE_TIMES',
  //           payload: day
  //         })
  //         break;
  //       default:
  //         console.log('default of the sendEachUniqueDay function')

  //         break;
  //     }
  //   }
  // };


  useEffect(() => {
    dispatch({
      type: 'FETCH_ALL_USERS'
    })
  }, []);

  const handleGetAvailableSchedule = (eachUser) => {
    console.log(eachUser)
    console.log(`Clicked on`, eachUser);
    history.push(`/friends/${eachUser}`)
    dispatch({
      type: 'FETCH_SPECIFIC_USER',
      id: eachUser
    })
  };


  const handleCheckBox = (eachUser) => {
    console.log('Got this persons id:', eachUser)
    setCompareArray([...compareArray, eachUser.availableDays]) // this gives me a new array with all the old stuff. this is stored locally
  };

  const handleSubmit = () => {
    console.log(compareArray)
    console.log(intersectMany(compareArray))
    let commonalities = intersectMany(...compareArray);
    setCommonalities(...commonalities);
    let uniqueCommonDays = getUnique(commonalities).sort();
    setUniqueCommonDays([...uniqueCommonDays])
    handleGettingAvailableTimes(uniqueCommonDays);
    console.log('all users after hitting submit',allUsers)
  }

  const handleGettingAvailableTimes = (array) => {
    sendEachUniqueDay(...array);
    function sendEachUniqueDay(...array) {
      for (let day of array) {
        switch (day) {
          case 1:
            console.log(day);
            console.error('1 is being sent');
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: {day:day}
            })
            // setMonday([...monday, ])
            break;

          case 2:
            console.error('2 is being sent');
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: {day:day}
            })
            break;

          case 3:
            console.error('3 is being sent');
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
            console.log('default of the sendEachUniqueDay function')

            break;
        }
      }
    };
  }



  return (
    <>
      <p>THIS IS THE COMPARE ARRAY:</p>
      {JSON.stringify(compareArray)}
      <br></br>
      <p>Unique Common Days:</p>
      {JSON.stringify(uniqueCommonDays)}

      <h2>{heading}</h2>


      <Button variant="contained" onClick={handleSubmit}>SUBMIT</Button>
      &nbsp;

      <div className='map'>
        &nbsp;
        {allUsers.map(eachUser => (
          <div className='eachUser' key={eachUser.id}>
            <Avatar {...stringAvatar(eachUser.username)}></Avatar>
            <p>USER: {eachUser.username} </p>
            <p>TIMEZONE: {eachUser.timezone}</p>
            <Button variant="contained" onClick={() => handleGetAvailableSchedule(eachUser.id, eachUser.username)}>Get {eachUser.username}'s schedule</Button>
            &nbsp;
            <Checkbox ref={ref} value={eachUser} onClick={() => handleCheckBox(eachUser)}></Checkbox>
          </div>
        ))}
      </div>
    </>
  );
}

export default Friends;

