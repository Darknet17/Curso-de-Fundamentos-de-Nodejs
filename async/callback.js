function hola(nombre, miCallback) {
    setTimeout(()=>{
        console.log("Hola,", nombre);
        miCallback(nombre);
    }, 1500);
}

function adios(nombre, otroCallback) {
    setTimeout(()=>{
        console.log("adios", nombre);
        otroCallback();
    },1000)
}

console.log("iniciando proceso....");
hola("Pepe",function (nombre) {
    adios(nombre, () => {
        console.log("Terminando proceso....");
    });
});

// hola("Pepe", function () {});
// adios("Pepe", function () {});
