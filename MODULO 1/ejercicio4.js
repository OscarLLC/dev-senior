let personaje = prompt(
  "Escoge tu personaje: \n Arquero atrapa balones \n Guerrero ataque de flecha \n Mago poder de magia oscura"
);
let xpIngresa = parseInt(prompt("Ingresa XP para mejorar"));
let xp = 100;
let xpRequerida = 80;
if (xpIngresa >= xpRequerida) {
  let habilidadMejorada = xp + xpIngresa;
  console.log(
    "habilidad mejorada del " + personaje + " con XP:" + habilidadMejorada
  );
} else {
  console.log("no puedes mejorar tu habilidad");
}
