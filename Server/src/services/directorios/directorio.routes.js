const {Router} = require('express');
const Dir = require('./direstorio.controller')
const router = Router();

router.post('/:path?',Dir.crearDireactorio);

router.get('/:path?',Dir.listar)

module.exports = router;