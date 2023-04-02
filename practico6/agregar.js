// 4. En un archivo llamado "agregar.js", importar el array que se encuentra en dataBase.js y crear una función que me permita 
// agregar un producto a la lista. Ingresando por parámetros, el id, nombre, descripcion, categoria y precio. 
// mostrarlo en un console.log

const fs = require("fs");
const productos = require('./dataBase');
const readlineSync = require("readline-sync")



const id = readlineSync.question("Ingrese Id: ")
const nombre = readlineSync.question("Ingrese Nombre: ")
const descripcion = readlineSync.question("Ingrese Descripcion: ")
const categoria = readlineSync.question("Ingrese Categoria: ")
const precio = readlineSync.question("Ingrese Precio: ")

let nuevoProducto = {
    id: id,
    nombre: nombre,
    descripcion: descripcion,
    categoria: categoria,
    precio: precio,

}
productos.push(nuevoProducto)
const dataConvertida = JSON.stringify(productos,null,1)
//console.log(productos)

fs.writeFileSync("dataBase2.js",dataConvertida, "utf-8")

console.log("El nuevo producto agregado a la base de datos es:")
console.log(nuevoProducto)