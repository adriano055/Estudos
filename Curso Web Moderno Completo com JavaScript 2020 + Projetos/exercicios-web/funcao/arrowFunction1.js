let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return está implícito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => {
    return 'Olá'
}

ola = _ => 'Olá' //possui um parametro

console.log(ola())