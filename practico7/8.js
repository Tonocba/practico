// ## 8. Sumar rango de números

// Escribir una función llamada `sumarRango` que reciba dos argumentos: número inicial y número final. 
//La función debe retornar la suma de los números en ese rango (incluyéndolos).

// **Nota:** puedes asumir que el número inicial va a ser menor o igual que el número final.


function sumarRango(num1,num2){
    let resultado = 0;
    for(i=num1; i<num2+1; i++){
        resultado += i
    }return resultado
}

// código de prueba
console.log(sumarRango(0, 10)); // 55
console.log(sumarRango(12, 14)); // 39
console.log(sumarRango(5, 5)); // 0