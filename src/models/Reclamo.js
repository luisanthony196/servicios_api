import {Schema, model} from 'mongoose'

const reclamoSchema = new Schema({
    servicio: {
        ref: 'Servicio',
        type: Schema.Types.ObjectId
    },
    asesor: {
        ref: 'Asesor',
        type: Schema.Types.ObjectId
    },
    concepto: 'String',
    fecha_emi: 'Date',
    fecha_ven: 'Date',
    prioridad: 'Number',
    problema: {
        tipo: 'String',
        descripcion: 'String'
    }
}, {
    versionKey: false
})

export default model('Reclamo', reclamoSchema, 'reclamos')
