const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
//arquivo configuracao
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS() {
    // o destino ja consta no arquivo de configuracao
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)