import React from 'react'
import { NavLink } from 'react-router-dom'


const SignedOutLinks = () => {
return (
    <ul className="nav">
        <li className="nav-item"><NavLink to='/'>Home</NavLink></li>
        <li className="nav-item"><NavLink to='/'>About</NavLink></li>
        <li className="nav-item"><NavLink to='/'>Sign Up</NavLink></li>
        <li className="nav-item"><NavLink to='/'>Log In</NavLink></li>
    </ul>
        )
}

export default SignedOutLinks;