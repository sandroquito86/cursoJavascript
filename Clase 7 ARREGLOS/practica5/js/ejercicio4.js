const arreglo = [];
arreglo.push(9);
arreglo.push(['a','b']);
console.log(arreglo[1][1]);
//iniciando arreglo
const d = Array.of(1,2,3,4,5,6);
console.log(d);

//definir cantidad de elementos e inicializacion
const e = Array(100).fill(false);
console.log(e);
//recorrer arreglo funcion expresada
d.forEach(function(e,i){
console.log(`index ${i}, hi ${e}`)
});