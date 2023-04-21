import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/main.css'

export default function Navbar() {
  return (
    <div className='nav'>
        <NavLink 
        to='/'
        className = {({isActive})=> isActive ? 'bold' : undefined}
        >
          Home
        </NavLink>
        <NavLink 
        to='/storylist'
        className = {({isActive})=> isActive ? 'bold' : undefined}
        >
          Story
        </NavLink>
    </div>
  )
}
