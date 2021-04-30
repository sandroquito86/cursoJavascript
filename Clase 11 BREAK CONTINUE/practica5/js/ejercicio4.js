let arreglo = [1,2,3,4,5,6,7,8,9,10];

for (let index = 0; index < arreglo.length; index++) {
  if(index === 5){
    break; //sale del ciclo
  }
  console.log(`valor ${index}`)

}

for (let index = 0; index < arreglo.length; index++) {
  if(index === 5){
    continue; //no toma en consideracion este index y continua
  }
  console.log(`valor ${index}`)

}