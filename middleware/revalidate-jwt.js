import { response, request } from 'express'
import jwt from 'jsonwebtoken';



export const validateJWT = ( req=request, res=response, next ) => {

    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        })
    }

    try {

        const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);

        req.uid = uid;
        req.name = name;
        
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            msg: 'Token no valido'
        })
    }

    next();
}
