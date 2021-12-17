const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', (cb) => {
    console.log('construyendo el sitio');
    setTimeout(cb, 1200);
});

gulp.task('serve', (cb)=>{
    gulp.src('www')
        .pipe(server({
                livereload: true,
                open: true
            }))
})

gulp.task('default', gulp.series('build', 'serve'));
