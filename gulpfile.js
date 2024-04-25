const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compiladorSass(){
    return gulp.src('./src/styles/main.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({
            outptStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/styles'));
}

function comprimirImagens(){
    return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

function comprimirJs(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts/'))
}




exports.default = function(){
    gulp.watch('./src/styles/*.scss', { ignoreInitial: false }, gulp.series(compiladorSass));
    gulp.watch('./src/images/*', { ignoreInitial: false }, gulp.series(comprimirImagens));
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimirJs));
}