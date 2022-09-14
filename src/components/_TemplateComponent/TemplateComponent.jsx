import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function TemplateFunction(props) {

    const store = useSelector((store) => store);
    const [heading, setHeading] = useState('Functional Component');
        // TODO: STEP 13 - Now we want to be able to see the information we got from the Database on the DOM, which means rendering it on our DOM. 
        /* Where are we storing that information right now?
        ? Where are we storing that information currently? 
        * In the reducer we just made, which is in the store.
        */
        // TODO: STEP 14 - Access that reducer by using the useSelector.
    const reducer = useSelector((store) => store.reducerTemplate)
        // ! Note that the reducer name is appended to store, indicating that that's the storage we want to access.
    const dispatch = useDispatch();
    const history = useHistory();

    const [id, setID] = useState();
    useEffect(() => {
        dispatch({
        // TODO: STEP 1 - We created id in this component and now want to use it to GET information from the database. Create a type that will trigger a Saga and send the id that we created as the payload. Go to _template.saga.js.
            type: 'This_Should_Match_Between_The_Component_And_Saga',
            payload: id
        })
    }, [])


    return (
        <div>
            <h2>{heading}</h2>
        {/* // TODO: Step 15 - Now that we have that information, we can display it however we want. */ }
        {/* //* Pretend that our SQL query asked the database for a table that had the columns: id, username, and password. We would now be able to render that to the DOM by appending those column names to the const reducer. */}
        <p>{reducer.id}</p>
        <p>{reducer.username}</p>
        <p>{reducer.password}</p>
        </div>
    );
}

export default TemplateFunction;
