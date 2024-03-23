import express from 'express';
import{getAllJobs, postJob, getmyJobs, updateJobs, deleteJobs} from "../controllers/jobController.js";
import {isAuthorised} from "../middlewares/auth.js"

const router = express.Router();

router.get("/getall", getAllJobs); 
router.post("/post", isAuthorised ,postJob)
router.get("/getmyjobs", isAuthorised ,getmyJobs);
router.put("/update/:id", isAuthorised ,updateJobs);
router.delete("/delete/:id", isAuthorised ,deleteJobs);

export default router;