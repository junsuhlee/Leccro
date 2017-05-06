var gulp        = require('gulp');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
 
gulp.task('build', function () {
    return browserify({entries: './app.js', debug: true})
        .transform("babelify", { presets: ["es2015","react"] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('build.dev', (done) =>
  runSequence(//'clean.dev',
              'tslint',
              // 'css-lint',
              'build.fonts',
              'build.assets.dev',
              'build.html_css',
              'build.js.dev',
              'build.index.dev',
              done));

gulp.task('serve.dev', (done) =>
  runSequence('build.dev',
              'server.start',
              'watch.dev',
              done));