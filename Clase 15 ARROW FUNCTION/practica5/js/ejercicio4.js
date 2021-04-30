//mas expresivo y mas sintetico

const saludo = function(){
  console.log("hola")
}

//arrow function con una sola linea de código NO NECESITA LLAVES
const saludo2 = ()=> console.log("hola");

//arrow function cuando recibe un parametro no necesita parentesis
const saludo3 = nombre => console.log(`hola ${nombre}`);

//arrow function RETURN
const sumar = (a,b)=> a+b;

//arrow function con una sola linea de código NO NECESITA LLAVES
const varias_lineas = ()=> {
  let s = 5
  console.log(`hola ${s}`)
}

const numero = [1,2,3,4,5,6,7,8,9,10]
//arrow function con FOREACH
numero.forEach((el,index) => console.log(`el elemento ${el} esta en la posicion ${index}`));

//CAPTURA EL CONTEXTO THIS

function perro(){
  console.log(this)
};

const perro2= {
  nombre:"sandro",
  ladrar:()=>{ console.log(this)},//objeto global
  ladrar2(){ console.log(this)}//this objeto propio
}

  

saludo();
saludo2();
saludo3("Sandro");
console.log(sumar(4,5));
varias_lineas();
perro();
perro2.ladrar()
perro2.ladrar2()