import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt" 
import jwt from "jsonwebtoken"
import captainModel from "../models/Driver.model.js";
import BlackListToken from "../models/blacklistToken.model.js";

export async function authUser(req,res,next){

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({
            message : 'Unauthorized'
        })
    }

    const isBlacklisted  = await BlackListToken.findOne({token : token})

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

export async function authCaptain(req,res,next){

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({
            message : 'Unauthorized'
        })
    }

    const isBlacklisted  = await BlackListToken.findOne({token : token})

    if(isBlacklisted){
        res.status(401).json({
            message: 'Unauthorized'
        })
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);

        req.captain = captain;
        
        return next();   
    }catch(err){
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }

}