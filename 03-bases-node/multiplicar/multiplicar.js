const fs = require('fs')
const colors = require('colors');
const colorSafe = require('colors/safe')

let crearArchivo = (base, limite = 10) => {
    return new Promise( (resolve, reject) => {
        if(!Number(base)){
            reject(`El valor introducido ${base} no es un numero`)
            return;
        }
        let data = '';
        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index} \n`
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, err => {
            if( err ) reject(err);
            resolve('El archivo:'+ colorSafe.green(`tabla-${base}.txt ha sido creado`))
        })
    })
}

let listarTabla = (base, limite = 10) => {
    return new Promise( (resolve, reject) => {
        if(!Number(base) && !Number(limite)){
            reject(`El valor ${base} o ${limite} no es un número`)
            return
        }
        console.log('================='.green)
        console.log(`=== tabla de ${base}===`.green)
        console.log('================='.green)

        let data = ''
        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base*index} \n`            
        }
        console.log(data)
        resolve(`Lista de la tabla ${base} fue generado con limite ${limite}`)
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}

