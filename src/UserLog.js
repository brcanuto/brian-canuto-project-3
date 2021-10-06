import React from "react";

function UserLog({ date, typeOfDay, exercise, description}) {

  return(


        <li>
        <p>{date}</p>
        <p>{typeOfDay}</p>
        <p>{exercise}</p>
        <p>{description}</p>
      </li>

  )
      }
export default UserLog