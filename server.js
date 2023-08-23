const express=require('express')
const connectDb = require('./db')
const router = require('./routes/userRoute')
const dotenv=require('dotenv').config()
const port=4000


const app=express()

connectDb()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))



//routes
const user=require('./routes/userRoute')
app.use('/api/v1',user)


app.listen(port,()=>console.log(`server started at port:${port}`))