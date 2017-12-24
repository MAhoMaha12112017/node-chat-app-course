var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});

// socket.on('disconnect', function () {
//   console.log('Disconnected from server');
// });

//   socket.emit('createMessage', {
//     from: 'example@rc.com',
//     text: 'This is a uusi message'
//   });
// });
