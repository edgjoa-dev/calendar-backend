import express from 'express';
import authRouter from './routes/auth.js';
import * as dotenv from 'dotenv'
dotenv.config()
import colors from 'colors'




const app = express();
const port = process.env.PORT;


//carpeta publica
app.use( express.static('public') )

//*crear servidor de express
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto: ${port.green}`);
    }
);

//*rutas
app.use('/api/auth', authRouter);