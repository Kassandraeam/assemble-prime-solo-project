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
import { array } from 'prop-types';


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

  const allUsers = useSelector((store) => store.multipleUsersReducer) // all users and days available which shoots off which days to look at.
  let freeTime = useSelector((store) => store.multipleUserFreeTimeReducer)
  console.log(freeTime)
  const history = useHistory();
  const dispatch = useDispatch();
  const [heading, setHeading] = useState('Users');

  
  // ! I think this is all I needed. 
  const availableTimes = freeTime.map(({ availableTimes }) => availableTimes)

  //I may not even need these because the times come with the days.
  // * compareArray contains all of the days that the user is free upon click, based on their current availability.
  const [compareArray, setCompareArray] = useState([]);
  const [compareTimeArray, setCompareTimeArray] = useState([]);
  console.log('THIS IS THE FORMAT I NEED RN FOR TIME. compareArray:', compareArray);



  // * commonalities determines what number is present in all selected arrays.
  const [commonalities, setCommonalities] = useState();
  console.log('commonalitiesArray:', commonalities);

  const [commonalitiesTime, setCommonalitiesTime] = useState([0])

  let arrayTest = [];
  const simpleForOf = (arr) => {
    for (const hour of arr) {
      console.log('INDIVIDUAL ITEMS FROM THE ARRAY',hour);
      console.log(hour.time);
      arrayTest.push(hour.time);
    }
  }

  simpleForOf(freeTime);
  console.log('array',arrayTest);





  // * uniqueCommonDays eliminates duplicates to show simply.
  const [uniqueCommonDays, setUniqueCommonDays] = useState([]);
  console.log(uniqueCommonDays);

  const [uniqueCommonTimes, setUniqueCommonTimes] = useState([])

  const ref = useRef(null);
  console.table('array',arrayTest);
console.log('INTERECT ARRAY TEST',intersectMany(arrayTest))
console.log('arrayTest', arrayTest)
  let testIntersect = (intersectMany(arrayTest))
  console.log('testIntersect', testIntersect)

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



  const handleGetAvailableSchedule = (eachUser) => {
    history.push(`/friends/${eachUser}`)
    dispatch({
      type: 'FETCH_SPECIFIC_USER',
      id: eachUser
    })
  };


  const handleCheckBox = (eachUser, eachHour) => {
    console.error('All users:', allUsers)
    console.log('Got this persons id:', eachUser)
    // ! compareArray contains all of the days that the user is free upon click, based on their current availability.
    setCompareArray([...compareArray, eachUser.availableDays]) // this gives me a new array with all the old stuff. this is stored locally.
    console.warn('eachUser!!!', `${eachUser.time}`)
    getTime(eachHour);
  };


  const getTime = (eachHour) => {
    console.warn('each hour time', eachHour.time)
    setCompareTimeArray([...compareTimeArray, eachUser.time]);
    console.log(compareTimeArray);

  }



  const handleSubmit = () => {
    // console.warn('eachUser!!!',eachUser)


    console.log('CompareArray upon submit:', compareArray);
    let commonalities = intersectMany(...compareArray);
    setCommonalities(...commonalities);

    let uniqueCommonDays = getUnique(commonalities).sort();
    setUniqueCommonDays([...uniqueCommonDays])
    //this 
    handleGettingAvailableTimes(uniqueCommonDays);

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

