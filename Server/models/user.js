import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"pls provide the name"]
    },
    email:{
        type:String,
        requried:[true,"pls provide the email id"]
    },
    password:{
        type:String,
        required:[true,"pls provide the password"]
    },
    profilePic:{
        type:String,
        default:"https://images.pexels.com/photos/1214205/pexels-photo-1214205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
},{timestamps:true})

const UserModel=mongoose.model("User",userSchema)
export default UserModel;