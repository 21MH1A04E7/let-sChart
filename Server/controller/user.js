export const getUserDetails=async(req,res)=>{
    try{
        return res.status(200).json({message:"successful"})
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