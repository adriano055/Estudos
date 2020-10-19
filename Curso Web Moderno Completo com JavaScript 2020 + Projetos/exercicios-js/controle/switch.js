const imprimirResultado = function (nota) {
    switch (Math.floor(nota)){
        case 10:
        case 9: //10 ou 9 ativa a mensagem, precisa do break para sair
            console.log('Quadro de Honra')
            break //caso n use o break ele executa o proximo tbm
        case 8: case 7: //escrito de uma forma diferente, mas funciona igual ao 9 e o 10
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)