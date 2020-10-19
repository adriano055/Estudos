function arrendonda(nota){
    if(nota < 40 && nota > 37){
        nota = 40
    }

    if(nota > 40){
        if((nota+1) % 5 == 0){
            nota++
        }

        else if((nota+2) % 5 == 0){
            nota+= 2
        }
    }

    return nota
}

console.log(arrendonda(95))