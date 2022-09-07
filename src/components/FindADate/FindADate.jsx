import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import MyNav from '../MyNav/MyNav';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom';


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function FindADate(props) {
//   const history = useHistory();

  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  return (
    <div>
        <MyNav/>
      <h2>Find a date</h2>
    </div>
  );
}

export default FindADate;
