import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBmKezLMKIKyXYKXAkvEmXqbUzqHBApgx8",
    authDomain: "drive-db468.firebaseapp.com",
    projectId: "drive-db468",
    storageBucket: "drive-db468.appspot.com",
    messagingSenderId: "1014918541129",
    appId: "1:1014918541129:web:c77b59d409c7f1b2aa3498"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()
  const db = firebaseApp.firestore()

  export { auth, provider, db, storage}