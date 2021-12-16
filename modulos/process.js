process.on("beforeExit", () =>{
    console.log('el proceso va a terminado');
});

process.on("exit", () =>{
    console.log('Josue, el proceso ha terminado');
    setTimeout(()=>{
        console.log("Esto no se va a ver nunca");
    }, 0);
});

process.on('uncaughtException', (err, origin)=>{
    console.log('Vaya se nos ha olvidado capturar un error');
    console.error(err)
    setTimeout(()=>{
        console.log("Esto viene de las excepciones");
    }, 0);
});

// functionNuncaExiste();

console.log('Esto si el error no se recoje, no sale');

setTimeout(()=>{
    console.log("Esto se va a ver");
}, 0);
