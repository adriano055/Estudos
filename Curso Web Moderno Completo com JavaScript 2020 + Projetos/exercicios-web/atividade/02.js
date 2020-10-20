function triangulo(a, b, c){
    let lados = 0
    if(a === b){
        lados++
    }

    if(a === c){
        lados++
    }

    if(b === c){
        lados++
    }

    switch(lados){
        case 0:
            console.log('Escaleno')
            break
        case 3:
            console.log('Equilátero')
            break
        default:
            console.log('Isósceles')
            break
    }
}

triangulo(2,2,2)