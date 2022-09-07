import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import "./styles.css";
import { useHistory } from 'react-router-dom';
import Grid from '../Grid/Grid';
import "./Calendar.css";
import { useDispatch } from 'react-redux';
const { DateTime } = require("luxon");
import LogOutButton from '../LogOutButton/LogOutButton';


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

    return (
        <>

            <button className='navLink' onClick={() => history.push('/user')}>Profile</button>
            <button className='navLink' onClick={() => history.push('/friends')}>Friends</button>
            <LogOutButton className="navLink" />

            <p id='calendarHomepage'>Calendar Homepage</p>
            <h2>Welcome, {user.username}!</h2>




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