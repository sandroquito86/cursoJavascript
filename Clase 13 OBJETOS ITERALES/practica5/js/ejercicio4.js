//OBJETOS ITERALES
//nueva forma de escribir metodos y objetos

//lo antiguo
let nombre = "Sandro", edad = 7
const perro = {
  nombre: nombre, edad: edad,
  ladrar: function () {
    console.log("ladrando")
  }
}

console.log(perro)
perro.ladrar()

//lo nuevo

const dog = {
  nombre,//automaticamente toma el valor
  edad,
  raza:'fut',
  ladrar(){ //asi se declaran las funciones
    console.log("guau")
  }

}

console.log(dog)
dog.ladrar()