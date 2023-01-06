

// function sumar(a, b) {
//     return a + b
// }

let sumar = (a, b) => a + b
let saludar = () => 'Hi World Node'
console.log(sumar(10,20))
console.log(saludar())

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneration',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

console.log(deadpool.getNombre())