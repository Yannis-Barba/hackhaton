import React from 'react';
import imageHome from '../assets/StudioA.png';
import '../css/Home.css';

const Home = () => {
  return (
    <div>
      <div id="imgContainer">
        <img src={imageHome} alt="Home" id="homeImg" />
      </div>
    </div>
  );
};

export default Home;
