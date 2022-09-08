import React from 'react';
import { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import MyNav from '../MyNav/MyNav';
import { useDispatch } from 'react-redux';
import Luxon from '../Luxon/Luxon';
import { useState } from 'react';
const { DateTime } = require("luxon");


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch({
      type: 'FETCH_AVAILABILITY'
    })
  }, []);

  return (
    <div className="container">

      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <Luxon /> 
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;