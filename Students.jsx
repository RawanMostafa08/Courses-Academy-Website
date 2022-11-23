import React from 'react'
import "./Students.css"


function Students(props) {
  return (
        <div className='student'>
            <h1> {props.name}</h1>
            <h1> {props.phone}</h1>
            <h1> {props.email}</h1>
        </div>

  )
}

export default Students
