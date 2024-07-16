import express from 'express'
import {registerUser,signUser,userLogout} from '../controller/auth.js'
const router=express.Router()

router.post('/auth/register',registerUser)
router.post('/auth/signup',signUser)
router.get('/auth/logout',userLogout)

export default router