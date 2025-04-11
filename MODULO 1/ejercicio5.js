// Descripción:
// Dado un array con nombres de juegos y otro con sus respectivos precios, recórrelos con un for para mostrar la lista de juegos en el carrito de compra.

// Indicaciones:

// Declara dos arreglos: uno con nombres de juegos y otro con precios.
// Usa un ciclo for para recorrer ambos arreglos simultáneamente.
// Muestra cada juego con su precio en la consola.
let juegos = [
  { nombre: "cartas" },
  { nombre: "lock" },
  { nombre: "free" },
  { nombre: "carreras" },
  { nombre: "tiro al blanco" },
];

let precios = [
  { precio: 1400 },
  { precio: 1700 },
  { precio: 20000 },
  { precio: 400 },
  { precio: 5000 },
];

for (let i = 0; i < juegos.length || precios.length; i++) {
  console.log(juegos[i].nombre, precios[i].precio);
}
