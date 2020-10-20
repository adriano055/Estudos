function util(dia){
    switch(dia){
        case 1: case 7:
            return 'Não é um dia util'
            break

        case 2: case 3: case 4: case 5: case 6:
            return 'É um dia util'
    }
}

console.log(util(1))
console.log(util(2))
console.log(util(3))
console.log(util(4))
console.log(util(5))
console.log(util(6))
console.log(util(7))