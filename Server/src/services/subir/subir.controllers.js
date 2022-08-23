const processPath = require('../../lib/path');
const moverArchivo = require('../../lib/moveArchivos');


class Subir {

  async Subir(req, res) {

    console.log(req.files)

    if (!req.files || Object.keys(req.files).length === 0) {
      res.status(400).json({ msj: 'no hay archivos en la peticion' });
      return;
    }
    if (!req.files.archivo) {
      res.status(400).json({ msg: 'no hay archivos en la peticion' });
      return;
    }
    const ruta = processPath(req.params.path);
    
    let archivo = req.files.archivo;

    // let nombreAchivo = archivo.name.split('.');
    if (!Array.isArray(archivo)) {
      archivo = [archivo];
    }
    try {
      for (const file of archivo) {

        await moverArchivo(file, ruta.rutaabosuluta);
      }

    } catch (error) {
      console.log(error)

      return res.status(500).json({
        msj: "El archivo no se pudo guardar",
        msj: error.message
      })
    }



    res.status(200).json({
      msj: "Archivo subido correctamente",
      path: ruta.rutaRelativa
    })






  }

}

module.exports = new Subir