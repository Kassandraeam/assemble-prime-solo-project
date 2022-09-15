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
//! I can have plain JS up here.

// const intersection = (arr1, arr2) => {
//   const res = [];
//   for(let i = 0; i < arr1.length; i++){
//       if(!arr2.includes(arr1[i])){
//           continue;
//       };
//       res.push(arr1[i]);
//   };
//   return res;
//   };
//   const intersectMany = (...arrs) => {
//   let res = arrs[0][0].slice();
//   for(let i = 1; i < arrs.length; i++){
//       res = intersection(res, arrs[0][i]); // 
//   };
//   return res;
//   };
  // console.log('THESE WORK:',intersectMany(Gab, Bill, Alex, Tuladai));
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



function Friends() {
  const store = useSelector((store) => store);
  const allUsers = useSelector((store) => store.multipleUsersReducer)
  // console.log('all users:',allUsers)
  const history = useHistory();
  const [heading, setHeading] = useState('Users');
  const [compareArray, setCompareArray] = useState([]);
  const [commonalities, setCommonalities] = useState();
  const dispatch = useDispatch();
  const ref = useRef(null);
  // console.log(typeof(allUsers))

  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
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

// ! GET FUNCTION IN HERE AND do stuff.
const handleCheckBox = (eachUser) => {
  console.log('HANDLE CLICK');
  console.log('Got this persons id:', eachUser)
  setCompareArray([...compareArray,eachUser.availableDays]) // this gives me a new array with all the old stuff. this is stored locally

};

const handleSubmit = () => { 
  // intersectMany(compareArray);
  console.log(compareArray)
  console.log(intersectMany(compareArray))
  let commonalities = intersectMany(...compareArray);
  console.log('COMMONALITIES',commonalities)
  setCommonalities(commonalities); 
  // setCompareArray(0); //should reset it upon click of submit maybe hold off on this
}

//git merge
  return (
<>
      <p>THIS IS THE COMPARE ARRAY</p>
      {JSON.stringify(compareArray)}
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
          <Button variant="contained" onClick={()=>handleGetAvailableSchedule(eachUser.id, eachUser.username)}>Get {eachUser.username}'s schedule</Button>
          &nbsp;
          {/* ? What exactly is this onclick Anon function doing?
          "On click, it is running the function with these two as arguments"
          */}
          <Checkbox ref={ref} value={eachUser} onClick={()=>handleCheckBox(eachUser)}></Checkbox>
          </div>
        ))}
      </div> 
</>
  );
}

export default Friends;

