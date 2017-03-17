const gulp = require("gulp");
const util = require("gulp-util"); 
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

gulp.task("sass" , function(){
    gulp.src('./styles/styles.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles')); 
})

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server:{
            baseDir: './'
        }
    });

    gulp.watch("./styles/styles.sass", ['sass']).on("change", browserSync.reload);
    gulp.watch(["*.html", "**/*.js" ]).on('change', browserSync.reload);
});

