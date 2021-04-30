//variable global var
//se quedan grabadas entre los datos de window
var hola = "hola mundooo";
//ambitos de bloque let
let a = "hola mund00aa0o";
//presentar por consola
console.log(hola);
console.log(a);
//representa el mapeador de toda la ventana
var musica = "Rock";
console.log("antes del bloque",musica);
{
    //esta variable se volvera una variable global
    var musica = "Pop";
    console.log("dentro del bloque",musica);
}
//el resultado es Pop 
console.log("despues del bloque",musica);

console.log("*****************")
let musica2 = "Rock";
console.log("antes del bloque",musica2);
{
    //esta variable se volvera una variable global
    let musica2 = "Pop";
    console.log("dentro del bloque",musica2);
}
//el resultado es Pop 
console.log("despues del bloque",musica2);