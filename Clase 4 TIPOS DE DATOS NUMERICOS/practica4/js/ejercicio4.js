let a =2;
let b = new Number(1);
let c = 7.149;
let texto = "7.5";
console.log(a,b,c);
//cuantos numeros decimales queremos de un valor numerico
//tomar en cuenta que redondea
console.log(c.toFixed(1));
//devuelve solo la parte entera
console.log(parseInt(c));
//devuelve solo la parte flotante
console.log(parseFloat(c));
//de que naturaleza es la variable
console.log(typeof texto);
//solo esta sumando la parte entera
console.log(parseInt(texto)+b);
//suma bien
console.log(parseFloat(texto)+b);