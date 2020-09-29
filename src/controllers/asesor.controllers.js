import Asesor from '../models/Asesor'

export const createAsesor = async (req, res) => {
    const {nombre, direccion, apellido, dni, fecha_nac, area, telefono} = req.body;
    const newAsesor = new Asesor({nombre, direccion, apellido, dni, fecha_nac, area, telefono});
    const asesorSaved = await newAsesor.save();

    res.status(200).json(asesorSaved)
}

export const getAsesores = async (req, res) => {
    const asesores = await Asesor.find()
    res.json(asesores)
}

export const getAsesorById = async (req, res) => {
    const asesor = await Asesor.findById(req.params.asesorId)
    res.status(200).json(asesor)
}

export const updateAsesorById = async (req, res) => {
    const updateAsesor = await Asesor.findByIdAndUpdate(req.params.asesorId, req.body, {
        new: true
    })
    res.status(200).json(updateAsesor)
}

export const deleteAsesorById = async (req, res) => {
    const {asesorId} = req.params;
    await Asesor.findByIdAndDelete(asesorId)
    res.status(204).json()
}
