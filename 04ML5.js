function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
}

module.exports = mayoriaDeEdad;
function mayoriaDeEdad(edad){
  if (edad >= 18){
    console.log ("Allowed");
  } else {
    console.log("Not Allowed");
  }
}
mayoriaDeEdad(19);