const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/User');


const app = express();
app.use(cors());
app.use(express.json());

app.use('/user', userRouter);


app.listen(3001, (req, res)=>{
    console.log('server started!');
});