media = (vetor) => {
    let qutElementos = vetor.length

    let somaElementos = 0

    vetor.forEach(valor => {
        somaElementos += valor
    });

    return (somaElementos/qutElementos).toFixed(2)
}

console.log(media([5,5,6]))