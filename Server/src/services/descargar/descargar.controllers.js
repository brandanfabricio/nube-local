const mime = require('mime-types');
const processPatch = require('../../lib/path');
class Descargar{

    async Descargar(req,res){
        try {
            const file = processPatch(req.params.path).rutaabosuluta;
            const mimetype =mime.lookup(file);
            res.setHeader('Content.Disposition', `attachment; filename=${file}`);
            res.setHeader('Content-type',mimetype);
            res.download(file);
        } catch (error) {
            console.log(error)
        }
  

    }

}
module.exports = new Descargar;