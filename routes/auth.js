import { Router } from "express";
import { createUser, loginUser, ravalidateToken } from "../controllers/auth.js";
import { check } from "express-validator";


const router = Router();

router.post('/register', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'Agrega un email valido').isEmail(),
    check('password', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6 })
], createUser);

router.post('/login', [
    check('email', 'Agrega un email valido').isEmail(),
    check('password', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6 })
],
loginUser)

router.post('/revalidtoken', ravalidateToken);


export default router;