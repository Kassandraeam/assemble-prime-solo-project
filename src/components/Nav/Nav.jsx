import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';


function Nav() {


    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <div className="nav">
            <Link to="/home">
                <h2 className="nav-title text-8xl">Assemble</h2>
            </Link>

            <div>
                {/* If no user is logged in, show these links */}
                {!user.id && (
                    // If there's no user, show login/registration links
                    <Link className="navLink" to="/login">
                        Login / Register
                    </Link>
                )}

                {/* If a user is logged in, show these links */}
                {user.id && (
                    <>

                        <div className='navBar'>
                            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                <Link className="nav-item" to="/user">
                                    Profile
                                </Link>

                                <Link className="nav-item" to="/calendar">
                                    Calendar
                                </Link>

                                <Link className='nav-item' to="/friends">
                                    Friends
                                </Link>

                                <Link className="nav-item" to="/info">
                                    Info Page
                                </Link>
                                <button className='nav-item' onClick={() => dispatch({ type: 'LOGOUT' })}>
                                    Log Out
                                </button>

                                {/* <LogOutButton className="nav-item" /> */}
                            </ul>

                        </div>

                    </>
                )}

            </div>
        </div>
    );
}



export default Nav;