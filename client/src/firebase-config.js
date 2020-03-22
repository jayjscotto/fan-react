import firebase from 'firebase/app';
import 'firebase/storage';
require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "freeagentnow.firebaseapp.com",
  databaseURL: "https://freeagentnow.firebaseio.com",
  projectId: "freeagentnow",
  storageBucket: "freeagentnow.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
  storage, firebase as default
}
