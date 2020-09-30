import Servicio from '../models/Servicio'

export const createServicio = async (req, res) => {
    const {cliente, tipo, monto, descripcion} = req.body;
    const newServicio = new Servicio({cliente, tipo, monto, descripcion});
    const servicioSaved = await newServicio.save();

    res.status(200).json(servicioSaved)
}

export const getServicios = async (req, res) => {
    const servicios = await Servicio.find()
    res.json(servicios)
}

export const getServicioById = async (req, res) => {
    const servicio = await Servicio.findById(req.params.servicioId)
    res.status(200).json(servicio)
}

export const getServiciosByCliente = async (req, res) => {
    const servicios = await Servicio.find({cliente: req.params.clienteId})
    res.status(200).json(servicios)
}

export const updateServicioById = async (req, res) => {
    const updateServicio = await Servicio.findByIdAndUpdate(req.params.servicioId, req.body, {
        new: true
    })
    res.status(200).json(updateServicio)
}

export const deleteServicioById = async (req, res) => {
    const {servicioId} = req.params;
    await Servicio.findByIdAndDelete(servicioId)
    res.status(204).json()
}
