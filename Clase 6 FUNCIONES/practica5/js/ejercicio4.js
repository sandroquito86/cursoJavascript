//funciones
//las funciones tambien son consideradas objetos

//funciones declaradas
function primeraFuncion() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
}
//return de una funcion
function retornaValor(valor=0) {
  return valor;
}

//Invocacion de funciones
primeraFuncion();
console.log(retornaValor(5));
console.log(retornaValor());
funcionDeclarada()

function funcionDeclarada(){
    console.log(`esto es una funcion declarada puede invocarse en cualquier
    parte del codigo incluso antes que haya sido declarada`);
}
fun();
//funciones expresada, funcion anonima
const fun = function (){
    console.log(`funcion expresada, es decir que se asigno a una variable, 
    si ejecutamos esta funcion antes de su invocacion dara un error`);
}
fun();
//recomendacion usar funciones expresadas

