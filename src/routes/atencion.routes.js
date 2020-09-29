import {Router} from 'express'
const router = Router();

import * as atencionCtrl from '../controllers/atencion.controllers.js'

router.post('/', atencionCtrl.createAtencion)

router.get('/', atencionCtrl.getAtenciones)

router.get('/:atencionId', atencionCtrl.getAtencionById)

router.put('/:atencionId', atencionCtrl.updateAtencionById)

router.delete('/:atencionId', atencionCtrl.deleteAtencionById)

export default router;
