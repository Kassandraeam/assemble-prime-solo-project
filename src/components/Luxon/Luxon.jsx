import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const { DateTime } = require("luxon");
import "./Luxon.css"
import { useDispatch } from 'react-redux';
import CalendarGrid from '../CalendarGrid/CalendarGrid';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Luxon() {

    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    console.log(user.timezone);
    const userTimeZone = user.timezone;
    console.log(userTimeZone);
    
    useEffect(() => {
    setInitialUserTimeZone(user.timezone);

    }, []);

    const [availability, setAvailability] = useState([])
    const [inputTimeZone, setInputTimeZone] = useState(userTimeZone);
    const [initialUserTimeZone, setInitialUserTimeZone] = useState(user.timezone)



    const handleSubmit = () => {
        console.log('Clicked Submit');
        dispatch({
            type: 'POST_AVAILABILITY',
            payload: {
                availability
            }
        })
    }

    const handleClick = (event) => {
        // eventually have a conditional, if box has been checked, run through this, and then send it.
        let year = 2022; let month = 9; let day = 8; let minute = 0;
        let hour = parseInt(event.target.value);
        const convertedTime = DateTime.local(year, month, day, hour, minute, {zone: userTimeZone}).toUTC();

        console.error('HOUR IN 24 HOUR SYSTEM:', hour);
        console.log(`convert ${convertedTime.hour}:${convertedTime.minute}`)

        if (convertedTime.hour === 0) {
            console.log('this turns it to 24');
            setAvailability([
                ...availability,
                {
                    user: user.id,
                    weekday: event.target.name,
                    time: 24
                }
            ])
        } else {
            setAvailability([
                ...availability,
                {
                    user: user.id,
                    weekday: event.target.name,
                    time: convertedTime.hour
                }
            ])
        }
    }

        const handleChange = (event) => {
            setInputTimeZone(event.target.value);
        };

        const submitNewZone = () => {
            console.log('This will dispatch to a put saga, then a reducer')
            console.log('PAYLOAD:',inputTimeZone); // this is what I'll dispatch to the PUT.
            dispatch({
                type: 'UPDATE_TIMEZONE',
                payload: {
                    inputTimeZone,
                    user: user.id
                }
            })
            window.location.reload(false);
        }
        return (
            <>
                <h1>Your time zone: {userTimeZone}</h1>
                <div>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">Timezone</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={inputTimeZone}
                            label="Timezone"
                            onChange={handleChange}
                        >

                            <MenuItem value='UTC+0'>UTC+0</MenuItem>
                            <MenuItem value='UTC+1'>UTC+1</MenuItem>
                            <MenuItem value='UTC+2'>UTC+2</MenuItem>
                        </Select>
                        <FormHelperText>Change your timezone here!</FormHelperText>
                        <Button variant="contained" onClick={submitNewZone}>Change Timezone</Button>
                    </FormControl>
                    
                
                </div>
                {/* <h1>Current Time: {now.hour}:{now.minute}:{now.second}</h1>
                <h1>Your Current UTC Time Zone: {userTimeZone}</h1>
                <h1>Your time converted to UTC: {yourTimeInUTC.hour}:{yourTimeInUTC.minute}:{yourTimeInUTC.second}</h1> */}

                <div className='monday'>
                    <p id='mondayTitle'>Monday</p>
                    <div>
                        <input type="checkbox" name="1" value="1" onClick={handleClick} />
                        <label>1:00AM</label>
                    </div>

                    <div>
                        <input type="checkbox" name="1" value="2" onClick={handleClick} />
                        <label>2:00AM</label>
                    </div>

                    <div>
                        <input type="checkbox" name="1" value="3" onClick={handleClick} />
                        <label>3:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="1" value="4" onClick={handleClick} />
                        <label>4:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="1" value="5" onClick={handleClick} />
                        <label>5:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="1" value="6" onClick={handleClick} />
                        <label>6:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="1" value="7" onClick={handleClick} />
                        <label>7:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="1" value="8" onClick={handleClick} />
                        <label>8:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="1" value="9" onClick={handleClick} />
                        <label>9:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="1" value="10" onClick={handleClick} />
                        <label>10:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="1" value="11" onClick={handleClick} />
                        <label>11:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="1" value="12" onClick={handleClick} />
                        <label>12:00PM</label>
                    </div>
                    {/* Afternoon */}
                    <div>
                        <input type="checkbox" name="1" value="13" onClick={handleClick} />
                        <label>1:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="1" value="14" onClick={handleClick} />
                        <label>2:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="1" value="15" onClick={handleClick} />
                        <label>3:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="1" value="16" onClick={handleClick} />
                        <label>4:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="1" value="17" onClick={handleClick} />
                        <label>5:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="1" value="18" onClick={handleClick} />
                        <label>6:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="1" value="19" onClick={handleClick} />
                        <label>7:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="1" value="20" onClick={handleClick} />
                        <label>8:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="1" value="21" onClick={handleClick} />
                        <label>9:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="1" value="22" onClick={handleClick} />
                        <label>10:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="1" value="23" onClick={handleClick} />
                        <label>11:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="1" value="24" onClick={handleClick} />
                        <label>12:00AM</label>
                    </div>

                    <button onClick={() => handleSubmit()}>Submit Availability</button>
                </div>
               
    
      {/* <CalendarGrid /> */}
            </>
        )
    }

    export default Luxon;
