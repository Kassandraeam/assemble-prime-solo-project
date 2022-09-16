import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import '../App/App.css'
import Button from '@mui/material/Button';
import Luxon from '../Luxon/Luxon';
import 'animate.css';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const availableTimesSpecificToUser = useSelector((store) => store.availabilityReducer)
  console.log('availableTimesSpecificUser Reducer:', availableTimesSpecificToUser)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch({
      type: 'FETCH_AVAILABILITY',
      payload: user.id
    })
  }, []);

  console.log('Times available to this user:', availableTimesSpecificToUser)

  const handleDelete = (id) => {
    console.log('THIS IS THE ID OF THE ITEM THAT YOU WANT TO DELETE:', id);
    console.log('THIS IS THE USER ID IN THE HANDLE DELETE HOPEFULLY', user.id)
    // dispatch this id to the delete request.
    dispatch({
      type: 'DELETE_AVAILABILITY',
      payload: user.id, //alex
      id: id // item number in database
    })
  }

  return (
    <>
    <h1 className="animate__bounce animate__bounce">An animated element</h1>
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <h1>Available Times:</h1>
      
      {/* {JSON.stringify(availableTimesSpecificToUser)} */}
      <div className='map'>

        
        {availableTimesSpecificToUser.map(free => (
          <div className='mappp' key={free.id}>
            <span><p>TIME FREE: {free.days_id} AT {free.time_id}</p>
              <Button variant="contained" onClick={() => handleDelete(free.id)}>DELETE</Button></span>
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