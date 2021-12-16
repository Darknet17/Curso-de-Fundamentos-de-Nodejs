# Procesos hijo

El módulo de procesos secundarios de Node.js (**child_process**) tiene dos funciones **spawn** y **exec**, mediante las cuales podemos iniciar un proceso secundario para ejecutar otros programas en el sistema.

La diferencia más significativa entre child_process.spawn y child_process.exec está en lo que spawn devuelve un stream y exec devuelve un buffer.

- Usa **spawn** cuando quieras que el proceso hijo devuelva datos binarios enormes a Node.
- Usa **exec** cuando quieras que el proceso hijo devuelva mensajes de estado simples.
- Usa **spawn** cuando quieras recibir datos desde que el proceso arranca.
- Usa **exec** cuando solo quieras recibir datos al final de la ejecución.

Un buen blog para revisar mas del tema:

[Diferencia entre spawn y exec de child_process de NodeJS - michelletorres](https://blog.michelletorres.mx/diferencia-entre-spawn-y-exec-de-child_process-de-nodejs/)

## Child Process

En node podemos crear procesos hijos que ejecuten cualquier accion de nuestro sistema operativo, como si nos encontraramos en la linea de comandos.

Podemos llamar a `exec` para ejecuciones sencillas:

```
const { exec } = require('child_process')
exec('ls', (e, stdout) => {
    (e) ?
    console.log(e) :
    console.log(stdout)
})

```

Podemos llamar a `spawn` para obtener el proceso: *La ventaja de este enfoque es que obtienes mayor control del proceso, y del estado en el que se encuenta*

```
const { spawn } = require('child_process')
const myprocess = spawn('ls')

process.stdout.on("data", data => console.log(data.toString()));
process.on("exit", () => console.log("process end"));
```