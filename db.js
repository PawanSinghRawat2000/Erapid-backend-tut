const mongoose=require('mongoose')
const dotenv=require('dotenv').config()

const connectDb=async()=>{
    try{
        const conn=await mongoose.connect(process.env.DB_URI);
        console.log(`MongoDb connected:${conn.connection.host}`)
    }catch(error){
        console.log('error',error)
    }
}
module.exports=connectDb;