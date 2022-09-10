import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const { DateTime } = require("luxon");
import "./Luxon.css"
import { useDispatch } from 'react-redux';



function Luxon() {

    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    // console.log(user);

    useEffect(() => {

    }, []);

    let year = 2022;
    let month = 9;
    let day = 8;
    let hour = time;
    let minute = 0;
    const maybe = DateTime.local(year, month, day, hour, minute).toUTC();


    const now = DateTime.now();
    const yourTimeInUTC = DateTime.utc()//Current time in UTC
    let yourTimeZone = now.toString();
    let keepOffset = DateTime.fromISO(yourTimeZone, { setZone: true });
    let timezone = keepOffset.zoneName;

    let [changeTimeZone, setTimezone] = useState('UTC+0');
    const captureTimeZone = (event) => {
        setTimezone(event.target.value)
    }
    const convertToUTC = DateTime.now().setZone(changeTimeZone);

    // ! RIGHT HERE
    let [weekday, setWeekday] = useState()
    let [time, setTime] = useState();

    // const [availability, setAvailability] = useState({ user: user.id, weekday: 0, time: 0 })
    const [availability, setAvailability] = useState([])


    const captureAvailability = (event) => {
        console.log('captured');
        // setWeekday(parseInt(event.target.value))
        // setTime(parseInt(event.target.name))
        setAvailability({
            ...availability,
            user: user.id,
            weekday: parseInt(weekday),
            time: parseInt(time)
        })
        // This should also insert the time given into hour of the maybe variable.
    }

    const handleSubmit = () => {
        console.log('Clicked Submit');
        dispatch({
            type: 'POST_AVAILABILITY',
            payload: {
                // user: user.id,
                // weekday: availability.weekday,
                // time: availability.time,
                // user: user.id,
                availability,
            }
        })


    }

    return (
        <>
            <h1>Luxon Component</h1>
            <h1>Current Time: {now.hour}:{now.minute}:{now.second}</h1>
            <h1>Your UTC Time Zone: {timezone}</h1>
            <h1>Your time converted to UTC: {yourTimeInUTC.hour}:{yourTimeInUTC.minute}:{yourTimeInUTC.second}</h1>

{/* 
Monday 
name = 1 (monday)
value = 1 (0100)
*/}
<div className='monday'>
    <p id='mondayTitle'>Monday</p>
            <div>
                <input type="checkbox" name="1" value="1" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>1:00AM</label>
            </div>

            <div>
                <input type="checkbox" name="1" value="2" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>2:00AM</label>
            </div>

            <div>
                <input type="checkbox" name="1" value="3" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>3:00AM</label>
            </div>
            <div>
                <input type="checkbox" name="1" value="4" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>4:00AM</label>
            </div>
            <div>
                <input type="checkbox" name="1" value="5" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>5:00AM</label>
            </div>
            <div>
                <input type="checkbox" name="1" value="6" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>6:00AM</label>
            </div>
            <div>
                <input type="checkbox" name="1" value="7" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>7:00AM</label>
            </div>
            <div>
                <input type="checkbox" name="1" value="8" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>8:00AM</label>
            </div>
            <div>
                <input type="checkbox" name="1" value="9" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>9:00AM</label>
            </div>
            <div>
                <input type="checkbox" name="1" value="10" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>10:00AM</label>
            </div>
            <div>
                <input type="checkbox" name="1" value="11" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>11:00AM</label>
            </div>
            <div>
                <input type="checkbox" name="1" value="12" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>12:00PM</label>
            </div>
{/* Afternoon */}
            <div>
                <input type="checkbox" name="1" value="13" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>1:00PM</label>
            </div>
            <div>
                <input type="checkbox" name="1" value="14" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>2:00PM</label>
            </div>
            <div>
                <input type="checkbox" name="1" value="15" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>3:00PM</label>
            </div>
            <div>
                <input type="checkbox" name="1" value="16" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>4:00PM</label>
            </div>
            <div>
                <input type="checkbox" name="1" value="17" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>5:00PM</label>
            </div>
            <div>
                <input type="checkbox" name="1" value="18" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>6:00PM</label>
            </div>
            <div>
                <input type="checkbox" name="1" value="19" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>7:00PM</label>
            </div>
            <div>
                <input type="checkbox" name="1" value="20" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>8:00PM</label>
            </div>
            <div>
                <input type="checkbox" name="1" value="21" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>9:00PM</label>
            </div>
            <div>
                <input type="checkbox" name="1" value="22" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>10:00PM</label>
            </div>
            <div>
                <input type="checkbox" name="1" value="23" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>11:00PM</label>
            </div>
            <div>
                <input type="checkbox" name="1" value="24" onClick={(event) => setAvailability([...availability, { user: user.id, weekday: event.target.name, time: event.target.value }])} />
                <label>12:00AM</label>
            </div>

            <button onClick={() => handleSubmit()}>Submit Availability</button>
</div>
        </>
    )
}

export default Luxon;
