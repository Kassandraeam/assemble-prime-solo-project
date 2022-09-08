import React, { useState } from 'react';
import { useSelector } from 'react-redux';
const { DateTime } = require("luxon");


function Luxon() {

    const now = DateTime.now(); //Current time, need hour and minute.
    console.log('now:',now);
    const yourTimeInUTC = DateTime.utc()//Current time in UTC
    console.log('yourtimeInUTC',yourTimeInUTC)
    let yourTimeZone = now.toString();
    console.log('yourTimeInUTCtoString',yourTimeInUTC)
    let keepOffset = DateTime.fromISO(yourTimeZone, { setZone: true });
    console.log('KeepOffSet',keepOffset)
    let timezone = keepOffset.zoneName;
    console.log('timezone',timezone)

    console.log(typeof(now.hour))
    // console.log(now);
    // console.log(timezone);
    // console.log(yourTimeInUTC)
    // const test = DateTime.local(2022, 3, 12, 5, { zone: "utc" })
    // So if I put 0700 in there, it should spit out 1300.
    const test = DateTime.local({ zone: "utc" })//this converts whatever comes before the first curly to UTC. So right now, it's just taking the current time.
    // So if I say I'm free on Monday at 0700, it should be converted to equal 1300 UTC
    // convert 0700 using my timezone, to equal 1300.
    // console.log('test', test);
    //year //Month // day // hour // minute 
    const testTwo = DateTime.local(2022, 9, 7, 22, 32, { zone: "utc" })

    // console.log('TEST TWO!!!!!', testTwo)
    let [changeTimeZone, setTimezone] = useState('UTC+0');
    const captureTimeZone = (event) => {
        setTimezone(event.target.value)
    }
    const convertToUTC = DateTime.now().setZone(changeTimeZone);
    // constant = the time now, set to the timezone chosen.
    const help = DateTime.now(); // I need to change the system zone to the zone I choose. That system zone wait no.
    //as long as it's the system zone it should convert it to utc. All I need to do is change the time that's going into it.
    console.log('HELP', help)

    // console.log('Convert to UTC ', convertToUTC);

    const utc = DateTime.utc() // whatever is appended to utc, gets turned to utc. This gives an object. This is also taking my time zone into consideration.
    console.log('utc', utc);
    console.log('utc.toString()',utc.toString())


    // getting somewhere here.
    DateTime.fromISO("2016-05-25");
    console.log('datetime from iso',DateTime.fromISO("09:24:15"))
    let inputTime = DateTime.fromISO("10:30")
    console.log('inputTime', inputTime)
    
    
    
    let dateTime = DateTime.local();
    console.log("Configured defaultZoneName", dateTime.toISO());

    dateTime = dateTime.set({
        hour: 4
    });


    console.log("format", dateTime.toFormat("LLL dd, yyyy, h:mm a"));
    console.log("preset", dateTime.toLocaleString(DateTime.DATETIME_MED));
    console.log("UTC plz", DateTime.utc(dateTime.toLocaleString(DateTime.DATETIME_MED)));

    console.log('dateTime', dateTime);
    
     /* If I give it a time of 0500, it needs to return 1000. */
     const maybe = DateTime.local(5,0, { zone: "utc" })
     console.log('MAYBE', maybe);
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
            <p>Problem:
                UTC-5,
                Input: 5:00AM
            </p>
            <p>
                Expected Output: 10:00AM
            </p>
            {/* I need to give a time
                and then it needs to convert what that time would be
                using my time zone.
                so if I give it 0700
                I need to convert that to UTC.
            */}

            {/* If I give it a time of 0500, it needs to return 1000. */}
        </>
    )
}

export default Luxon;

