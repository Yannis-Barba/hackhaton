import React from 'react';
import imageHome from '../assets/StudioA.png';
import '../css/Home.css';

const Home = () => {
  return (
    <div>
      <div id="imgContainer">
        <img src={imageHome} alt="Home" id="homeImg" />
      </div>
      {/* <div className="grid overflow-hidden grid-cols-3 grid-rows-3 gap-8 relative text-third font-bold text-3xl lg:flex lg:flex-col lg:items-center lg:content-center lg:ml-0">
        <h1 className="box row-start-1 row-span-0 col-start-1 col-end-3 ml-1">
          ONE BEAT
        </h1>
        <h1 className="box row-start-2 row-end-2 col-start-1 col-end-4 text-center lg:flex lg:flex-col lg:items-center">
          ONE VOICE
        </h1>
        <h1 className="box row-start-3 col-start-2 col-end-4 pl-28 mb-1 lg:flex lg:flex-col lg:items-center lg:text-center lg:pl-0 lg:mb-0">
          A SONG
        </h1>
      </div> */}
    </div>
  );
};

export default Home;
