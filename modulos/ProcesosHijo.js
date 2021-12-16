const { spawn } = require('child_process');

// exec('node console.js', (error, stdout, stderr) => {
//     if (error){
//         console.error(error);
//         return false;
//     }
//
//     console.log(stdout);
// })

const proceso = spawn('cmd.exe', ['dir']);
console.log(proceso.pid);
console.log(proceso.connected);
proceso.stdout.on('data', (dato)=>{
    console.log("Esta muerto?")
    console.log(process.killed);
    console.log(dato.toString());
})

proceso.on('close', ()=>{
    console.log('el proceso termino');
    console.log(proceso.killed);
});
