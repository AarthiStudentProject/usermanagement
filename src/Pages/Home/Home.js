import React, { useContext, useEffect, useState } from 'react'
import {v4 as uuid} from 'uuid';
import { GlobalContext } from '../../context/GlobalState'

import './Home.css'

const Home = () => {
  const {setUsers}=useContext(GlobalContext);
  const [userInfo,setUserInfo]=useState([
    {
      id:"",
      name:"",
      email:"",
      contact:"",
      age:"",
      jobRole:"",

    }
  ])
  useEffect(()=>
  {
    setUserInfo((currentInfo)=>
      {
        return{
          ...currentInfo,
          id:uuid()
        }
      })
  },[])
  const handlechange=(event)=>
    {
      const{name,value}=event.target;
      
      setUserInfo((currentInfo)=>
      {
        return{
          ...currentInfo,
          [name]:value
        }
      })
    }
  const handleadd=()=>
    {  
      console.log(userInfo); 
      setUsers((currusers) =>
      {  
        return [...currusers,userInfo];  
      }
    );
    alert('Registration successfully');
    setUserInfo(
      {
        id:uuid(),
        name:"",
        email:"",
        contact:"",
        age:"",
        jobRole:"",
      }
    )

  }
  return (
    <div className='home'>
      <div className='home_container'>
        <div className='home_formContainer'>
          <h1 className='home_title'>Add User Information</h1>
          <input title='id'  placeholder="Enter user's id" disabled value={userInfo.id} onChange={handlechange}/><br/>
          <input type='text' name='name' placeholder='Enter your Name:' value={userInfo.name} onChange={handlechange}/><br/>
          <input type='text' name='email' placeholder='Enter your Email' value={userInfo.email} onChange={handlechange}/><br/>
          <input type='text' name='phone' placeholder='Enter your Phone' value={userInfo.contact} onChange={handlechange}/><br/>
          <input type='text' name='age' placeholder='Enter your Age' value={userInfo.age} onChange={handlechange}/><br/>
          <input type='text' name='jobRole' placeholder='Enter your JobRole' value={userInfo.jobRole} onChange={handlechange}/><br/>

          <button onClick={handleadd}>Register</button> 
        </div>
      </div>
    </div>
  )
}

export default Home
