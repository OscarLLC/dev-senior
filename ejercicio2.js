// Dado un personaje predefinido("Mago", "Guerrero", "Arquero"),
// mostrar su habilidad especial utilizando una estructura switch-case.

let personaje = parseInt(
  prompt("Escoje tu personaje \n 1: Mago \n 2: Guerrero \n 3:Arquero")
);

switch (personaje) {
  case 1:
    console.log("Mago: poder realizar trucos de magia pura!!");
    break;
  case 2:
    console.log("Guerrero: poder realizar luchas libres con espada!!");
    break;
  case 3:
    console.log(
      "Arquero: poder realizar atajadas genial con las manos atadas!!"
    );
    break;
  default:
    console.log("uff ingresa una opcion valida entre 1 - 3!!");
}
