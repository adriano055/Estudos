const gulp = require('gulp')
//o series é usado para execução em serie, parallel para paralela
const { series, parallel } = require('gulp')

const antes1 = cb => {
    console.log('Tarefa Antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2!')
    return cb()
}

function copiar(cb) {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])

    //src para selecionar os aquivos de origem
    //pipe para usar as tranformacoes (pode fazer uma no resultado de outra)
    //gulp.src('pastaA/**/*.txt') exprecao para selecionar todo aquivo de pastaA que seja um .txt
    //gulp.dest('pastaB') copia para a pasta B (cria caso n exista)
    gulp.src('pastaA/**/*.txt')
        // .pipe(imagePelaMetade())
        // .pipe(imageEmPretoEBranco())
        // .pipe(transformacaoA())
        // .pipe(transformacaoB())
        // .pipe(transformacaoC())
        .pipe(gulp.dest('pastaB'))
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim!')
    return cb()
}

//atribuir default para o gulp
//execuçao de cada funcao em serie com series(), sendo na ordem separada por virgula
//pode ter alguma chamada paralela dentro de uma sequencial como abaixo(e vice versa), neste caso abaixo, executa a paralela e dps as sequenciais
module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
)