import { request, response } from "express";


export const getEvent = ( req=request, res=response )=> {

    return res.status(200).json({
        ok:true,
        msg: 'getEvent - ok'
    })

}


export const createEvent = ( req=request, res=response )=> {

    return res.status(200).json({
        ok:true,
        msg: 'createEvent - ok'
    })

}


export const updateEvent = ( req=request, res=response )=> {

    return res.status(200).json({
        ok:true,
        msg: 'updateEvent - ok'
    })

}


export const deleteEvent = ( req=request, res=response )=> {

    return res.status(200).json({
        ok:true,
        msg: 'delEvent - ok'
    })

}