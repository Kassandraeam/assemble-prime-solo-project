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


    return (
        <>
            <p id='calendarHomepage'>Calendar Homepage</p>
            <h2>Welcome, {user.username}!</h2>
            <Luxon/>
        </>
    )
}

export default Calendar;

