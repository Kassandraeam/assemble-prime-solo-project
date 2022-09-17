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
import TestingReducer from '../_TemplateComponent copy/TemplateComponent';


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
  console.log('ALL USER',allUsers)
  let freeTime = useSelector((store) => store.multipleUserFreeTimeReducer) // I now have all of my arrays in here, now I need 7 local states for each day of the week that gets SET in each switch case.
  const history = useHistory();
  const dispatch = useDispatch();
  const [heading, setHeading] = useState('Users');

  // ! I think this is all I needed. 
  const availableTimes = freeTime.map(({ availableTimes }) => availableTimes)
  console.log('FREE TIME REDUCER:',freeTime)
  console.error('availableTimes?', availableTimes);

  //I may not even need these because the times come with the days.
  // * compareArray contains all of the days that the user is free upon click, based on their current availability.
      const [compareArray, setCompareArray] = useState([]);
      console.log('THIS IS THE FORMAT I NEED RN FOR TIME. compareArray:', compareArray);

      const [compareTimesArray, setCompareTimesArray] = useState([])




  // * commonalities determines what number is present in all selected arrays.
      const [commonalities, setCommonalities] = useState();
      console.log('commonalitiesArray:', commonalities);

      const [commonalitiesTime, setCommonalitiesTime] = useState([])




  // * uniqueCommonDays eliminates duplicates to show simply.
      const [uniqueCommonDays, setUniqueCommonDays] = useState([]);
      console.log(uniqueCommonDays);

      const [uniqueCommonTimes, setUniqueCommonTimes] = useState([])




  // // * monday contains all of the times on Monday that the user is free upon submit.
  // const [monday, setMonday] = useState([]);
  // // * commonMondays should determine which numbers are present in all selected arrays of Monday.
  // const [commonMondays, setCommonMondays] = useState([]);
  // // * uniqueMondays eliminates duplicates to show simply.
  // const [uniqueMondays, setUniqueMondays] = useState([]);

  const ref = useRef(null);



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
      type: 'FETCH_ALL_USERS'
    })
  }, []);

  const handleGetAvailableSchedule = (eachUser) => {
    // console.log(eachUser)
    // console.log(`Clicked on`, eachUser);
    history.push(`/friends/${eachUser}`)
    dispatch({
      type: 'FETCH_SPECIFIC_USER',
      id: eachUser
    })
  };


  const handleCheckBox = (eachUser) => {
    console.error('All users:', allUsers)
    console.log('Got this persons id:', eachUser)
    // ! compareArray contains all of the days that the user is free upon click, based on their current availability.
    setCompareArray([...compareArray, eachUser.availableDays]) // this gives me a new array with all the old stuff. this is stored locally.
    setCompareTimesArray([...compareTimesArray, eachUser.availableTimes]); 
  };





  const handleSubmit = (times) => {
    console.log('CompareArray upon submit:', compareArray);
    let commonalities = intersectMany(...compareArray);
    setCommonalities(...commonalities);
    let uniqueCommonDays = getUnique(commonalities).sort();
    setUniqueCommonDays([...uniqueCommonDays])
    handleGettingAvailableTimes(uniqueCommonDays);
    let commonTimes = intersectMany(availableTimes)
    console.log('COMMON TIMES:',commonTimes)
  }



  const handleGettingAvailableTimes = (array) => {
    sendEachUniqueDay(...array);
    function sendEachUniqueDay(...array) {
      for (let day of array) {
        switch (day) {
          case 1:
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            setMonday([...monday, freeTime.availableTimes])
            console.log('MONDAY ARRAY SET! Hopefully', monday)
            break;
          case 2:
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            break;
          case 3:
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            break;
          case 4:
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            break;
          case 5:
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            break;
          case 6:
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            break;
          case 7:
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
      {JSON.stringify(compareTimesArray)}
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>I want the available times to only be the ones I checked. So when I check a certain button, I want to only select their hours.</p>
      {/* {JSON.stringify(availableTimes)} */}


      <h2>{heading}</h2>


      <Button variant="contained" onClick={handleSubmit}>SUBMIT</Button>
      &nbsp;

      {/* //! What's happening here?
      // Each checkbox is made specifically for that person and contains only THEIR information. So when I click it, it sends THEIR information to handleCheckBox function which sets the local state. */}
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

