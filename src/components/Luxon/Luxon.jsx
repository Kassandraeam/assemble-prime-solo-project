import React, { useState } from 'react';
import { useSelector } from 'react-redux';
const { DateTime } = require("luxon");


function Luxon() {

    const now = DateTime.now(); //Current time, need hour and minute.
    const yourTimeInUTC = DateTime.utc()//Current time in UTC
    let yourTimeZone = now.toString();
    let keepOffset = DateTime.fromISO(yourTimeZone, { setZone: true });
    let timezone = keepOffset.zoneName;
    console.log(now);
    console.log(timezone);
    console.log(yourTimeInUTC)
    // const test = DateTime.local(2022, 3, 12, 5, { zone: "utc" })
    // So if I put 0700 in there, it should spit out 1300.
    const test = DateTime.local({ zone: "utc" })//this converts whatever comes before the first curly to UTC. So right now, it's just taking the current time.
    // So if I say I'm free on Monday at 0700, it should be converted to equal 1300 UTC
    // convert 0700 using my timezone, to equal 1300.
    console.log('test', test);
                                //year //Month // day // hour // minute 
    const testTwo = DateTime.local(2022, 9, 7, 22, 32, { zone: "utc" })

    console.log('TEST TWO!!!!!',testTwo)
    let [changeTimeZone, setTimezone] = useState('UTC+0');
    const captureTimeZone = (event) => {
        setTimezone(event.target.value)
    }
    const convertToUTC = DateTime.now().setZone(changeTimeZone);
    console.log('Convert to UTC ', convertToUTC);
    return (
        <>
            <h1>Luxon Component</h1>
            <h1>Current Time: {now.hour}:{now.minute}:{now.second}</h1>
            <h1>Your UTC Time Zone: {timezone}</h1>
            <h1>Your time converted to UTC: {yourTimeInUTC.hour}:{yourTimeInUTC.minute}:{yourTimeInUTC.second}</h1>
            {/*  */}
            <p>Select a time:</p>
            <select name="selectList" id="selectList" onChange={captureTimeZone}>
                <option value="UTC-11">UTC-11:00</option>
                <option value="UTC-10">UTC-10:00</option>
                <option value="UTC-9">UTC-9:00</option>
                <option value="UTC-8">UTC-8:00</option>
                <option value="UTC-7">UTC-7:00</option>
                <option value="UTC-6">UTC-6:00</option>
                <option value="UTC-5">UTC-5:00</option>
                <option value="UTC-4">UTC-4:00</option>
                <option value="UTC-3">UTC-3:00</option>
                <option value="UTC-3">UTC-2:30</option>
                <option value="UTC-2">UTC-2:00</option>
                <option value="UTC-1">UTC-1:00</option>
                <option value="UTC+0">UTC+0:00</option>

                <option value="UTC+1">UTC+1:00</option>
                <option value="UTC+2">UTC+2:00</option>
                <option value="UTC+3">UTC+3:00</option>
                <option value="UTC+4">UTC+4:00</option>
                <option value="UTC+5">UTC+5:00</option>
                <option value="UTC+6">UTC+6:00</option>
                <option value="UTC+7">UTC+7:00</option>
                <option value="UTC+8">UTC+8:00</option>
                <option value="UTC+9">UTC+9:00</option>
                <option value="UTC+10">UTC+10:00</option>
                <option value="UTC+11">UTC+11:00</option>
            </select>
            <p>The time in this  timezone, {changeTimeZone}, is {convertToUTC.hour}:{convertToUTC.minute}</p>
        </>
    )
}

export default Luxon;