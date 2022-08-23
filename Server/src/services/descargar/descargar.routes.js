const {Router} = require('express');
const Descargar = require('./descargar.controllers')

const router = Router();

router.get('/:path',Descargar.Descargar)

module.exports = router