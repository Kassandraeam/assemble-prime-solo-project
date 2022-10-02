import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import './UserPage.css'

function UserPage() {

  const user = useSelector((store) => store.user);
  const availableTimesSpecificToUser = useSelector((store) => store.availabilityReducer)

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch({
      type: 'FETCH_AVAILABILITY',
      payload: user.id
    })
    console.log('HERE',availableTimesSpecificToUser)
  }, []);

  const handleDelete = (id) => {

    dispatch({
      type: 'DELETE_AVAILABILITY',
      payload: user.id, 
      id: id 
    })
  }


  return (
    <>
      <h1 className="text-4xl text-center">Welcome, {user.username}!</h1>
      {/* <p>Your ID is: {user.id}</p> */}
      <h1 className='text-4xl'>Available Times:</h1>


      {/* {JSON.stringify(availableTimesSpecificToUser)} */}
      <div className='mt-4 ml-12 columns-3'>
        {availableTimesSpecificToUser.map(free => (
          <div className='mr-5 mb-8 columns-3' key={free.id}>
              <p>TIME FREE: {free.day} AT {free.time_id} UTC</p>
            <Button variant="contained" onClick={() => handleDelete(free.id)}>DELETE</Button>
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