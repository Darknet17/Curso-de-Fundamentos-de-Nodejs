const http = require('http');

const router = (req, res)=> {
    console.log("Nueva Peticion!");
    console.log(req.url);
    switch (req.url){
        case '/hola':
            res.write('Hola, que tal');
            res.end();
            break;
        default:
            res.write('Error 404: No se lo que quieres');
            res.end()
    }
    // res.writeHead(201, {'Content-Type': 'text/plain'});
    // res.write('Hola, ya se usar http de nodejs');
    // res.end();
}


http.createServer(router).listen(3000);

console.log("Escuchando http en el puerto 3000");
