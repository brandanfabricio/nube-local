const fs = require('fs')
const path = require('path')
const processPath = require('../../lib/path')


class Directorios{

    async crearDireactorio(req,res){
       
            const Ruta= processPath(req.params.path);
            const nombre = req.body.nombre;
            if(!nombre){
                return res.status(400).json({
                    msj:"Falta el nombre del archivo"
                })
            }
        try {   
            await fs.promises.mkdir(path.join(Ruta.rutaabosuluta,nombre));

            res.status(201).json({
                msj:"Directorio creado"
            })


        } catch (error) {
            console.log(error)
        }
       
    
        
    }

    async listar(req,res){

        const Ruta = processPath(req.params.path);
        
            const direstorios = await fs.promises.opendir(Ruta.rutaabosuluta);
        const contenido = {file:[],direstorios:[]};




        for await (const dir of direstorios) {
            if(dir.isDirectory()){
                contenido.direstorios.push(dir.name);
            }else{
                contenido.file.push(dir.name)
            }
        }
         
        res.json({
           path:Ruta.rutaRelativa,
           contenido
        })

    }
}
module.exports = new Directorios;