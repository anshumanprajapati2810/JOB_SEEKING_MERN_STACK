import { catchAsyncError } from "./catchAsyncError";
import{ErrorHandler} from "./error.js"
import jwt from "jsonwebtoken"

export const isAuthorised = catchAsyncError(async(req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        return next(new ErrorHandler("User not authorised", 400))
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
})

//paused at 1.06.56