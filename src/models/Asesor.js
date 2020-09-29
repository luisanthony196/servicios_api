import {Schema, model} from 'mongoose'

const asesorSchema = new Schema({
    nombre: String,
    direccion: {
        provincia: String,
        distrito: String,
        domicilio: String
    },
    apellido: String,
    dni: String,
    fecha_nac: Date,
    area: String,
    telefono: String
}, {
    versionKey: false
})

export default model('Asesor', asesorSchema, 'asesores')
