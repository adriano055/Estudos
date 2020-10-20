function impares (inicio = 0, final = 100){
    if(inicio > final){
        let aux = inicio
        inicio = final
        final = aux
    }

    for(inicio = inicio + 1; inicio < final ; inicio++){
        if(inicio % 2 != 0){
            console.log(inicio)
        }
    }
}

impares(3,21)