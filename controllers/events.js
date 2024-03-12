import { request, response } from "express";


export const getEvent = ( req=request, res=response )=> {

    return res.status(200).json({
        ok:true,
        msg: 'getEvent - ok'
    })

}


export const createEvent = async( req=request, res=response )=> {

    const event = new Event(req.body);

    try {

        const eventCreated = await event.save();

        return res.status(200).json({
            ok:true,
            event: eventCreated
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador o revise los logs en consola'
        })
    }

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