import '../css/Home.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SongTile from '../components/SongTile';
import imageHome from '../assets/StudioA.png';

const Home = () => {
  const [songsList, setSongsList] = useState([]);

  const getSongList = async () => {
    const res = await axios.get('http://localhost:5000/songs');
    console.log(res);
    setSongsList(res.data);
    console.log(songsList);
  };

  useEffect(() => {
    getSongList();
  }, []);

  if (songsList === []) {
    return 'Loading';
  }

  return (
    <div>
      <div className="lg:h-80">
        <img src={imageHome} alt="Home" id="homeImg" />
      </div>
      <div id="listOfSong" className="">
        <ul className="">
          <h2 className="text-third text-2xl font-bold flex justify-center my-4">
            CURRENT TRENDS
          </h2>
          {songsList.map((song) => {
            return (
              <li
                key={song.id}
                className="player my-5 lg:mx-36 pt-2 border-t border-primary"
              >
                <SongTile content={song} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
