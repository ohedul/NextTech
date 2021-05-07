import React, {useState} from 'react'
import './Login.css'
import { useHistory } from "react-router-dom";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    function login(){

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
        
        fetch('http://localhost:3001/user/login', requestOptions)
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
        <div className="Login">
            <div className="LoginForm">
                <input type="text" placeholder="Username" onChange={(event) => {
            setUsername(event.target.value);
          }} />
                <input type="password" placeholder="Password" onChange={(event) => {
            setPassword(event.target.value);
          }} />
                <button onClick={login}>Login</button>
            </div>
        </div>
    )
}

export default Login