function conceito (notas){
    notas.forEach(nota => {
        console.log(nota < 0 || nota > 10 ? 'Nota inválida' : nota < 5  ? 'D' : nota < 7 ? 'C' : nota < 9 ? 'B' : 'A')
    });
 }

 conceito([10, 13, 9, 8.2, 2.5, 7.7, 6.8])