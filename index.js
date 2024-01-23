import express from 'express';
import * as dotenv from 'dotenv'
dotenv.config()


const app = express();
const port = process.env.PORT;

//carpeta publica
app.use( express.static('public') )

//*crear servidor de express
app.listen(port, () => {
    console.log(`Seridor corriendo en puerto: ${port}`);
    }
);

//*rutas

app.get("/", (req, res) => {
    res.status(200).json({
        ok: true,
        msg: "Hola mundo"
    });
    }
);





