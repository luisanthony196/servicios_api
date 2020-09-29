import Atencion from '../models/Atencion'

export const createAtencion = async (req, res) => {
    const {servicio, asesor, fecha_ate, tipo, solucion, problema} = req.body;
    const newAtencion = new Atencion({servicio, asesor, fecha_ate, tipo, solucion, problema});
    const atencionSaved = await newAtencion.save();

    res.status(200).json(atencionSaved)
}

export const getAtenciones = async (req, res) => {
    const atenciones = await Atencion.find()
    res.json(atenciones)
}

export const getAtencionById = async (req, res) => {
    const atencion = await Atencion.findById(req.params.atencionId)
    res.status(200).json(atencion)
}

export const updateAtencionById = async (req, res) => {
    const updateAtencion = await Atencion.findByIdAndUpdate(req.params.atencionId, req.body, {
        new: true
    })
    res.status(200).json(updateAtencion)
}

export const deleteAtencionById = async (req, res) => {
    const {atencionId} = req.params;
    await Atencion.findByIdAndDelete(atencionId)
    res.status(204).json()
}
