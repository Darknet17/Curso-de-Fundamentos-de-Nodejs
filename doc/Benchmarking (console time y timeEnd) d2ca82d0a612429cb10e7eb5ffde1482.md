# Benchmarking (console time y timeEnd)

Aquí vamos a ver cómo hacer para descubrir de todas tus funciones cuando tienes un proceso largo, cuánto esta tardando en ejecutarse y poder detectar procesos que están tardándose más de lo que deberían.

```
let suma = 0

console.time('bucle')

for (let i = 0; i < 1000000000; i++) {
    suma += 1

}
console.timeEnd('bucle')

```

- `console.time(*nombre*)` → Nos encerrar un bloque de código y después evaluar cuánto tarda en ejecutarse.

Y también puedes trabajar esto con procesos asíncronos.

```
console.time('bucle async')
console.log('Empieza el proceso asincrono')
asincrona()
    .then(() => console.timeEnd('bucle async'))

functionasincrona() {
returnnew Promise( resolve => {
        setTimeout( () => {
            console.log('Terimina el proceso asíncrono')
            resolve()
        }, 0)
    })
}
```