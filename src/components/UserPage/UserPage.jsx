import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
const { DateTime } = require("luxon");

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const now = DateTime.now();
  console.log('now', now);

  const utcNow = DateTime.utc(); //returns User's date in UTC.
  console.log('utc now', utcNow)
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <p>Year: {utcNow.year}</p>
      <p>Month: {utcNow.month}</p>
      <p>Day: {utcNow.day}</p>
      <p>Hour: {utcNow.hour}</p>
      <p>Minute: {utcNow.minute}</p>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

/*
TODO: get user's time
TODO: convert to UTC
TODO: convert to another timezone.
*/