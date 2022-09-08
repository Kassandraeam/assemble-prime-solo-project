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

/*
() => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      includeTimes={[
        setHours(setMinutes(new Date(), 0), 17),
        setHours(setMinutes(new Date(), 30), 18),
        setHours(setMinutes(new Date(), 30), 19),
        setHours(setMinutes(new Date(), 30), 17),
      ]}
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
};
*/