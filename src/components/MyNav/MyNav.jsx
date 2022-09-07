import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';

function MyNav() {

  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory();
  const user = useSelector((store) => store.user);
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  return (
    <>

      {user.id && (
        <>
          <button onClick={() => history.goBack()}>Move me back one page</button>
          {/* <LogOutButton className="navLink" /> */}
        </>
      )}

      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Dashboard
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem> */}
          <MenuItem className='navLink' onClick={() => history.push('/user')}>Profile</MenuItem>
          <MenuItem className='navLink' onClick={() => history.push('/friends')}>Friends</MenuItem>
          <MenuItem className='navLink' onClick={() => history.push('/calendar')}>Calendar</MenuItem>
          {/* <LogOutButton className="navLink" /> */}
          <MenuItem onClick={() => dispatch({ type: 'LOGOUT' })}>LOG OUT</MenuItem>
        </Menu>
      </div>

    </>
  );
}

export default MyNav;
