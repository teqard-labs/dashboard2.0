// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkakItb6UJSPMk-nlfR2TeYu-htsT95NY",
  authDomain: "ufarms-dashboard2.firebaseapp.com",
  projectId: "ufarms-dashboard2",
  storageBucket: "ufarms-dashboard2.appspot.com",
  messagingSenderId: "412496378731",
  appId: "1:412496378731:web:1602af96c2ae8071416a2e",
  measurementId: "G-K98KF56LTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);