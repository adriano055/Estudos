function convenio (idade){
    const base = 100
    let adicional = 0

    if(idade < 10){
        adicional = 80
    }

    else if(idade >= 10 && idade <= 30){
        adicional = 50
    }

    else if(idade > 30 && idade <= 60){
        adicional = 95
    }

    else if(idade > 60){
        adicional = 130
    }
    return `R$ ${base + adicional}`
}

console.log(convenio(8))
console.log(convenio(30))
console.log(convenio(60))
console.log(convenio(61))