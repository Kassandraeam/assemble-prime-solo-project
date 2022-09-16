import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function testingReducer(props) {

    const store = useSelector((store) => store);
    const availableTimesReducer = useSelector((store) => store.multipleUserFreeTimeReducer)
    const [heading, setHeading] = useState('multipleUserFreeTimeReducer TEST');

    const reducer = useSelector((store) => store.reducerTemplate)
    const dispatch = useDispatch();
    const history = useHistory();

    const [id, setID] = useState();

    useEffect(() => {

    }, [])

    const map = () => {
     {availableTimesReducer.map(ReducerItem => (
            console.error('REDUCER ITEM IN TEMPLATECOMPONENT.JSX FILE:',ReducerItem)
          ))}
    }
    map();

    return (
        <>
        <div>
            <h2>{heading}</h2>
        </div>
        {availableTimesReducer.map(ReducerItem => (
          <div className='map' key={ReducerItem.id}>
            <p>{ReducerItem.id}</p>
            <p>{ReducerItem.username}</p>
            <p>{ReducerItem.idOfDay}</p>
            <p>{ReducerItem.day}</p>
            <p>{ReducerItem.availableTimes}</p>
          </div>
        ))}
        </>
    );
}

export default testingReducer;