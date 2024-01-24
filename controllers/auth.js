import { request, response } from 'express';


export const createUser = (req=request, res=response) => {
    res.status(200).json({
        msg: 'Registro'
    });
}

export const loginUser = (req=request, res=response) => {
    res.status(200).json({
        msg: 'Login'
    });
}

export const ravalidateToken = (req=request, res=response) => {
    res.status(200).json({
        msg: 'Revalidar token'
    });
}