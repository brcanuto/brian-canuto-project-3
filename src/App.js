import React, { useEffect, useState } from 'react'
import './App.css';
import { ref, onValue, push, remove } from "firebase/database";
import UserInput from './UserInput';
import realtime from './firebase';
// import UserLog from './UserLog';

function App() {

  // Setup States
    // One state will be for switching between the form and the Log
    // The other state will be adding things to the log. So first I have to figure out how to display the log with the database that I have right now using state. Afterwards implement the secondary state that switches the form and the logs(divs entries)
  const [userInput, setUserInput] = useState("")
  const [log, setLog] = useState([]);

  useEffect( () => {
    const dbRef = ref(realtime)
    
    onValue(dbRef, (snapshot) => {
      
      const myData = snapshot.val();
  
      const newArray = [];
  
      for (let entry in myData) {
        const entryObject = {
          key: entry,
          title: myData[entry]
        }
        newArray.push(entryObject)
      }
      console.log(newArray)
      setLog(newArray)
    })
    
  }, [])
  
  const handleChange = (event) => {
    setUserInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userInput) {
      const dbRef = ref(realtime)
      push(dbRef, userInput)
      setUserInput("")
    } else {
      alert("Write Something!")
    }
  }


  return (
    <div className="App">
      <h1>Hello World! Welcome to the Fitness Tracker</h1>
      <h2>Some type of subheading</h2>
      <p>Input your exercise into the following form, press on logs in order to see previous logs</p>
      <UserInput />
      <div>
        <p>Entry</p>
      </div>
      <div>
        <p>Exercise Log</p>
      </div>
      {/* <UserLog /> */}
      <div>
        <ul>
          {
            log.map( (individualLog) => {
              const date = individualLog.title.date
              const description = individualLog.title.description
              const exercise = individualLog.title.exercise
              const typeOfDay = individualLog.title.typeOfDay

              return(
                <li key={individualLog.key}>
                  <p>{date}</p>
                  <p>{typeOfDay}</p>
                  <p>{exercise}</p>
                  <p>{description}</p>
                  {
                  console.log(individualLog)
                  }
                </li>
              )
            } )
          }
        </ul>
      </div>
    </div>
  );
}

export default App;


// Import Firebase 