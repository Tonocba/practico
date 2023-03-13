// 3) Crea una función llamada generar_caracteres() que tome como parámetro 
// un número entero (n) y un carácter, retornar el carácter multiplicado por n.
//  Por ejemplo, generar_caracteres(5,x), debería retornar «xxxxx».

function generar_caracteres(numero, letra){
    let str = ""
    for (i=0; i<numero; i++) {
        str = str + letra
    }
    return str
}
//********* Reducido con str.repeat ********//

// function generar_caracteres(numero, letra) {
//     return letra.repeat(numero);
// }

// console.log(generar_caracteres(10,"x"))