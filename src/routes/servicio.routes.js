import {Router} from 'express'
const router = Router();

import * as servicioCtrl from '../controllers/servicio.controllers.js'

router.post('/', servicioCtrl.createServicio)

router.get('/', servicioCtrl.getServicios)

router.get('/:servicioId', servicioCtrl.getServicioById)

router.get('/cliente/:clienteId', servicioCtrl.getServiciosByCliente)

router.put('/:servicioId', servicioCtrl.updateServicioById)

router.delete('/:servicioId', servicioCtrl.deleteServicioById)

export default router;
