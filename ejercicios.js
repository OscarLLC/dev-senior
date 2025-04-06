// 1.  Dado un usuario con una categoría predefinida("Normal", "Estudiante", "VIP" o "Premium")
//  y un precio base de un producto, calcular el total a pagar aplicando el descuento correspondiente.

let categoria = prompt(
  "Escoja su categoria \n Normal \n Estudiante \n VIP \n Premium"
);
let producto = prompt("Ingresa el nombre del producto");
let preciOriginal = parseInt(prompt("Ingresa el precio del procducto"));

if (categoria === "Normal") {
  let descuento = 0.1 * preciOriginal;
  let precioDescuento = preciOriginal - descuento;
  console.log(
    "El valor final que pagaría el usuario categoria " +
      categoria +
      "es de: " +
      precioDescuento
  );
} else if (categoria === "Estudiante") {
  let descuento = 0.2 * preciOriginal;
  let precioDescuento = preciOriginal - descuento;
  console.log(
    "El valor final que pagaría el usuario categoria " +
      categoria +
      "es de: " +
      precioDescuento
  );
} else if (categoria === "VIP") {
  let descuento = 0.3 * preciOriginal;
  let precioDescuento = preciOriginal - descuento;
  console.log(
    "El valor final que pagaría el usuario categoria " +
      categoria +
      "es de: " +
      precioDescuento
  );
} else if (categoria === "Premium") {
  let descuento = 0.4 * preciOriginal;
  let precioDescuento = preciOriginal - descuento;
  console.log(
    "El valor final que pagaría el usuario categoria " +
      categoria +
      "es de: " +
      precioDescuento
  );
}
// Por ejemplo, si un artículo cuesta $1,000 y tiene un descuento del 20 %,
// el cálculo sería: $1,000 x(20 % / 100) = $200.
