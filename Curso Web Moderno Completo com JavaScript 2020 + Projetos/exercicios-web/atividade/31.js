function negativos (vetor){
    let qutNegativos = 0

    vetor.forEach(numero => {
        if(numero < 0){
            qutNegativos++
        }
    });

    return qutNegativos
}

console.log(negativos([-1,2,3,4,-6,-8,10,11,56,78]))