import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState'
import User from '../../Navbar/User/User'

const Users = () => {
  const {users,setUsers}=useContext(GlobalContext);
  const deleteUser=(id)=>
    {
      setUsers((currUser)=>{
        return currUser.filter((user)=>user.id!==id);
      })
    }
  return (
    <div>
      <h1>Users</h1>
      {
        users.length===0?
        (
          <div className='users_empty'>
            <h1>No users found, Please add some data.</h1>
            <h3><Link to="/">Go to Home</Link></h3>
          </div>
        )
        :
        (
          users.map((k1)=>(
            <User key={k1.id}
            id={k1.id}
            name={k1.name}
            jobRole={k1.jobRole}
            age={k1.age}
            contact={k1.contact}
            email={k1.email}
      deleteUser={()=>deleteUser(k1.id)}/>
       )))
      }
    </div>
  )
}

export default Users
