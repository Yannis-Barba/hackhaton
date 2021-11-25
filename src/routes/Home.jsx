import React from 'react';
import imageHome from '../assets/imageHome.jpeg';

const Home = () => {
  return (
    <div>
      <div className="w-full">
        <img src={imageHome} alt="Home" className="absolute opacity-60" />
      </div>
      <div className="grid overflow-hidden grid-cols-3 grid-rows-3 gap-12 relative text-third font-bold text-3xl">
        <h1 className="box row-start-1 row-span-0 col-start-1 col-end-3 ml-1">
          ONE BEAT
        </h1>
        <h1 className="box row-start-2 row-end-2 col-start-1 col-end-4 text-center">
          ONE VOICE
        </h1>
        <h1 className="box row-start-3 col-start-2 col-end-4 pl-28 mb-1">
          A SONG
        </h1>
      </div>
    </div>
  );
};

export default Home;
