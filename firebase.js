import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB2EF9ytMoiEHOT7OPqvO0ysi4FsC6H3JM",
    authDomain: "disney-clone-ca479.firebaseapp.com",
    projectId: "disney-clone-ca479",
    storageBucket: "disney-clone-ca479.appspot.com",
    messagingSenderId: "926630940538",
    appId: "1:926630940538:web:e961926e9ce19366cb90c3"
  };

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };