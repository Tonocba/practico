// ## 15. Transcribir ADN a ARN

// Escribir una función llamada `transcribir` que reciba un string (una cadena de ADN) y retorne otro 
// string (su complemento ARN).

// Los complementos son los siguientes:

// - G -> C
// - C -> G
// - T -> A
// - A -> U

// function transcribir(stringAdn){
//     let ARN = stringAdn.replace("G","C")
//     ARN = ARN.replace("C","G")
//     ARN = ARN.replace("T","A")
//     ARN = ARN.replace("A","U")
//     return ARN
// }

// // código de prueba
// console.log(transcribir("ACGT")); // "UGCA"
// console.log(transcribir("ACGTGGTCTTAA")); // "UGCACCAGAAUU"

function transcribir(stringAdn) {
  let ARN = stringAdn
    .replace(/G/g, "X")
    .replace(/C/g, "G")
    .replace(/X/g, "C")
    .replace(/T/g, "Y")
    .replace(/A/g, "U")
    .replace(/Y/g, "A")
  return ARN
}
// código de prueba
console.log(transcribir("ACGT")); // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")); // "UGCACCAGAAUU"

// // Solución respondondida de otra forma

// function dna_to_rna(dna) {
//     const complement = {"A": "U", "T": "A", "C": "G", "G": "C"}; //usa un objeto para transcribir 
//     let rna = "";
//     for (const nucleotide of dna) {
//       rna += complement[nucleotide];
//     }
//     return rna;
//   }
  