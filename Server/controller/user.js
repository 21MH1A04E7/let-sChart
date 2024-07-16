import UserModel from "../models/user.js";
export const getUserDetails=async(req,res)=>{
    try{
        const userId=req.user._id
        const user=await UserModel.findById(userId).select('-password')
        return res.status(200).json({
            data:user,
            success:true,
            statusCode:200,
            error:false
        })
    }catch(err){
        console.log('error in getUserDetails',err)
        res.status(500).json({
            message:err.message||err,
            error:true,
            statusCode:500,
            success:false
        })
    }
}

export const updateUserDetails=async(req,res)=>{
    try{
        const userId=req.user._id
        const {name,email,profilePic}=req.body
        const updatedUser=await UserModel.findByIdAndUpdate(userId,{
            $set:{
                name,
                email,
                profilePic,
            }
        },{new:true})
        return res.status(200).json({
            data:updatedUser,
            success:true,
            statusCode:200,
            error:false
        })
        
    }catch(err){
        console.log('error in updateUserDetails',err)
        res.status(500).json({
            message:err.message||err,
            error:true,
            statusCode:500,
            success:false
        })
    }
}