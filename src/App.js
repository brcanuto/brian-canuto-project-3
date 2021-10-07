import React, { useEffect, useState } from 'react'
import './App.css';
import { ref, onValue } from "firebase/database";
import UserInput from './UserInput';
import realtime from './firebase';
import UserLog from './UserLog';


function App() {

  const [displayState, setDisplayState] = useState(false)
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
    
  }, []);
  

  return (
    <div className="App">
      <div className="header">
        <h1>Buff Skeleton's Workout Log</h1>
        <h2>Can Skeletons get swole? Yes they can.</h2>
        <p>Input your exercise into the following form, press on logs in order to see previous logs. All Fields must be entered to submit a log.</p>


        <div className="toggleButton">
        {
        displayState === true ? 
        <p onClick={() => setDisplayState(false)}>Show User Form</p>
        :
        <p onClick={() => setDisplayState(true)}>Show Logs</p>
        }
        </div>
        {
          displayState
        }
        <div>
      </div>
      </div>
{/* Turnary that displays either submit form or Exercise Log */}
      {
      displayState === true ? 
      <div>
        <ul>
          {
            // Map through log state and store values in a new array. Pass those values into UserLog

            log.map( (individualLog, index) => {
              const date = individualLog.title.date.userDate
              const description = individualLog.title.description.userDescription
              const exercise = individualLog.title.exercise.userExercise
              const typeOfDay = individualLog.title.typeOfDay.userTypeOfDay
              return(
                    <UserLog
                    key = {index}
                    date = {date}
                    description= {description}
                    exercise = {exercise}
                    typeOfDay = {typeOfDay}
                    />

              )
            }
            // Reverse added so it displays 
            ).reverse()
          }
      </ul>
      </div>
      :
      <div>
        <UserInput />
      </div>
    }



      <div className="footer"> 
        <p> Copyright BCCodes 2021</p>
      </div>
    </div>
  );
}

export default App;