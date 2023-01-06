
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


let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find( employee => employee.id === id )
    if(!empleadoDB){
        callback(`No existe un empleado con el ID ${id}`)
    } else {
        callback(null, empleadoDB);
    }
}

/*
{
    nombre: 'Melissa',
    salario: 3000
}
.. No se encontró un salario para el usuario Fernando
*/
let getSalario = (empleado, callback) => {   
    let salarioDB = salarios.find( salario => empleado.id === salario.id)
    if(!salarioDB){
        callback(`No se encontró un salario para el usuario ${empleado.nombre}`)
    } else {
        let salary = {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario 
        }
        callback(null,salary)
    }
}

getEmpleado(2, (err, empleado) => {
    if(err){
        return console.error(err)
    }
    getSalario(empleado, (err, resp) => {
        if(err){
            return console.error(err)
        }
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`)
    })
    console.log(empleado)
})