import React, { useEffect, useState, useRef } from 'react';
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
import { compare } from 'bcryptjs';
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
  const history = useHistory();
  const [heading, setHeading] = useState('Users');
  const [compareArray, setCompareArray] = useState([]);
  const [commonalities, setCommonalities] = useState();
  const [uniqueCommonDays, setUniqueCommonDays] = useState();
  const dispatch = useDispatch();
  const ref = useRef(null);
  // console.log('all users:',allUsers)
  // console.log(typeof(allUsers))

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
    console.log('unique days: ', getUnique(commonalities));
    setUniqueCommonDays(getUnique(commonalities).sort());
    console.log('COMMONALITIES', commonalities)
    setCommonalities(commonalities);
    // setCompareArray(0); //should reset it upon click of submit maybe hold off on this
  }

  return (
    <>
      <p>THIS IS THE COMPARE ARRAY:</p>
      {JSON.stringify(compareArray)}
      <br></br>
      <p>Unique Common Days:</p>
      {JSON.stringify(uniqueCommonDays)}


      <h2>{heading}</h2>
      <p>Users to compare to should go here:</p>
      <p>Common days: {commonalities}</p>


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

