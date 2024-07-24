// import dotenv from 'dotenv'
// dotenv.config()
// // console.log(process.env.CLOUDINARY_NAME)
const name='daqpg7sa5'
const url=`https://api.cloudinary.com/v1_1/${name}/auto/upload`
const uploadFile=async(file)=>{
    const formData=new FormData()
    formData.append('file',file)
    formData.append('upload_preset','chartAppFile')
    const response=await fetch(url,{
        method:'POST',
        body:formData
    })
    const responseData=await response.json()
    return responseData
}
export default uploadFile
