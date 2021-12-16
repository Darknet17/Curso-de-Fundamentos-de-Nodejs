function otraFuncion() {
    return serompe();
}

function serompe() {
    return 3 + z
}

function seRompeAsincrona(cb) {
    setTimeout(()=>{
        try{
            return 3 + z;
        } catch (e) {
            console.error('Error en mi funcion asincrona');
            cb(e);
        }
    });
}

try {
    // otraFuncion();
    seRompeAsincrona((e)=> console.log(e));
} catch (e) {
    console.error('Vaya, algo se ha roto...');
    console.error(e);
    console.log('Pero no pasa nada, lo hemos capturado');
}

console.error('Esto de aqui esta al final');
