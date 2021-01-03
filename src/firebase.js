// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAaJE04xNArhiuVk7tkRAT6MQtBanhzJVw",
    authDomain: "facebook-clone-f20cc.firebaseapp.com",
    databaseURL: "https://facebook-clone-f20cc.firebaseio.com",
    projectId: "facebook-clone-f20cc",
    storageBucket: "facebook-clone-f20cc.appspot.com",
    messagingSenderId: "291664917347",
    appId: "1:291664917347:web:0ed3b307e3e10722c01956",
    measurementId: "G-JK6E6FKKGG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;