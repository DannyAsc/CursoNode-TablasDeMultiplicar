const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');


console.clear();

// console.log(process.argv);
// console.log(argv);

// console.log('base: yargs', argv.base);

// const [,, arg3 = 'base=5'] = process.argv;
// const [, base = 5 ] = arg3.split('=');
// console.log(base);

// const base = 3;
crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.yellow, 'creado'.yellow) )
    .catch( err => console.log( err ) );

