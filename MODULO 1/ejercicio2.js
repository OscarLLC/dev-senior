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
let precioFinal = "";
if (categoria.toLowerCase() === "Normal" || "normal") {
  //   console.log(categoria);
  for (let i = 0; i < productos.length; i++) {
    // console.log(productos[i].nombre, productos[i].precio);
    if (productos[i].nombre.toLowerCase() === proIngresado.toLowerCase()) {
      encontrado = productos[i];
      descuento = 20;
      let precioPre = (productos[i].precio * descuento) / 100;
      precioFinal = productos[i].precio - precioPre;
      //   console.log(precioFinal);
      break;
    }
  }
} else if (categoria === "Estudiante" || "Estudiante") {
  //   console.log(categoria);
  for (let i = 0; i < productos.length; i++) {
    // console.log(productos[i].nombre, productos[i].precio);
    if (productos[i].nombre.toLowerCase() === proIngresado.toLowerCase()) {
      encontrado = productos[i];
      descuentoEs = 30;
      let precioPre = (productos[i].precio * descuentoEs) / 100;
      precioFinal = productos[i].precio - precioPre;
      console.log(precioFinal);
      break;
    }
  }
} else if (categoria === "Vip" || "vip") {
  //   console.log(categoria);
  for (let i = 0; i < productos.length; i++) {
    // console.log(productos[i].nombre, productos[i].precio);
    if (productos[i].nombre.toLowerCase() === proIngresado.toLowerCase()) {
      encontrado = productos[i];
      descuento = 40;
      precioPre = (productos[i].precio * descuento) / 100;
      precioFinal = productos[i].precio - precioPre;
      //   console.log(precioFinal);
      break;
    }
  }
} else if (categoria === "Premium" || "premium") {
  //   console.log(categoria);
  for (let i = 0; i < productos.length; i++) {
    // console.log(productos[i].nombre, productos[i].precio);
    if (productos[i].nombre.toLowerCase() === proIngresado.toLowerCase()) {
      encontrado = productos[i];
      descuento = 50;
      let precioPre = (productos[i].precio * descuento) / 100;
      precioFinal = productos[i].precio - precioPre;
      //   console.log(precioFinal);
      break;
    }
  }
} else if (categoria === "Empleado" || "empleado") {
  //   console.log(categoria);
  for (let i = 0; i < productos.length; i++) {
    // console.log(productos[i].nombre, productos[i].precio);
    if (productos[i].nombre.toLowerCase() === proIngresado.toLowerCase()) {
      encontrado = productos[i];
      descuento = 60;
      let precioPre = (productos[i].precio * descuento) / 100;
      precioFinal = productos[i].precio - precioPre;
      //   console.log(precioFinal);
      break;
    }
  }
} else if (categoria === "Mayorista" || "mayorista") {
  //   console.log(categoria);
  for (let i = 0; i < productos.length; i++) {
    // console.log(productos[i].nombre, productos[i].precio);
    if (productos[i].nombre.toLowerCase() === proIngresado.toLowerCase()) {
      encontrado = productos[i];
      descuento = 70;
      let precioPre = (productos[i].precio * descuento) / 100;
      precioFinal = productos[i].precio - precioPre;
      //   console.log(precioFinal);
      break;
    }
  }
}
if (encontrado) {
  console.log(
    `La categoria ${categoria} con producto ${
      encontrado.nombre
    } tiene un valor de ${encontrado.precio} pero hoy tiene un descuento del ${
      descuento || descuentoEs
    }  % quedando ${precioFinal}`
  );
} else {
  console.log("no exise");
}
