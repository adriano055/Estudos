function juntaVetor(vetor1,vetor2){
    let juncao = []

    vetor1.forEach(element => {
        juncao.push(element)
    });

    vetor2.forEach(element => {
        juncao.push(element)
    });

    console.log(juncao)

    juncao.forEach(numero => {
        console.log(numero)
    });
}

let vetor1 = [1,2,3,4,5]
let vetor2 = [6,7,8,9,10]

juntaVetor(vetor1,vetor2)