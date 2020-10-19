function aumento (plano, valor){
    switch(plano){
        case 'A':
            return valor + (valor*0.1)
            break

        case 'B':
            return valor + (valor*0.15)
            break

        case 'C':
            return valor + (valor*0.2)
            break

        default:
            return 'Error'
    }
}

console.log(aumento('A',100))
console.log(aumento('B',100))
console.log(aumento('C',100))