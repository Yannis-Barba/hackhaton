import React from 'react';
import { NavLink } from 'react-router-dom';
import MicIcon from '@mui/icons-material/Mic';
import HomeIcon from '@mui/icons-material/Home';
import PianoIcon from '@mui/icons-material/Piano';

function Footer({ height }) {
  return (
    <div id="footer" style={{ height }}>
      <ul className="flex flex-row justify-between bg-gradient-to-b from-primary to-secondary h-15 py-4 px-20 lg:justify-evenly">
        <li>
          <NavLink activeClassName="active" exact to="/Records">
            <MicIcon sx={{ fontSize: 40, color: '#FAF9F5' }} />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/">
            <HomeIcon sx={{ fontSize: 40, color: '#FAF9F5' }} />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/Instrumentals">
            <PianoIcon sx={{ fontSize: 40, color: '#FAF9F5' }} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
