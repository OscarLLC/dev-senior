// Descripción:
// Dado un carrito de compras con varios juegos y sus precios, calcular el total a pagar. Si la compra supera los $100, aplicar un 10% de descuento.

// Indicaciones:

// Usa un for para sumar todos los precios de los juegos en el carrito.
// Usa un if para verificar si el total supera $100 y aplicar el descuento.
// Muestra el total final después de aplicar el descuento.

let descuento = 10;
let precioPre = 0;
let precioFinal = 0;
let compra = 0;
let carrito = [
  { juego: "futbol", precio: 90 },
  { juego: "ajedres", precio: 10 },
  { juego: "natacion", precio: 10 },
  { juego: "carreras", precio: 30 },
];
for (let i = 0; i < carrito.length; i++) {
  compra += carrito[i].precio;
}
if (compra >= 100) {
  precioPre = (compra * descuento) / 100;
  precioFinal = compra - precioPre;
  console.log(
    "la compra es > $100 aplica el 10% su descuento es: " +
      precioPre +
      " total apagar es " +
      precioFinal
  );
} else {
  console.log("no aplica");
}
