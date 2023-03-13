// 2) En un archivo llamado "listar.js", importar el array que se encuentra
//  en dataBase.js y crear una función reciba por parámetro una categoría 
//  liste los productos de esa categoría.

const data = require("./dataBase");

function listar(categoria) {
  let productosFiltrados = data.filter(function (producto) {
    return producto.categoria === categoria;
  });
  return productosFiltrados;
}

console.log(listar(process.argv[2]));
