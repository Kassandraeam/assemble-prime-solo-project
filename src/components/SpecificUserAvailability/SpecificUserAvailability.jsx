import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './SpecificUserAvailability.css'
const { DateTime } = require("luxon");

function SpecificUserAvailability() {

//DateTime.utc(2017, 5, 15, 17, 36).toLocal()
  const history = useHistory();
  const dispatch = useDispatch();
  const [heading, setHeading] = useState();
  const specificUserReducer = useSelector((store) => store.specificUserReducer);
  const [local, setLocal] = useState([]);


  let id = useParams();
  (id); // console logs as {id: '3'}

  // const convertUTCToLocal = (specificUser) => {
  //   ('CONVERT TO LOCAL SHOULD RUN',specificUserReducer);
  //   ('THIS IS UTC VALUE FROM TABLE',specificUser)
  //   let test = DateTime.utc(2017, 5, 15, specificUser, 36).toLocal()
  //   ('UTC',specificUser, 'That is', test.hour, 'in MY timezone.');

  //   setLocal([
  //     ...local,
  //     {
  //         timeToShow: test.hour,
  //     }
  // ])
  //   (local)
  //   (`this is the variable local time zone:${local.timeToShow}`)
  // }


  useEffect(() => {
    dispatch({
      type: 'FETCH_SPECIFIC_USER_AVAILABILITY',
      payload: id
    })
  }, [])

  const handleBack = () => {
    ('go back a page');
    history.push('/friends');
  }

  return (
    <>
      <div className='mb-8 '>
        <h2>{heading}</h2>
        {/* <p>✨I need to convert specificUser.hour to the current user's timezone.✨</p> */}
      </div>
      {specificUserReducer.map(specificUser => (
        <div className='map' key={specificUser.id} >
          <li className='text-3xl my-8'>{specificUser.username} is free on {specificUser.day} at: {specificUser.hour} UTC</li>
        </div>
      ))}
      <Button variant="contained" onClick={handleBack}>BACK</Button>
    </>
  );
}

export default SpecificUserAvailability;
