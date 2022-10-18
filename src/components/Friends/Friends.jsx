import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Friends.css'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
const label = { inputProps: { 'aria-label': 'Compare Times' } };
const { DateTime } = require("luxon");



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
  let freeTime = useSelector((store) => store.multipleUserFreeTimeReducer)

  const history = useHistory();
  const dispatch = useDispatch();
  const [heading, setHeading] = useState('Users');
  const [compareArray, setCompareArray] = useState([]);

  // * commonalities determines what number is present in all selected arrays.
  const [commonalities, setCommonalities] = useState();

  // * uniqueCommonDays eliminates duplicates to show simply.
  const [uniqueCommonDays, setUniqueCommonDays] = useState([]);
  let arrayTest = [];
  const simpleForOf = (arr) => {
    for (const hour of arr) {
      arrayTest.push(hour.time);
    }
  }

  // console.log(simpleForOf(freeTime));

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

  // console.log(simpleForOf(freeTime));

  const handleGetAvailableSchedule = (eachUser) => {
    history.push(`/friends/${eachUser}`)
    dispatch({
      type: 'FETCH_SPECIFIC_USER',
      id: eachUser
    })
  };



  // + CHECKBOX 
  const handleCheckBox = (eachUser) => {
    // ('userID:',eachUser.id)
    setCompareArray([...compareArray, eachUser.availableDays])
  };
  // + SUBMIT
  const handleSubmit = () => {
    let commonalities = intersectMany(...compareArray);
    setCommonalities(...commonalities);
    let uniqueCommonDays = getUnique(commonalities).sort();
    setUniqueCommonDays([...uniqueCommonDays])
    // handleGettingAvailableTimes(uniqueCommonDays);
    // ('unique common days', uniqueCommonDays)
    // ('DISPLAY DAYS ON DOM',displayDaysOnDOM);
  }
  const handleGettingAvailableTimes = (array) => {
    // sendEachUniqueDay(...array);
    function sendEachUniqueDay(...array) {
      for (let day of array) {
        switch (day) {
          case 1:
            // ('Shooting', day, 'off to the Server!')
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            break;
          case 2:
            // ('Shooting', day, 'off to the Server!')
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            break;
          case 3:
            // ('Shooting', day, 'off to the Server!')
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            break;
          case 4:
            // ('Shooting', day, 'off to the Server!')
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            break;
          case 5:
            // ('Shooting', day, 'off to the Server!')
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            break;
          case 6:
            // ('Shooting', day, 'off to the Server!')
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            break;
          case 7:
            // ('Shooting', day, 'off to the Server!')
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            break;
          default:
            ('default of the sendEachUniqueDay function')
            break;
        }
      }
    };
  }

  return (
    <>
      <h2 className='text-3xl my-8 mx-5'>{heading}</h2>
      &nbsp;
      &nbsp;
      {allUsers.map(eachUser => (
        <div className='eachUser' key={eachUser.id}>
          <div className='flex items-center'>
            <Avatar {...stringAvatar(eachUser.username)}></Avatar>
            <p>   &nbsp;&nbsp;{eachUser.username} </p>
          </div>
          <p>&nbsp;&nbsp;TIMEZONE: {eachUser.timezone}</p>
          &nbsp;
          <div>
            <Button variant="contained" onClick={() => handleGetAvailableSchedule(eachUser.id, eachUser.username, eachUser.timezone)}>Get {eachUser.username}'s schedule</Button>
            &nbsp;
          </div>
        </div>
      ))}
      {/* {freeTime.map(eachHour => (
          <div className='eachUser' key={eachHour.id}>
            <p>ID{eachHour.id}</p>
            <p>username:{eachHour.username}</p>
            <p>time:{eachHour.time}</p>
            </div>
           ))} */}
    </>
  );
}

export default Friends;

