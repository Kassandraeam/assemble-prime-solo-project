import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import MyNav from '../MyNav/MyNav';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function Friends() {
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Friends');

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default Friends;
