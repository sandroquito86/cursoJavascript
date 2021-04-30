/*operadores no conocidos
===
compara el tipo de dato y su valor
buenas practicas utiliza triple igual*/

let i;
i += 3; //i=i+3
i++;
--i; //i=i+1
//&& and
//|| or
//not negacion

//IF ELSE
let edad = 34;
if (edad < 35) {
  console.log(`menor de 35`);
} else {
  console.log("mayor o igual a 35");
}

//IF ANIDADO
/* if(){

}else if(){

}else if(){

}else{
    
} */

//operador ternario
let eresMayor = edad >= 18 ? `Eres mayor` : `Eres menor`;
console.log(eresMayor);

//switch - case
let dia = 2;
switch (dia) {
  case 0:
    console.log(`cero`);
  case 1:
    console.log(`uno`);
  case 2:
    console.log(`dos`);
    break;

  default:
    break;
}
