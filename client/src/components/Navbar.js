import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom'
import '../App.css'

function Navbar({ user, handleLogout}) {

    if (user) {

        return (
            <>
                <div className='nav'>
                    <Nav.Link as={Link} to='/' className='navItem'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/chance' className='navItem'>Predictor</Nav.Link>
                    <p className='welcome'>Hello {user.firstname}, welcome!</p>
                    {/* <button className='logout' onClick={handleLogout}>Logout</button> */}
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className='nav'>
                    <Nav.Link as={Link} to='/signups' className='navItem'>Signup</Nav.Link>
                    <Nav.Link as={Link} to='/login' className='navItem'>Login</Nav.Link>
                </div >
            </>
        )
    }

}

export default Navbar;