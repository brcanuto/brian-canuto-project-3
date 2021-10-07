import React, {useState} from "react"
import realtime from "./firebase"
import {ref, push, set} from "firebase/database"

function UserInput(props) {
// States for each input field
    const [userInput, setUserInput] = useState("")
    const [userDate, setUserDate] = useState("")
    const [userExercise, setUserExercise] = useState("")
    const [userTypeOfDay, setTypeOfDay] = useState("")
    const [userDescription, setUserDescription] = useState("")
// Getting the value for each input field
    const date = (event) => {
        setUserDate(event.target.value)
    };
    const exercise = (event) => {
        setUserExercise(event.target.value)
    };
    const typeOfDay = (event) => {
        setTypeOfDay(event.target.value)
    };
    const description = (event) => {
        setUserDescription(event.target.value)
    };
    const handleSubmit = (event) => {
        event.preventDefault();


// If Statement to handle empty inputs, It's supposed to clear the inputs as well by resetting the state but wasn't able to figure it out
    if ( (userDate, userExercise, userTypeOfDay,userDescription) ) {
        const dbRef = ref(realtime);
        const newPostRef = push(dbRef, userInput);
        set (newPostRef, {
            date: {userDate},
            exercise: {userExercise},
            typeOfDay: {userTypeOfDay},
            description: {userDescription}
        });

        setUserDate("");
        setUserExercise("");
        setTypeOfDay("");
        setUserDescription("");
        setUserInput("");

    } else {
        alert("Buff Skeleton requests you write stuff, respectfully.!")
    }
    };


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Date</label>
                <input type="date" name="date" id="date" onChange={date}/>

                <label htmlFor="typeOfDay">Type Of Day</label>
                <input type="text" name="typeOfDay" id="typeOfDay" onChange={typeOfDay} />

                <label htmlFor="exercise">Exercise</label>
                <input type="text" name="exercise" id="exercise"  onChange={exercise} />

                <label htmlFor="description">Description or Comments</label>
                <input type="textfield" name="descrition" id="description" onChange={description} />

                <button type="submit" >
                    Record Workout
                </button>

            </form>
        </div>
    )
}

export default UserInput