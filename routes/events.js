import { Router } from 'express';
import { createEvent, deleteEvent, getEvent, updateEvent } from "../controllers/events.js";
import { validateJWT } from '../middleware/revalidate-jwt.js';
import { check } from "express-validator";
import { fieldValidator } from "../middleware/field-validator.js";
import { isDate } from '../middleware/isDate.js';


const router = Router();

router.use( validateJWT )

router.get('/',
    getEvent,
)

router.post('/',      [
    check('title','El titulo es obligatorio').notEmpty(),
    check('start','Fecha de inicio es obligatoria').custom(isDate),
    check('end','Fecha de finalización es obligatoria').custom(isDate),
    fieldValidator,
],
    createEvent,
)
router.put('/:id',    [
    check('title','El titulo es obligatorio').notEmpty(),
    check('start','Fecha de inicio es obligatoria').custom(isDate),
    check('end','Fecha de finalización es obligatoria').custom(isDate),
    fieldValidator,
],
    updateEvent,
)
router.delete('/:id',
    deleteEvent,
)




export default router;