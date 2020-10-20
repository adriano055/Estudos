function exp(base,expoente){
    let resultado = base

    if(expoente === 0){
        return 0
    }
    
    if(expoente > 0){
        for(let i = 0 ; i < (expoente - 1); i++){
            resultado*= base
        }
        return resultado
    }

    else{
        for(let i = 0 ; i < ((expoente*(-1)) - 1); i++){
            resultado*= base
        }
        return 1/resultado
    }
}

console.log(exp(3,-3))