const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // add elemento na primeira posiçao
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) //remove o quarto(pilotos[3]) elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //retorna novo array a partir do indice
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(2,4) // pegando uma parte, OBS: o ultimo elemento (2º parametro) n entra, nesse caso pega o [2] e o [3]
console.log(algunsPilotos2)