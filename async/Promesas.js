function hola(nombre) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Hola,", nombre);
            resolve(nombre);
        }, 1500);
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("bla bla bla bla....");
            // resolve(nombre);
            reject("Hubo un error");
        },1000);
    });
}

function adios(nombre) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("adios", nombre);
            resolve(nombre);
        },1000);
    });
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
console.log("iniciando el proceso...");
hola("josue")
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log("Terminado el proceso...")
    })
    .catch( error => {
        console.error("habido un error:");
        console.error(error);
    })
