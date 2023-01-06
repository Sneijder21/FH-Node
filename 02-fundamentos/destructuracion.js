let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneration',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

console.log(deadpool.getNombre())

let {nombre: nombreDeadPool, apellido, poder } = deadpool

console.log({nombreDeadPool, apellido, poder})