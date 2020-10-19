function tempoAlcancar (altura1, taxa1, altura2, taxa2){
    let anos = 0

    for(let i = 0 ; altura1 <= altura2 ; i++){
        altura1 = altura1 + (altura1 * taxa1)
        altura2 = altura2 + (altura2 * taxa2)
        anos++
    }

    return anos
}

crescimento = (altura1, taxa1, altura2, taxa2) => {
    let tempo = 0
    
    if(altura1 < altura2){
        console.log('Existe um menor')
        if(taxa1 > taxa2){
            tempo = tempoAlcancar (altura1, taxa1, altura2, taxa2)
            console.log(`O menor alcançará o maior em ${tempo} anos`)
        }

        else{
            console.log('O menor não alcançará o maior')
        }
    }

    else if(altura2 < altura1){
        console.log('Existe um menor')
        if(taxa2 > taxa1){
            tempo = tempoAlcancar (altura2, taxa2, altura1, taxa1)
            console.log(`O menor alcançará o maior em ${tempo} anos`)
        }

        else{
            console.log('O menor não alcançará o maior')
        }
    }
}

crescimento(2,0.5,5,0.1)