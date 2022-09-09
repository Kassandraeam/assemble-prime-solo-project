import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const { DateTime } = require("luxon");
import "./Luxon.css"
import { useDispatch } from 'react-redux';



function Luxon() {

    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const availabilityReducer = useSelector((store) => store.postAvailabilityReducer)
    console.log('availability reducer: ',availabilityReducer);
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

    console.log('availability reducer: ',availabilityReducer);

    return (
        <>
            <h1>Luxon Component</h1>
            <h1>Current Time: {now.hour}:{now.minute}:{now.second}</h1>
            <h1>Your UTC Time Zone: {timezone}</h1>
            <h1>Your time converted to UTC: {yourTimeInUTC.hour}:{yourTimeInUTC.minute}:{yourTimeInUTC.second}</h1>

            {/* names:
1: monday
2: tuesday
3: wednesday
4: thursday
5: friday
6: saturday
7: sunday
*/}

            <div>
                <input type="checkbox" name="1" value="1" onClick={(event) => setAvailability([ ...availability, {weekday: event.target.value, time: event.target.name} ])}/>
                <label >1:00AM</label>
            </div>

            <div>
                <input type="checkbox" name="1" value="2" onClick={(event) => setAvailability([ ...availability, {weekday: event.target.value, time: event.target.name} ])} />
                <label >2:00AM</label>
            </div>

            {/* TEST */}
            {/* <div>
                <input type="checkbox" name="1" value="1" onClick={(event) => setAvailability({ ...availability, time: event.target.name })} />
                <label >1:00AM</label>
            </div>

            <div>
                <input type="checkbox" name="1" value="2" onClick={(event) => setAvailability({ ...availability, time: event.target.name })} />
                <label >2:00AM</label>
            </div> */}
            {/* 
            <div>
                <input type="checkbox" name="1" value="2" onChange={captureAvailability} />
                <label >2:00AM</label>
            </div>

            <div>
                <input type="checkbox" name="1" value="3" onChange={captureAvailability} />
                <label >3:00AM</label>
            </div> */}

            <button onClick={() => handleSubmit()}>Submit Availability</button>

            {/* <p>The time in this  timezone, {changeTimeZone}, is {convertToUTC.hour}:{convertToUTC.minute}</p>
            <p>My Time: {hour}:{minute}</p>
            <p>UTC time: {maybe.hour}:{maybe.minute}</p> */}
        </>
    )
}

export default Luxon;
