# Console

Con console podemos imprimir todo tipo de valores pornuestra terminal.

- **console.log**: recibe cualquier tipo y lo muestra en el consola.
- **[console.info](http://console.info/)**: es equivalente a log pero es usado para informar.
- **console.error**: es equivalente a log pero es usado para errores.
- **console.warn**: es equivalente a log pero es usado para warning.
- **console.table**: muestra una tabla a partir de un objeto.
- **console.count**: inicia un contador autoincremental.
- **console.countReset**: reinicia el contador a 0.
- **console.time**: inicia un cronometro en ms.
- **console.timeEnd**: Finaliza el cronometro.
- **console.group**: permite agrupar errores mediante identación.
- **console.groupEnd**: finaliza la agrupación.
- **console.clear**: Limpia la consola.
- Mensaje
    
    ```jsx
    console.log('Mensaje')
    console.info('Simplemente Mensaje')
    
    ```
    
- Error
    
    ```jsx
    console.error('Error!!')
    
    ```
    
- Alerta
    
    ```jsx
    console.warn('Alerta!')
    
    ```
    
- Tabla
    
    ```jsx
    let Tabla = [{a: 1, b: 'A'},{a: 2,b: 'B'}]
    console.table(Tabla)
    
    ```
    
- Grupo de logs
    
    ```jsx
    console.group('Conversación')
        console.log('Hola');
        console.log('bla bla bla');
        console.log('Ok Adios');
    console.groupEnd('Fin de la Conversación')
    
    ```
    
- Contador
    
    ```jsx
    console.count('Veces') // Veces: 1
    console.count('Veces') // Veces: 2
    console.count('Veces') // Veces: 3
    console.count('Veces') // Veces: 4
    console.count('Veces') // Veces: 5
    
    ```
    
- Temporizador
    
    ```jsx
    console.time('**Inicio**')
    for(let i = 0; i < 50; i++){
    		// Contador
        console.count('Ronda: ')
    }
    console.timeEnd('**Inicio**') // Inicio: 2.381ms
    ```