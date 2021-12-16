1. Instala `node-gyp`. Hay que hacerlo de forma global. Para eso, ejecuta:

   ```npm i -g node-gyp```

   _Dependiendo del sistema de archivos, y los permisos, puede que tengas que usar sudo en linux y mac, o ejecutar como administrador en windows_

2. Crea tu archivo fuente. Un ejemplo lo puedes encontrar en [la documentaciÃ³n de node](https://nodejs.org/api/addons.html#addons_hello_world)
3. Crea un `binding.gyp` en la raiz del mÃ³dulo.
4. En la carpeta raiz del mÃ³dulo, ejecuta:

   ```node-gyp configure```

5. Se habrÃ¡ generado un directorio build.
6. En la carpeta raiz del mÃ³dulo, ejecuta:

   ```node-gyp build```

7. El mÃ³dulo se compilarÃ¡. y podrÃ¡s importarlo en javascript. Puedes revisar que exista el archivo `build/Release/addon.node` _(es un binario, asÃ­ que no podrÃ¡s abrirlo)_
8. Para usarlo, crea un archivo js. Para importarlo:

   ```const addon = require('./build/Release/addon');```

   y para usarlo:

   ```addon.hola()```

   deberÃ­a imprimir `mundo`
