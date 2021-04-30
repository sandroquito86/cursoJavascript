//cadena de texto
let cadena ="Hola mundo";
//creando variable con el constructor de string
let constructor = new String("hola constructor");
let lorem = '     Hola mundo se repite mundo    '
console.log(cadena);
console.log(constructor);
//cantidad de caracteres
console.log(cadena.length,constructor.length);
console.log("*****************");
//mayuscula
console.log(cadena.toUpperCase());
//minuscula
console.log(cadena.toLowerCase());
//buscar coincidencia
console.log(lorem.includes("se"));
//quitar espacios en blanco al inicio y al fin
console.log(lorem.trim());
//convertir cadena en arreglo split puede separar por caracter especifico
console.log(lorem.trim().split());
console.log(lorem.trim().split(" "));
//concatenar 
// para concatenar en una misma variable +=
let nombre = "Sandro";
let apellido = "Quito";
let nombre_completo = nombre + " " + apellido;
console.log(nombre_completo);
//interpolacion ``->template string permite saltos de linea el + no lo permite
let interpolacion = `hola mi nombre es ${nombre} ${apellido}`
console.log(interpolacion);
let lu = ` <ul>
<li>enero</li>
<li>febrero</li>
<li>marzo</li>
</ul>`
console.log(lu);