function frutas(fruta){
    switch(fruta){
        case 'maçã':
            return 'Não vendemos esta fruta aqui'
            break
        
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
            break

        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
            break

        default:
            return 'erro'
    }
}

console.log(frutas('maçã'))
console.log(frutas('melancia'))
console.log(frutas('kiwi'))
console.log(frutas('pera'))
console.log(frutas(12))