// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDE24Aeodw8SFZaNr5bMO4XN5pZuL6JKJc",
  authDomain: "whatsapp-clone-1a5f7.firebaseapp.com",
  projectId: "whatsapp-clone-1a5f7",
  storageBucket: "whatsapp-clone-1a5f7.appspot.com",
  messagingSenderId: "653173199695",
  appId: "1:653173199695:web:674e263aa6ca5034d9eb3a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
