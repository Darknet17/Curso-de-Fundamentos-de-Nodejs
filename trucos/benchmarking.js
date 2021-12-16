console.time('Todo');
let sum = 0;
console.time('bucle');
for (let i = 0; i < 100000; i ++){
    sum += 1;
}
console.timeEnd('bucle');

let sum2 = 0;
console.time('bucle2');
for (let j = 0; j < 100000; j ++){
    sum2 += 1;
}
console.timeEnd('bucle2');

console.time('asincrono');
console.log('empiesa el proceso asincrono')
asincrona().then(()=> console.timeEnd('asincrono') );
console.timeEnd('Todo');

function asincrona() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Termina el proceso asincrono');
            resolve();
        });
    });
}
