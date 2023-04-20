import React, { useEffect } from 'react'
import Navbar from './Navbar';

function Logout({ user, setFirstname, setLastname, setPassword, setUser }) {

    const del = () => {
        setUser({});
        setFirstname("");
        setLastname("");
        setPassword("");
        localStorage.clear();
      };

      const handleLogout = () => {
        fetch('/destroy',{
            method: 'DELETE',
            headers:{'Application-Type':'application/json'}
        })
        .then(res=>res.json())
        .then(data=>{
            del()

            console.log(data)
        })
    }
    

    
    
    return (
        <>
        {/* <Navbar handleLogout={handleLogout}></Navbar> */}
        </>
    )
}

export default Logout