import React, { useState } from 'react'
import './Register.css'
import { useHistory } from "react-router-dom";


function Register(){
    //console.log(localStorage.getItem("loggedIn"));
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    function register(){
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                username: username,
                password: password
             })
        };
        
        fetch('http://localhost:3001/user/register', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.loggedIn) {
                localStorage.setItem("loggedIn", true);
                localStorage.setItem("username", data.username);
                console.log(localStorage.getItem("loggedIn"));
                history.push("/");

                
              } else {
                localStorage.setItem("loggedIn", false);
                history.push("/");
              }
            });
    }
    return(
        <div className="Register">
            <div className="RegisterForm">
                <input type="text" placeholder="Username" onChange={(event) => {
            setUsername(event.target.value);
          }}/>
                <input type="password" placeholder="Password" onChange={(event) => {
            setPassword(event.target.value);
          }}/>
                <button onClick={register}>Register</button>
            </div>
        </div>
    )
}

export default Register