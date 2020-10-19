function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve,reject)=> {
        try{
            con.log('temp') // erro induzido
            if(Math.random() < chanceErro){
                reject('Ocorreu um erro!')
            }

            else{
                resolve(valor)
            }
        }

        catch(e){
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v))
        //e => console.log(`Erro Esp: ${e}`))
    .catch(e => console.log(`Erro: ${e}`))