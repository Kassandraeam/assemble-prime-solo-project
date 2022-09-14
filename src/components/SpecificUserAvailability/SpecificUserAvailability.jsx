import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function SpecificUserAvailability() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [heading, setHeading] = useState('SpecificUserAvailability');
  const specificUserReducer = useSelector((store) => store.specificUserReducer);
  let id = useParams();


  useEffect(() => {
    dispatch({
      type: 'FETCH_SPECIFIC_USER_AVAILABILITY',
      payload: id
    })
  }, [])

  const handleBack = () => {
    console.log('go back a page');
    history.push('/calendar');
  }

  return (
    <>
      <div>
        <h2>{heading}</h2>
        <p>✨I need to convert specificUser.hour to the current user's timezone.✨</p>
      </div>
      {specificUserReducer.map(specificUser => (
        <div className='map' key={specificUser.id}>
          <p>{specificUser.username} is free on {specificUser.day} at: {specificUser.hour}</p>
        </div>
      ))}
      <Button variant="contained" onClick={handleBack}>BACK</Button>
    </>
  );
}

export default SpecificUserAvailability;
