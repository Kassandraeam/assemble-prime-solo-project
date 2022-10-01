import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";



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
