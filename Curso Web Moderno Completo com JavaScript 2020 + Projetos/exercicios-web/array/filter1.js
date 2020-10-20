const produtos = [
    {nome: 'Noteboock', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

/*console.log(produtos.filter(function(p){
    return p.preco > 2500
}))*/

const frageis = e => e.fragil
const maiorQ500 = e => e.preco >= 500

console.log(produtos.filter(frageis).filter(maiorQ500))