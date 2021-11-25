import React from 'react';
import { Avatar } from '@mui/material';
import Divid from '../components/Divid';

function Profile() {
  return (
    <div>
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-third font-bold text-3xl mt-4"> PROFILE </h1>
        <Avatar
          className="mt-10"
          alt="Avatar"
          src="./assets/yb.png"
          sx={{ width: 70, height: 70, border: '#5A2C81' }}
        />
        <h3 className="font-semibold text-third mt-3"> Yannis Legénie </h3>
        <p className=" text-sm m-7 text-justify text-third">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <Divid />
    </div>
  );
}

export default Profile;
