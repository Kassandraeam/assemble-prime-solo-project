import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './SpecificUserAvailability.css'
const { DateTime } = require("luxon");

function SpecificUserAvailability() {

  const history = useHistory();
  const dispatch = useDispatch();
  const specificUserReducer = useSelector((store) => store.specificUserReducer);
  const user = useSelector((store) => store.user);
  const [local, setLocal] = useState([]);
  const [heading, setHeading] = useState();

  let id = useParams();

  useEffect(() => {
    dispatch({
      type: 'FETCH_SPECIFIC_USER_AVAILABILITY',
      payload: id
    })
  }, [])

  const handleBack = () => {
    // ('go back a page');
    history.push('/friends');
  }
  const convertTime = (specificUser) => {
    console.log(specificUser)
    let test = DateTime.utc(2022, 1, 1, specificUser.time_id, 0).setZone(user.timezone)
    switch (test.hour) {
      case 1:
        return '1:00am'
        break;
      case 2:
        return '2:00am'
        break;
      case 3:
        return '3:00am'
        break;
      case 4:
        return '4:00am'
        break;
      case 5:
        return '5:00am'
        break;
      case 6:
        return '6:00am'
        break;
      case 7:
        return '7:00am'
        break;
      case 8:
        return '8:00am'
        break;
      case 9:
        return '9:00am'
        break;
      case 10:
        return '10:00am'
        break;
      case 11:
        return '11:00am'
        break;
      case 12:
        return '12:00pm'
        break;
      case 13:
        return '1:00pm'
        break;
      case 14:
        return '2:00pm'
        break;
      case 15:
        return '3:00pm'
        break;
      case 16:
        return '4:00pm'
        break;
      case 17:
        return '5:00pm'
        break;
      case 18:
        return '6:00pm'
        break;
      case 19:
        return '7:00pm'
        break;
      case 20:
        return '8:00pm'
        break;
      case 21:
        return '9:00pm'
        break;
      case 22:
        return '10:00pm'
        break;
      case 23:
        return '11:00pm'
        break;
      case 24:
        return '12:00am'
        break;
      default:
        break;
    }
    return test.hour;
  }

  return (
    <>
      <div className='mb-8 '>
        <h2>{heading}</h2>
      </div>
      {specificUserReducer.map(specificUser => (
        <div className='map' key={specificUser.id} >

          {/* <p>This users UTC converted to YOUR time: {convertTime(specificUser)}</p> */}
          <li className='text-3xl my-8'>{specificUser.username} is free on {specificUser.day} at {convertTime(specificUser)}</li>
        </div>
      ))}
      <Button variant="contained" onClick={handleBack}>BACK</Button>
    </>
  );
}

export default SpecificUserAvailability;
