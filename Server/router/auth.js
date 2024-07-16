import express from 'express'
import {registerUser,signUser} from '../controller/auth.js'
const router=express.Router()

router.post('/auth/register',registerUser)
router.post('/auth/signup',signUser)

export default router