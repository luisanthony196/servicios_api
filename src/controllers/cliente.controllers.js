import Cliente from '../models/Cliente'

export const createCliente = async (req, res) => {
    const {nombre, direccion, apellido, dni, fecha_nac, servicios} = req.body;
    const newCliente = new Cliente({nombre, direccion, apellido, dni, fecha_nac, servicios});
    const clienteSaved = await newCliente.save();

    res.status(200).json(clienteSaved)
}

export const getClientes = async (req, res) => {
    const clientes = await Cliente.find()
    res.json(clientes)
}

export const getClienteById = async (req, res) => {
    const cliente = await Cliente.findById(req.params.clienteId)
    res.status(200).json(cliente)
}

export const updateClienteById = async (req, res) => {
    const updateCliente = await Cliente.findByIdAndUpdate(req.params.clienteId, req.body, {
        new: true
    })
    res.status(200).json(updateCliente)
}

export const deleteClienteById = async (req, res) => {
    const {clienteId} = req.params;
    await Cliente.findByIdAndDelete(clienteId)
    res.status(204).json()
}
