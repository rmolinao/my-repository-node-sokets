module.exports = io_Client => {
    io_Client.on('connection', (socket) => {
        console.log('Un usuario se ha conectado');
        //escucho el evento socket en emitido en el cliente
        socket.on('message', (data) => {
            console.log(data)
        });

        socket.on('disconnect', () => {
            console.log('El usuario se ha desconectado');
        });
    });
}