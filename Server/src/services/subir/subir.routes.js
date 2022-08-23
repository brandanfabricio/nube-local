const {Subir} = require('./subir.controllers');

const {Router} = require('express');

const router = Router();

router.post('/:path?',Subir)

module.exports= router;