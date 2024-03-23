import express from 'express';
import {register} from "../controllers/userController.js";
import { login } from '../controllers/userController.js';
import { logout, getUser } from '../controllers/userController.js';
import {isAuthorised} from "../middlewares/auth.js";

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', isAuthorised, logout);
router.get('/getuser', isAuthorised,getUser);

export default router;