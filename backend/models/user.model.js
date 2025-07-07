import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const userSchema = new mongoose.Schema({
    fullname : {
        firstname:{
            type: String,
            required : true,
            minlength : [3,'First name must be atleast 3 characters long'],

        },
        lastname:{
            type: String,
            minlength : [3,'Last name must be atleast 3 characters long'],
        }},
    email:{
            type:String,
            required : true,
            minlength : [5,'Email must be 5 characters long'],
            unique : true 
        },
    password : {
            type : String,
            required : true,
            minlength : [5,'Password must be atleast 5 characters long'],
            select:false   
        },
    SocketId:  {
            type : String,
        },
    
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({
        _id : this._id
    },
    process.env.JWT_SECRET,
    {
        expiresIn : '24h'
    })
    return token;
}

userSchema.methods.comparePassword = async function(password){

    const comparison = await bcrypt.compare(password,this.password);
    return comparison;
    
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const UserModel = mongoose.model('user', userSchema);

export default UserModel;