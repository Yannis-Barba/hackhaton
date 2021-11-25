/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import firebase from 'firebase';
import 'firebase/storage';

function Upload() {
  const db = firebase.firestore();
  const [fileUrl, setFileUrl] = React.useState(null);
  const [musicUrl, setMusicUrl] = React.useState(null);
  const [disable, setDisable] = React.useState(true);

  const filechanged = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref('Image');
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };
  const musicchanged = async (e) => {
    const music = e.target.files[0];
    const storagemRef = firebase.storage().ref('Music');
    const musicRef = storagemRef.child(music.name);
    await musicRef.put(music);
    setMusicUrl(await musicRef.getDownloadURL());
  };

  React.useEffect(() => {
    if (musicUrl !== null) {
      setDisable(false);
      alert('click on submit');
      console.log(disable);
    }
  }, [musicUrl]);

  // RECUPERE LES INFOS DE LA BASE DE DONNEES

  React.useEffect(() => {
    const docRef = db.collection('Users').doc('jckI5UVLkha1hn2mTLt5');
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log('Document data:', doc.data());
        } else {
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      }, []);
  });

  // *********************************************

  // eslint-disable-next-line no-unused-vars
  const submit = (e) => {
    e.preventDefault();
    if (musicUrl != null && fileUrl !== null) {
      const musicname = e.target.musicname.value;
      if (!musicname) {
        return;
      }
      firebase.collection('Music').doc(musicname).set({
        name: musicname,
        music: musicUrl,
        image: fileUrl,
      });
      alert('Music added');
    }
  };

  return (
    <div>
      <form>
        <label>images</label>
        <input type="file" name="img" onChange={filechanged} required />
        <label>Music files</label>
        <input type="file" name="music" onChange={musicchanged} required />
        <input type="text" name="musicname" placeholder="Music name" required />
        <button type="button"> Submit </button>
      </form>
    </div>
  );
}

export default Upload;
