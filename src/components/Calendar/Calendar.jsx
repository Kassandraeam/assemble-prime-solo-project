import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import "./styles.css";
import { useHistory } from 'react-router-dom';
import Grid from '../Grid/Grid';
const { DateTime } = require("luxon");


function Calendar() {

    const user = useSelector((store) => store.user);
    let [timezone, setTimezone] = useState('UTC+0');

    const now = DateTime.now();
    console.log('now', now);

    const captureTimeZone = (event) => {
        console.log('captured')
        setTimezone(event.target.value)
    }

    const convertToUTC5 = DateTime.now().setZone(timezone);
    console.log('Convert to UTC+2 ', convertToUTC5);


    const utcNow = DateTime.utc(); //returns User's date in UTC.
    console.log('utc now', utcNow)

    const history = useHistory();

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
        
            <p>Calendar Homepage</p>
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
            <p>My Time: {now.hour}:{now.minute}</p>
            <p>My Time in UTC: {utcNow.hour}:{utcNow.minute}</p>
            <p>What time is it in timezone {timezone}? {convertToUTC5.hour}:{convertToUTC5.minute}</p>


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

