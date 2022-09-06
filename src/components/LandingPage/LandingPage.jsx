import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Assemble');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  const onRegistration = (event) => {
    history.push('/registration')
  }

  return (
    <>
    <h2>{heading}</h2>

    <div className="container">

      <center>

        <button className="btn btn_sizeSm" onClick={onLogin}>
          Login
        </button>
        <button className = "btn btn_sizeSm" onClick={onRegistration}>
          Register
        </button>
        {/* <RegisterForm /> */}

      </center>
    </div>
    </>
  );
}

export default LandingPage;
