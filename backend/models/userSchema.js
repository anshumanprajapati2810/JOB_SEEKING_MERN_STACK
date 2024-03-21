import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required : [true,"Please enter your name"],
        minLength: [3, "Name must be of minimum length of 3 characters"],
        maxLength: [3, "Name must be of maximum length of 20 characters"]
    },
    email :{
        type: String,
        required : [true,"Please provide your email address"],
        validate : [validator.isEmail, "Please provide a valid email address"]
    },
    phone: {
        type: Number,
        required : [true,"Please provide your phone number"],
    },
    password: {
        type : String,
        required: [true,"Please provide your password"],
        minLength : [8, "Password must be at least 8 characters"],
        maxLength: [32, "Password can't be more than 32 characters long"]
    },
    role:{
        type: String,
        required: [true,"Please provide your role"],
        enum : ["Job Seeker", " Employer"],
    },
    createdAt : {
        type : Date,
        default : Date.now,
    },

});

//Password hashing

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
})

//Password comparing 

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

//jwt generator

userSchema.methods.getJWTToken = function (){
    return jwt.sign({id : this._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE,

    });
};