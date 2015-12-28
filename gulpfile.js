var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var merge = require('merge-stream');

// 1. Compile sass to css
// 2. Concatenate output to a file called main.css
// 3. Store main.css in `dist` folder
gulp.task('sass', function () {
  return gulp.src('src/styles/main.scss')
    .pipe(sass({
      //outputStyle: 'compressed',
      sourceComments : 'normal'
    })
    .on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/styles'));
});
 
// WATCH TASKS
// ===============
gulp.task('watch', function () {
  return gulp.run(['watch:sass', 'watch:index', 'watch:html']);
});

gulp.task('watch:sass', function () {
  return gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('watch:index', function () {
  return gulp.watch('src/index.html', ['copy:index']);
});

gulp.task('watch:html', function () {
  return gulp.watch('src/components/**/*.html', ['copy:html']);
});

// COPY TASKS
// ===============
gulp.task('copy', function () {
  var images = gulp
    .src('src/images/*')
    .pipe(gulp.dest('dist/images'));

  var fonts = gulp.src(['node_modules/bootstrap-sass/assets/fonts/*/*', 'node_modules/font-awesome/fonts/*'])
    .pipe(gulp.dest('dist/fonts'));

  gulp.run(['sass', 'copy:index', 'copy:html']);

  return merge(images, fonts);
})

gulp.task('copy:index', function(){
  return gulp.src(['src/index.html']).pipe(gulp.dest('dist'));
})

gulp.task('copy:html', function(){
  return gulp.src(['src/components/**/*.html']).pipe(gulp.dest('dist/components/'));
})

// BUILD TASK
// ===============
gulp.task('build', function () {
  return gulp.run(['sass', 'copy']);
})

