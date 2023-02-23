// 4) Escribir un programa que pida al usuario un número entero y 
// muestre por pantalla un triángulo rectángulo como el de más abajo, 
//  de altura el número introducido.

const readlineSync = require("readline-sync")
const x = readlineSync.question("Dame un numero entero para hacer un triangulo: ")
let ast = "*"
for (i=0; i < x; i++) {
    console.log(ast)
    ast = ast + "*"
}