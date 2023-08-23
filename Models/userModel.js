const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    userId:Number,
    Name:String,
    PhoneNumber:Number,
    EmailId:String,
    CreatedAt:{
        type:Date,
        default:Date.now()
    },
    UpdatedAt:Date
})

module.exports=mongoose.model('User',userSchema);