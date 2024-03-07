let messageslist = [];
module.exports = io_Client => {
    io_Client.on('connection', (socket) => {
        console.log('Un usuario se ha conectado');
        io_Client.emit('messageslist', messageslist);
        //escucho el evento socket en emitido en el cliente
        socket.on('message', (data) => {
            messageslist.push(data);
            io_Client.emit('messageslist', messageslist);
        });

        socket.on('disconnect', () => {
            console.log('El usuario se ha desconectado');
        });
    });
}