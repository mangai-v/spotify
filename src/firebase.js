import firebase from 'firebase'
//Authentication
import 'firebase/auth'
//firestore database
import 'firebase/firestore'
//real time database
import 'firebase/database'
//storage
import 'firebase/storage'
//function
import 'firebase/functions'



const firebaseConfig = {
  apiKey: "AIzaSyBUDz4DB8O-9N1muTsgXz6C5JGIPhWOxDI",
  authDomain: "spotify-clone-ed2b9.firebaseapp.com",
  projectId: "spotify-clone-ed2b9",
  storageBucket: "spotify-clone-ed2b9.appspot.com",
  messagingSenderId: "903376166130",
  appId: "1:903376166130:web:245365aa8263ee9e75046b"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

export default firebase