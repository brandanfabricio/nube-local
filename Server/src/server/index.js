const express = require('express');
const {PORT} = require('../config');
const fileUpdate = require('express-fileupload');
const cors = require('cors');
const Rutas = require('../router')
const morgan = require('morgan');

class Servidor{
    constructor(){
        this.app = express();
        this.port = PORT;
        this.middleware();
        this.Rutas()
    }

    middleware(){
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());
        this.app.use(fileUpdate({
            useTempFiles:true,
            tempFileDir:'/tmp'
        }))
        this.app.use(morgan('dev'))
    }

    Rutas(){
     this.app.use(Rutas)
    }
    Iniciar(){
        this.app.listen(this.port,()=>{
                console.log('Iniciado en el puerto',this.port)
        })
    }

}
module.exports = new Servidor();