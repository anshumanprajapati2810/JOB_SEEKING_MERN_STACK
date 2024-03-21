export const catchAsyncError= (inputFunction)=>{
    return (req,res,next) =>{
        Promise.resolve(inputFunction(req,res,next)).catch(next);
    };
};
