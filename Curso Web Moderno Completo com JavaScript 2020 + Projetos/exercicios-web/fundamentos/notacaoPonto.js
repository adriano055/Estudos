console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'teste' \\tbm pode ser escrito assim

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function() {
        return('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
console.log(obj3.exec())