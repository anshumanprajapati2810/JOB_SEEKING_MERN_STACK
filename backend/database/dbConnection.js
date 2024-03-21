import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Job_seeking_project",

    }).then(()=>{
        console.log("Connected to Database");
    }).catch((err)=>{
        console.log(`Error occured while connecting to Database: ${err}`);
    })
}