// 1) En un archivo llamado "busqueda.js", importar el array que se
//  encuentra en dataBase.js y crear una función que acepte como parámetro 
//  un id numérico y devuelva el producto correspondiente.

// 3) En el archivo creado en el ejercicio 1, llamado busqueda.js, crear otra función que me permita buscar los productos cuyos precios sean menores a un precio que pase por parámetro.

// - Ayuda: cuando ejecutes el archivo con node - Ej= node busqueda.js - puedes pasarle el primer argumento por terminal que sera el nombre de la funcion
//  (buscarPorId o buscarPorCategoria) que se debe ejecutar, y el segundo argunmento que sera el parametro que necesita la funcion invocada.

// - Ej: node busqueda.js buscarPorId 3
// - Ej: node busqueda.js buscarPorCategoria lacteos

// - Ayuda: Puedes exportar las funciones asi `module.exports = { funcion1, funcion2 }`


const fs = require("fs");
const productos = require('./dataBase');

// Definir las funciones de búsqueda
function buscarPorID(n) {
    for (var i in productos){
      if(productos[i].id == n){
          return productos[i];
           }
    }
    return "No existe el producto";
  }

function buscarPorPrecio(precioMaximo) {
  const productosPorPrecio = []; 
  for (let datos of productos) {
    if (datos.precio < precioMaximo) {
      productosPorPrecio.push(datos);
    }
  }
  return productosPorPrecio;
}
  
  function buscarPorCategoria(categoria) {
    const productosPorCategoria = []; 
  for (let datos of productos) {
    if (datos.categoria === categoria) {
      productosPorCategoria.push(datos);
    }
  }
  return productosPorCategoria;
}

// Obtener los argumentos de la línea de comandos
const [_, __, accion, parametro] = process.argv;

// Ejecutar la función correcta según el primer argumento
switch (accion) {
  case 'ID':
    console.log(buscarPorID(parametro));
    break;
  case 'Precio':
    console.log(buscarPorPrecio(parametro));
    break;
  case 'Categoria':
    console.log(buscarPorCategoria(parametro));
    break;
  default:
    console.error('Acción desconocida');
    break;
}


