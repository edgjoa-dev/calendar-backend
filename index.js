import express from 'express';
import authRouter from './routes/auth.js';
import eventRouter from './routes/events.js';
import cors from 'cors';

import * as dotenv from 'dotenv'
dotenv.config()

import colors from 'colors'
import { dbConnect } from './database/config.js';


const app = express();
const port = process.env.PORT;


//base de datos
dbConnect();

//*carpeta publica
app.use( express.static('public') )

//CORS
app.use(cors())

//*Lectura y parseo del body
app.use( express.json() );

//*crear servidor de express
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto: ${port.green}`);
    }
);

//*rutas
app.use('/api/auth', authRouter);
app.use('/api/event', eventRouter);