const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas){
    console.log(notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: '29',
    peso: 64,
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

//atributo aqui vale como    'esse': valor
//no exemplo da lista i representa comose fosse
//   0: valor    1:valor   3:valor


//teste para pegar atributos dentro de atributos
const pessoa2 = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: '29',
    peso: {a: 64, b: 65},
}

console.log('-------------------')
for(let atributo in pessoa2){
    if(typeof pessoa2[atributo] === typeof {}){
        for(let subatributo in pessoa2[atributo]){
            console.log(`${atributo} sub ${subatributo} = ${pessoa2[atributo][subatributo]}`)
        }
    }
    
    else{
        console.log(`${atributo} = ${pessoa2[atributo]}`)
    }
}