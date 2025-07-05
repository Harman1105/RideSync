import UserModel from "../models/user.model.js";

export default async function createUser({
    firstname,
    lastname,
    password,
    email
}){
    if(!firstname || !password || !email){
        throw new Error('All fields are required');
    }      
    const user = UserModel.create({
        fullname : {
            firstname,
            lastname
        },
        email,
        password
    })

    return user;
}