import express from 'express';


const app = express();


//crear servidor de express

app.listen(4000, () => {
    console.log("servidor corriendo en el puerto 4000");
    }
);

//rutas

app.get("/", (req, res) => {
    res.status(200).json({
        ok: true,
        msg: "Hola mundo"
    });
    }
);





