import mongoose from 'mongoose'

const DBConnection=async(url)=>{
    try{
        await mongoose.connect(url)
    }catch(err){
        console.log('database side error',err);
    }
}

export default DBConnection;