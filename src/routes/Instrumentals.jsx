import React, { useState, useEffect } from 'react';
import '../css/Instrumentals.css';
import axios from 'axios';
import PianoImg from '../assets/PianoImg.png';
import SongTile from '../components/SongTile';

const Instrumentals = () => {
  const [beatmakersList, setBeatmakersList] = useState([]);

  const getBeatmakers = async () => {
    const res = await axios.get('http://localhost:5000/beatmakers');
    setBeatmakersList(res.data);
  };

  useEffect(() => {
    getBeatmakers();
  }, []);
  return (
    <>
      <div>
        <div id="imgContainer">
          <img id="pianoImg" src={PianoImg} alt="Piano" />
        </div>
        <h2 className="text-third text-2xl font-bold flex justify-center my-4">
          NEWS INSTRUMENTAL
        </h2>
      </div>
      <div id="listOfSong" className="">
        <ul className="">
          {beatmakersList.map((beatmaker) => {
            return (
              <li
                key={beatmaker.id}
                className="my-5 pt-2 border-t border-primary"
              >
                <SongTile content={beatmaker.prods[0]} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Instrumentals;
