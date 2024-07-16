import UserModel from '../models/user.js'
import dotenv from 'dotenv'
dotenv.config()
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const registerUser=async(req,res)=>{
    try{
        const {name,email,password,profilePic}=req.body;

        const userExist=await UserModel.findOne({email});

        if(userExist){
            return res.status(400).json({
                message:"User already exist",
                error:true,
                statusCode:400,
                success:false
            })
        }
        const salt=await bcryptjs.genSaltSync(10);
        const hashedPassword=await bcryptjs.hashSync(password,salt);
        
        const newUser=new UserModel({name,email,password:hashedPassword,profilePic})
        const response=await newUser.save();
        return res.status(200).json({
            message:"User registered successfully",
            data:response,
            error:false,
            statusCode:200,
            success:true
        })
    }catch(err){
        console.log('internal error in userRegister')
        return res.status(500).json({
            message:err.message||err,
            error:true,
            statusCode:500,
            success:false
        })
    }
}

export const signUser=async(req,res)=>{
    try{
        const {email,password}=req.body
        const user=await UserModel.findOne({email})
        if(!user){
            return res.status(400).json({
                message:"User not found",
                error:true,
                statusCode:400,
                success:false
            })
        }
        const isMatch=bcryptjs.compareSync(password,user.password);
        if(!isMatch){
            return res.status(400).json({
                message:"Invalid password",
                error:true,
                statusCode:400,
                success:false
            })
        }
        const payload={
            _id:user._id,
            name:user.name,
            email:user.email
        }
        const token=jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:'1d'})
        const {password:pass,...rest}=user._doc;
        return res.status(200).cookie('access_token',token).json({
            message:"User signUser in successfully",
            data:rest,
            error:false,
            statusCode:200,
            success:true
        })

    }catch(err){
        console.log('internal error in userLogin')
        return res.status(500).json({
            message:err.message||err,
            error:true,
            statusCode:500,
            success:false
        })
    }
}

export const userLogout=async(req,res)=>{
    try{
        return res.status(200).clearCookie('access_token').json({
            message:"User logged out successfully",
            data:null,
            error:false,
            statusCode:200,
            success:true
        })
    }catch(err){
        console.log('internal error in user logout')
        return res.status(500).json({
            message:err.message||err,
            error:true,
            statusCode:500,
            success:false
        })
    }
}