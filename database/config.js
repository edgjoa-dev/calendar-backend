import { connect } from 'mongoose'


export const dbConnect = async()=> {

    try {
        await connect(process.env.MONGODB_CNN)

        console.log('Conexion exitosa a la base de datos - ok');
        return true;

    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar a la base de datos');
    }

}