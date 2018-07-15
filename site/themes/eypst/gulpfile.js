// var elixir = require('laravel-elixir');
// var theme = 'bulma-kit';
// var homepage = 'pages/homepage';
// var chisiamo = 'pages/chi-siamo';
// var eventi = 'pages/eventi';
// var understandingeurope = 'pages/understanding-europe';
// var contatti = 'pages/contatti';
// // var transparency = 'transparency';
// // var credits = 'credits';
//
// elixir.config.assetsPath = './';
// elixir.config.publicPath = './';
//
// elixir(function (mix) {
// 	mix.sass(theme + '.scss', 'css/' + theme + '.css');
// 	// mix.sass(homepage + '.scss', 'css/' + homepage + '.css');
// 	// mix.sass(chisiamo + '.scss', 'css/' + chisiamo + '.css');
// 	// mix.sass(eventi + '.scss', 'css/' + eventi + '.css');
// 	// mix.sass(understandingeurope + '.scss', 'css/' + understandingeurope + '.css');
// 	// mix.sass(contatti + '.scss', 'css/' + contatti + '.css');
// });
//
// var purify = require('gulp-purifycss');
//
// gulp.task('cleancss', function () {
// 	return gulp.src('css/' + theme + '.css')
// 		.pipe(purify(['partials/*.html', 'templates/*.html', 'js/*.js']))
// 		.pipe(gulp.dest('css/'));
// });
//
//
//
// var elixir = require('laravel-elixir');
// var tailwindcss = require('tailwindcss');
//
// elixir.config.assetsPath = './';
// elixir.config.publicPath = './';
//
// /*
//  |--------------------------------------------------------------------------
//  | Elixir Asset Management
//  |--------------------------------------------------------------------------
//  |
//  | Elixir provides a clean, fluent API for defining some basic Gulp tasks
//  | for your Statamic theme. By default, we are compiling the Sass
//  | file for our application, as well as publishing vendor resources.
//  |
//  */
//
// elixir(function(mix) {
//     mix.sass(theme + '.scss', 'css/' + theme + '.css').options({
//       postCss: [
//         tailwindcss('./' + theme + '-tailwind.js'),
//       ]
//     })
//
//     // mix.version('css/' + theme + '.css');
// });

var theme = "eypst";

const gulp = require("gulp");
const purgecss = require("gulp-purgecss");
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

gulp.task("css", () => {
  return gulp
    .src("./scss/" + theme + ".scss")
      .pipe(sourcemaps.init())
      .pipe(
        sass({
          // outputStyle: 'compressed',
          includePaths: ['node_modules/susy/sass']
        }).on('Per dindirindira', sass.logError)
      )
      .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
      // .pipe(purgecss({ content: ["templates/*.html", "partials/*.html", "layouts/*.html", "js/main.js"] }))
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest("./css/"))
});

gulp.task("watch", ["css"], () => {
  gulp.watch("./scss/" + theme + ".scss", ["css"]);
  gulp.watch("./scss/**/*.sass", ["css"]);
});

gulp.task("default", ["watch"]);
