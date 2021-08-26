let numeroDeAlunos = 10;

let contador = 0    

do {
       if(contador === 0) {
        console.log("O número atual é ZERO")
    } else if (contador % 2 == 1 ) {
        console.log("O número " + contador + " é ÍMPAR")
    } else {
        console.log("O número " + contador + " é PAR")
    }
  
    contador ++

    
} while (contador <= numeroDeAlunos);

// while (contador <= numeroDeAlunos) {
//     if(contador === 0) {
//         console.log("O número atual é ZERO")
//     } else if (contador % 2 == 1 ) {
//         console.log("O número " + contador + " é ÍMPAR")
//     } else {
//         console.log("O número " + contador + " é PAR")
//     }
  
//     contador ++
// }



// for (let contador = 0; contador <= numeroDeAlunos; contador++) {
//     // console.log(contador)
    
//     if (contador === 0) {
//         console.log("O número atual é zero");
//     } else if (contador % 2 == 0) {
//         console.log ("O número " + contador + " é par")
//     } else {
//         console.log ("O número " + contador + " é ímpar")
//     }
  
// }





// let listaDeAlunos = ["Marcelo", "Juh" , "Cleber", "Wesley", "Adriano"]

// for (const aluno  of listaDeAlunos) {
//     console.log(aluno)
// }

// listaDeAlunos.forEach(element => {
//     console.log(element)
// })