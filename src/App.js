import React, { useEffect, useState } from 'react'
import './App.css';
import { ref, onValue, push, remove } from "firebase/database";
import db from './firebase'
import UserInput from './UserInput';


function App() {


  return (
    <div className="App">
      <h1>Hello World! Welcome to the Fitness Tracker</h1>
      <h2>Some type of subheading</h2>
      <p>Input your exercise into the following form, press on logs in order to see previous logs</p>
      <UserInput />
    </div>
  );
}

export default App;
