import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import "./styles.css";
import { useHistory } from 'react-router-dom';
import "./Calendar.css";
import { useDispatch } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import TestComponent from '../TestComponent/TestComponent';
import MyNav from '../MyNav/MyNav';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Calendar() {



    const history = useHistory();
    const dispatch = useDispatch();

    const [day, setDay] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        // dispatch({

        // })
    }, [])

    const user = useSelector((store) => store.user);

    const saveAvailability = () => {
        console.log('save availability')
        //eventually this will need to dispatch
        //what does it dispatch?
        //
    }

    const daysAndTime = () => {
        console.log('clicked');
        console.log(day);
        console.log(time);
    }

    const handleDay = (event) => {
        setDay(event.target.value);
    };

    const handleTime = (event) => {
        setTime(event.target.value);
    }

    return (
        <>
  
            {/* <input 
            value = {day}
            placeholder='Days: Monday-Sunday'
            onChange={(event) => setDay(event.target.value)}
            /> */}


            <p id='calendarHomepage'>Calendar Homepage</p>
            <h2>Welcome, {user.username}!</h2>
            <TestComponent />

           <span> <Box sx={{ maxWidth: 180 }} display="flex" justifyContent="space-between">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Day</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={day}
                        label="Day"
                        onChange={handleDay}>
                        <MenuItem value='1'>Monday</MenuItem>
                        <MenuItem value='2'>Tuesday</MenuItem>
                        <MenuItem value='3'>Wednesday</MenuItem>
                        <MenuItem value='4'>Thursday</MenuItem>
                        <MenuItem value='5'>Friday</MenuItem>
                        <MenuItem value='6'>Saturday</MenuItem>
                        <MenuItem value='7'>Sunday</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box sx={{ maxWidth: 180 }} display="flex" justifyContent="space-between">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Time</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={time}
                        label="Time"
                        onChange={handleTime}>
                        <MenuItem value='1'>1:00AM</MenuItem>
                        <MenuItem value='2'>2:00AM</MenuItem>
                        <MenuItem value='3'>3:00AM</MenuItem>
                        <MenuItem value='4'>4:00AM</MenuItem>
                        <MenuItem value='5'>5:00AM</MenuItem>
                        <MenuItem value='6'>6:00AM</MenuItem>
                        <MenuItem value='7'>7:00AM</MenuItem>
                        <MenuItem value='8'>8:00AM</MenuItem>
                        <MenuItem value='9'>9:00AM</MenuItem>
                        <MenuItem value='10'>10:00AM</MenuItem>
                        <MenuItem value='11'>11:00AM</MenuItem>
                        <MenuItem value='12'>12:00PM</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            </span>
            <Button variant="contained" onClick={daysAndTime}>Submit</Button>

            {/* <MyNav /> */}


            {/* <div className="app">
                <Grid
                    grid={grid}
                    handleGridSize={handleGridSize}
                    inputCells={inputCells}
                    inputRows={inputRows}
                    setCells={setCells}
                    setRows={setRows}
                />
            </div> */}
        </>
    )
}

export default Calendar;

