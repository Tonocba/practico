const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);

let resto = numeroRandom % 2
function parOImpar (n){
    if (n===0){
    return "Par";
    }
    else {return "impar"};
}
console.log("El numero aleatorio es:", numeroRandom, "y es", parOImpar(resto))