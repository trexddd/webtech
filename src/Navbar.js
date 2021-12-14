import React from "react";
import { Link } from "react-router-dom";
import '../src/Navbar.css';

function Navvy(){
    return(
        <nav className="navbar">
            <h className="headernav">ElloBot</h>
            <ul>
<<<<<<< HEAD
                <li className="start"><Link to="/getstarted" style={{ textDecoration: 'none' }}>Get Started</Link></li>
                <li><Link to="/Help" style={{ textDecoration: 'none' }}>Help</Link></li>
                <li><Link to="/Cart" style={{ textDecoration: 'none' }}>Cart</Link></li>
                <li><Link to="/Guide" style={{ textDecoration: 'none' }}>Guide</Link></li>
                <li><Link to="/Build" style={{ textDecoration: 'none' }}>Build</Link></li>
                <li><Link to="/Prebuilt" style={{ textDecoration: 'none' }}>Prebuilt</Link></li>
                <li><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
=======
                <li><Link className="start" to="/Contact" style={{ textDecoration: 'none' }}>Contact</Link></li>
                <li><Link className="start" to="/ElloBot" style={{ textDecoration: 'none' }}>ElloBot</Link></li>
                <li><Link className="start" to="/Tech" style={{ textDecoration: 'none' }}>Tech</Link></li>
                <li><Link className="start" to="/About" style={{ textDecoration: 'none' }}>About</Link></li>
                <li><Link className="start" to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
>>>>>>> 24e8699e9dba6014d551205b27d5816e328997f5
            </ul>
        </nav>
    );
}

export default Navvy;