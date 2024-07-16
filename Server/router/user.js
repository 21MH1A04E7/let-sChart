import express from 'express'
import { verifyToken } from '../utils/verifyToken.js'
import {getUserDetails,updateUserDetails} from '../controller/user.js'

const router=express.Router()
router.get('/user/getUserDetails',verifyToken,getUserDetails)
router.post('/user/updateUserDetails',verifyToken,updateUserDetails)

export default router