function jogos(listaJogos){
    listaJogos = listaJogos.split(' ')

    let menor = 100000
    let indiceMenor = 0

    let record = listaJogos[0]
    let vezesRecord = 0

    for(let i = 0 ; i < listaJogos.length ; i++){
        console.log(record)
        if(record < parseInt(listaJogos[i])){
            vezesRecord++
            record = listaJogos[i]
        }
        
        if(menor > parseInt(listaJogos[i])){
            menor = listaJogos[i]
            indiceMenor = i
        }
    }

    return [vezesRecord, indiceMenor+1]
}

console.log(jogos('10 20 20 8 25 3 0 30 1'))