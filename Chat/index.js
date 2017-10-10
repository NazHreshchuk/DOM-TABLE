var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

let users = [];
let onlineClients = {};
io.on('connection', (socket) => {

    let user1;
    
    //set nick name 
    socket.on('setUsername', (data) => {
        
        if(users.indexOf(data) > -1) {
            socket.emit('userExists', data + ' username is already taken! Try other one.');
        }
        else {
            users.push(data);
            onlineClients[data] = socket.id;
            socket.emit('userSet', {username: data});
        }
    });
    // user connected
    socket.on('userConnect', (user) => {
        user1 = user;
        socket.broadcast.emit('chat message', {user:user, message: `Connected to chat`});
        //send all users
        socket.emit('sendUsers', users);
        socket.broadcast.emit('sendUsers', users);
    });
        
    // send message to online users
    socket.on('chat message', (data) => {
        socket.broadcast.emit('chat message', data); // надіслали всім користувачам окрім себе
    });

    // when someone is typing Broadcast the user typing to 
    //all the other users over the network
    socket.on("sender", function (data) {
        socket.emit("sender", data);
        socket.broadcast.emit("sender", data);                                   
    });

    // private message

    socket.on('pm', (from, to, message) => {
        let id = onlineClients[to];
        socket.broadcast.to(id).emit('chat message', {user:from, message: message});
    });


    // user disconected
    socket.on('disconnect', () => {
        socket.broadcast.emit('chat message', {user:user1, message: `disconnected`});
        let pos = users.indexOf(user1);
        users.splice(pos, 1);
        //send new array of users
        socket.emit('sendUsers', users);
        socket.broadcast.emit('sendUsers', users);
    });
});


http.listen(3000, () => {
  console.log('listening on :3000');
});