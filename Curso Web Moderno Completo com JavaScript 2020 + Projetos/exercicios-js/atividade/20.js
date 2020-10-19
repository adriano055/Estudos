function caixa(valor){
    lista = {
        100: 0,
        50: 0,
        10: 0,
        5: 0,
        1: 0
    }

    while(valor > 0){
        if(valor >= 100){
            lista[100]++
            valor -= 100
        }

        else if(valor >= 50){
            lista[50]++
            valor -= 50
        }

        else if(valor >= 10){
            lista[10]++
            valor -= 10
        }

        else if(valor >= 5){
            lista[5]++
            valor -= 5
        }

        else if(valor >= 1){
            lista[1]++
            valor -= 1
        }
    }

    const chaves = Object.keys(lista)

    for(let i = chaves.length ; i >= 0 ; i--){
        if(lista[chaves[i]] > 0){
            console.log(`${lista[chaves[i]]} nota(s) de R$ ${chaves[i]}`)
        }
    }
}

caixa(2347)