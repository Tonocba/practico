const readlineSync = require("readline-sync")

const palabra = readlineSync.question("escriba una palabra:")

for (n = 0; n < 10; n++){
    console.log(palabra)
}
