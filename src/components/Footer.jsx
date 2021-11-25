import React from 'react';
import { NavLink } from 'react-router-dom';
import MicIcon from '@mui/icons-material/Mic';
import HomeIcon from '@mui/icons-material/Home';
import PianoIcon from '@mui/icons-material/Piano';

function Footer({ height }) {
  return (
    <div id="footer" style={{ height }}>
      <ul className="flex flex-row justify-between bg-gradient-to-b from-secondary to-primary h-15 py-4 px-20">
        <li>
          <NavLink activeClassName="active" exact to="/">
            <MicIcon sx={{ fontSize: 40, color: '#FAF9F5' }} />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/favorites">
            <HomeIcon sx={{ fontSize: 40, color: '#FAF9F5' }} />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/shopping-list">
            <PianoIcon sx={{ fontSize: 40, color: '#FAF9F5' }} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
