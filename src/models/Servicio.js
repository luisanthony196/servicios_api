import {Schema, model} from 'mongoose'

const servicioSchema = new Schema({
    cliente: {
        ref: 'Cliente',
        type: Schema.Types.ObjectId
    },
    tipo: 'String',
    monto: 'Number',
    descripcion: 'String'
}, {
    versionKey: false
})

export default model('Servicio', servicioSchema, 'servicios')
