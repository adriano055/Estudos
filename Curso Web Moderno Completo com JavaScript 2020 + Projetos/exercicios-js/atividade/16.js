function calculadora (numero1, sinal, numero2){
    switch(sinal){
        case '+':
            return numero1 + numero2
            break
        
        case '-':
            return numero1 - numero2
            break
        
        case '*':
            return numero1 * numero2
            break

        case '/':
            return numero1 / numero2
            break

        default:
            return "Operação inválida"
    }
}

console.log(calculadora(2, '*', 3))