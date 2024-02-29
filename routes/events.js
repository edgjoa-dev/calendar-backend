import { Router } from 'express';
import { createEvent, deleteEvent, getEvent, updateEvent } from "../controllers/events.js";
import { validateJWT } from '../middleware/revalidate-jwt.js';

const router = Router();

router.use( validateJWT )

router.get('/',       getEvent)
router.post('/',      createEvent)
router.put('/:id',    updateEvent)
router.delete('/:id', deleteEvent)




export default router;