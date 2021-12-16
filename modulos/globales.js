console.log(global)
/*Object [global] {
    global: [Circular], ---> Dependencias ciruculares.
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Function]
    },
    queueMicrotask: [Function: queueMicrotask],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Function]
    }
  }
*/


require(); // nos va a permitir acceder a caulqueir módulo.

let i =0; //  Inicializo contador en cero
let intervalo = setInterval(() => {  // Asigno el setInterval a una variable intervalo para poder operarla luego.
    console.log(" Alejandro "); // Imprimo mi nombre
    if (i === 3){ // Con i ===3 imprima mi nombre hasat que de cero llega a 3 y luego haga clearInterval.
        clearInterval(intervalo);
    }
    i ++;
}, 1000);


setImmediate(()=>{
    console.log("Ya mismo")
})
