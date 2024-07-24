import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  _id:"",
  name:"",
  email:"",
  profilePic:""
  // more fields as needed...
}

export const userSlice= createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser:(state,action)=>{
        state._id=action.payload._id,
        state.name=action.payload.name,
        state.email=action.payload.email,
        state.profilePic=action.payload.profilePic
        // more fields as needed...
    },
    logout:(state,action)=>{
        state._id="",
        state.name="",
        state.email="",
        state.profilePic=""
    }
  },
})


export const { setUser,logout } = userSlice.actions

export default userSlice.reducer