import express from 'express';
import{getAllJobs, postJob} from "../controllers/jobController.js";
import {isAuthorised} from "../middlewares/auth.js"

const router = express.Router();

router.get("/getall", getAllJobs); 
router.post("/post", isAuthorised ,postJob)

export default router;