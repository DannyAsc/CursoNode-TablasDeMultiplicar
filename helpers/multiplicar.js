const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar, hasta = 10 ) => {
    try {
        
        let salida = '';
        let consola = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${i*base}\n`;
            consola += `${base} ${'x'.red} ${i} ${'='.red} ${i*base}\n`;
        };

        if (listar) {
            console.log('===================='.green);
            console.log('   Tabla del: '.green,base);
            console.log('===================='.green);             
            console.log( colors.blue(consola) );            
        }
    
        
        const nombreArchivo = `./salida/tabla-${base}.txt`;
    
        fs.writeFileSync( nombreArchivo, salida);
        
        return nombreArchivo;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}