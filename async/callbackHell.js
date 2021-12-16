function hola(nombre, miCallback) {
    setTimeout(()=>{
        console.log("Hola,", nombre);
        miCallback(nombre);
    }, 1500);
}

function hablar(callbackHablar) {
    setTimeout(()=>{
        console.log("bla bla bla bla....");
        callbackHablar();
    },1000);
}

function adios(nombre, otroCallback) {
    setTimeout(()=>{
        console.log("adios", nombre);
        otroCallback();
    },1000);
}

function conversacion(nombre, veces, callback) {
    if( veces > 0){
        hablar(()=>{
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}

// --
console.log("iniciando proceso....");
hola("Josue", (nombre)=>{
    conversacion(nombre, 3, ()=>{
        console.log("Proceso terminado");
    });
})

// hola("Pepe", (nombre) => {
//     hablar(()=>{
//         hablar(()=>{
//             hablar(()=>{
//                 adios(nombre, () => {
//                     console.log("Terminando proceso....");
//                 });
//             });
//         });
//     });
// });

// hola("Pepe", function () {});
// adios("Pepe", function () {});
