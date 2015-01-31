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

1. Инициализируем проект для установки необходимых пакетов Node.js:

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

2. Устанавливаем Gulp:

        npm install -g gulp

3. Редактируем файл package.json и добавляем в него следующие строки:

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

4. Устанавливаем выбранные зависимости командой:

        npm install

5.




