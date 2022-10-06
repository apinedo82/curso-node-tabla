
const { crearArchivo } = require ('./helpers/multiplicar');
const argv = require ('./config/yargs');

require ('colors');

console.clear();

// console.log(process.argv);
//console.log(argv);

// const [ , , arg3 = 'base=1'] = process.argv;
// const [ , base = 5] = arg3.split('=');

crearArchivo(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo.rainbow, `Archivo Creado`))
  .catch(err => console.log(err));



