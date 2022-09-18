import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

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

  const otherUsers = () => {
    console.log('otherUsers');
    history.push('/friends');
  }

  return (
    <>
      <div className='nav' style={{
              
                    }}>
        
        <Button
        variant="contained"
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

          <MenuItem color="secondary"className='navLink' onClick={() => history.push('/user')}><AccountCircleRoundedIcon color="primary"/>Profile</MenuItem>
          <MenuItem className='navLink' onClick={otherUsers}> <GroupRoundedIcon color="primary"/>Other Users</MenuItem> 
          <MenuItem className='navLink' onClick={() => history.push('/calendar')}><CalendarTodayRoundedIcon color="primary"/>Calendar</MenuItem>
          <MenuItem onClick={() => dispatch({ type: 'LOGOUT' })}><ExitToAppRoundedIcon color="primary"/>LOG OUT</MenuItem>
        </Menu>
      </div>

    </>
  );
}

export default MyNav;
