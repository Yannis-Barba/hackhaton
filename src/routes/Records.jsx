import React, { useState, useEffect } from 'react';
import '../css/Records.css';
import axios from 'axios';
import Micro from '../assets/Micro.png';
import SongTile from '../components/SongTile';

function Records() {
  const [singersList, setSingersList] = useState([]);

  const getSingers = async () => {
    const res = await axios.get('http://localhost:5000/singers');
    setSingersList(res.data);
    console.log(singersList);
  };

  useEffect(() => {
    getSingers();
  }, []);
  return (
    <>
      <div>
        <div id="imgContainer">
          <img id="micImg" src={Micro} alt="Home" />
        </div>
        <h2 className="text-third text-2xl font-bold flex justify-center my-4">
          NEWS INSTRUMENTAL
        </h2>
      </div>
      <div id="listOfSong" className="">
        <ul className="">
          {singersList.map((singer) => {
            return (
              <li key={singer.id} className="my-5 pt-2 border-t border-primary">
                <SongTile content={singer.songs[0]} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Records;
