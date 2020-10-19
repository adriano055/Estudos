function gerarnumerosEntre(min, max, tempo) {
    if(min > max){
        [min,max] = [max,min]
    }
    
    return new Promise(resolve => {
        setTimeout(function() {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo);
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarnumerosEntre(1,60,4000),
        gerarnumerosEntre(1,60,1000),
        gerarnumerosEntre(1,60,500),
        gerarnumerosEntre(1,60,3000),
        gerarnumerosEntre(1,60,100),
        gerarnumerosEntre(1,60,1500)
    ])
}

gerarVariosNumeros().then(console.log)
