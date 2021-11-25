import React from 'react';
import '../css/Instrumentals.css';
import PianoImg from '../assets/PianoImg.png';

const Instrumentals = () => {
  return (
    <div>
      <div id="imgContainer">
        <img id="pianoImg" src={PianoImg} alt="Piano" />
      </div>
    </div>
  );
};

export default Instrumentals;
