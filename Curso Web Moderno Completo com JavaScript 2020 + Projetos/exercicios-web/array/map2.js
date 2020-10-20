const carrinho = [
    '{ "name": "Borracha", "preco": 3.45 }',
    '{ "name": "Caderno", "preco": 13.98 }',
    '{ "name": "Kit de Lapis", "preco": 41.22 }',
    '{ "name": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const precos = e => JSON.parse(e).preco

console.log(carrinho.map(precos))