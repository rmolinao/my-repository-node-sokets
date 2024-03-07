const socket = io();

const username = document.getElementById('username');
const white_mesage = document.getElementById('white_mesage');

white_mesage.addEventListener('keyup',evnt => {
    if (evnt.code == 'Enter') {
        if (username.value != '' && white_mesage.value != '') {
            //evento socket
            socket.emit('message',{
                username: username.value,
                mesage  : white_mesage.value.slice(0, -1)
            });
            white_mesage.value ='';
        }else{
            console.log('Ingrese los campos Completos');
        }
    }
});