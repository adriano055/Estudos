// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 199, tag: 'promocao'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' // Não é permitido adicionar elementos ao objeto
delete produto.tag
console.log(produto)

// Object.seal

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes