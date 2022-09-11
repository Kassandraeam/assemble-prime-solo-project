import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const { DateTime } = require("luxon");
import "./Luxon.css"
import { useDispatch } from 'react-redux';
import CalendarGrid from '../CalendarGrid/CalendarGrid';

function Luxon() {

    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    useEffect(() => {

    }, []);


    const now = DateTime.now();
    // console.log('now', now) // Object that shows local time, 1300. Hour: 13.

    const yourTimeInUTC = DateTime.utc()
    // console.log('yourtimeinUTC',yourTimeInUTC) // Shows time in UTC, 13 => 18

    let yourTimeZone = now.toString();
    // console.log('yourTimeZone', yourTimeZone); //Shows 2022 0911 1300 -5:00

    let keepOffset = DateTime.fromISO(yourTimeZone, { setZone: true });
    // console.log('keepOffset', keepOffset) // object that gives year, month, day, hour (local) and minute

    let timezone = keepOffset.zoneName;
    // console.log('timezone', timezone) // gives UTC-5

    let testSettingZone = DateTime.fromISO(yourTimeZone, { zone: 'UTC+2' }) //I am saying the zone is UTC+2, so now we're saying we're in Paris:UTC+2.
    // ? Now I need that in UTC, so I want a return of 22 for hour.
    console.log('testSettingZone', testSettingZone) // this is correctly returning hour: 0.
    console.log('testSettingZone.hour:', testSettingZone.hour, 'which is the time in Paris RN')
    // * I now want to see it converted to UTC. So I want to see 22.

    let local = DateTime.local();
    console.log('local', local)
    // let rezoned = local.setZone("UTC+2");
    console.log('rezoned', rezoned)

    let inputZone = '';
    let rezoned = local.setZone(inputZone);

    const [availability, setAvailability] = useState([])


    const handleSubmit = () => {
        console.log('Clicked Submit');

        dispatch({
            type: 'POST_AVAILABILITY',
            payload: {
                availability
            }
        })
    }

    const handleClick = (event) => {
        // eventually have a conditional, if box has been checked, run through this, and then send it.
        let year = 2022; let month = 9; let day = 8; let minute = 0;

        let hour = parseInt(event.target.value);
        // ? So if I live in Paris, and I choose 7am, 0500 should be sent to the DB.
        const convertedTime = DateTime.local(year, month, day, hour, minute).toUTC();

        console.log('convert', convertedTime)
        console.log('HOUR IN 24 HOUR SYSTEM:', hour);



        if (convertedTime.hour === 0) {
            console.log('this turns it to 24');
            setAvailability([
                ...availability,
                {
                    user: user.id,
                    weekday: event.target.name,
                    time: 24
                }
            ])
        } else {
            setAvailability([
                ...availability,
                {
                    user: user.id,
                    weekday: event.target.name,
                    time: convertedTime.hour
                }
            ])
        }
    }

    return (
        <>
            <h1>Luxon Component</h1>
            <h1>Current Time: {now.hour}:{now.minute}:{now.second}</h1>
            <h1>Your Current UTC Time Zone: {timezone}</h1>
            <h1>Your time converted to UTC: {yourTimeInUTC.hour}:{yourTimeInUTC.minute}:{yourTimeInUTC.second}</h1>

            <div className='monday'>
                <p id='mondayTitle'>Monday</p>
                <div>
                    <input type="checkbox" name="1" value="1" onClick={handleClick} />
                    <label>1:00AM</label>
                </div>

                <div>
                    <input type="checkbox" name="1" value="2" onClick={handleClick} />
                    <label>2:00AM</label>
                </div>

                <div>
                    <input type="checkbox" name="1" value="3" onClick={handleClick} />
                    <label>3:00AM</label>
                </div>
                <div>
                    <input type="checkbox" name="1" value="4" onClick={handleClick} />
                    <label>4:00AM</label>
                </div>
                <div>
                    <input type="checkbox" name="1" value="5" onClick={handleClick} />
                    <label>5:00AM</label>
                </div>
                <div>
                    <input type="checkbox" name="1" value="6" onClick={handleClick} />
                    <label>6:00AM</label>
                </div>
                <div>
                    <input type="checkbox" name="1" value="7" onClick={handleClick} />
                    <label>7:00AM</label>
                </div>
                <div>
                    <input type="checkbox" name="1" value="8" onClick={handleClick} />
                    <label>8:00AM</label>
                </div>
                <div>
                    <input type="checkbox" name="1" value="9" onClick={handleClick} />
                    <label>9:00AM</label>
                </div>
                <div>
                    <input type="checkbox" name="1" value="10" onClick={handleClick} />
                    <label>10:00AM</label>
                </div>
                <div>
                    <input type="checkbox" name="1" value="11" onClick={handleClick} />
                    <label>11:00AM</label>
                </div>
                <div>
                    <input type="checkbox" name="1" value="12" onClick={handleClick} />
                    <label>12:00PM</label>
                </div>
                {/* Afternoon */}
                <div>
                    <input type="checkbox" name="1" value="13" onClick={handleClick} />
                    <label>1:00PM</label>
                </div>
                <div>
                    <input type="checkbox" name="1" value="14" onClick={handleClick} />
                    <label>2:00PM</label>
                </div>
                <div>
                    <input type="checkbox" name="1" value="15" onClick={handleClick} />
                    <label>3:00PM</label>
                </div>
                <div>
                    <input type="checkbox" name="1" value="16" onClick={handleClick} />
                    <label>4:00PM</label>
                </div>
                <div>
                    <input type="checkbox" name="1" value="17" onClick={handleClick} />
                    <label>5:00PM</label>
                </div>
                <div>
                    <input type="checkbox" name="1" value="18" onClick={handleClick} />
                    <label>6:00PM</label>
                </div>
                <div>
                    <input type="checkbox" name="1" value="19" onClick={handleClick} />
                    <label>7:00PM</label>
                </div>
                <div>
                    <input type="checkbox" name="1" value="20" onClick={handleClick} />
                    <label>8:00PM</label>
                </div>
                <div>
                    <input type="checkbox" name="1" value="21" onClick={handleClick} />
                    <label>9:00PM</label>
                </div>
                <div>
                    <input type="checkbox" name="1" value="22" onClick={handleClick} />
                    <label>10:00PM</label>
                </div>
                <div>
                    <input type="checkbox" name="1" value="23" onClick={handleClick} />
                    <label>11:00PM</label>
                </div>
                <div>
                    <input type="checkbox" name="1" value="24" onClick={handleClick} />
                    <label>12:00AM</label>
                </div>

                <button onClick={() => handleSubmit()}>Submit Availability</button>
            </div>

            <CalendarGrid />
        </>
    )
}

export default Luxon;
