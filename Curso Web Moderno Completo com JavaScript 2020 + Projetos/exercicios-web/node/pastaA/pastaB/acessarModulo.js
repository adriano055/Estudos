const moduloA = require('../../moduloA')

console.log(moduloA.ola)

//const saudacao = require('../../../node_modules/saudacao')
const saudacao = require('saudacao')

console.log(saudacao.ola)

const c = require('./pastaC')

/*const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080)*/

console.log(c.ola2)

