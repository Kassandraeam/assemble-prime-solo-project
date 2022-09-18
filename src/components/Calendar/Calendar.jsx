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
import Luxon from '../Luxon/Luxon';
import Griddd from '../Griddd/Gridd.jsx'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

// import TailwindCalendar from '../TailwindCalendar/TailwindCalendar'



function Calendar() {


    const rows: GridRowsProp = [
        { id: 1,  col1:  '100' },
        { id: 2,  col1:  '200' },
        { id: 3,  col1:  '300' },
        { id: 4,  col1:  '400' },
        { id: 5,  col1:  '500' },
        { id: 6,  col1:  '600' },
        { id: 7,  col1:  '700' },
        { id: 8,  col1:  '800' },
        { id: 9,  col1:  '900' },
        { id: 10, col1: '1000' },
        { id: 11, col1: '1100' },
        { id: 12, col1: '1200' },
        { id: 13, col1: '1300' },
        { id: 14, col1: '1400' },
        { id: 15, col1: '1500' },
        { id: 16, col1: '1600' },
        { id: 17, col1: '1700' },
        { id: 18, col1: '1800' },
        { id: 19, col1: '1900' },
        { id: 20, col1: '2000' },
        { id: 21, col1: '2100' },
        { id: 22, col1: '2200' },
        { id: 23, col1: '2300' },
        { id: 24, col1: '2400' },
    ];

    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Hours',      width:    175 },
        { field: 'col2', headerName: 'Monday',     width:    175 },
        { field: 'col3', headerName: 'Tuesday',    width:    175 },
        { field: 'col4', headerName: 'Wednesday',  width:    175 },
        { field: 'col5', headerName: 'Thursday',   width:    175 },
        { field: 'col6', headerName: 'Friday',     width:    175 },
        { field: 'col7', headerName: 'Saturday',   width:    175 },
        { field: 'col8', headerName: 'Sunday',     width:    175 },
    ];

    const history = useHistory();
    const dispatch = useDispatch();

    const [day, setDay] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        // dispatch({

        // })
    }, [])

    const user = useSelector((store) => store.user);


    return (
        <>
        <div className='border-spacing-2'>
            <p className='text-5xl'>Assemble</p>
            <p className='text-2xl'>Choose the times you're available</p>
        </div>
            <div className='flex justify-center'>
            <div style={{ height: 1000, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} />
            </div>
            </div>
            <Luxon />
            {/* <TailwindCalendar></TailwindCalendar> */}
        </>
    )
}

export default Calendar;

