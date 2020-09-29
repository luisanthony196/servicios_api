import {Router} from 'express'
const router = Router();

import * as asesorCtrl from '../controllers/asesor.controllers.js'

router.post('/', asesorCtrl.createAsesor)

router.get('/', asesorCtrl.getAsesores)

router.get('/:asesorId', asesorCtrl.getAsesorById)

router.put('/:asesorId', asesorCtrl.updateAsesorById)

router.delete('/:asesorId', asesorCtrl.deleteAsesorById)

export default router;
