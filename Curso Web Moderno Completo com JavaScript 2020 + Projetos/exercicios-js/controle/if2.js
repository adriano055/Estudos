function teste1(num){
    if(num > 7) //falta a chave, if responsavel somente pela linha a baixo
        console.log(num)
        console.log('Final')
    
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7);{ // ; encerra o if, o que está nas {} é independente
        console.log(num)
    }
}

teste2(6)
teste2(8)