/*eslint-disable */
import React from 'react';
import firebase from 'firebase/app';
import { Button } from '@material-ui/core';
import { auth } from './index';

function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div className="flex  w-full h-64 absolute">
      <Button onClick={signInWithGoogle} >
        Sign In With Google
      </Button>
    </div>
  );
}

export default SignIn;
