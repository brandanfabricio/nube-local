const {Router} = require('express');
const router = Router();
const apiRouter = Router();
const SubirArchivos = require('../services/subir/subir.routes')
const DescargarArchivos = require('../services/descargar/descargar.routes')
const Direactorios = require('../services/directorios/directorio.routes')


apiRouter.use('/subir',SubirArchivos)
apiRouter.use('/descargar',DescargarArchivos)
apiRouter.use('/directorios',Direactorios)

router.use('/api/',apiRouter)


module.exports = router;