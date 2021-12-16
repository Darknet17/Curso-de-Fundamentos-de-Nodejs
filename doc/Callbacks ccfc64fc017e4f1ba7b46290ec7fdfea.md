# Callbacks

**Funciones Callback**Una funcion callback es una funcion que es pasada como argumento a otra funcion, para ser llamada(`called back`) en otro momento.La funcion que recibe como argumento otras funciones es denominada funcion de orden superior (higher-order function), esta contiene la logica correspondiente para ejecutar adecuadamente la funcion callback.

En el siguiente codigo

```jsx
setTimeout(console.log('Hello'), 1000)

```

`setTimeout` es una higher-order function y `console.log` es una callback function

**RESUMEN**:

En js las funciones son objetos de primera clase, primer nivel, son ciudadanos de primera clase que puedo usarlos como quiera. Pasarlos como parámetro.

---

```jsx
//La asincronia se puede generar mediante en setTimeout
console.log('Iniciando proceso...');
functionsoyAsincrono(elCallback) {
    console.log("Asigno setTimeout para volver asincrona una función como esta misma: \n " + soyAsincrono);
    setTimeout(function(){
    console.log("Pasaron 3 segundos y me ejecuté");
    elCallback();
    }, 3000)
};

soyAsincrono(function(){console.log("Después de esto demuestro que Soy el primer Callback")});

functionhola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola, '+ nombre);
        miCallback(nombre);
    }, 1500);
}

functionadios(nombre, otroCallback) {
    setTimeout(function() {console.log('Adios', nombre);otroCallback();}, 5000);
}

hola('Alejandro',function (nombre) {
    adios(nombre,function() {
        console.log('Terminando proceso...');
    });
});

hola('Alejandro estás probando  "hola" las funciones independientemente, las pasas vacías',function () {});
adios('Alejandro estás probando "adios" las funciones independientemente, las pasas vacías',function () {});
```