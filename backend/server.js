import express  from "express";
import dotenv  from 'dotenv'; 
import {connectDB} from './config/db.js';

const app=express();

dotenv.config();


app.get("/hello",(req,res)=>{
    res.send("Hola mundo")
})

const PORT= process.env.PORT;
const MONGO_URI= process.env.MONGO_URI;




 /*app.listen(()=>{
    connectDB(MONGO_URI)
    console.log("BASE CONECTADA...")
    console.log(`Server runing port: ${PORT}`) 

})*/

const start = async()=>{
    try {
        await connectDB(MONGO_URI)
        console.log("BASE CONECTADA")
        app.listen(PORT,()=>{
            console.log(`server UP`);
        })
        
    } catch (error) {
        console.log(error);
    }
}