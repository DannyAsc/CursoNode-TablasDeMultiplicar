const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muesra la tabla en consola'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            demandOption: false,
            describe: 'Limite de la tabla de multiplicar'
        }
    })
    .check( (argv, options) => {
        if ( isNaN( argv.b ) ) {
            throw 'La base tiene que ser un numero';
        }   
        return true;     
    })
    .check( (argv, options) => {
        if ( isNaN( argv.h ) || argv.h <= 0 ) {
            throw 'El limite debe ser un numero y debe ser mayor a 0';
        }
        return true;
    } )
    .argv;

module.exports = argv;