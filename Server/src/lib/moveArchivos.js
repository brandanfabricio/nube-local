const fs = require('fs');
const path = require('path');

const moveFile = (file,ruta)=>{

    const filePath = path.join(ruta,file.name);

    return new Promise((resolve,reject)=>{
            fs.promises.access(filePath)
                .then(()=>{
                    reject(new Error(`El archivo ${file.name} ya existe`))
                    
                })
                .catch(()=>{
                    file.mv(filePath,(err)=>{
                        if(err){
                            reject(err)
                        }else{
                            resolve();
                        }
                    })
                })
    })

}
module.exports =  moveFile;