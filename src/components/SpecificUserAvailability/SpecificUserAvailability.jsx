import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const { DateTime } = require("luxon");

function SpecificUserAvailability() {

  useEffect(() => {
    dispatch({
      type: 'FETCH_SPECIFIC_USER_AVAILABILITY',
      payload: id
    })
  }, [])

  
  const history = useHistory();
  const dispatch = useDispatch();
  const [heading, setHeading] = useState();
  const specificUserReducer = useSelector((store) => store.specificUserReducer);
  const [local, setLocal] = useState([]);
  const [usersInfo, setUsersInfo] = useState()


  let id = useParams();
  console.warn('YOU ARE NOW AT YOUR FRIENDS PAGE')
  console.log('id taken from useParams', id); // console logs as {id: '3'}
  console.log('see what specificUserReducer is coming back as:', specificUserReducer) // only returning the id rn.




  let convertUTCToLocal = (event) => {

    // console.warn('CONVERT TO LOCAL SHOULD RUN', specificUserReducer);
    // let test = DateTime.utc(2017, 5, 15, specificUser, 36).toLocal()
    // console.log('UTC',specificUser, 'That is', test.hour, 'in MY timezone.');
    // setLocal([...local,test.hour])

    // console.log('this is the variable local time zone:', local)
  }

  const handleBack = () => {
    console.log('go back a page');
    history.push('/friends');
  }

  return (
    <>
      <div>
        <h2>{heading}</h2>
        {/* <p>✨I need to convert specificUser.hour to the current user's timezone.✨</p> */}
      </div>
      
      {specificUserReducer.map(specificUser => (
        <div className='map' key={specificUser.id} >
          <p>{specificUser.username} is free on {specificUser.day} at: {specificUser.hour} UTC</p>
          {/* <Button onClick={event =>convertUTCToLocal(event, 'test')}>Convert to your Time</Button> */}
        </div>
      ))}
      <Button variant="contained" onClick={handleBack}>BACK</Button>
    </>
  );
}

export default SpecificUserAvailability;
