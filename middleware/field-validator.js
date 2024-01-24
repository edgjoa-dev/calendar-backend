import { request, response } from "express";
import { validationResult } from "express-validator";



export const fieldValidator = ( req=request, res=response, next )=> {


    //manejo de errores
    const errors = validationResult( req );
    if( !errors.isEmpty() ){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    next();

}



export const revalidationPassword = ( req=request, res=response, next )=> {

    const { password, revalidPassword } = req.body;

    if(revalidPassword !== password){
        return res.status(400).json({
            ok: false,
            msg: 'Passwords do not match'
        });
    }

    next();

}