import React from 'react';
import PianoImg from '../assets/PianoImg.jpeg';

const Instrumentals = () => {
  return (
    <div>
      <div className="w-full">
        <img src={PianoImg} alt="Home" className="absolute opacity-60" />
      </div>
      <div className="grid overflow-hidden grid-cols-3 grid-rows-3 gap-3.5 w-auto relative text-third font-bold text-3xl">
        <h1 className="box row-start-3 col-start-1 col-end-4 text-center">
          INSTRUMENTALS
        </h1>
      </div>
    </div>
  );
};

export default Instrumentals;
