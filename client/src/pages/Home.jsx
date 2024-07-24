import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Api from '../common/url.js'
import axios from 'axios'
import { useSelector ,useDispatch} from 'react-redux'
import { setUser } from '../redux/userSlice.js'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate=useNavigate()
  const user=useSelector(state=>state.user)
  console.log("user",user)
  const dispatch=useDispatch()
  const fetchUserDetails=async()=>{
    try{
      const response=await axios({
        url:Api.getUserDetails.url,
        withCredentials:true
      })
      if(response?.data?.success==false){
        navigate('/login')
      }
      if(response?.data?.success){
        dispatch(setUser(response?.data?.data))
      }
    }catch(error){
      console.error('internal server error in home page',error)
    }
  }
  useEffect(()=>{
    fetchUserDetails()
  },[])
  return (
    <>
    <div>
        Home
    </div>
    <section>
        <Outlet/>
    </section>
    </>
  )
}

export default Home