import { Schema, model } from 'express';


const EventSchema = Schema({

    title:{
        type: String,
        required: true,
    },
    note:{
        type: String,
    },
    start:{
        type: Date,
        require: true,
    },
    end:{
        type: Date,
        require: true,
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }

})



const Event = model('Event', EventSchema);
export default Event;