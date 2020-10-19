Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0 ; i < this.length ; i++){
        newArray.push(callback(this[i]))
    }
    return newArray
}

const carrinho = [
    '{ "name": "Borracha", "preco": 3.45 }',
    '{ "name": "Caderno", "preco": 13.98 }',
    '{ "name": "Kit de Lapis", "preco": 41.22 }',
    '{ "name": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const precos = e => JSON.parse(e).preco

console.log(carrinho.map2(precos))