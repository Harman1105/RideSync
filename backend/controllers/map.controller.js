import {getAddressCoordinates} from "../services/maps.service.js"
import { validationResult } from "express-validator"
import {getDistanceTime} from "../services/maps.service.js"
import {getAutoCompleteSuggestions} from "../services/maps.service.js"

export const getCoordinates = async(req,res,next)=>{

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }

    const {address} = req.query
    try{
        const coordinates = await getAddressCoordinates(address)
        res.status(200).json(coordinates)
    }catch(error){
        res.status(404).json(
            {
                message : 'Coordinates not found'
            }
        )
    }
}

export const DistanceTime = async(req,res,next)=>{

    try{

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors : errors.array()
            })
        }

        const {origin,destination} = req.query
        const distanceTime = await getDistanceTime(origin,destination)

        res.status(200).json(distanceTime)

    }catch(err){
        console.log(err)
        res.status(500).json({
            message : 'Internal Server Error '
        })
    }

} 

export const AutoCompleteSuggestions = async(req,res,next)=>{
        try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { input } = req.query;

        const suggestions = await getAutoCompleteSuggestions(input);

        res.status(200).json(suggestions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }

}