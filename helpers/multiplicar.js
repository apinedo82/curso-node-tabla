
//import * as fs from 'node:fs/promises';
const fs = require('fs');

const crearArchivo = async(base, listar, hasta) => {

    try{
        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            let e = i * base;
            salida += `${base} X ${i} = ${base * i}\n`;
        }

        fs.writeFileSync(`salida/tabla-${base}.txt`, salida);

        if(listar === true){
            console.log(salida.green);
        }

        return (`tabla-${base}.txt`);

    } catch(err){        
        throw err;
    }


    
}

module.exports = {
    crearArchivo
}