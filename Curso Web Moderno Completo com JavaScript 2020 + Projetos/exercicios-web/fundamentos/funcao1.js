function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //segundo valor indefinido gerando um NaN da soma
imprimirSoma(2,3,4,5,6,7) //usa os 2 primeiros e ignora o resto
imprimirSoma() // dois valores indefinidos geram NaN

console.log("função com retorno")
//função com retorno
function soma(a, b = 1){ //b = 1 deixa o valor de b por padrao para 1 caso n receba a entrada dele
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
