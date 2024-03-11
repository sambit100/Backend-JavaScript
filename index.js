import express from 'express';
require('dotenv').config();

const app = express();


app.get('/',(req,res)=>{
    res.send(" HOme page")
})

app.listen(process.env.PORT,()=>{
    console.log("server started successfully");
})