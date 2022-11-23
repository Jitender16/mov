import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZezWV_q80NqX0J1Bm3km_0Z5LtbER-rU",
  authDomain: "movie-library-49aa7.firebaseapp.com",
  projectId: "movie-library-49aa7",
  storageBucket: "movie-library-49aa7.appspot.com",
  messagingSenderId: "1092744035407",
  appId: "1:1092744035407:web:01f3e753806bc13e1cbe3a"
};

// Initialize Firebase

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};