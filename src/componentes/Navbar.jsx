import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
        
        <Link to="/">Home</Link> 
        <Link to="/AboutMe">About me</Link> 
        <Link to="/Suggestions">Suggestion box</Link> 
        <a href="https://github.com/JezerAvila" target="_blank" rel="noopener noreferrer">Github</a>

    </nav>
  )
}

export default Navbar