import {catchAsyncError} from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import {Job} from "../models/jobSchema.js";


export const getAllJobs = catchAsyncError(async(req, res, next) => {
    const jobs = await Job.find({expired : false});
    res.status(200).json({
        success: true,
        jobs,
    })

});

export const postJob = catchAsyncError(async(req,res,next)=>{
    const {role} = req.user;
    if(role === "Job Seeker"){
        return next(new ErrorHandler("Job Seeker is not allowed to access this resource",400));

    }
    const {title, description, category, country, city, location, fixedSalary, salaryForm, salaryTo} = req.body;
    if(!title || !description || !category || !country || !city || !location){
        return next(new ErrorHandler("Please provide full details",400));
    }

    //paused at 2.10.25
});
