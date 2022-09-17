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
  let freeTime = useSelector((store) => store.multipleUserFreeTimeReducer) // I now have all of my arrays in here, now I need 7 local states for each day of the week that gets SET in each switch case.
  const history = useHistory();
  const dispatch = useDispatch();
  const [heading, setHeading] = useState('Users');

  // ! I think this is all I needed. 
  const availableTimes = freeTime.map(({ availableTimes }) => availableTimes)
  console.error('USERNAMES?', availableTimes);

  //I may not even need these because the times come with the days.
  // ! compareArray contains all of the days that the user is free upon click, based on their current availability.
  const [compareArray, setCompareArray] = useState([]);
  console.warn('THIS IS THE FORMAT I NEED RN FOR TIME. compareArray:', compareArray);
  // ! commonalities determines what number is present in all selected arrays.
  const [commonalities, setCommonalities] = useState();
  console.warn('commonalitiesArray:', commonalities);
  // ! uniqueCommonDays eliminates duplicates to show simply.
  const [uniqueCommonDays, setUniqueCommonDays] = useState([]);
  console.warn(uniqueCommonDays);

  // ! monday contains all of the times on Monday that the user is free upon submit.
  const [monday, setMonday] = useState([]);
  // ! commonMondays should determine which numbers are present in all selected arrays of Monday.
  const [commonMondays, setCommonMondays] = useState([]);
  // ! uniqueMondays eliminates duplicates to show simply.
  const [uniqueMondays, setUniqueMondays] = useState([]);

  // console.log('freetime:',freeTime)
  const ref = useRef(null);

  // console.log('all users:',allUsers)
  // console.log(typeof(allUsers))
  // console.log('uniqueCommonDays:', uniqueCommonDays)

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
    console.warn('Got this persons id:', eachUser)
    // ! compareArray contains all of the days that the user is free upon click, based on their current availability.
    setCompareArray([...compareArray, eachUser.availableDays]) // this gives me a new array with all the old stuff. this is stored locally.
  };





  const handleSubmit = (times) => {
    console.warn('CompareArray upon submit:', compareArray);
    //! This looks like this. Gets this person's individual days that they have available and shoves them all in there.
    /*
     * (2) [Array(5), Array(4)],
     * 0:  [2,1,3,2,1]
     * 1:  [2,1,3,2]
    */
    // console.error('COMPARE ARRAY IN HANDLE SUBMIT:',compareArray)
    // console.log(intersectMany(compareArray))
    let commonalities = intersectMany(...compareArray);
    setCommonalities(...commonalities);
    let uniqueCommonDays = getUnique(commonalities).sort();
    setUniqueCommonDays([...uniqueCommonDays])
    // console.error('uniqueCommonDays in friends',uniqueCommonDays) // ! Send this to Saga.
    handleGettingAvailableTimes(uniqueCommonDays);
    // console.log('all users after hitting submit',allUsers)
    // console.error('MONDAY:', monday)
  }

  // maybe send as uniqueCommondays instead

  const handleGettingAvailableTimes = (array) => {
    sendEachUniqueDay(...array);
    function sendEachUniqueDay(...array) {
      for (let day of array) {
        switch (day) {
          case 1:
            // console.log(day);
            // console.error('1 is being sent');
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            // console.error('HERE!!!!!!!!!!!',freeTime.availableTimes)
            // console.error('freeTime', freeTime)
            setMonday([...monday, freeTime.availableTimes])
            // console.error('freetime.availability, drill', freeTime[0].availableDays);
            console.log('MONDAY ARRAY SET! Hopefully')
            // ! compareArray contains all of the days that the user is free upon click, based on their current availability. Should contain everyones times for mondays. ie, Kas has two times in there, Gab as 7, Billy has 1, Test, has a lot. 
            // ! I think I need to map through it first.
            console.log('MONDAY!', monday)
            // setMonday([...monday, ])
            break;

          case 2:
            // console.error('2 is being sent');
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            break;

          case 3:
            // console.error('3 is being sent');
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            break;

          case 4:
            // console.log('4 is being sent');
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            break;

          case 5:
            // console.log('5 is being sent');
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            break;

          case 6:
            // console.log('6 is being sent');
            dispatch({
              type: 'GET_AVAILABLE_TIMES',
              payload: { day: day }
            })
            break;

          case 7:
            // console.log('7 is being sent');
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


  // <h1>MAP OF FREETIME:</h1>
  // {freeTime.map(freeHour => (
  //   <div className='eachUser' key={freeHour.id}>
  //     {/* <Friends freeHour={freeHour}/> */}
  //     <p>USERNAME: {freeHour.username} </p>
  //     <p>DAY: {freeHour.day} </p>
  //     <p>AVAILABLE TIMES: {freeHour.availableTimes} </p>
  //   </div>
  // ))}



  return (
    <>

      {/* <TestingReducer></TestingReducer> */}
      <p>THIS IS THE COMPARE ARRAY:</p>
      {JSON.stringify(compareArray)}
      <br></br>
      <br></br>
      <br></br>
      <p>Unique Common Days:</p>
      {JSON.stringify(uniqueCommonDays)}
      <br></br>
      <br></br>
      <br></br>
      <p>THIS ONE:</p>
      {JSON.stringify(freeTime)}
      <br></br>
      <br></br>
      <br></br>
      <br></br>



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
            <Checkbox ref={ref} value={eachUser} onClick={() => {handleCheckBox(eachUser); handleCheckBox(freeHour)}}></Checkbox>
          </div>
        ))}
        {freeTime.map(freeHour => (
          <div className='eachUser' key={freeHour.id}>
            <p>USERNAME: {freeHour.username} </p>
            <p>DAY: {freeHour.day} </p>
            <p>AVAILABLE TIMES: {freeHour.availableTimes} </p>
          </div>
        ))}

      </div>
    </>
  );
}

export default Friends;

