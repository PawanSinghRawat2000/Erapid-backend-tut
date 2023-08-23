const User=require('../Models/userModel')

exports.createUser=async(req,res)=>{
    const user=await User.create(req.body);
    res.status(200).json({
        success:true,
        user
    })
}

exports.getAllUsers=async(req,res)=>{
    console.log('started')
        try{
            const users=await User.find();
            console.log(users)
            res.status(200).json({
                success:true,
                users,
            })
        }catch(error){
            console.log(error)
        }
    }