// 3) Escribir un programa que pida al usuario un número entero positivo 
// y muestre por pantalla todos los números impares desde 1 hasta ese
//  número separados por comas.

const readlineSync = require("readline-sync")
const numero = readlineSync.question("Dame un numero entero positivo: ")
const impares=[]
for (i = 0 ; i <= numero ; i++){
    if(i % 2){
//    console.log(impares)
    impares.push(i)
    }
}
console.log(impares)