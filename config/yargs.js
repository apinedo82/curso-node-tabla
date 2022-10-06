const argv = require('yargs')
              .option('b', {
                alias:'base',
                type:'number',
                demandOption:true,
                describe: 'Es la base de la tabla e multiplicar'                
              })
              .option('l', {
                alias:'listar',
                type:'boolean',
                default: false,
                describe:'Muestra la tabla de multiplicar'
              })
              .option('h', {
                alias:'hasta',
                type:'number',
                default: 10,
                describe:'Es el numero hasta el cual quieres multiplicar'
              })
              .check((argv, options) => {
                if(isNaN(argv.b)){
                  throw 'La base debe ser un número'
                }
                if(isNaN(argv.h)){
                    throw 'El hasta debe ser un número'
                }
                return true;
              })
              .argv;

module.exports = argv;