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


let getEmpleado = async (id) => {
    let empleadoDB = empleados.find( employee => employee.id === id )
    if(!empleadoDB){
        throw new Error(`No existe un empleado con el ID ${id}`)
    } else {
        return empleadoDB;
    }
}
let getSalario = (empleado) => {
    let salarioDB = salarios.find( item => item.id === empleado.id)
    if(!salarioDB){
        throw new Error(`No se encontró un salario para el empleado ${empleado.nombre}`)
    } else{
        return {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario
        }
    }
}

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id)
    let resp = await getSalario(empleado)
    return `${resp.nombre} tiene un salario de ${resp.salario}$`
}
getInformacion(2)
.then(msj => console.log(msj))
.catch(err => console.log(err))