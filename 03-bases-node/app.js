// requireds
// const fs = require('fs')
// const fs = require('express')
// const fs = require('./fs')
const { argv } = require('./config/yargs')
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
// let base = argv.base
// let base = 'abc';
// let argv = process.argv
// let parameter = argv[2]
// let base = parameter.split('=')[1]

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('sw listar')
        listarTabla(argv.base, argv.limite).then(resp => console.log(resp))
        .catch(err => console.error('Error => ', err))
        break;
    case 'crear':
        console.log('sw crear')
        crearArchivo(argv.base, argv.limite).then( resp => console.log(resp) )
        .catch(err => console.error('Error: ', err) )
        break;
    default:
        console.log('sw comando no reconocido')
        break;
}

