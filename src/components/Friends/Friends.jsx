import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MyNav from '../MyNav/MyNav';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Friends.css'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

function Friends() {
  const store = useSelector((store) => store);
  const allUsers = useSelector((store) => store.multipleUsersReducer)
  console.log('all users:',allUsers)
  const history = useHistory();
  const [heading, setHeading] = useState('Users');
  const dispatch = useDispatch();
  // console.log('testing how to get things out of the array.', allUsers[0].username)

  console.log(typeof(allUsers))
  /*
  TODO: GET all Users, and their timezones.
    TODO: This is from the user table. I'll want user.username, and user.timezone.
  TODO: Button that allows you to see their availabilities.
    TODO: Button then takes them to a new page that shows their availability. The button will need to send the id of that person clicked, and send back availbility.days_id and availibility.time_id.
  TODO: Then Logic?
  */
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
//{...stringAvatar('Kent Dodds')}

const handleScheduleClick = (eachUser) => {
  console.log(eachUser)
  console.log(`Clicked on`, eachUser);
  history.push(`/friends/${eachUser}`)
  dispatch({
    type: 'FETCH_SPECIFIC_USER', // go to this saga.
    id: eachUser // this is the payload, so when I want to access it, it's gonna be action.id
  })
  // console.log(`Clicked on ${eachUser.username}`);
}
  return (
<>
      {/* {JSON.stringify(allUsers)} */}
      <h2>{heading}</h2>
      <div className='map'>
        {allUsers.map(eachUser => (
          <div className='eachUser' key={eachUser.id}>
          <Avatar {...stringAvatar(eachUser.username)}></Avatar>
          <p>USER: {eachUser.username} </p>
          <p>TIMEZONE: {eachUser.timezone}</p>
          <Button variant="contained" onClick={()=>handleScheduleClick(eachUser.id, eachUser.username)}>Get {eachUser.username}'s schedule</Button>
          &nbsp;
          <Button variant="contained">Select</Button>
          </div>
        ))}
      </div> 
</>
  );
}

export default Friends;
