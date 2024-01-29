import { Router } from "express";
import { createUser, loginUser, ravalidateToken } from "../controllers/auth.js";
import { check } from "express-validator";
import { fieldValidator, revalidationPassword } from "../middleware/field-validator.js";


const router = Router();

router.post('/register', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'Agrega un email valido').isEmail(),
    check('password', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6 }),
    check('revalidPassword', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6 }),
    revalidationPassword,
    fieldValidator
], createUser);

router.post('/login', [
    check('email', 'Agrega un email valido').isEmail(),
    check('password', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6 }),
    check('revalidPassword', 'Passwords no coinciden').custom( revalidationPassword ),
    fieldValidator
],
loginUser)

router.post('/revalidtoken', ravalidateToken);


export default router;