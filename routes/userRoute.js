import express from "express";
import { Register, Login, getMe,getUsers,updateUser } from "../controllers/userController.js";
import { registerValidation, loginValidation } from "../validations/validation.js";
import { handleValidationErrors } from "../validations/handleValidationErrors.js";
import {checkAuth} from '../validations/checkAuth.js';
const userrouter = express.Router();

userrouter.post('/auth/register', registerValidation, handleValidationErrors, Register);//register user
userrouter.post('/auth/login', loginValidation, handleValidationErrors, Login); // login
userrouter.get('/auth/me', checkAuth, getMe);// profile
userrouter.get('/auth/allusers', checkAuth, getUsers);// all users
userrouter.patch('/auth/update/:id', checkAuth, updateUser); //checkAuth, 

export default userrouter;