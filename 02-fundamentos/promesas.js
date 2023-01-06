

let empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Sneijder'
}, {
    id: 3,
    nombre : 'Paola Yukxin'
}]

let salarios = [{
    id: 1,
    salario: 1000
},{
    id: 2,
    salario: 2000
}]


let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find( employee => employee.id === id )
        if(!empleadoDB){
            reject(`No existe un empleado con el ID ${id}`)
        } else {
            resolve(empleadoDB);
        }
    })
}
let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find( item => item.id === empleado.id)
        if(!salarioDB){
            reject(`No se encontró un salario para el usuario ${empleado.nombre}`)
            reject(`No se encontró un salario para el usuario ${empleado.nombre}`)
            console.log('Otra linea despues')
        } else{
            resolve({
                id: empleado.id,
                nombre: empleado.nombre,
                salario: salarioDB.salario
            })
        }
    })
}
// getEmpleado(3).then( empleado => {
//     console.log(`Empleado de BD`, empleado)
//     getSalario(empleado).then( resp => {
//         console.log(`El empleado ${resp.nombre} gana ${resp.salario}`)
//     }, err => console.error(err) )
// }, err => console.log(err) )

getEmpleado(3).then( empleado => {
    return getSalario(empleado);
}).then( resp => {
    console.log(`El empleado ${resp.nombre} gana ${resp.salario}`)
}).catch( err => {
    console.log(err)
})