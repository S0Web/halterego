import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-navbar.png'
import './Navbar.css'

const Navbar = () => {
  return (
      <div className="navbar-content">
        <img src={Logo} alt="logo-navbar.png" />
        <div className="navbar-items">    
            <Link to="/">Home</Link>
            <Link to="/activites">Activités</Link>
            <Link to="/contact">Contact</Link>
        </div>  
    </div>
  )
}

export default Navbar