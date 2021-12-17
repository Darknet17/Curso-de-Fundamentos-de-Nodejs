# Automatización de procesos

Pueden ser:

- Procesos de consola
- Procesos con paquetes externos

Existen distintos módulos externos que nos ayudan en la automatización de procesos, sin embargo, `gulp` es una herramienta muy completa para este tipo de tareas.

### Instalación

```
npm i gulp gulp-server-livereload

```

### Utilización

1. Importar el módulo en el archivo `gulpfile.js` .
    
    ```
    const gulp = require('gulp');
    
    ```
    
2. Crear la tarea que se va a automatizar.
    
    ```
    gulp.task('build', (cb) => {
      console.log('Building the site');
      setTimeout(cb, 1200);
    });
    
    ```
    
3. Crear un script personalizado en el `package.json`.
    
    ```
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "gulp build"
      }
    
    ```
    
4. Correr el script.
    
    ```
    npm run build
    
    /*
    Output:
    	> automatization@1.0.0 build
    	> gulp build
    
    	[16:15:03] Using gulpfile ~/personalProjects/course-nodejs-basis/src/tools/automatization/gulpfile.js
    	[16:15:03] Starting 'build'...
    	Building the site
    	[16:15:04] Finished 'build' after 1.21 s
    */
    
    ```
    

### Otros scripts

1. 

```
```jsx
gulp.task('serve', (cb) => {
  gulp.src('www').pipe(
    server({
      livereload: false,
      open: true,
    })
  );
});```

```

Crea una tarea llamada `serve` y en la función utiliza métodos de `gulp` como el `src` que permite dar el inicio de la ruta del lugar dónde se obtiene la información. En este caso es un servidor y empieza por `www`.

Luego se concatena con el método `pipe()` la información que crea el módulo `gulp-server-livereload` que puede recibir algunas propiedades de configuración como `livereload` o `open` .

1. En caso de querer ejecutar 2 tareas seguidas se puede hacer lo siguiente en el archivo `gulpfile.js`:
    
    ```
    gulp.task('default', gulp.series('build', 'serve'));
    
    ```
    
    El nombre `default` en el primer argumento de la tarea permite que no se deba poner nombre a esta, sino que sea la tarea a ejecutar por defecto.
    
    Y luego en el `package.json` deberás poner lo siguiente:
    
    ```
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "gulp",
      },
    ```