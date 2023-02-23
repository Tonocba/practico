// 3) Escribir una funcion que espere dos parámetros, uno de los cuales 
//deberá ser un array, y el otro parámetro debe ser el elemento a 
// buscar en el array. Si lo encuentra debera devoler 
// "Elemento encontrado en la posicion (posición)".

const miLista1 = [2, "Eric", "Jarra"]
const miLista2 = ["Leche", "Café", "Chocolate"]

function buscarElemento(arr,item) {
    let resultado = arr.indexOf(item)
    if(resultado == -1) {
        console.log("no se encontró")
    }
    else {
        console.log("Elemento encontrado en la posicion", resultado)
    }
    
}

// function buscarElemento(arr,item) {
//     let busca = arr
//     for (i=0 ; i <= busca.length; i++ ){
//         if (palabraABuscar == arrayABuscar[i]){
//             return console.log("Elemento encontrado en la posicion ", busca.length+1)
//         }
//     }
// }

buscarElemento(miLista1, "Jarra")
// Esta funcion debe retornar:
// Elemento encontrado en la posicion 2

buscarElemento(miLista2, "Café")
// Esta funcion debe retornar:
// Elemento encontrado en la posicion 1