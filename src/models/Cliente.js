import {Schema, model} from 'mongoose'

const clienteSchema = new Schema({
    nombre: String,
    direccion: {
        provincia: String,
        distrito: String,
        domicilio: String
    },
    apellido: String,
    dni: String,
    fecha_nac: Date,
    servicios: [{
        ref: 'Servicio',
        type: Schema.Types.ObjectId
    }]
}, {
    versionKey: false
})

export default model('Cliente', clienteSchema, 'clientes')
