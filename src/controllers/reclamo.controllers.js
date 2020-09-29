import Reclamo from '../models/Reclamo'

export const createReclamo = async (req, res) => {
    const {servicio, asesor, concepto, fecha_emi, fecha_ven, prioridad, problema} = req.body;
    const newReclamo = new Reclamo({servicio, asesor, concepto, fecha_emi, fecha_ven, prioridad, problema});
    const reclamoSaved = await newReclamo.save();

    res.status(200).json(reclamoSaved)
}

export const getReclamos = async (req, res) => {
    const reclamos = await Reclamo.find()
    res.json(reclamos)
}

export const getReclamoById = async (req, res) => {
    const reclamo = await Reclamo.findById(req.params.reclamoId)
    res.status(200).json(reclamo)
}

export const updateReclamoById = async (req, res) => {
    const updateReclamo = await Reclamo.findByIdAndUpdate(req.params.reclamoId, req.body, {
        new: true
    })
    res.status(200).json(updateReclamo)
}

export const deleteReclamoById = async (req, res) => {
    const {reclamoId} = req.params;
    await Reclamo.findByIdAndDelete(reclamoId)
    res.status(204).json()
}
