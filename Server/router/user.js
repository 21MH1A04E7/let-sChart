import express from 'express'
import { verifyToken } from '../utils/verifyToken.js'
import {getUserDetails} from '../controller/user.js'

const router=express.Router()
router.get('/user/getUserDetails',verifyToken,getUserDetails)

export default router