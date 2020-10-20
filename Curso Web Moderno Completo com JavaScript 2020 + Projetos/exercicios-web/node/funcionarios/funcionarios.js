const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = e => e.pais === 'China'
const mulheres = e => e.genero === 'F'
const menor = function(anterior, atual){
    return atual.salario < anterior.salario ? atual : anterior
}

axios.get(url).then(response => {
    const funcionarios = response.data
    MenorSalarioMulhererChinesa = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menor)
    console.log(MenorSalarioMulhererChinesa)
})

