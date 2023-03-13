// 5) Crea una función llamada numeroMayor() que toma tres números como 
// entrada y retornar el numero mayor de ellos, si son iguales devolver 
// un String «son iguales».

function numeroMayor(a,b,c){
   if (a==b && a==c){
    return "Son iguales"
   }else {
    return Math.max(a,b,c)
   }

}
// console.log(numeroMayor(6,7,1))