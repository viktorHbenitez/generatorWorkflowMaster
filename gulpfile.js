////////////////////////////////
//////	Required
///////////////////////////////
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var browserSync  = require('browser-sync');
var reload = browserSync.reload;

/*var concat = require('gulp-concat');
var gulIf = require('gulp-if');
var useRef = require('gulp-useref');
var uglifyCss = require('gulp-uglifycss');
*/
////////////////////////////////
//////	Scripts Task
//////	INPUT (SRC) -> PIPE (FUNCTION)-> PIPE (FUNCTION)-> PIPE (FUNCTION)-> OUTPUT (DEST)
///////////////////////////////
gulp.task('scripts',function() {

   gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js']) // toma las capteas hijas de js que contengan archivos *.js
   	.pipe(rename({suffix:'.min'}))
   	.pipe(uglify())
   	.pipe(gulp.dest('app/js')) //destino del archivo minificado
    .pipe(reload({stream:true}));
});
////////////////////////////////
//////	Sass Task
//////	INPUT (SRC) -> PIPE (FUNCTION)-> PIPE (FUNCTION)-> PIPE (FUNCTION)-> OUTPUT (DEST)
///////////////////////////////
// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  gulp.src('scss/app.scss')
  	.pipe(plumber())   //marcar errores de manera legible
    .pipe(sass({
      includePaths: ['scss'] //compila  de sass a css indicamos el archivo origen sass
    }))
    .pipe(autoprefixer('last 2 versions')) 
    .pipe(gulp.dest('./app/css'))  //lo guarda en el destino app/css
    .pipe(reload({stream:true}));
});

////////////////////////////////
//////	HTML Task
///////////////////////////////
gulp.task('html', function(){
    gulp.src('app/**/*.html')
    .pipe(reload({stream:true}));
  });

////////////////////////////////
//////  Browser-Sync Task
///////////////////////////////
gulp.task('browser-sync', function(){
    browserSync({
        server:{
          baseDir: "./app"
        }
      });
  });


////////////////////////////////
//////  Watch Task
///////////////////////////////
gulp.task('watch',function(){
    gulp.watch("app/js/**/*.js", ['scripts']);
    gulp.watch("scss/**/*.scss", ['sass']);
    gulp.watch("app/**/*.html", ['html']);
    
}) 

////////////////////////////////
//////	default Task
///////////////////////////////
//gulp.task('default', ['scripts', 'sass', 'html', 'browser-sync','watch']);
gulp.task('default', ['sass', 'html', 'browser-sync','watch']);




