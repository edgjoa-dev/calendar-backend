import { Router } from "express";
import { createUser, loginUser, ravalidateToken } from "../controllers/auth.js";
import { check } from "express-validator";
import { fieldValidator, revalidationPassword } from "../middleware/field-validator.js";


const router = Router();

router.post('/register', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'Agrega un email valido').isEmail(),
    check('password', 'El password debe ser minimo de 8 caracteres').isLength({ min: 8 }),
    check('revalidPassword', 'El password debe ser minimo de 8 caracteres').isLength({ min: 8 }),
    revalidationPassword,
    fieldValidator
], createUser);

router.post('/login', [
    check('email', 'Agrega un email valido').isEmail(),
    check('password', 'El password debe ser minimo de 8 caracteres').isLength({ min: 8 }),
    fieldValidator
],
loginUser)

router.post('/revalidtoken', ravalidateToken);


export default router;