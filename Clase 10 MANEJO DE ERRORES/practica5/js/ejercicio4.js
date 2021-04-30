try {
  console.log(`try`);
  noExiste;
} catch (error) {
  console.log(`catch ${error}`);
} finally {
  //
  console.log(`finally se ejecuta siempre al final de un bloque try catch`);
}

try {
  let numero = "asd";
  if(isNaN(numero)){//verifica si es un numero
    throw new Error("No se esta recibiendo un numero");
  }
} catch (error) {
  console.log(`se produjo el siguiente error ${error}`);
}
