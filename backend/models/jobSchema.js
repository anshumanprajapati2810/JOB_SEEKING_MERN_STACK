import mongoose from "mongoose";


const jobSchema = new mongoose.Schema({
    title:{
        type : String,
        required : [true, "Please provide job title"],
        minLengthL: [3,"Job title must contain at least 3 characters"],
        maxLength: [50,"Job title cannot exceed 50 characters"]
    },
    description:{
        type : String,
        required: [true, "Please provide description"],
        minLength: [20, "Job description must contain at least 20 characters"],
        maxLength: [100, "Job description cannot exceed 100 characters"]
    },
    category:{
        type : String,
        required: [true, "Please provide job category"],
    },
    country:{
        type : String,
        required: [true, "Please provide job country"],
    },
    city:{
        type : String,
        required: [true, "Please provide job city"],
    },
    location:{
        type : String,
        required: [true, "Please provide exact location"],
        minLength: [20, "Job location must contain at least 20 characters"],
    },
    fixedSalary:{
        type : Number,
        minLength: [4, "Fixed salary start from minimum 4 digits"],
        maxLength: [9, "Fixed salary cannot exceed 9 digits"]
    },
    salaryFrom:{
        type : Number,
        minLength: [4, "Salary range start from 4 digits"],
        maxLength: [9, "Salary range limited to 9 digits"],
    },
    salaryTo:{
        type : Number,
        minLength: [4, "Salary range start from 4 digits"],
        maxLength: [9, "Salary range limited to 9 digits"],
    },
    expired: {
        type : Boolean,
        default : false,
    },
    jobPostedOn:{
        type :Date,
        default : Date.now,
    },
    postedBy:{
        type : mongoose.Schema.ObjectId,
        ref : "User",
        required: true,
    },
});

export const Job = mongoose.model("Job", jobSchema);