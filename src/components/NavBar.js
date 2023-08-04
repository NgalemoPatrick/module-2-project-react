import React from 'react'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return <nav className='navbar-style'>
        <ul >
            <li>
                <Link to="/">ABOUT ME</Link>

            </li>
            <li>
                <Link to="/Project">PROJECTS</Link>
            </li>
            <li>
                <Link to="/Contact">CONTACT</Link>
            </li>
        </ul>
  </nav>
}

export default NavBar