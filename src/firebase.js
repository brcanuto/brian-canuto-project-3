// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "@firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBreU7v01VoYItjHAAD9Hm6sgOt1FMgbnw",
  authDomain: "exercise-tracker-56d4c.firebaseapp.com",
  databaseURL: "https://exercise-tracker-56d4c-default-rtdb.firebaseio.com",
  projectId: "exercise-tracker-56d4c",
  storageBucket: "exercise-tracker-56d4c.appspot.com",
  messagingSenderId: "991908879747",
  appId: "1:991908879747:web:14ac4f0a7792f74be1aab6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const realtime = getDatabase(app);
export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}
export default realtime