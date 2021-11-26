/*eslint-disable */
import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { Button } from '@material-ui/core';
import { auth } from './index';

//   function signInWithGoogle() {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   }

// const user = firebase.auth().currentUser;
// if (user !== null) {
//   const displayName = user.displayName;
//   const photoURL = user.photoURL;
//   const uid = user.uid;
//

function SignIn() {
  const [user, setuser] = useState(null);
  const provider = new firebase.auth.GoogleAuthProvider();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        const displayName = user.displayName;
        firebase.auth().currentUser.updateProfile({});
        setuser(uid);
        setuser(displayName);
        setuser(photoURL);
        console.log(user);
      } else {
        setuser(null);
      }
    });
  }, []);

  function signInWithGooglePopup() {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {})
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }

  return (
    <div className="flex items-center ">
      <p className="text-white font-bold">{user}</p>
      {user ? (
        <Button
          onClick={() => {
            firebase
              .auth()
              .signOut()
              .then(() => {
                // Sign-out successful.
              })
              .catch((error) => {
                // An error happened.
              });
          }}
        >
          <span className="text-white font-bold">SignOut</span>
        </Button>
      ) : (
        <Button
          onClick={() => {
            signInWithGooglePopup();
          }}
        >
          <span className="text-white font-bold">Signin</span>
          <p className="text-white text-xs font-bold">
            {/* Welcome {users.displayName} */}
          </p>
        </Button>
      )}

      {/* <img className="rounded-full w-10 m-2" src={user.photoURL} alt="logo" /> */}
    </div>
  );
}
export default SignIn;
