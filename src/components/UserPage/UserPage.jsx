import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const { DateTime } = require("luxon");

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  let [timezone, setTimezone] = useState('UTC+0');

  const now = DateTime.now();
  console.log('now', now);

  const utcNow = DateTime.utc(); //returns User's date in UTC.
  console.log('utc now', utcNow)

  const captureTimeZone = (event) => {
    console.log('captured')
    setTimezone(event.target.value)
  }
  
  const convertToUTC5 = DateTime.now().setZone(timezone);
  console.log('Convert to UTC+2 ',convertToUTC5);

  return (
    <div className="container">

      <p>Select a timezone to convert to</p>
       <select name="selectList" id="selectList" onChange={captureTimeZone}>

        <option value="UTC-11">GMT-11:00</option>
        <option value="UTC-10">GMT-10:00</option>
        <option value="UTC-9">GMT-9:00</option>
        <option value="UTC-8">GMT-8:00</option>
        <option value="UTC-7">GMT-7:00</option>
        <option value="UTC-6">GMT-6:00</option>
        <option value="UTC-5">GMT-5:00</option>
        <option value="UTC-4">GMT-4:00</option>
        <option value="UTC-3">GMT-3:00</option>
        <option value="UTC-3">GMT-2:30</option>
        <option value="UTC-2">GMT-2:00</option>
        <option value="UTC-1">GMT-1:00</option>
        
        <option value="UTC+0">GMT+0:00</option>
        <option value="UTC+1">GMT+1:00</option>
        <option value="UTC+2">GMT+2:00</option>
        <option value="UTC+3">GMT+3:00</option>
        <option value="UTC+4">GMT+4:00</option>
        <option value="UTC+4:30">GMT+4:30</option>
        <option value="UTC+5">GMT+5:00</option>
        <option value="UTC+5:30">GMT+5:30</option>
        <option value="UTC+5:45">GMT+5:45</option>
        <option value="UTC+6">GMT+6:00</option>
        <option value="UTC+6">GMT+6:30</option>
        <option value="UTC+7">GMT+7:00</option>
        <option value="UTC+8">GMT+8:00</option>
        <option value="UTC+9">GMT+9:00</option>
        <option value="UTC+9:30">GMT+9:30</option>
        <option value="UTC+10">GMT+10:00</option>
        <option value="UTC+11">GMT+11:00</option>
        <option value="UTC+12">GMT+12:00</option>
        <option value="UTC+13">GMT+13:00</option>

      </select>

      <h2>Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p> */}
      {/* <p>Year: {utcNow.year}</p> */}
      {/* <p>Month: {utcNow.month}</p> */}
      {/* <p>Day: {utcNow.day}</p> */}
      <p>My Time: {now.hour}:{now.minute}</p>
      <p>My Time in UTC: {utcNow.hour}:{utcNow.minute}</p>
      {/* <p>Time zone I want to convert to: {timezone}</p> */}

      <p>What time is it in timezone {timezone}? {convertToUTC5.hour}:{convertToUTC5.minute}</p>
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