import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import './UserPage.css'

function UserPage() {

  const user = useSelector((store) => store.user);
  const availableTimesSpecificToUser = useSelector((store) => store.availabilityReducer)
  console.log(availableTimesSpecificToUser);

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
    console.log('ConvertTime Function');
    console.log('free:', free);
  }


  return (
    <>
      <h1 className="text-4xl text-center mb-[30px]">Welcome, {user.username}!</h1>
      <h1 className='text-4xl ml-[60px] mb-[50px]'>Available Times:</h1>


      {/* {JSON.stringify(availableTimesSpecificToUser)} */}
      <div className='ml-12 columns-1'>
        {availableTimesSpecificToUser.map(free => (
          <div className='mr-5 mb-8 columns-1' key={free.id}>
            {convertTime(free)}
            <p className='text-[20px]'>TIME FREE: {free.day} AT {free.time_id} UTC</p>
            <div className='mt-[25px]'>
              <Button variant="contained" className='mt-5' onClick={() => handleDelete(free.id)}>DELETE</Button>
            </div>

          </div>
        ))}
      </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

/* 
{genres.map(genre => (
                    <div key={genre.name}>
                        <div className="card-text">{genre.name}</div>
                    </div>
                ))}

*/