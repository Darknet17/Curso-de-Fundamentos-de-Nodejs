# Módulos útiles

La función de cifrado de **bcrypt** nos permite construir una plataforma de seguridad utilizando contraseñas encriptadas con Salt.

```jsx
const bcrypt = require("bcrypt");
const password = "NuncaParesDeAprender2020";

bcrypt.hash(password, 5, function(err, hash){
	console.log(hash)
});
// La consola nos entregaria una contraseña distinta en cada oportunidad.

// Para evaluar si una contraseña concuerda con un hash
bcrypt.compare(password, hash, function(error, result){
	console.log(result)
	console.log(error)
})
// Nos va a responder **true** *(en el result)* o **false** *(en el error)* dependiendo si la contraseña puede generar el hash

```

**Moment. js** es una librería que nos permite solventar estos problemas e implementa un sistema de manejo de fechas mucho más cómodo.

```jsx
const moment = require('moment')
const ahora = moment();

// Para formatear una fecha
ahora.format('MM/DD/YYYY HH:MM A'); // 04/11/2020 20:10 PM

// Para validad una fecha
moment('2020-04-11').isValid(); // Nos dara **true** o **false** dependiendo de si la fecha es valida o no

// Para encontrar cuanto tiempo ha pasado hasta hoy
moment('2018-04-11').fromNow(); // Hace 2 años

// Para agregar o eliminar años, días o meses
moment('2020-04-11').add(1, 'years'); // 2021-04-11
moment('2020-04-11').subtract(1, 'years'); // 2019-04-11

```

**Sharp** puede convertir imágenes grandes en imágenes JPEG, PNG más pequeñas y compatibles con la web de diferentes dimensiones.

```jsx
const sharp = require('sharp')

// La siguiente reducira una imagen de 120x120 o cualquier tamaño a 80x80 y lo guardara en una imagen mas pequeña sin eliminr la original.
sharp('imagen.png').resize(80, 80).toFile('imagen_80x80.png');
```