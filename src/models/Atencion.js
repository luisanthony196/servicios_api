import {Schema, model} from 'mongoose'

const atencionSchema = new Schema({
    servicio: {
        ref: 'Servicio',
        type: Schema.Types.ObjectId
    },
    asesor: {
        ref: 'Asesor',
        type: Schema.Types.ObjectId
    },
    fecha_ate: 'Date',
    tipo: 'String',
    solucion: 'Boolean',
    problema: {
        tipo: 'String',
        descripcion: 'String'
    }
}, {
    versionKey: false
})

export default model('Atencion', atencionSchema, 'atenciones')
