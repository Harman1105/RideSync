import BlackListToken from "../models/blacklistToken.model.js";
import captainModel from "../models/Driver.model.js";
import {createCaptain} from "../services/captain.services.js"
import { validationResult } from "express-validator";

export async function registerCaptain(req,res,next){

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }

    const {fullname, email, password, vehicle} = req.body;

    const DoesCaptainAlreadyExists = await captainModel.findOne({email});

    if(DoesCaptainAlreadyExists){
        return res.status(400).json({
            message : 'Captain already exists'

        })
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await createCaptain({
        firstname : fullname.firstname,
        lastname : fullname.lastname,
        email,
        password : hashedPassword,
        color : vehicle.color,
        plate : vehicle.plate,
        capacity : vehicle.capacity,
        vehicleType : vehicle.vehicleType
    })

    const token = captain.generateAuthToken();

    res.status(201).json({
        token,captain
    })
}

export async function loginCaptain(req,res,next){

    const errors = validationResult(req);
    if(!errors){
        return res.status(400).json({
            errors : errors.array()
        })
    }

    const {email,password} = req.body;

    const captain = await captainModel.findOne({email}).select('+password');

    if(!captain){
        return res.status(401).json({
            message : 'Invalid email or password'
        })
    }

    const isMatch = await captain.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({
            message : 'Invaid email or password'
        })
    }

    const token = captain.generateAuthToken();

    res.cookie('token',token);

    res.status(200).json({
        token,captain
        })
    
}

export async function getCaptainProfile(req,res,next){
    res.status(200).json({captain : req.captain})
}

export async function logoutCaptain(req,res,next){
    
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    await BlackListToken.create({token});
    

    res.clearCookie('token');

    res.status(200).json({
        message : 'Logged out successfully '
    })
}

