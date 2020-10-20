function concatenar (vetor1, vetor2){
    let uniao = []
    
    uniao = vetor1.concat(vetor2)

    console.log(uniao)
}

let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

concatenar(vetorInteiro,vetorDouble)
concatenar(vetorDouble,vetorString)