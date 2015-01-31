# Шаблон loft-app

Простой шаблон для создания фронтенд-проекта с использованием методологии БЭМ и технологий SCSS, Jade и Gulp.

## Структура проекта

    .
    ├── public  // Каталог релиза
    ├── src     // Каталог разработки
    |   ├── styles
    |   |   ├── main.scss
    |   ├── js
    |   |   ├── main.js
    |   ├── templates
    |   |   ├── index.jade
    ├── tasks   // Задачи Gulp
    |   ├── default.js
    ├── bower.json
    ├── gulpfile.js
    ├── package.json

Папка *public* предназначена для хранения скомпилированных файлов, исходные файлы находятся в папке *src*. В файле *package.json* хранятся необходимые для проекта зависимости, а в файле *gulpfile.js* - настройки выполнения Gulp. Для удобства использования все задачи Gulp помещены в разные файлы и находятся в папке *tasks*.

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

### Создадим первую задачу Gulp - подключим сервер Connect и LiveReload

Создадим в папке *tasks* файл server.js и отредактируем его:

		var gulp = require('gulp'),
		connect = require('gulp-connect'),
		livereload = require('gulp-livereload');
		gulp.task('server', function() {
			connect.server({
				port: 8000,
				root: 'public'
			});
			livereload.listen();
			gulp.watch('public/*.html').on('change', livereload.changed);
		});






