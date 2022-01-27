import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3D7_m-G0kXaH_LIgb0ddQXMX9V99YJ6A",
  authDomain: "fir-10e84.firebaseapp.com",
  projectId: "fir-10e84",
  storageBucket: "fir-10e84.appspot.com",
  messagingSenderId: "383499290795",
  appId: "1:383499290795:web:04184d59ecf975a4260fee",
  measurementId: "G-XTSGKZBBSP"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth }
