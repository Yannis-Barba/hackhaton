import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logo from '../assets/ALL_OF_TRACKS.png';
import '../css/Header.css';

function Header() {
  return (
    <div className="header bg-gradient-to-b from-secondary to-primary">
      <div id="logo">
        <img src={Logo} alt="logo" className="h-16" />
      </div>
      <div>
        <AccountCircleIcon sx={{ fontSize: 36, color: '#FAF9F5' }} />
      </div>
    </div>
  );
}

export default Header;
