// 1) En un archivo llamado "busqueda.js", importar el array que se
//  encuentra en dataBase.js y crear una función que acepte como parámetro 
//  un id numérico y devuelva el producto correspondiente.

const fs = require("fs");
const data = require("./dataBase.js")


function busqueda(numero){
    for (i=0; i<=data.length; i++){
        if(data[i].id == numero){
            return data[i]
        }
           
    } return "No existe el producto"
        
}  

console.log(busqueda(process.argv[2]))
