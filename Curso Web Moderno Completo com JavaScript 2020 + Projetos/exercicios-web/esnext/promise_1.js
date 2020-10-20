let a = 1
console.log(a)

let p = new Promise(function (cumprirPromessa){
    cumprirPromessa(3) // somente 1 valor de retorno no promise, para mais, usar um objeto ou lista
})

p.then(function(valor){
    console.log(valor)
})

p = new Promise(function (resolve){ // chama de resolve por padrao (pode ter outro nome)
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel']) 
})

p
    .then(valor => valor[0])
    .then(valor => console.log(valor))

