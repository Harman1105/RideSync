import express from 'express'
import {body} from "express-validator";
import { Router } from 'express'
import { registerUser, loginUser,getUserProfile ,logOutUser} from '../controllers/user.controller.js';
import { authUser } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min : 3}).withMessage('First Name must be 3 characters long'),
    body('password').isLength({min : 6}).withMessage('Password must be 6 characters long')
],
registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min  :6}).withMessage('Password must be 6 characters long')
],
loginUser)

router.get('/profile',authUser,getUserProfile)

router.get('/logout',authUser,logOutUser)

export default router