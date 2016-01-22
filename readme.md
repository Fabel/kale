Install
=======

`npm install`

`npm install -g browserify watchify node-sass karma-cli uglify-js uglifycss`

`cp -rf src/fonts dist/`
`cp -rf src/index.html dist/`
`cp -rf src/images dist/`

Build
=====

`browserify -t [ babelify --presets [ react es2015 ] ] src/js/main.js -o dist/bundle.js`

Production build js

`browserify -t [ babelify --presets [ react es2015 ] ] src/js/main.js | uglifyjs -c -o dist/bundle.js`

Production build css

`node-sass src/scss/main.scss | uglifycss > dist/main.css`

Run
===
`node server`

Development
===

js build:

`watchify -v -t [ babelify --presets [ react ] ] src/js/main.js -o dist/bundle.js`

or with ES2015 preset (slower)

`watchify -v -t [ babelify --presets [ react es2015 ] ] src/js/main.js -o dist/bundle.js`


css build:

`node-sass -w src/scss/main.scss dist/main.css`
