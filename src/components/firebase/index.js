import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCfWc7iv9B-Q_dd6ELKdiphBe7GOHQlkmA',
  authDomain: 'all-of-tracks.firebaseapp.com',
  projectId: 'all-of-tracks',
  storageBucket: 'all-of-tracks.appspot.com',
  messagingSenderId: '172447455682',
  appId: '1:172447455682:web:424dac7cfc43847b7b5e5b',
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
