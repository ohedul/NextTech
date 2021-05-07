import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar(){
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
         //console.log(localStorage.getItem("loggedIn"));
         setLoggedIn(localStorage.getItem("loggedIn"));
        console.log(loggedIn);
      }, [loggedIn]);
    return(
        <div className="Navbar">
            <a href="/">Home</a>
            { loggedIn ? (
                <>
                <a href="/profile">Profile</a>
                </>
            ):(
                <>
                <a href="/register">Register</a>
                <a href="/login">Login</a>
                </>
            )}
            
        </div>
    )
}

export default Navbar