import { Router } from "express";
import { createUser, loginUser, ravalidateToken } from "../controllers/auth.js";


const router = Router();

router.post('/register', createUser);

router.get('/login',  loginUser)

router.post('/revalidtoken', ravalidateToken);


export default router;