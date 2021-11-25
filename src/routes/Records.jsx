import React from 'react';
import '../css/Records.css';
import Micro from '../assets/Micro.png';

function Records() {
  return (
    <div>
      <div id="imgContainer">
        <img id="micImg" src={Micro} alt="Home" />
      </div>
    </div>
  );
}

export default Records;
