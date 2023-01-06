/**
* Async await
 */

let getNombre = async() => {
    // throw new Error('No existe un nombre para ese usuario')
    return 'Sneijder'
}

let getNombre2 = function() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve('Sneijder')
        }, 3000);
    })
}

let saludo = async() => {
    let nombre = await getNombre2()
    return `Hola ${nombre}`
}

saludo().then( resp => {
    console.log(resp)
})

getNombre().then(nombre =>{
    console.log(nombre)
}).catch(err => {
    console.log('Error de ASYNC', err)
})