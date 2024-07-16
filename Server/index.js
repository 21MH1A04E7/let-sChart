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

//database connection
DBConnection(process.env.MONGO_URL)
.then(()=>{
    console.log('database connected successfully')
})
.catch((err)=>{
    console.log('database connection error',err);
})

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))

//routes
app.get('/api',(req,res)=>{
    res.json({message:"Hello from server"})
 
})

app.use('/api',authRouter)
app.use('/api',userRouter)



const port=process.env.PROT_NO
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})