//PARAMETROS REST

//funcion que recibira multiples parametros
function sumar(a, b, ...c) {
  let resultado = a + b;

  c.forEach(function(n){
      resultado += n
  });
  return resultado;
}

console.log(sumar(1,2,3,4,5,6,7,8,9,10))

//operador de propagacion

const arreglo =[1,2,3,4,5];
const arreglo2 =[6,7,8,9,10];
console.log(arreglo,arreglo2)
//crear arreglo 3 a partir de los 2 elementos
const arreglo3 = [...arreglo, ...arreglo2]
console.log(arreglo3)