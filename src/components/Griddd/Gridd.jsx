import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Griddd.css'

function TemplateFunction(props) {

    const store = useSelector((store) => store);
    const [heading, setHeading] = useState('Functional Component');

    const reducer = useSelector((store) => store.reducerTemplate)
    const dispatch = useDispatch();
    const history = useHistory();

    const [id, setID] = useState();
    useEffect(() => {
        dispatch({
            type: 'This_Should_Match_Between_The_Component_And_Saga',
            payload: id
        })
    }, [])


    return (
<div>
   <h3>Add selected task to the schedule</h3>

<div className="schedule__container">
    <div className="days__container">
        <div className="corner"></div>
        <div className="day">Sunday</div>
        <div className="day">Monday</div>
        <div className="day">Tuesday</div>
        <div className="day">Wednesday</div>
        <div className="day">Thursday</div>
        <div className="day">Friday</div>
        <div className="day">Saturday</div>
    </div>
    <div className="part__day">
        <div className="time">8am 12pm</div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
    </div>
    <div className="part__day">
        <div className="time">12pm 2pm</div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
    </div>
    <div className="part__day">
        <div className="time">2pm 6pm</div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
    </div>
    <div className="part__day">
        <div className="time">6pm 9pm</div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
    </div>
    <div className="part__day">
        <div className="time">9pm 11pm</div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
        <div className="task"></div>
    </div>
</div>
</div>
    );
}

export default TemplateFunction;


