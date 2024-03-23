import express from 'express';
import {employerGetAllApplications, jobseekerDeleteApplication,jobseekerGetAllApplications, postApplication} from "../controllers/applicationController.js";
import {isAuthorised} from "../middlewares/auth.js"
const router = express.Router();
router.get("/jobseeker/getall",isAuthorised,jobseekerGetAllApplications);
router.post("/post",isAuthorised,postApplication);
router.get("/employer/getall",isAuthorised,employerGetAllApplications);
router.delete("/delete/:id",isAuthorised,jobseekerDeleteApplication);

export default router;