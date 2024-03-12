import { request, response } from "express";
import Event  from "../models/Events.js";




export const getEvent = async( req=request, res=response )=> {

    const events = await Event.find().populate('user', 'name');

    try {
        return res.status(200).json({
            ok:true,
            events
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador o revise los logs en consola'
        })
    }
}


export const createEvent = async( req=request, res=response )=> {

    const event = new Event(req.body);
    console.log(event);

    try {
        event.user = req.uid;
        const eventCreated = await event.save();

        return res.status(200).json({
            ok:true,
            eventCreated
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