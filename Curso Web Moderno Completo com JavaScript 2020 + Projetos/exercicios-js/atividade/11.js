function bissexto (numero){
    if(numero > 0){
        if(numero % 400 == 0){
            return 'É bissexto'
        }

        else if(numero % 100 == 0){
            return 'Não é bissexto'
        }

        else if(numero % 4 == 0){
            return 'É bissexto'
        }
    }
    return 'Não é bissexto'
}

console.log(bissexto(4))