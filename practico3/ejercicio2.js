// 2) Escribir un programa que pregunte al usuario su edad y muestre por pantalla
// todos los años que ha cumplido (desde 1 hasta su edad).

const readlineSync = require("readline-sync")

const edad = readlineSync.question("Escriba su edad: ")

for (n = 1; n <= edad; n++){
    console.log(n)
}