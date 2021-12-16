//Veremos como desde cualquier sitio fuera del entorno podemos meter información adentro.

    let ejemplo ="Alejandro-sin" //Esta variable la declaré aquí y puedo llamarla aquí.

//¿Qué ocurre cuando quiero llamar un valor que no va dentro del software, si quiereo llamar una API, o que necesito una clave, o un token?

//+ El código no  debería guardar este tipo de valores credenciales y por esto existen las variables de entorno. Si grabasemos estos datos estaríamos obligados a cambiar el código del programa cada vez que se ejecutan en lugares diferentes, dificultando el despliegue.

//+ Por buenas prácticas heredadas de Linux las variables de entorno que vengan desde fuera (process.env.VARIABLE ) se ponen en mayúscula y se separan mediante guion bajo en vez de espacio.


let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.MI_WEB || 'no tengo web';
var apiKey = process.env.APIKEY || 'HF33o9oERVERVEEEEs';

console.log('Hola '+ nombre);
console.log('Mi web es '+ web);

// Me retornara { Hola Sin nombre, mi web es notengo web} ya que tiene  la expresión OR || me asigna estas variables por defecto

// Para que las variables de entorno me tomen valores puedo hacer varias cosas:

//+  Desde la terminal asignarle las variables antes del codigo:

// < NOMBRE:"Alejandro" MI_WEB"123QWERTY" APIKEY=10937472 node conceptos/entorno.js >
