//dentro de una objeto las variables se llaman atributoos
//y las funciones se llaman metodos
const b = {
  nombre: "Sandro",
  apellido: "Quito",
  edad: 34,
  saludar: function () {
    console.log("Hola");
  },
  comoMeLlamo: function(){
      return `Mi nombre es ${this.nombre} ${this.apellido} ${this.edad}`
  }
};
console.log(b);
console.log(b["nombre"]);
console.log(b.apellido);
b.saludar();
console.log(b.comoMeLlamo());
console.log(Object.keys(b));//llaves
console.log(Object.values(b));//valores
console.log(b.hasOwnProperty("nombre"));//busca la existencia de un atributo
