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
import TestingReducer from '../_TemplateComponent copy/TemplateComponent';
import { array } from 'prop-types';
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

function uniqueArrayDaysOfWeek(array){
  let uniqueArrayDaysOfWeekArray = [];
  for (let i = 0; i < array.length; i++) {
      if (i === 1) {
        uniqueArrayDaysOfWeekArray.push['Monday'];
      }
      else if (i === 2) {
        uniqueArrayDaysOfWeekArray.push['Tuesday'];
      }
      else if (i === 3) {
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

  
function Friends() {
  const specificUser = useSelector((store)=> store.specificUserReducer)
  const store = useSelector((store) => store);
  const allUsers = useSelector((store) => store.multipleUsersReducer)
  console.error(allUsers);
  let freeTime = useSelector((store) => store.multipleUserFreeTimeReducer)

  const history = useHistory();
  const dispatch = useDispatch();
  const [heading, setHeading] = useState('Users');
  const availableTimes = freeTime.map(({ availableTimes }) => availableTimes)
  // from the multiple free time reducer, save it in a local state. 
  const [freehours, setFreeHours] = useState();
  // * compareArray contains all of the days that the user is free upon click, based on their current availability.
  const [compareArray, setCompareArray] = useState([]);
  const [compareTimeArray, setCompareTimeArray] = useState([]);

  // * commonalities determines what number is present in all selected arrays.
  const [commonalities, setCommonalities] = useState();

  // * uniqueCommonDays eliminates duplicates to show simply.
  const [uniqueCommonDays, setUniqueCommonDays] = useState([]);
  let arrayTest = [];
  const simpleForOf = (arr) => {
    for (const hour of arr) {
      //console.log('INDIVIDUAL ITEMS FROM THE ARRAY',hour);
      //console.log(hour.time);
      arrayTest.push(hour.time);
    }
  }

  simpleForOf(freeTime);


  const [uniqueCommonTimes, setUniqueCommonTimes] = useState([])

  const ref = useRef(null);

  let testIntersect = (intersectMany(arrayTest))
  //console.log('testIntersect', testIntersect)

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




  useEffect(() => {
    dispatch({
      type: 'FETCH_ALL_USERS',
    })
  }, [])

  simpleForOf(freeTime);

  const handleGetAvailableSchedule = (eachUser) => {
    history.push(`/friends/${eachUser}`)
    dispatch({
      type: 'FETCH_SPECIFIC_USER',
      id: eachUser
    })
  };



 // + CHECKBOX 
  const handleCheckBox = (eachUser, eachHour) => {
    console.log('userID:',eachUser.id)
    setCompareArray([...compareArray, eachUser.availableDays]) 
    getTime(eachHour);
  };

// + SUBMIT
  const handleSubmit = () => {
    let commonalities = intersectMany(...compareArray);
    setCommonalities(...commonalities);

    let uniqueCommonDays = getUnique(commonalities).sort();
    setUniqueCommonDays([...uniqueCommonDays])

    handleGettingAvailableTimes(uniqueCommonDays);
    console.log('unique common days', uniqueCommonDays)
    let displayDaysOnDOM = uniqueArrayDaysOfWeek(uniqueCommonDays);
    console.warn('DISPLAY DAYS ON DOM',displayDaysOnDOM);
  }



  const handleGettingAvailableTimes = (array) => {
    sendEachUniqueDay(...array);
    function sendEachUniqueDay(...array) {
      for (let day of array) {
        switch (day) {
          case 1:
            console.warn('Shooting', day, 'off to the Server!')
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            break;
          case 2:
            console.warn('Shooting', day, 'off to the Server!')
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            break;
          case 3:
            console.warn('Shooting', day, 'off to the Server!')
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            break;
          case 4:
            console.warn('Shooting', day, 'off to the Server!')
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            break;
          case 5:
            console.warn('Shooting', day, 'off to the Server!')
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            break;
          case 6:
            console.warn('Shooting', day, 'off to the Server!')
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            break;
          case 7:
            console.warn('Shooting', day, 'off to the Server!')
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
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
       <>
      <p>THIS IS THE COMPARE ARRAY FOR DAYS:</p>
      {JSON.stringify(compareArray)}
      <br></br>
      <br></br>
      <br></br>
      <p>Unique Common Days (M:1, T:2, W:3 ---):</p>
      {JSON.stringify(uniqueCommonDays)}
      <br></br>
      <br></br>
      <br></br>
      <p>Times:</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>geting the times of ANYONE with availability on x day</p>
      {JSON.stringify(testIntersect)}
      {JSON.stringify(freeTime)}
       </>

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
            <Checkbox value={eachUser} onClick={() => handleCheckBox(eachUser)}></Checkbox>
          </div>
        ))}
        {freeTime.map(eachHour => (
          <div className='eachUser' key={eachHour.id}>

            <p>ID{eachHour.id}</p>
            <p>username:{eachHour.username}</p>
            <p>time:{eachHour.time}</p>
            <Button onClick={() => handleCheckBox(eachHour.time)}>For the sake of getting something </Button>
            </div>
           ))}

      </div>
    </>
  );
}

export default Friends;
