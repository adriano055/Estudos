pares = (vetor) => {
    let impares = 0
    let pares = 0
    vetor.forEach(numero => {
        if(numero % 2 == 0){
            pares++
        }

        else{
            impares++
        }
    });

    console.log(`Pares: ${pares}`)
    console.log(`Impares: ${impares}`)
}

pares([1,5,6,4,8,10])