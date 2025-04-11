// Descripción:
// Dado un usuario con una categoría predefinida ("Normal", "Estudiante", "VIP", "Premium", "Empleado", "Mayorista")
// y una lista de productos con sus respectivos precios, calcular el total a pagar después de aplicar
//  el descuento correspondiente.

// Indicaciones:

// Declara una variable con el tipo de usuario.
// Crea un array con los precios de varios productos.
// Usa un ciclo for para sumar los precios de los productos.
// Aplica el descuento correspondiente según la categoría del usuario.
// Calcula y muestra el total a pagar.

// let categoria = prompt(
//   "Escoge una cateria: \n Normal \n Estudiante \n Vip \n Premium \n Empleado \n Mayorista"
// );

// let proIngresado = prompt(
//   "Ingresa un producto de promosion: \n Azucar \n Arroz \n Aceite \n Mentas \n Frutiño"
// );

// let productos = [
//   { nombre: "azucar", precio: 1500 },
//   { nombre: "arroz", precio: 1400 },
//   { nombre: "aceite", precio: 23000 },
//   { nombre: "mentas", precio: 500 },
//   { nombre: "frutiño", precio: 1000 },
// ];
// let encontrado = null;
// let precioFinal = "";
// if (categoria.toLowerCase() === "Normal" || "normal") {
//   //   console.log(categoria);
//   for (let i = 0; i < productos.length; i++) {
//     // console.log(productos[i].nombre, productos[i].precio);
//     if (productos[i].nombre.toLowerCase() === proIngresado.toLowerCase()) {
//       encontrado = productos[i];
//       descuento = 20;
//       let precioPre = (productos[i].precio * descuento) / 100;
//       precioFinal = productos[i].precio - precioPre;
//       //   console.log(precioFinal);
//       break;
//     }
//   }
// } else if (categoria === "Estudiante" || "Estudiante") {
//   //   console.log(categoria);
//   for (let i = 0; i < productos.length; i++) {
//     // console.log(productos[i].nombre, productos[i].precio);
//     if (productos[i].nombre.toLowerCase() === proIngresado.toLowerCase()) {
//       encontrado = productos[i];
//       descuentoEs = 30;
//       let precioPre = (productos[i].precio * descuentoEs) / 100;
//       precioFinal = productos[i].precio - precioPre;
//       console.log(precioFinal);
//       break;
//     }
//   }
// } else if (categoria === "Vip" || "vip") {
//   //   console.log(categoria);
//   for (let i = 0; i < productos.length; i++) {
//     // console.log(productos[i].nombre, productos[i].precio);
//     if (productos[i].nombre.toLowerCase() === proIngresado.toLowerCase()) {
//       encontrado = productos[i];
//       descuento = 40;
//       precioPre = (productos[i].precio * descuento) / 100;
//       precioFinal = productos[i].precio - precioPre;
//       //   console.log(precioFinal);
//       break;
//     }
//   }
// } else if (categoria === "Premium" || "premium") {
//   //   console.log(categoria);
//   for (let i = 0; i < productos.length; i++) {
//     // console.log(productos[i].nombre, productos[i].precio);
//     if (productos[i].nombre.toLowerCase() === proIngresado.toLowerCase()) {
//       encontrado = productos[i];
//       descuento = 50;
//       let precioPre = (productos[i].precio * descuento) / 100;
//       precioFinal = productos[i].precio - precioPre;
//       //   console.log(precioFinal);
//       break;
//     }
//   }
// } else if (categoria === "Empleado" || "empleado") {
//   //   console.log(categoria);
//   for (let i = 0; i < productos.length; i++) {
//     // console.log(productos[i].nombre, productos[i].precio);
//     if (productos[i].nombre.toLowerCase() === proIngresado.toLowerCase()) {
//       encontrado = productos[i];
//       descuento = 60;
//       let precioPre = (productos[i].precio * descuento) / 100;
//       precioFinal = productos[i].precio - precioPre;
//       //   console.log(precioFinal);
//       break;
//     }
//   }
// } else if (categoria === "Mayorista" || "mayorista") {
//   //   console.log(categoria);
//   for (let i = 0; i < productos.length; i++) {
//     // console.log(productos[i].nombre, productos[i].precio);
//     if (productos[i].nombre.toLowerCase() === proIngresado.toLowerCase()) {
//       encontrado = productos[i];
//       descuento = 70;
//       let precioPre = (productos[i].precio * descuento) / 100;
//       precioFinal = productos[i].precio - precioPre;
//       //   console.log(precioFinal);
//       break;
//     }
//   }
// }
// if (encontrado) {
//   console.log(
//     `La categoria ${categoria} con producto ${
//       encontrado.nombre
//     } tiene un valor de ${encontrado.precio} pero hoy tiene un descuento del ${
//       descuento || descuentoEs
//     }  % quedando ${precioFinal}`
//   );
// } else {
//   console.log("no exise");
// }

/////////////////////////CODIGO PROFE //////////////////////
let categoria = prompt(
  "Escoge una cateria: \n Normal \n Estudiante \n Vip \n Premium \n Empleado \n Mayorista"
);

let proIngresado = prompt(
  "Ingresa un producto de promosion: \n Azucar \n Arroz \n Aceite \n Mentas \n Frutiño"
);

let productos = [
  { nombre: "azucar", precio: 1500 },
  { nombre: "arroz", precio: 1400 },
  { nombre: "aceite", precio: 23000 },
  { nombre: "mentas", precio: 500 },
  { nombre: "frutiño", precio: 1000 },
];

let encontrado = null;
let precioFinal = 0;
var descuento = 0;

categoria = categoria.toLowerCase();
proIngresado = proIngresado.toLowerCase();

function comprobacionesBucles(descuento) {
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].nombre === proIngresado) {
      sacarDescuento(productos[i], descuento);
      break;
    }
  }
}

function sacarDescuento(producto, descuentoIndicado) {
  encontrado = producto;
  descuento = descuentoIndicado;
  let precioPre = (producto.precio * descuento) / 100;
  precioFinal = producto.precio - precioPre;
}

if (categoria === "normal") {
  comprobacionesBucles(20);
}
if (categoria === "estudiante") {
  comprobacionesBucles(30);
}
if (categoria === "vip") {
  comprobacionesBucles(40);
}
if (categoria === "premium") {
  comprobacionesBucles(50);
}
if (categoria === "empleado") {
  comprobacionesBucles(60);
}
if (categoria === "mayorista") {
  comprobacionesBucles(70);
}

if (encontrado) {
  console.log(
    `La categoria ${categoria} con producto ${encontrado.nombre} tiene un valor de ${encontrado.precio} pero hoy tiene un descuento del ${descuento}  % quedando ${precioFinal}`
  );
} else {
  console.log("no existe la categoria o el producto.");
}
