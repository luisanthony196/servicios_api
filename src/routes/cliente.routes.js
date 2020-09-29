import {Router} from 'express'
const router = Router();

import * as clienteCtrl from '../controllers/cliente.controllers.js'

router.post('/', clienteCtrl.createCliente)

router.get('/', clienteCtrl.getClientes)

router.get('/:clienteId', clienteCtrl.getClienteById)

router.put('/:clienteId', clienteCtrl.updateClienteById)

router.delete('/:clienteId', clienteCtrl.deleteClienteById)

export default router;
