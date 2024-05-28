import React from 'react'
import './User.css'

const User = ({id,name,jobRole,age,contact,email,deleteUser}) => {
  return (
    <div >
        <div className='answerpage'>
            <h2>Id:<span>{id}</span></h2>
            <h3>Name:<span>{name}</span></h3>
            <h3>Email:<span>{email}</span></h3>
            <h3>Age:<span>{age}</span></h3>
            <h3>Contact:<span>{contact}</span></h3>
            <h3>JobRole:<span>{jobRole}</span></h3>
            <div className='user_bottom'>
                <button className='delete-botton' onClick={deleteUser}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default User
