/* disable-eslint */

import React from 'react';
import PianoIcon from '@mui/icons-material/Piano';
import MicIcon from '@mui/icons-material/Mic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function SongTile({ content }) {
  return (
    <div
      id="songTile"
      className="text-white flex flex-row items-center gap-4 w-11/12"
    >
      <div id="image">
        <img src="./song.gif" alt={content.name} className="w-20 h-20" />
      </div>
      <div id="mainContent" className="flex flex-col items-center">
        <h2> {content.name} </h2>
        <p className="text-xs">
          par <MicIcon /> : {content.authors.beatmaker} <PianoIcon /> :
          {content.authors.singer}
        </p>
        <audio controls>
          <source src="/" />
          <track kind="captions" />
        </audio>
      </div>
      <div id="interaction">
        <FavoriteIcon /> <PlayArrowIcon />
      </div>
    </div>
  );
}

export default SongTile;
