// pessoa --> 123 --> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa = {nome: 'Ana'} erro de atribuição de constante

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome:'João'})
pessoaConstante.nome = "Maria"
console.log(pessoaConstante)