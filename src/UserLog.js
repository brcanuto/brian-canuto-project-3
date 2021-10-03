import React from "react";

function UserLog(props) {
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
}

export default UserLog