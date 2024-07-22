import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import os from 'os'
import cluster from 'cluster'
import cookieParser from 'cookie-parser'

import DBConnection from './config/DBConnection.js'
import authRouter from './router/auth.js'
import userRouter from './router/user.js'

const app=express();
console.log(os.cpus().length)


console.log(process.env.FRONTEND_URL)
//middleware
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express.json())
app.use(cookieParser())


//routes
app.get('/api',(req,res)=>{
    res.json({message:"Hello from server"})
 
})

app.use('/api',authRouter)
app.use('/api',userRouter)



const port=process.env.PROT_NO
DBConnection(process.env.MONGO_URL)
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running at http://localhost:${port}`);
    })
})
.catch((err)=>{
    console.log('database connection error',err);
})
