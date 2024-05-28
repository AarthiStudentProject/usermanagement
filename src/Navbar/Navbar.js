import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar=()=>{
    return(
        <div>
            <nav>
                <h1>User Registration Details</h1>
                <ul>
                    <Link to="/">Register</Link>
                    <Link to="/about">Aboutus</Link>
                    <Link to="/users">Users</Link>
                    <Link to="/contact">Contact</Link>
                </ul>
            </nav>

        </div>
    )
}
export default Navbar