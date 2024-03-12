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


export const updateEvent = async( req=request, res=response )=> {


    const eventId = req.params.id;
    const uid = req.uid;

    try {

        const event = await Event.findById(eventId);

        if(!event){
            return res.status(404).json({
                ok:false,
                msg: 'Evento no encontrado'
            })
        }

        if(event.user.toString() !== uid){
            return res.status(401).json({
                ok:false,
                msg: 'No tiene privilegio de editar este evento'
            })
        }
        const newEvent = {
            ...req.body,
            user: uid,
        }

        const eventUpdated = await Event.findByIdAndUpdate( eventId, newEvent, { new: true } );

        return res.status(200).json({
            ok:true,
            event: eventUpdated,
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador o revise los logs en consola',
        })
    }


}


export const deleteEvent = ( req=request, res=response )=> {

    return res.status(200).json({
        ok:true,
        msg: 'delEvent - ok'
    })

}