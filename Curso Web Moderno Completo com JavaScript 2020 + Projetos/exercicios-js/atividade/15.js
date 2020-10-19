function carro(tipo){
    switch(tipo){
        case 'hach':
            return 'Compra efetuada com sucesso.'
            break

        case 'sedan': case 'motocicleta': case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
            break

        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}

console.log(carro('hach'))
console.log(carro('sedan'))
console.log(carro('motocicleta'))
console.log(carro('caminhonete'))