import { request, response } from 'express';
import User from '../models/User.js';

export const createUser = async(req=request, res=response) => {    

    const { email } = req.body;
    //Válida si el usuario ya existe en la base de datos
    try {
        let user = await User.findOne({ email });
        
        if( user ){
            return res.status(400).json({
                msg: 'El usuario ya existe'
            });
        }

    //Guardar newUser en base de datos de mongodb
        const newUser = new User(req.body);

        await newUser.save();

        res.status(201).json({
            msg: 'Usuario creado ok!',
            uid: newUser.id,
            name: newUser.name,
        })
        
    } catch (error) {
        //Mostrar error de registro nuevo usuario
        console.log(error);
        return res.status(500).json({
            msg: 'Error en el servidor, porfavor contacte al administrador'
        });
    }
}

export const loginUser = (req=request, res=response) => {

    const { email, password } = req.body;

    res.status(200).json({
        msg: 'Login ok',
        email,
        password,
    });
}

export const ravalidateToken = (req=request, res=response) => {
    res.status(200).json({
        msg: 'Revalidar token'
    });
}