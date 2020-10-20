const fs = require("fs")
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

/*function exibirConteudo(_, conteudo) {
    console.log(conteudo.toString())

}

console.log('Inicio...')
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho,(_,conteudo) => console.log(conteudo.toString()))
console.log('Fim...')

console.log('Inicio Sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())*/

function ler(dir) {
    return new Promise(resolve =>{
        const conteudo = fs.readFile(dir, function (_,conteudo) {
            resolve(conteudo)
        })
        console.log('Depois de ler')
    })
}

console.log('Inicio...')
ler(caminho).then(t => t.toString()).then(console.log)
