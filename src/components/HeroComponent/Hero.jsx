import './Hero.css';
import { FaDatabase, FaAsterisk, FaAccusoft, FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import 'animate.css';

const Hero = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const errors = useSelector(store => store.errors);
    const dispatch = useDispatch();

    const login = (event) => {
        event.preventDefault();

        if (username && password) {
            dispatch({
                type: 'LOGIN',
                payload: {
                    username: username,
                    password: password,
                },
            });
        } else {
            dispatch({ type: 'LOGIN_INPUT_ERROR' });
        }
    }; // end login
    return (
        <>
            <div className='hero'>
                <div className='container'>
                    <div class='content'>
                <form className="form-layout" onSubmit={login}>

                    <h2 className='flex justify-center'>Login</h2>
                    {errors.loginMessage && (
                        <h3 className="alert" role="alert">
                            {errors.loginMessage}
                        </h3>
                    )}

                    <div>
                        <label htmlFor="username">
                            Username:
                            <input
                                type="text"
                                name="username"
                                required
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </label>
                    </div>

                    <div>
                        <label htmlFor="password">
                            Password:
                            <input
                                type="password"
                                name="password"
                                required
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </label>
                    </div>

                    <div>
                        <input className="btn" type="submit" name="submit" value="Log In" />
                    </div>
                    <div className='form-footer'>

                    </div>

                </form>
                </div>
                </div>
            </div>
        </>
    )
}

export default Hero;

{/* <>
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadlow-lg'>
    <div className='px-2 flex justify-between items-center w-full h-full'>
    </div>
    </div>
    <form className="formPanel" onSubmit={login}>
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Log In" />
      </div>
    </form>
    </> */}