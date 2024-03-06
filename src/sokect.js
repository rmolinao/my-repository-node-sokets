module.exports = io_Client => {
    io_Client.on('connection', socket => {
        console.log('Un usuario se ha conectado');
        socket.on('disconnect', () => {
            console.log('El usuario se ha desconectado');
        });

    });
}