import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DatePicker from "react-datepicker";
import Button from '@mui/material/Button';


import "react-datepicker/dist/react-datepicker.css";

function TestComponent() {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <>
        <div className='calendar'>
            <DatePicker showTimeSelect
                timeFormat="p" 
                dateFormat="Pp"
                selected={startDate} 
                onChange={(date) => setStartDate(date)} 
            />
        </div>
        </>
    )
}

export default TestComponent;

// const DateTime = luxon.DateTime;
// const d = DateTime.fromISO('2019-07-09T18:45', { zone: 'America/Chicago' });
// (d.toISO());
// (d.toUTC().toISO());