inter1020 = (vetor) => {
    let dentro = 0
    let fora = 0

    vetor.forEach(numero => {
        if(numero >= 10 && numero <= 20){
            dentro++
        }

        else{
            fora++
        }
    });

    console.log(`Dentro: ${dentro}`)
    console.log(`Fora: ${fora}`)
}

inter1020([1,2,3,21,22,10,20,12,13,15,18])