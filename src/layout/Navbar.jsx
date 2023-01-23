import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className='nav'>
            <NavLink className='navLink' to="/"> Home </NavLink>
            <NavLink className='navLink' to="/add_book"> Add Book </NavLink>
            <NavLink className='navLink' to="/show_books"> Show Book </NavLink>
        </nav>
    )
}

export default Navbar