# Gestión de paquetes: NPM y package.json

NPM es un gestor de paquetes que son creados por terceros, utilizados por cualquier persona. Estos paquetes pueden llegar a ser tan simples como la suma de dos números o tan complejos como react.js framework de frontend.

Al utilizar un paquete de npm debemos tener presente que algunos paquetes dependen de otro paquetes y esto puede llegar a ser riesgoso si el paquete que estamos utilizando no están actualizados.

### **package.json**

Es un archivo que se crea con el fin de tener información valiosa de nuestro proyecto, en el podemos visualizar como el nombre del proyecto, el autor, que versión esta, que palabras clave contiene o lo referencia, si tiene un repositorio en github, y lo mas importante que dependencia esta usando.

Existen muchos paquetes funcionales que provienen de [npm](https://www.npmjs.com/), estos paquetes pueden tener muchos otros paquetes como dependencias y es importante para la seguridad de mi código revisar los paquetes que voy a utilizar en aspectos como:

- Se actualiza constantemente.
- La última actualización fue menor al último año.
- Está en una versión superior a `0.algo` .

Estas validaciones se hacen para estar seguros de que vamos a utilizar un paquete que este bien cuidado y no vaya a generar dolores de cabeza luego.

Cuando necesitamos utilizar un paquete la forma adecuada de hacer la instalación de un paquete de `npm` es la siguiente:

```bash
npm install <package-name>

```

Como recomendación adicional, es preferible tener el proyecto que se va a trabajar inicializado con npm de la siguiente forma:

```bash
npm init

```

Esto pedirá información del proyecto que se puede llenar y luego se va a crear un archivo `package.json` , que tiene toda la información del proyecto. Cuando se instala un paquete externo, va a aparecer en el archivo mencionado como una dependencia del mismo.

```json
// Package.json
{
  "name": "npm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "license": "MIT",
  "dependencies": {
    "is-odd": "^3.0.1"
  }
}
// Package.json

```

Si se quiere utilizar el módulo instalado, se debe crear un archivo `.js` y dentro de este hacer lo siguiente:

```jsx
const isOdd = require('is-odd') //Importación del paquete

console.log(isOdd(4)) // Utilización del paquete 'is-odd'
```