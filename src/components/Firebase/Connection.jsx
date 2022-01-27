// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3D7_m-G0kXaH_LIgb0ddQXMX9V99YJ6A",
  authDomain: "fir-10e84.firebaseapp.com",
  projectId: "fir-10e84",
  storageBucket: "fir-10e84.appspot.com",
  messagingSenderId: "383499290795",
  appId: "1:383499290795:web:04184d59ecf975a4260fee",
  measurementId: "G-XTSGKZBBSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);