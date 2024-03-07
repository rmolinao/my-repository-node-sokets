const socket = io();

const username = document.getElementById('username');
const white_message = document.getElementById('white_message');
const all_messages = document.getElementById('all_messages');

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