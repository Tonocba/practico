// 4) Crear una función sumaArreglo() que tome como parámetro un arreglo de
//  números, retornar la suma de todos los números del arreglo.

const sumaArreglo = (arreglo) => {
    let total = 0
    for (i=0; i<arreglo.length; i++) {
        total += arreglo[i];
      }
    return total
}
console.log(sumaArreglo([1,3,5,6,4,5]))