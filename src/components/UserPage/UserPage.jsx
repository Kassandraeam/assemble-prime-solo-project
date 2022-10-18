import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
const { DateTime } = require("luxon");
import Button from '@mui/material/Button';
import { useState } from 'react';

import './UserPage.css'

function UserPage() {

  const user = useSelector((store) => store.user);
  const userTimezone = user.timezone;
  const availableTimesSpecificToUser = useSelector((store) => store.availabilityReducer)
  console.log(availableTimesSpecificToUser);

  const [time, setTime] = useState();

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch({
      type: 'FETCH_AVAILABILITY',
      payload: user.id
    })
    console.log('HERE', availableTimesSpecificToUser)
  }, []);

  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE_AVAILABILITY',
      payload: user.id,
      id: id
    })
  }

  const convertTime = (free) => {
    console.log(free)
    let test = DateTime.utc(2022, 1, 1, free.time_id, 0).setZone(userTimezone)
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
      <h1 className="text-4xl text-center mb-[30px]">Welcome, {user.username}!</h1>
      <h1 className='text-4xl ml-[60px] mb-[50px]'>Available Times:</h1>


      {/* {JSON.stringify(availableTimesSpecificToUser)} */}
      <div className='ml-12 columns-1'>
        {availableTimesSpecificToUser.map(free => (
          <div className='mr-5 mb-8 columns-1' key={free.id}>
            {/* {convertTime(free)} */}
            {/* <p>UTC: {free.time_id}</p> */}
            <p className='text-[20px]'>TIME FREE: {free.day} AT {convertTime(free)}</p>
            <div className='mt-[25px]'>
              <Button variant="contained" className='mt-5' onClick={() => handleDelete(free.id)}>DELETE</Button>
            </div>

          </div>
        ))}
      </div>
    </>
  );
}

export default UserPage;