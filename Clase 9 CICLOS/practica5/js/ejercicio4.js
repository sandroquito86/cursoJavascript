//while
let contador = 0;

while(contador<5){
  console.log(`hola while ${contador}`);
  contador++;
}
contador =0;
//do while
do{
  console.log(`hola do ${contador}`);
  contador++;
}while(contador<5);

let arreglo = [1,2,3,4,5,6,7,8,9,10]
let nuevoArreglo= []
//for
for (let index = 0; index < arreglo.length; index++) {
  nuevoArreglo.push(arreglo[index])
}
console.log(`nuevo arreglo ${nuevoArreglo}`)

//ecmascript  FORIN recorrer objetos
//recorre propiedades de un objeto
const objeto={
  nombre:"Sandro",
  apellido:"Quito",
  edad:34
}
//no se puede acceder con . debe ser con corchete
for (const key in objeto) {
   console.log(`llave ${key} valor objeto ${objeto[key]}`)
}

//ecmascript  FOROF recorrer objetos
//todos los elementos de cualquier objeto que sea iterrable
for (const elemento of arreglo) {
  console.log(`forOf ${elemento}`)
}

//recorrer un string
let texto = "Hola mundo"
for (const iterator of texto) {
  console.log(`forOf ${iterator}`)
}