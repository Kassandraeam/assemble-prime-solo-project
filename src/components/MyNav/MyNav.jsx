import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

function MyNav() {


  const history = useHistory();

  const user = useSelector((store) => store.user);

  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  return (
    <>
    {user.id && (
          <>
        
        <button onClick={()=> history.goBack()}>Move me back one page</button>

            {/* <LogOutButton className="navLink" /> */}
          </>
        )}
    </>
  );
}

export default MyNav;
