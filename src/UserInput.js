import React, {useState} from "react"
import realtime from "./firebase"
import {ref, push, set} from "firebase/database"

function UserInput(props) {

    const [userInput, setUserInput] = useState("")
    const [userDate, setUserDate] = useState("")
    const [userExercise, setUserExercise] = useState("")
    const [userTypeOfDay, setTypeOfDay] = useState("")
    const [userDescription, setUserDescription] = useState("")

    const date = (event) => {
        console.log(event.target.value)
        setUserDate(event.target.value)
    };
    const exercise = (event) => {
        console.log(event.target.value)
        setUserExercise(event.target.value)
    };
    const typeOfDay = (event) => {
        console.log(event.target.value)
        setTypeOfDay(event.target.value)
    };
    const description = (event) => {
        console.log(event.target.value)
        setUserDescription(event.target.value)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
    
        console.log(userDate, userExercise, userTypeOfDay, userDescription)




    if ( userDate, userExercise, userTypeOfDay,userDescription ) {
        const dbRef = ref(realtime)
        const newPostRef = push(dbRef, userInput)
        set (newPostRef, {
            date: {userDate},
            exercise: {userExercise},
            typeOfDay: {userTypeOfDay},
            description: {userDescription}
        })


      setUserDate("")
      setUserExercise("")
      setTypeOfDay("")
      setUserDescription("")
      setUserInput("")
    } else {
        alert("Buff Skeleton requests you write stuff, respectfully.!")
    }
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Date</label>
                <input type="date" onChange={date}/>

                <label htmlFor="">Exercise</label>
                <input type="text" onChange={exercise} />

                <label htmlFor="">Type Of Day</label>
                <select name="typeOfDay" id="" onChange={typeOfDay} >
                    <option value="placeholder" disabled>Pick One:</option>
                    <option value="Push">Push</option>
                    <option value="Pull">Pull</option>
                    <option value="Legs">Legs</option>
                    <option value="Shoulders">Shoulders</option>
                    <option value="Back">Back</option>
                    <option value="Chest">Chest</option>
                    <option value="Arms">Arms</option>
                    <option value="Strength Day">Strength Day</option>
                    <option value="Cardio Day">Cardio Day</option>
                    <option value="HIIT">HIIT Day</option>
                </select>

                <label htmlFor="">Description or Comments</label>
                <input type="textfield" onChange={description} />

                <button type="submit" >
                    Record Workout
                </button>

            </form>
        </div>
    )
}

export default UserInput