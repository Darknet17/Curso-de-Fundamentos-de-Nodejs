const { app, BrowserWindow } = require("electron");

let ventanaPricipal;

app.on('ready', crearVentana);

function crearVentana() {
    ventanaPricipal = new BrowserWindow({
        width: 800,
        height: 600
    });

    ventanaPricipal.loadFile('index.html');
}
