

console.log('Inicio del programa')

setTimeout(() => {
    console.log('Primer  timeout')
}, 3000);

setTimeout(() => {
    console.log('Second timeout')
}, 0);

setTimeout(() => {
    console.log('Third timeout')
}, 0);

console.log('Fin del programa')