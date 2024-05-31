import express  from "express";
import dotenv  from 'dotenv';
const app=express();

app.get("/hello",(req,res)=>{
    res.send("Hola mundo")
})

const port=5000;
const up="UP";

app.listen(8000,(req,res)=>{
    console.log("Server runing ${up}")
})