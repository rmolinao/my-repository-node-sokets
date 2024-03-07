let messageslist = [];
module.exports = io_Client => {
    io_Client.on('connection', (socket) => {
        console.log('Un usuario se ha conectado');

        /** Eventos que emite el servidor*/

        //al conectarse un nuevo usuario se emite la lista de mensages del chat
        io_Client.emit('messageslist', messageslist);

        //el sokect del servidor emite un evento a los clientes
        socket.broadcast.emit('newUser', 'Se ha conectado un nuevo usuario');


        /** Eventos que escucha el servidor*/
        socket.on('writing', (username) => {
            socket.broadcast.emit('writing', username);
        });

        //escucho el evento socket emitido en el cliente
        socket.on('message', (data) => {
            messageslist.push(data);
            io_Client.emit('messageslist', messageslist);
        });

        socket.on('disconnect', () => {
            console.log('El usuario se ha desconectado');
        });
    });
}