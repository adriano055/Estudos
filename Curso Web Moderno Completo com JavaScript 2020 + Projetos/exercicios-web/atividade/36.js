function mult (vetor,numero){
    let vetorM = []
    
    vetor.forEach(element => {
        vetorM.push(element*numero)
    });

    console.log(vetorM)
}

function seM5 (vetor,numero){
    let vetorM5 = []

    vetor.forEach(element => {
        if(element > 5){
            vetorM5.push(element*numero)
        }
    });

    console.log(vetorM5)
}

mult([1,2,3,4,5,6,7,8,9,10],2)
seM5([1,2,3,4,5,6,7,8,9,10],2)