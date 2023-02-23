// 2) Escribir un programa que le pida al usuario que ingrese su 
// nombre apellido edad y muestre un objeto con los datos ingresados.

// Ej:
// ```json
// {
//   nombre: "",
//   apellido: "",
//   edad: 0
// }
// ```
const readlineSync = require("readline-sync")

const userName = {
   nombre: readlineSync.question("Ingrese su Nombre: "),
   apellido: readlineSync.question("Ingrese su Apellido: "),
   edad: readlineSync.question("Ingrese su Edad: ")
}
console.log(userName)