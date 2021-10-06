import React from "react"

function UserInput(props) {



    return(
        <div>
            <form onSubmit>
                <label htmlFor="">Date</label>
                <input type="date" />

                <label htmlFor="">Exercise</label>
                <input type="text" />

                <label htmlFor="">Type Of Day</label>
                <select name="" id="">Push
                    <option value="1">Pull</option>
                    <option value="2">Legs</option>
                    <option value="3">Shoulders</option>
                    <option value="4">Back</option>
                    <option value="5">Chest</option>
                    <option value="6">Arms</option>
                    <option value="7">Strength Day</option>
                </select>

                <label htmlFor="">Description or Comments</label>
                <input type="textfield" />

                <button type="submit" >
                    Record Workout
                </button>

            </form>
        </div>
    )
}

export default UserInput