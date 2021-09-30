// Import the functions you need from the SDKs you need
import { initializeApp, firebase } from "firebase/app";
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBreU7v01VoYItjHAAD9Hm6sgOt1FMgbnw",
  authDomain: "exercise-tracker-56d4c.firebaseapp.com",
  projectId: "exercise-tracker-56d4c",
  storageBucket: "exercise-tracker-56d4c.appspot.com",
  messagingSenderId: "991908879747",
  appId: "1:991908879747:web:4e1caee39500dac6e1aab6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase;