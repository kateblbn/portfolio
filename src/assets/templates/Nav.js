import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <div>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/works'>Works</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        
    </div>
  )
}

export default Nav