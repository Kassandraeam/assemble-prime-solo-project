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
        alert('You have successfully updated your availability!')
        dispatch({
            type: 'POST_AVAILABILITY',
            payload: {
                availability
            }
        })
        window.location.reload(false)
    }

    const handleClick = (event) => {
        // eventually have a conditional, if box has been checked, run through this, and then send it.
        let year = 2022; let month = 9; let day = 8; let minute = 0;
        let hour = parseInt(event.target.value);
        const convertedTime = DateTime.local(year, month, day, hour, minute, {zone: userTimeZone}).toUTC();
        let inUsersTimeZone = DateTime.utc(year, month, day, convertedTime.hour, minute).toLocal() // this is giving me the local time from UTC.
        console.warn('inUsersTimeZone', inUsersTimeZone); // 5:00 PM IS 2200 UTC


        console.error('HOUR IN 24 HOUR SYSTEM:', hour);
        console.log(`convert ${convertedTime.hour}:${convertedTime.minute}`)

        if (convertedTime.hour === 0) {
            console.log('this turns it to 24');
            setAvailability([
                ...availability,
                {
                    user: user.id,
                    weekday: event.target.name,
                    localHour: 24,
                    time: 24,
                    inUsersTimeZone: 24
                
                }
            ])
        } else {
            setAvailability([
                ...availability,
                {
                    user: user.id,
                    weekday: event.target.name,
                    localHour: hour,
                    time: convertedTime.hour,
                    inUsersTimeZone: inUsersTimeZone
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
                <div>
                    <div className=''>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">Timezone</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={inputTimeZone}
                            label="Timezone"
                            onChange={handleChange}
                        > 
            
                            <MenuItem value='UTC-12'>GMT-12</MenuItem>
                            <MenuItem value='UTC-11'>GMT-11</MenuItem>
                            <MenuItem value='UTC-10'>GMT-10</MenuItem>
                            <MenuItem value='UTC-9'>GMT-9</MenuItem>
                            <MenuItem value='UTC-8'>GMT-8</MenuItem>
                            <MenuItem value='UTC-7'>GMT-7</MenuItem>
                            <MenuItem value='UTC-6'>GMT-6</MenuItem>
                            <MenuItem value='UTC-5'>GMT-5</MenuItem>
                            <MenuItem value='UTC-4'>GMT-4</MenuItem>
                            <MenuItem value='UTC-3'>GMT-3</MenuItem>
                            <MenuItem value='UTC-2'>GMT-2</MenuItem>
                            <MenuItem value='UTC-1'>GMT-1</MenuItem>
                            <MenuItem value='UTC+0'>GMT+0</MenuItem>
                            <MenuItem value='UTC+1'>GMT+1</MenuItem>
                            <MenuItem value='UTC+2'>GMT+2</MenuItem>
                            <MenuItem value='UTC+3'>GMT+3</MenuItem>
                            <MenuItem value='UTC+4'>GMT+4</MenuItem>
                            <MenuItem value='UTC+5'>GMT+5</MenuItem>
                            <MenuItem value='UTC+6'>GMT+6</MenuItem>
                            <MenuItem value='UTC+7'>GMT+7</MenuItem>
                            <MenuItem value='UTC+8'>GMT+8</MenuItem>
                            <MenuItem value='UTC+9'>GMT+9</MenuItem>
                            <MenuItem value='UTC+10'>GMT+10</MenuItem>
                            <MenuItem value='UTC+11'>GMT+11</MenuItem>
                            <MenuItem value='UTC+12'>GMT+12</MenuItem>
                            <MenuItem value='UTC+13'>GMT+13</MenuItem>
                            <MenuItem value='UTC+14'>GMT+14</MenuItem>
                        </Select>
                        <FormHelperText>Change your timezone here!</FormHelperText>
                        <Button variant="contained" onClick={submitNewZone}>Change Timezone</Button>
                    </FormControl>
                    </div>
                
                </div>
               
            <div>
                </div>
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
                <div className='tuesday'>
                    <p id='tuesdayTitle'>Tuesday</p>
                    <div>
                        <input type="checkbox" name="2" value="1" onClick={handleClick} />
                        <label>1:00AM</label>
                    </div>

                    <div>
                        <input type="checkbox" name="2" value="2" onClick={handleClick} />
                        <label>2:00AM</label>
                    </div>

                    <div>
                        <input type="checkbox" name="2" value="3" onClick={handleClick} />
                        <label>3:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="2" value="4" onClick={handleClick} />
                        <label>4:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="2" value="5" onClick={handleClick} />
                        <label>5:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="2" value="6" onClick={handleClick} />
                        <label>6:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="2" value="7" onClick={handleClick} />
                        <label>7:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="2" value="8" onClick={handleClick} />
                        <label>8:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="2" value="9" onClick={handleClick} />
                        <label>9:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="2" value="10" onClick={handleClick} />
                        <label>10:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="2" value="11" onClick={handleClick} />
                        <label>11:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="2" value="12" onClick={handleClick} />
                        <label>12:00PM</label>
                    </div>
                    {/* Afternoon */}
                    <div>
                        <input type="checkbox" name="2" value="13" onClick={handleClick} />
                        <label>1:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="2" value="14" onClick={handleClick} />
                        <label>2:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="2" value="15" onClick={handleClick} />
                        <label>3:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="2" value="16" onClick={handleClick} />
                        <label>4:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="2" value="17" onClick={handleClick} />
                        <label>5:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="2" value="18" onClick={handleClick} />
                        <label>6:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="2" value="19" onClick={handleClick} />
                        <label>7:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="2" value="20" onClick={handleClick} />
                        <label>8:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="2" value="21" onClick={handleClick} />
                        <label>9:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="2" value="22" onClick={handleClick} />
                        <label>10:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="2" value="23" onClick={handleClick} />
                        <label>11:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="2" value="24" onClick={handleClick} />
                        <label>12:00AM</label>
                    </div>

                    <button onClick={() => handleSubmit()}>Submit Availability</button>
                </div>
                <div className='wednesday'>
                    <p id='wednesdayTitle'>Wednesday</p>
                    <div>
                        <input type="checkbox" name="3" value="1" onClick={handleClick} />
                        <label>1:00AM</label>
                    </div>

                    <div>
                        <input type="checkbox" name="3" value="2" onClick={handleClick} />
                        <label>2:00AM</label>
                    </div>

                    <div>
                        <input type="checkbox" name="3" value="3" onClick={handleClick} />
                        <label>3:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="4" onClick={handleClick} />
                        <label>4:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="5" onClick={handleClick} />
                        <label>5:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="6" onClick={handleClick} />
                        <label>6:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="7" onClick={handleClick} />
                        <label>7:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="8" onClick={handleClick} />
                        <label>8:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="9" onClick={handleClick} />
                        <label>9:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="10" onClick={handleClick} />
                        <label>10:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="11" onClick={handleClick} />
                        <label>11:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="12" onClick={handleClick} />
                        <label>12:00PM</label>
                    </div>
                    {/* Afternoon */}
                    <div>
                        <input type="checkbox" name="3" value="13" onClick={handleClick} />
                        <label>1:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="14" onClick={handleClick} />
                        <label>2:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="15" onClick={handleClick} />
                        <label>3:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="16" onClick={handleClick} />
                        <label>4:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="17" onClick={handleClick} />
                        <label>5:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="18" onClick={handleClick} />
                        <label>6:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="19" onClick={handleClick} />
                        <label>7:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="20" onClick={handleClick} />
                        <label>8:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="21" onClick={handleClick} />
                        <label>9:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="22" onClick={handleClick} />
                        <label>10:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="23" onClick={handleClick} />
                        <label>11:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="24" onClick={handleClick} />
                        <label>12:00AM</label>
                    </div>

                    <button onClick={() => handleSubmit()}>Submit Availability</button>
                </div>
                <div className='wednesday'>
                    <p id='wednesdayTitle'>Wednesday</p>
                    <div>
                        <input type="checkbox" name="3" value="1" onClick={handleClick} />
                        <label>1:00AM</label>
                    </div>

                    <div>
                        <input type="checkbox" name="3" value="2" onClick={handleClick} />
                        <label>2:00AM</label>
                    </div>

                    <div>
                        <input type="checkbox" name="3" value="3" onClick={handleClick} />
                        <label>3:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="4" onClick={handleClick} />
                        <label>4:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="5" onClick={handleClick} />
                        <label>5:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="6" onClick={handleClick} />
                        <label>6:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="7" onClick={handleClick} />
                        <label>7:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="8" onClick={handleClick} />
                        <label>8:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="9" onClick={handleClick} />
                        <label>9:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="10" onClick={handleClick} />
                        <label>10:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="11" onClick={handleClick} />
                        <label>11:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="12" onClick={handleClick} />
                        <label>12:00PM</label>
                    </div>
                    {/* Afternoon */}
                    <div>
                        <input type="checkbox" name="3" value="13" onClick={handleClick} />
                        <label>1:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="14" onClick={handleClick} />
                        <label>2:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="15" onClick={handleClick} />
                        <label>3:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="16" onClick={handleClick} />
                        <label>4:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="17" onClick={handleClick} />
                        <label>5:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="18" onClick={handleClick} />
                        <label>6:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="19" onClick={handleClick} />
                        <label>7:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="20" onClick={handleClick} />
                        <label>8:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="21" onClick={handleClick} />
                        <label>9:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="22" onClick={handleClick} />
                        <label>10:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="23" onClick={handleClick} />
                        <label>11:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="3" value="24" onClick={handleClick} />
                        <label>12:00AM</label>
                    </div>

                    <button onClick={() => handleSubmit()}>Submit Availability</button>
                </div>
                <div className='thursday'>
                    <p id='thursdayTitle'>Thursday</p>
                    <div>
                        <input type="checkbox" name="4" value="1" onClick={handleClick} />
                        <label>1:00AM</label>
                    </div>

                    <div>
                        <input type="checkbox" name="4" value="2" onClick={handleClick} />
                        <label>2:00AM</label>
                    </div>

                    <div>
                        <input type="checkbox" name="4" value="3" onClick={handleClick} />
                        <label>3:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="4" value="4" onClick={handleClick} />
                        <label>4:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="4" value="5" onClick={handleClick} />
                        <label>5:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="4" value="6" onClick={handleClick} />
                        <label>6:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="4" value="7" onClick={handleClick} />
                        <label>7:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="4" value="8" onClick={handleClick} />
                        <label>8:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="4" value="9" onClick={handleClick} />
                        <label>9:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="4" value="10" onClick={handleClick} />
                        <label>10:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="4" value="11" onClick={handleClick} />
                        <label>11:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="4" value="12" onClick={handleClick} />
                        <label>12:00PM</label>
                    </div>
                    {/* Afternoon */}
                    <div>
                        <input type="checkbox" name="4" value="13" onClick={handleClick} />
                        <label>1:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="4" value="14" onClick={handleClick} />
                        <label>2:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="4" value="15" onClick={handleClick} />
                        <label>3:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="4" value="16" onClick={handleClick} />
                        <label>4:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="4" value="17" onClick={handleClick} />
                        <label>5:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="4" value="18" onClick={handleClick} />
                        <label>6:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="4" value="19" onClick={handleClick} />
                        <label>7:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="4" value="20" onClick={handleClick} />
                        <label>8:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="4" value="21" onClick={handleClick} />
                        <label>9:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="4" value="22" onClick={handleClick} />
                        <label>10:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="4" value="23" onClick={handleClick} />
                        <label>11:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="4" value="24" onClick={handleClick} />
                        <label>12:00AM</label>
                    </div>

                    <button onClick={() => handleSubmit()}>Submit Availability</button>
                </div>
                <div className='friday'>
                    <p id='fridayTitle'>Friday</p>
                    <div>
                        <input type="checkbox" name="5" value="1" onClick={handleClick} />
                        <label>1:00AM</label>
                    </div>

                    <div>
                        <input type="checkbox" name="5" value="2" onClick={handleClick} />
                        <label>2:00AM</label>
                    </div>

                    <div>
                        <input type="checkbox" name="5" value="3" onClick={handleClick} />
                        <label>3:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="5" value="4" onClick={handleClick} />
                        <label>4:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="5" value="5" onClick={handleClick} />
                        <label>5:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="5" value="6" onClick={handleClick} />
                        <label>6:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="5" value="7" onClick={handleClick} />
                        <label>7:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="5" value="8" onClick={handleClick} />
                        <label>8:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="5" value="9" onClick={handleClick} />
                        <label>9:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="5" value="10" onClick={handleClick} />
                        <label>10:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="5" value="11" onClick={handleClick} />
                        <label>11:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="5" value="12" onClick={handleClick} />
                        <label>12:00PM</label>
                    </div>
                    {/* Afternoon */}
                    <div>
                        <input type="checkbox" name="5" value="13" onClick={handleClick} />
                        <label>1:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="5" value="14" onClick={handleClick} />
                        <label>2:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="5" value="15" onClick={handleClick} />
                        <label>3:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="5" value="16" onClick={handleClick} />
                        <label>4:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="5" value="17" onClick={handleClick} />
                        <label>5:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="5" value="18" onClick={handleClick} />
                        <label>6:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="5" value="19" onClick={handleClick} />
                        <label>7:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="5" value="20" onClick={handleClick} />
                        <label>8:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="5" value="21" onClick={handleClick} />
                        <label>9:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="5" value="22" onClick={handleClick} />
                        <label>10:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="5" value="23" onClick={handleClick} />
                        <label>11:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="5" value="24" onClick={handleClick} />
                        <label>12:00AM</label>
                    </div>

                    <button onClick={() => handleSubmit()}>Submit Availability</button>
                </div> 
                <div className='saturday'>
                    <p id='saturdayTitle'>Saturday</p>
                    <div>
                        <input type="checkbox" name="6" value="1" onClick={handleClick} />
                        <label>1:00AM</label>
                    </div>

                    <div>
                        <input type="checkbox" name="6" value="2" onClick={handleClick} />
                        <label>2:00AM</label>
                    </div>

                    <div>
                        <input type="checkbox" name="6" value="3" onClick={handleClick} />
                        <label>3:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="6" value="4" onClick={handleClick} />
                        <label>4:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="6" value="5" onClick={handleClick} />
                        <label>5:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="6" value="6" onClick={handleClick} />
                        <label>6:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="6" value="7" onClick={handleClick} />
                        <label>7:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="6" value="8" onClick={handleClick} />
                        <label>8:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="6" value="9" onClick={handleClick} />
                        <label>9:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="6" value="10" onClick={handleClick} />
                        <label>10:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="6" value="11" onClick={handleClick} />
                        <label>11:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="6" value="12" onClick={handleClick} />
                        <label>12:00PM</label>
                    </div>
                    {/* Afternoon */}
                    <div>
                        <input type="checkbox" name="6" value="13" onClick={handleClick} />
                        <label>1:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="6" value="14" onClick={handleClick} />
                        <label>2:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="6" value="15" onClick={handleClick} />
                        <label>3:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="6" value="16" onClick={handleClick} />
                        <label>4:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="6" value="17" onClick={handleClick} />
                        <label>5:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="6" value="18" onClick={handleClick} />
                        <label>6:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="6" value="19" onClick={handleClick} />
                        <label>7:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="6" value="20" onClick={handleClick} />
                        <label>8:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="6" value="21" onClick={handleClick} />
                        <label>9:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="6" value="22" onClick={handleClick} />
                        <label>10:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="6" value="23" onClick={handleClick} />
                        <label>11:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="6" value="24" onClick={handleClick} />
                        <label>12:00AM</label>
                    </div>

                    <button onClick={() => handleSubmit()}>Submit Availability</button>
                </div>
                <div className='sunday'>
                    <p id='sundayTitle'>Sunday</p>
                    <div>
                        <input type="checkbox" name="7" value="1" onClick={handleClick} />
                        <label>1:00AM</label>
                    </div>

                    <div>
                        <input type="checkbox" name="7" value="2" onClick={handleClick} />
                        <label>2:00AM</label>
                    </div>

                    <div>
                        <input type="checkbox" name="7" value="3" onClick={handleClick} />
                        <label>3:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="7" value="4" onClick={handleClick} />
                        <label>4:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="7" value="5" onClick={handleClick} />
                        <label>5:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="7" value="6" onClick={handleClick} />
                        <label>6:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="7" value="7" onClick={handleClick} />
                        <label>7:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="7" value="8" onClick={handleClick} />
                        <label>8:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="7" value="9" onClick={handleClick} />
                        <label>9:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="7" value="10" onClick={handleClick} />
                        <label>10:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="7" value="11" onClick={handleClick} />
                        <label>11:00AM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="7" value="12" onClick={handleClick} />
                        <label>12:00PM</label>
                    </div>
                    {/* Afternoon */}
                    <div>
                        <input type="checkbox" name="7" value="13" onClick={handleClick} />
                        <label>1:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="7" value="14" onClick={handleClick} />
                        <label>2:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="7" value="15" onClick={handleClick} />
                        <label>3:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="7" value="16" onClick={handleClick} />
                        <label>4:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="7" value="17" onClick={handleClick} />
                        <label>5:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="7" value="18" onClick={handleClick} />
                        <label>6:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="7" value="19" onClick={handleClick} />
                        <label>7:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="7" value="20" onClick={handleClick} />
                        <label>8:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="7" value="21" onClick={handleClick} />
                        <label>9:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="7" value="22" onClick={handleClick} />
                        <label>10:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="7" value="23" onClick={handleClick} />
                        <label>11:00PM</label>
                    </div>
                    <div>
                        <input type="checkbox" name="7" value="24" onClick={handleClick} />
                        <label>12:00AM</label>
                    </div>

                    <button onClick={() => handleSubmit()}>Submit Availability</button>
                </div>

               
            <p>Notes: </p>
            <p>Clear checked checkmarks upon Submit availability</p>
            <p>Get rid of Dashboard view from register</p>
            </>
        )
    }

    export default Luxon;
