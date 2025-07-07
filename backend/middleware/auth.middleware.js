import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt" 
import jwt from "jsonwebtoken"

export async function authUser(req,res,next){

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({
            message : 'Unauthorized'
        })
    }

    const isBlacklisted  = await UserModel.findOne({token : token})

    if(isBlacklisted){
        res.status(401).json({
            message: 'Unauthorized'
        })
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await UserModel.findById(decoded._id);

        req.user = user;
        
        return next();   
    }catch(err){
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }

}