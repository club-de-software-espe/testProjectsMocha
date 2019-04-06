# Test con Mocha

## Introducción

Mocha es una framework para pruebas sobre proyectos Javascript, tanto en NodeJs como en el browser.

Pueden encontrar mas información en el la página oficial: https://mochajs.org

La idea de este ejemplo es abarcar la idea que mi directorio de pruebas debe describir al conjunto de mi proyecto y realizar pruebas unitarias sobre cada una de las funciones del mismo.

## Estructura del Ejemplo

El proyecto cuenta con la siguiente distribución.

```
| -> functions
|    |-> arithmetic
|    |   |-> addition
|    |   |    |-> addition.js
|    |   | -> multiplication
|    |   |    |-> multiplication.js
|    |-> list
|        |-> list.js
| -> functions2
|    |-> function.js
| -> test
| -> app.js
| -> index.js
| -> package.json
```
Como pueden ver, no se descrito la estructura del directorio test, dado que este si lo observan contiene una estructura similar a la de los directorios descritos anteriormente.

La idea de un archivo de pruebas, a la cual se va aplicar pruebas unitarias, es que este describa al proyecto desde un enfoque funcional, es decir que deben estar los directorios y archivos que proveen funciones a la apliación.

Para este caso hemos creado pruebas para operaciones de suma, multiplicación, operaciones sobre listas y una función especial. Cada una en su correspondiente carpeta.

## Configuración de mocha

Por defecto mocha esta configurado para leer todos los archivos *.js dentro de la carpeta test,para lograr que lea toda la estructura de directorios debemos setear en el `package.json` en la seccion `test:` los siguiente.

` mocha --recursive \" ./test/**/*.js  \"`

Esto me permite que se lea de manera recursiva todos los archivos con extensión .js dentro del directorio test.


## Comentarios 

Para poder correr el proyecto es importante ejecutar el comand `npm install`

Para correr las pruebas ejecuta `npm test`