function progressaoArit (n, primeiro, razao){
    let soma = primeiro

    let lista = []
    lista.push(primeiro)

    for(let i = 0 ; i < n-1 ; i++){
        primeiro += razao 
        lista.push(primeiro)
        soma += primeiro
    }

    console.log(lista)
    console.log(`Soma = ${soma}`)
}

function progressaoGeaome (n, primeiro, razao){
    let soma = primeiro

    let lista = []
    lista.push(primeiro)

    for(let i = 0 ; i < n-1 ; i++){
        primeiro *= razao 
        lista.push(primeiro)
        soma += primeiro
    }

    console.log(lista)
    console.log(`Soma = ${soma}`)
}

progressaoArit(5,6,2)
progressaoGeaome(5,6,2)