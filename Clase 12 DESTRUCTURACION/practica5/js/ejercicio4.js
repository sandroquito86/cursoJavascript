//es una nueva forma de asignar valores a objetos o arreglos

const arreglo = [1,2,3]
//necesito guardar cada indice en variables diferentes
const [uno,dos,tres] =arreglo
console.log(uno,dos,tres)
const persona={
  nombre:"sandro",
  apellido:"quito",
  edad:34
}
//se necesita tener cada atributo en una variable

let{nombre,apellido,edad}=persona
console.log(nombre,apellido,edad )
