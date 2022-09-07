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

    const handleChange = (event) => {
        setDay(event.target.value);
      };

    return (
        <>
            <MyNav />

            {/* <input 
            value = {day}
            placeholder='Days: Monday-Sunday'
            onChange={(event) => setDay(event.target.value)}
            /> */}


            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Day</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={day}
                        label="Day"
                        onChange={handleChange}
                    >
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

            <input
                value={time}
                placeholder='Time: 100-2400'
                onChange={(event) => setTime(event.target.value)}
            />

            <Button variant="contained" onClick={daysAndTime}>Submit</Button>

            <p id='calendarHomepage'>Calendar Homepage</p>
            <h2>Welcome, {user.username}!</h2>
            <TestComponent />
            <button onClick={() => saveAvailability()}>Save Availability</button>



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

