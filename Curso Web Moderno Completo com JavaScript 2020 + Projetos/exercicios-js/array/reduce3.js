//ex de implementação do metodo reduce

Array.prototype.reduce2 = function (callback){
    let acumulador = this[0]
    for(let i = 1 ; i < this.length ; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}


const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?
const desafio1 = alunos.map(a => a.bolsista).reduce2(function(acumulador, atual){
    return acumulador && atual
})

console.log("Desafio 1 :",desafio1)