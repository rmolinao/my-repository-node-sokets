const socket = io();

const username = document.getElementById('username');
const white_message = document.getElementById('white_message');
const all_messages = document.getElementById('all_messages');
const new_user = document.getElementById('new_user');
const writing =document.getElementById('writing');
//eventos de la pagina
white_message.addEventListener('keyup',evnt => {
    if (evnt.code == 'Enter') {
        if (username.value != '' && white_message.value != '') {
            //evento socket
            socket.emit('message',{
                username: username.value,
                message  : white_message.value.slice(0, -1)
            });
            white_message.value ='';
        }else{
            console.log('Ingrese los campos Completos');
        }
    }
});

white_message.addEventListener('keydown',(event) => {
    if (username.value !='') {
        socket.emit('writing', username.value);
    }
});

//eventos sockets
socket.on('writing',(username) => {
    writing.innerHTML = username + ' esta escribiendo';
    setTimeout(() => {
        writing.innerHTML ='';
    },3000);
})

socket.on('newUser', (message) => {
    new_user.innerHTML = message;
    setTimeout(() => {
        new_user.innerHTML ='';
    },3000);
});
socket.on('messageslist', (messageslist) => {
    let content = '';
    messageslist.forEach( messages => {
        content +=
        `<div class='message'>
            ${messages.username} : ${messages.message}:
        </div><br>`;
    });
    all_messages.innerHTML = content;
    all_messages.scrollTop = all_messages.scrollHeight;
});