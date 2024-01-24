import { request, response } from 'express';


export const createUser = (req=request, res=response) => {

    const {name, email, password, revalidPassword } = req.body;

    res.status(200).json({
        msg: 'Create user',
        name,
        email,
        password,
        revalidPassword,
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