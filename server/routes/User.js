const express = require('express');
const router = express.Router();
const db = require('../config/db');




router.post('/register', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "INSERT INTO users (name,email, password) VALUES (?, ?, ?);",
    [username,username, password],
    (err,result)=>{
        if(err){
            return res.status(500).json({
                loggedIn: false,
                errmsg: err
            });
        }
        if(result){
            return res.status(200).json(
                {
                    loggedIn: true,
                    msg: "Successfull"
                }
            );
        }
    }
    );
});



router.post('/login', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE email=?;",
    username,
    (err,result)=>{
        console.log(result);
        if(err){
            return res.status(500).json({
                loggedIn: false,
                errmsg: err
            });
        }
        if(result.length >0){
            if(password == result[0].password){
                return res.status(200).json(
                    {
                        loggedIn: true,
                        msg: "Successfull"
                    }
                );

            }else{
                return res.status(400).json(
                    {
                        loggedIn: false,
                        msg: "Password Does not match!"
                    }
                );

            }
            
        }else{
            return res.status(400).json(
                {
                    loggedIn: false,
                    msg: "User does not exist!"
                }
            );

        }
    }
    );
});







module.exports = router;