const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter.js')

require('dotenv').config();
require('./Models/db.js');
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter);

app.get('/home',(req,res)=>{
    res.send("Welcome Home !!!!!!!!");
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})