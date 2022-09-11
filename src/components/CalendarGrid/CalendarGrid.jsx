import './CalendarGrid.css'
import React from 'react';
import { useState } from 'react';

function CalendarGrid() {

    const [isActive, setIsActive] = useState(false);

    const handleClick = (e) => {
        const item = e.target;
        if (item.classList.contains('selected')) {
          item.classList.remove('selected');
        } else {
          item.classList.add('selected');
        }
      };

    return(
        <>
        <p>Calendar Grid</p>

        <button style={{
          backgroundColor: isActive ? 'salmon' : '',
          color: isActive ? 'white' : '',
        }} 
        onClick={handleClick} className='square'></button>

        <button style={{
          backgroundColor: isActive ? 'salmon' : '',
          color: isActive ? 'white' : '',
        }} 
        onClick={handleClick} className='square'></button>

        </>
    )
}

export default CalendarGrid;