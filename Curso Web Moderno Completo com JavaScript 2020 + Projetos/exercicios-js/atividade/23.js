function media(codigo, nota1, nota2, nota3){
    let peso1 = 3
    let peso2 = 3
    let peso3 = 3

    if(nota1 > nota2 && nota1 > nota3){
        peso1 = 4
    }

    else if(nota2 > nota1 && nota2 > nota3){
        peso2 = 4
    }

    else if(nota3 > nota2 && nota3 > nota1){
        peso3 = 4
    }
    
    mediaPonderada = ((nota1*peso1)+(nota2*peso2)+(nota3*peso3))/10

    return (`Codigo ${codigo}\nNota 1: ${nota1}\nNota 2: ${nota2}\nNota 3: ${nota3}\nMédia = ${mediaPonderada}\nSituação: ${mediaPonderada > 5 ? 'Aprovado' : 'Reprovado'}`)
}

console.log(media('055',6,4,5))