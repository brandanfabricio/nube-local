const mime = require('mime-types');
const processPatch = require('../../lib/path');
class Descargar{

    async Descargar(req,res){
     let myurl = new URL(`http://192.168.1.14:${req.url}`)
        //     // console.log('url ', myurl.searchParams.get('nombre'))
        // let nombreArch =  myurl.searchParams.get('nombre');

        // console.log('nombre del archivo '+ nombreArch)

            let Rtaarchivo = myurl.searchParams.get('ruta')+ '/' + myurl.searchParams.get('archivo')  
            let archivo =  myurl.searchParams.get('archivo')  
          console.log( myurl.searchParams.get('ruta')== null?archivo:Rtaarchivo)

            let ruta = myurl.searchParams.get('ruta')== null?archivo:Rtaarchivo;


        try {
            const file = processPatch( ruta).rutaabosuluta;
            const mimetype =mime.lookup(file);
            res.setHeader('Content.Disposition', `attachment; filename=${file}`);
            res.setHeader('Content-type',mimetype);
           await  res.download(file);
        } catch (error) {
            console.log(error)
        }
  

    }

}
module.exports = new Descargar;