function anuidade (mes,valor){
    for(let i = 0 ; i < mes - 1 ; i++){
        valor = valor + (valor * 0.05)
    }

    return valor.toFixed(2)
}

console.log(anuidade(10,100))