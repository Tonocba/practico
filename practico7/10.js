// ## 10. Número de caracteres

// Escribir una función llamada `numeroDeCaracteres` que reciba un string y un caracter 
// (un string de un caracter). La función debe retornar el número de veces que aparece el caracter en el string.

function numeroDeCaracteres(palabra, letra){
        let contar = 0;
        for(let i = 0; i < palabra.length; i++){
          if(palabra[i] === letra){
            contar++;
          }
        }
        return contar;
}

// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")); // 2
console.log(numeroDeCaracteres("MMMMM", "m")); // 0
console.log(numeroDeCaracteres("eeee", "e")); // 4
