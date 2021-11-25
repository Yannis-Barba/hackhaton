import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logo from '../assets/ALL_OF_TRACKS.png';
import '../css/Header.css';

function Header() {
  return (
    <div className="header bg-gradient-to-b from-secondary to-primary">
      <Link to="/">
        <div id="logo">
          <img src={Logo} alt="logo" className="h-16 mt-2" />
        </div>
      </Link>
      <Link to="/Profile">
        <div>
          <AccountCircleIcon
            className="hover:text-four"
            sx={{ fontSize: 36, color: '#FAF9F5' }}
          />
        </div>
      </Link>
    </div>
  );
}

export default Header;
