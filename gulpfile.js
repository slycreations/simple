var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching files
gulp.task('serve', function() {

    browserSync.init({
        server: "pages", port: 8000
    });
    gulp.watch("pages/**/**/*").on('change', browserSync.reload);
});

gulp.task('default', gulp.series('serve'));