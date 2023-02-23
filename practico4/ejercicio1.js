// 1) Escribir una función a la que se le pase una cadena "nombre"
//  y muestre por pantalla el saludo ¡hola nombre!.
const palabra = process.argv[2]

function nombre(palabra){
        return console.log("¡hola ",palabra,"!")
}
nombre(palabra);