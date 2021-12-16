async function hola(nombre) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Hola,", nombre);
            resolve(nombre);
        }, 1500);
    });
}

async function hablar(nombre) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("bla bla bla bla....");
            resolve(nombre);
            //reject("Hubo un error");
        },1000);
    });
}

async function adios(nombre) {
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
async function main(){
    const nombre = await hola("Josue");
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log("Terminamos el proces...");
}

console.log("Empezamos el proceso...");
main();
console.log("Va a ser la segunda instruccion");
