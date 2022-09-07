import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import "./styles.css";
import { useHistory } from 'react-router-dom';
import "./Calendar.css";
import { useDispatch } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TestComponent from '../TestComponent/TestComponent';
import MyNav from '../MyNav/MyNav';

function Calendar() {

    

    const history = useHistory();
    const dispatch = useDispatch();

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

    return (
        <>
            <MyNav/>
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

