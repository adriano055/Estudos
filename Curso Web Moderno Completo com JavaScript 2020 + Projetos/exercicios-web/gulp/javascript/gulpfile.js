const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            //remover comentarios
            comments: false,
            //preset mais moderno
            presets: ["env"]
        }))
        //codigo numa unica linha
        .pipe(uglify())
        .on('error', err => console.log(err))
        //concatenar varios arquivos
        .pipe(concat('codigo.min.js'))
        //destino
        .pipe(gulp.dest('build'))
}

function fim(cb) {
    console.log('Fim!!!')
    return cb()
}

//passar a funcao
exports.default = series(transformacaoJS, fim)