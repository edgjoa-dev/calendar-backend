import { request, response } from 'express';
import { validationResult } from 'express-validator';


export const createUser = (req=request, res=response) => {

    const {name, email, password, revalidPassword } = req.body;

    //manejo de errores
    const errors = validationResult( req );
    if( !errors.isEmpty() ){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    res.status(201).json({
        msg: 'Create user',
        name,
        email,
        password,
        revalidPassword,
    });
}

export const loginUser = (req=request, res=response) => {

    const { email, password } = req.body;

        //manejo de errores
        const errors = validationResult( req );
        if( !errors.isEmpty() ){
            return res.status(400).json({
                ok: false,
                errors: errors.mapped()
            });
        }

    res.status(200).json({
        msg: 'Login ok',
        email,
        password
    });
}

export const ravalidateToken = (req=request, res=response) => {
    res.status(200).json({
        msg: 'Revalidar token'
    });
}