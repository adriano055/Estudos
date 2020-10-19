const escola = "Cod3r"

//console.log(escola[2])
console.log(escola.charAt(2))
console.log(escola.charAt(5)) //retorna  nulo ao inves de um erro
console.log(escola.charCodeAt(3)) //retorna valor unicode
console.log(escola.indexOf('o'))

console.log(escola.substring(1))//corta a string do indice em diante
console.log(escola.substring(1,3))//corta string do indice ate indice-1

console.log('Escola'.concat(escola).concat("!"))
console.log(escola.replace('3','e'))

console.log('Ana,Maria,Pedro'.split(','))
