import UserModel from "../models/user.model.js";
import {validationResult} from 'express-validator'
import createUser from '../services/user.services.js'

export  async function registerUser(req,res,next){

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors : errors.array()
        })
    }

    const {fullname,email,password} = req.body;
    
    const hashedPassword = await UserModel.hashPassword(password);
    
    const user = await createUser({
        firstname : fullname.firstname,
        lastname : fullname.lastname,
        email,
        password:hashedPassword
    });

    const token = user.generateAuthToken();

    res.status(200).json({
        token,
        user
    })

}

export  async function loginUser(req,res,next){

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors : errors.array()
        })
    }

    const {email , password}  = req.body;

    const user =   await UserModel.findOne({email}).select('+password');
     
    if(!user){
        res.status(401).json({
            message : 'Invaid email or password'
        })
    }

    const isMatched = await user.comparePassword(password);

    if(!isMatched){
        res.status(401).json({
            message : 'Invalid email or password'
        })
    }

    const token = user.generateAuthToken();

    res.status(200).json({
        token,user
    });

}