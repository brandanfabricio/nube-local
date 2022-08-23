const path = require('path');
const {HOST} = require('../config')
const slash = process.platform === 'linux' ? '/'  : '\\';

const processPath =(url)=>{

const rutaRelativa = url ? url.replace(/--/g,slash) : slash;
const rutaabosuluta = path.join(HOST,rutaRelativa);
return {rutaRelativa,rutaabosuluta}; 

}
module.exports = processPath;