// Подключение плагинов Gulp
var gulp = require('gulp'),
	connect = require('gulp-connect'),
	jade = require('gulp-jade'),
	sass = require('gulp-sass');

// Задача по-умолчанию
gulp.task('default', ['server','jade','sass','watch']);

// Запускаем сервер
gulp.task('server', ['watch'], function() {
	connect.server({
		port: 9000, // порт сервера
		root: 'dev', // корневая папка запуска сервера
		livereload: true // автоматический перезапуск сервера
	})
});

// Компилируем Jade-шаблоны и копируем в папку dev
gulp.task('jade', function() {
	gulp.src('./app/**/[^_]*.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('./dev/'))
		.pipe(connect.reload());
});

// Компилируем SCSS-шаблоны и копируем в папку public
gulp.task('sass', function() {
	return gulp.src(['./app/scss/main.scss'])
		.pipe(sass())
		.on('error', function(err){ console.log(err.message); })
		.pipe(gulp.dest('./dev/css/'));
});

// Наблюдаем за изменением файлов и компилируем измененные файлы
gulp.task('watch', function() {
	gulp.watch('./app/**/*.jade', ['jade']);
	gulp.watch('./app/**/*.scss', ['sass']);
});