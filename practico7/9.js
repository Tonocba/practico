// ## 9. Número de aes (letra "a")

// Escribir una función llamada `numeroDeAes` que reciba un string y retorne el número de veces que 
// aparece la letra "a":

function numeroDeAes(palabra){
  let contar = 0;
  for(let i = 0; i < palabra.length; i++){
    if(palabra[i] === 'a'){
      contar++;
    }
  }
  return contar;
}

// código de prueba
console.log(numeroDeAes("abracadabra")); // 5
console.log(numeroDeAes("etinol")); // 0
console.log(numeroDeAes("")); // 0

