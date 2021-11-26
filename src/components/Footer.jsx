import React from 'react';
import { NavLink } from 'react-router-dom';
import MicIcon from '@mui/icons-material/Mic';
import HomeIcon from '@mui/icons-material/Home';
import PianoIcon from '@mui/icons-material/Piano';
import '../css/Footer.css';

function Footer() {
  return (
    <div id="footer">
      <ul className="flex flex-row justify-between bg-gradient-to-b from-primary to-secondary h-15 py-4 px-20 lg:justify-evenly">
        <li>
          <NavLink exact to="/Records">
            <MicIcon
              className="hover:text-four"
              sx={{ fontSize: 40, color: '#FAF9F5' }}
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <HomeIcon
              className="hover:text-four"
              sx={{ fontSize: 40, color: '#FAF9F5' }}
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/Instrumentals">
            <PianoIcon
              className="hover:text-four"
              sx={{ fontSize: 40, color: '#FAF9F5' }}
            />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
