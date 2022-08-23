const {Router} = require('express');
const Descargar = require('./descargar.controllers')

const router = Router();

router.get('/',Descargar.Descargar)

module.exports = router