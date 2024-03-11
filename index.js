import express from 'express';
//  const express = require('express')
require('dotenv').config();

const app = express();

 const PORT = 4000
app.get('/',(req,res)=>{
    res.send(" Home page")
})

app.listen(PORT,()=>{
    console.log("server started successfully");
})