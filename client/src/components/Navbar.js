import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom'
import '../App.css'

function Navbar() {

    return (
        <>
            <div className='nav'>
                <Nav.Link as={Link} to='/'className='navItem'>Home</Nav.Link>
                <Nav.Link as={Link} to='/chance'className='navItem'>Predictor</Nav.Link>
            </div>
        </>
    )
}

export default Navbar;