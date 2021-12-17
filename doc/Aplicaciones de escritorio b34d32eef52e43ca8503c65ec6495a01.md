# Aplicaciones de escritorio

### Módulo que vamos a utilizar

- Electron

### Instalación

```
npm i electron

```

### Utilización

1. Lo primero que se debe hacer es importar el módulo ó las funciones que se quieren extraer del mismo.
    
    ```
    const { app, BrowserWindow } = require('electron');
    
    ```
    
    En este caso se extraen las funciones `app` y `BrowserWindow` .
    
2. Luego se crea una variable que va a recibir la instancia del objeto `BrowserWindow` .
    
    ```
    let mainWindow;
    
    ```
    
3. Ahora se crea la función que va a permitir crear la ventana de la aplicación.
    
    ```
    functioncreateWindow() {
      mainWindow =new BrowserWindow({
        width: 800,
        height: 600,
      });
    
      mainWindow.loadFile('index.html')
    }
    
    ```
    
    1. Lo primero que se hace dentro de la función es instanciar el objeto `BrowserWindow` dentro de la variable `mainWindow` , y se cargan valores a las propiedades `width` y `height` .
    2. Se utiliza el método `loadFile()` para cargar el archivo que se va a mostrar en la ventana.
4. Por último en el `packege.json` se personaliza un script para poder ejecutar la aplicación.
    
    ```
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "electron ."
      }
    
    ```
    

El resultado de la aplicación en este caso es la siguiente:

![https://static.platzi.com/media/user_upload/Desktop-application-952ddcc4-1222-490c-8024-09e308be7701.jpg](https://static.platzi.com/media/user_upload/Desktop-application-952ddcc4-1222-490c-8024-09e308be7701.jpg)