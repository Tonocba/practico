// Escribir un programa que pida al usuario una 
// palabra y luego muestre por pantalla una a una las letras
//  de la palabra introducida empezando por la última.
const readlineSync = require("readline-sync")
const palabra = readlineSync.question("Dame una palabra que te la deletreo al reves: ")
const largo = palabra.length
const myArray = palabra.split('')
console.log("La palabra", palabra, "deletrada al reves es:")

for (i=largo-1; i >= 0; i--) {
    
    console.log(myArray[i])
}
