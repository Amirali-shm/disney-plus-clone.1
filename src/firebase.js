import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDZbgddKR3PUqEtBxr2_gCaPRlv09zwEVs",
  authDomain: "disneyplus-clone-41d30.firebaseapp.com",
  projectId: "disneyplus-clone-41d30",
  storageBucket: "disneyplus-clone-41d30.appspot.com",
  messagingSenderId: "868497290605",
  appId: "1:868497290605:web:7b34e1371fddc4a5ab5664",
  measurementId: "G-MZ1H9774ZC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth , provider , storage};
export default db;