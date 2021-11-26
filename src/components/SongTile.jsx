/* disable-eslint */

import React from 'react';
import { Link } from 'react-router-dom';
import PianoIcon from '@mui/icons-material/Piano';
import MicIcon from '@mui/icons-material/Mic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function SongTile({ content }) {
  console.log(content);
  return (
    <div
      id="songTile"
      className="grid overflow-hidden grid-cols-3 grid-rows-1 w-auto mx-4"
    >
      <div className="box row-start-1 row-end-4 col-start-1 col-end-1">
        <img src={content.image} alt={content.name} className="w-20 h-20" />
      </div>

      <div
        id="mainContent"
        className="box row-start-1 row-end-2 col-start-2 col-end-4"
      >
        <h3 className="text-third font-semibold"> {content.name} </h3>
      </div>

      <div className="box row-start-2 row-end-2 col-start-2 col-end-4">
        <p className="text-sm text-third">
          by :
          {content.authors[1] ? (
            <>
              <MicIcon sx={{ color: '#5A2C81' }} />
              <Link to={`/Profile${content.authors[0].id}`}>
                <span className="text-xs font-bold mx-1">
                  {content.authors[0].pseudo}
                </span>
              </Link>
            </>
          ) : (
            ''
          )}
          <PianoIcon sx={{ color: '#5A2C81' }} />:{' '}
          <Link
            to={`Profile/${
              content.authors[1] ? content.authors[1].id : content.authors[0].id
            }`}
          >
            <span className="text-xs font-bold mx-1">
              {' '}
              {content.authors[1]
                ? content.authors[1].pseudo
                : content.authors[0].pseudo}
            </span>
          </Link>
        </p>
      </div>

      <div className="box row-start-3 row-end-3 col-start-2 col-end-4">
        <audio controls className=" w-60 h-10 mt-2">
          <source src={content.sources} />
          <track kind="captions" />
        </audio>
      </div>

      <div
        id="interaction"
        className="box row-start-1 row-end-4 col-start-4 flex flex-col"
      >
        <p className="text-xs font-bold mx-1 text-third">
          <FavoriteIcon sx={{ color: '#FAF9F5', fontSize: 21 }} />{' '}
          {content.likes}
        </p>
        <p className="text-xs font-bold mx-1 text-third">
          <PlayArrowIcon sx={{ color: '#FAF9F5', fontSize: 25 }} />
          {content.views}
        </p>
      </div>
    </div>
  );
}

export default SongTile;
