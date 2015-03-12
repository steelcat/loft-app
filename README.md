# Шаблон loft-app

Простой шаблон для создания фронтенд-проекта с использованием методологии БЭМ и технологий SCSS, Jade и Gulp.

## Структура проекта

    .
    ├── app     // Каталог разработки
    ├   ├── styles
    ├   ├   ├── main.scss
    ├   ├── js
    ├   ├   ├── main.js
    ├   ├── templates
    ├   ├   ├── index.jade
    ├── jess    // Собственная библиотека Jade, SASS и JavaScript
    ├── public  // Каталог релиза
    ├── tasks   // Задачи Gulp
    ├   ├── default.js
    ├── bower.json
    ├── gulpfile.js
    ├── package.json

Папка *public* предназначена для хранения скомпилированных файлов, исходные файлы находятся в папке *app*. В файле *package.json* хранятся необходимые для проекта зависимости, а в файле *gulpfile.js* - настройки выполнения Gulp. Для удобства использования все задачи Gulp помещены в разные файлы и находятся в папке *tasks*. В папке *jess* иы будем хранить библиотеки для Jade, SASS и JavaScript, которые будут использоваться нами из проекта в проект. Моя собственная библиотека разрабатывается по адресу: http://steelcat.github.io/jess/ .

## Создание проекта

Для нашего проекта мы будем использовать:
- методологию БЭМ для именования классов в CSS
- менеджер пакетов Node.js - NPM
- менеджер задач Gulp
- менеджер веб-пакетов Bower

и следующие обработчики:
- Шаблонизатор Jade для компактного написания шаблонов HTML
- Препроцессор SASS для удобной разработки CSS
- Обработчик Autoprefixer для добавления префиксов в CSS
- Оптимизатор стилей CSSO (CSS Optimizer)
- Browserify для разделения JavaScript на модули
- Uglify для минификации JavaScript
- Connect для запуска сервера
- LiveReload для автоматической перезагрузки страницы браузера при изменении файлов проекта

Для создания проекта нам потребуется установленный [Node.js](http://nodejs.org/ "Node.js"). После установки мы сможем устанавливать необходимые пакеты с помощью NPM.

Создадим проект по шагам, все команды запускаем в командной строке из корневой директории проекта:

### Инициализируем проект для установки необходимых пакетов Node.js:

        npm init

Эта команда создаст файл package.json в корне директории.

Он будет выглядеть так:

        {
          "name": "loft-app",
          "version": "1.0.0",
          "description": "loft-app",
          "main": "index.js",
          "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
          },
          "repository": {
            "type": "git",
            "url": "https://github.com/steelcat/loft-app.git"
          },
          "keywords": [
            "loft-app"
          ],
          "author": "steelcat",
          "license": "ISC",
          "bugs": {
            "url": "https://github.com/steelcat/loft-app/issues"
          },
          "homepage": "https://github.com/steelcat/loft-app"
        }

### Устанавливаем Gulp:

        npm install -g gulp

### Редактируем файл package.json и добавляем в него следующие строки:

        "devDependencies": {
            "gulp": "~3.8.10",
            "gulp-load-plugins": "~0.8.0",
            "require-dir": "~0.1.0",
            "gulp-sass": "~1.2.4",
            "gulp-csso": "~0.2.9",
            "gulp-browserify": "~0.5.0",
            "gulp-jade": "~0.10.0",
            "gulp-uglify": "~1.0.2",
            "gulp-connect": "~2.2.0",
            "gulp-livereload": "~3.6.0",
            "gulp-autoprefixer": "~2.0.0"
        }

Теперь наш файл должен выглядеть так:

        {
          "name": "loft-app",
          "version": "1.0.0",
          "description": "loft-app",
          "main": "index.js",
          "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
          },
          "repository": {
            "type": "git",
            "url": "https://github.com/steelcat/loft-app.git"
          },
          "keywords": [
            "loft-app"
          ],
          "author": "steelcat",
          "license": "ISC",
          "bugs": {
            "url": "https://github.com/steelcat/loft-app/issues"
          },
          "homepage": "https://github.com/steelcat/loft-app",
          "devDependencies": {
            "gulp": "~3.8.10",
            "gulp-load-plugins": "~0.8.0",
            "require-dir": "~0.1.0",
            "gulp-sass": "~1.2.4",
            "gulp-csso": "~0.2.9",
            "gulp-browserify": "~0.5.0",
            "gulp-jade": "~0.10.0",
            "gulp-uglify": "~1.0.2",
            "gulp-connect": "~2.2.0",
            "gulp-livereload": "~3.6.0",
            "gulp-autoprefixer": "~2.0.0"
          }
        }

### Устанавливаем выбранные зависимости командой:

        npm install

Эта команда создаст папку *node-modules* в нашем проекте и поместит туда выбранные зависимости.

### Настроим Gulp

Для этого создадим в корне проекта файл *gulpfile.js* и отредактируем его следующим образом:

        var requireDir = require('require-dir');
        requireDir('./tasks', { recurse: true });

Таким образом мы сообщаем Gulp, что он должен рекурсивно подключить все файлы задач из папки *tasks*. Создаем папку *tasks*, а в ней дефолтный файл задач: *default.js*.

Редактируем его следующим образом:

        var gulp = require('gulp'); // Подключаем gulp
        // Устанавливаем задачу gulp по умолчанию
        gulp.task('default', function() {
	            // Код задачи по-умолчанию
        });
 
 Проверяем работу Gulp:
 
 		>gulp
		[13:05:50] Using gulpfile gulpfile.js
		[13:05:50] Starting 'default'...
		[13:05:50] Finished 'default' after 48 ?s

### Составляем первую задачу для Gulp - задачу сервера SERVER

Создаем в папке *tasks* файл server.js и редактируем его:

		var gulp = require('gulp'),
		connect = require('gulp-connect');
		gulp.task('server', function() {
			connect.server({
				port: 8000,
				root: 'public'
			});
		});

Запускаем задачу:

		>gulp server
		[14:15:00] Using gulpfile gulpfile.js
		[14:15:00] Starting 'server'...
		[14:15:00] Finished 'server' after 46 ms
		[14:15:00] Server started http://localhost:8000

### Составляем задачу слежения за файлами в папке разработки WATCH

Создаем в папке *tasks* файл watch.js и редактируем его:

		var gulp = require('gulp'),
			$ = require('gulp-load-plugins')(); // автоматическая загрузка плагинов gulp
		gulp.task('watch', ['styles', 'scripts', 'templates'], function() {
			// при изменении любых файлов с расширением jade в папке app запускается задача templates, аналогично для js и scss файлов в соответствующих папках
			gulp.watch('app/**/*.jade', ['templates']);
			gulp.watch('app/**/*.js', ['scripts']);
			gulp.watch('app/**/*.scss', ['styles']);
		});	

Оказывается можно подгрузить сразу все нужные плагины Gulp одной строкой <code>$ = require('gulp-load-plugins')();</code>, что мы и сделали.

Созданная нами задача не будет работать без задач TEMPLATES, SCRIPTS, STYLES.

### Создаем задачу компиляции шаблонов Jade - TEMPLATES

Создаем в папке *tasks* файл templates.js и редактируем его:

		var gulp = require('gulp'),
			$ = require('gulp-load-plugins')(); // автоматическая загрузка плагинов gulp
		gulp.task('templates', function(){
  			return gulp.src('src/templates/**/*.jade')
    			.pipe($.jade()) // компилируем jade в html
    			.pipe(gulp.dest('public')) // путь где будут лежать html файлы
    			.pipe($.connect.reload()); // перезагрузка сервера
		});





        







