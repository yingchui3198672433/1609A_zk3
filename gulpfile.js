var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-webserver');

//编译scss
gulp.task('devScss', function() {
    return gulp.src('./src/scss/page/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
});

//起服务
gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: '8080',
            open: true,
            livereload: true
        }))
});

//监听
gulp.task('watch', function() {
    return gulp.watch('src/scss/page/*.scss', gulp.series('devScss'))
})

//归并

gulp.task('dev', gulp.series('devScss', 'server', 'watch'));