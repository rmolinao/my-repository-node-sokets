const express  = require('express');
const path     = require('path');
const sokectio = require('socket.io');
const http     = require('http');
const app      = express();

app.set('port', 3001);
app.use(express.static(path.join(__dirname,'public')));

const server = http.createServer(app);
const io     = sokectio(server);
require('./sokect')(io);

server.listen(app.get('port'),() => {
    console.log('Aplicacion corriendo en el puerto '+ app.get('port'));
});