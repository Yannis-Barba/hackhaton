import React, { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import axios from 'axios';
import Divid from '../components/Divid';
import SongTile from '../components/SongTile';

function Profile() {
  const [profile, setProfile] = useState();

  const getProfile = async () => {
    const res = await axios.get(`http://localhost:5000/profile/1`);
    setProfile(res.data);
    console.log(profile);
  };

  useEffect(() => {
    getProfile();
  }, []);

  if (!profile) {
    return 'Loading ...';
  }
  return (
    <div>
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-third font-bold text-3xl mt-4"> PROFILE </h1>
        <Avatar
          className="mt-10"
          alt="Avatar"
          src={profile.image}
          sx={{ width: 70, height: 70, border: '#5A2C81' }}
        />
        <h2 className="font-semibold text-third mt-3">{profile.pseudo}</h2>
        <p className=" text-sm m-7 text-justify text-third">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <Divid />
      <ul>
        {profile.prods.map((prod) => {
          return (
            <li className="player my-5 pt-2 border-t border-primary">
              <SongTile content={prod} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Profile;
