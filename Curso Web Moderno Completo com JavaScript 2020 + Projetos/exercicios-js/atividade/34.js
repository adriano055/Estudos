function dentro(palavra1,palavra2){
    for(let i = 0 ; i < palavra2.length ; i++){
        if(palavra2[i] === palavra1[0]){
            if((palavra1.length) <= palavra2.length-i){
                let todas = true
                for(let e = 0 ; e < palavra1.length ; e++){
                    if(palavra1[e] != palavra2[i+e]){
                        todas = false
                    }
                }

                if(todas){
                    return true
                }
            }
        }
    }

    return false
}

function contido(palavra1,palavra2){
    if(palavra1.length < palavra2.length){
        return dentro(palavra1,palavra2)        
    }

    else{
        return dentro(palavra2,palavra1)
    }
}

console.log(contido('basacasacea','basacasace'))