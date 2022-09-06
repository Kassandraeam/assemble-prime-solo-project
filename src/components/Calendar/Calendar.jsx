import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import "./styles.css";
import { useHistory } from 'react-router-dom';
import Grid from '../Grid/Grid';
import "./Calendar.css";
import { useDispatch } from 'react-redux';
const { DateTime } = require("luxon");
import LogOutButton from '../LogOutButton/LogOutButton';
import MyNav from '../MyNav/MyNav';


function Calendar() {

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'POST_TIME_IN_UTC',
            payload: keepOffsetZoneName
        })
    }, [])

    const user = useSelector((store) => store.user);

    let [timezone, setTimezone] = useState('UTC+0');

    const now = DateTime.now(); //Current time, need hour and minute.
    console.log('now', now);

    const captureTimeZone = (event) => {
        setTimezone(event.target.value)
    }

    const convertToUTC = DateTime.now().setZone(timezone);
    console.log('Convert to UTC ', convertToUTC);

    let specifyZone = DateTime.now();
    console.log('specifyZone', specifyZone);

    let zone = specifyZone.zoneName;
    console.log('zone', zone);


    const utcNow = DateTime.utc(); //returns User's date in UTC.
    // console.log('utc now', utcNow)

    // const history = useHistory();

    console.log(now.toString());

    /*
    ! HERE !
    */
    let yourTimeZone = now.toString();
    let keepOffset = DateTime.fromISO(yourTimeZone, { setZone: true });

    let keepOffsetZoneName = keepOffset.zoneName;
    console.log('keepOffsetZoneName: ',keepOffsetZoneName)

    console.log('now.zoneName',now.zoneName);

    const gridBase = {
        cells: 7,
        rows: 24
    };

    const [grid, setGrid] = useState(gridBase);
    const [inputCells, setCells] = useState(grid.cells);
    const [inputRows, setRows] = useState(grid.rows);

    const handleGridSize = () => {
        const res = {
            cells: parseInt(inputCells),
            rows: parseInt(inputRows)
        };
        setGrid({ ...res });
    };

    return (
        <>

            <button className='navLink' onClick={() => history.push('/user')}>Profile</button>
            <button className='navLink' onClick={() => history.push('/friends')}>Friends</button>
            <LogOutButton className="navLink" />

            <p id='calendarHomepage'>Calendar Homepage</p>
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
            <h2>Your zone name: {zone}</h2>
            <h2>Offset Zone Name: {keepOffsetZoneName}</h2>
            <h2>My Time, using now: {now.hour}:{now.minute}</h2>
            {/* store my current time into db. */}
            <h2>My Time in UTC, using utcNow : {utcNow.hour}:{utcNow.minute}</h2>
            <h2>What time is it in timezone {timezone}? {convertToUTC.hour}:{convertToUTC.minute}</h2>



            <div className="app">
                <Grid
                    grid={grid}
                    handleGridSize={handleGridSize}
                    inputCells={inputCells}
                    inputRows={inputRows}
                    setCells={setCells}
                    setRows={setRows}
                />
            </div>
        </>
    )
}

export default Calendar;


/*


  return (

  );
}

*/

