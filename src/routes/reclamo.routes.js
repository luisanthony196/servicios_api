import {Router} from 'express'
const router = Router();

import * as reclamoCtrl from '../controllers/reclamo.controllers.js'

router.post('/', reclamoCtrl.createReclamo)

router.get('/', reclamoCtrl.getReclamos)

router.get('/:reclamoId', reclamoCtrl.getReclamoById)

router.put('/:reclamoId', reclamoCtrl.updateReclamoById)

router.delete('/:reclamoId', reclamoCtrl.deleteReclamoById)

export default router;
