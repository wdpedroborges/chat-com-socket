const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        transports: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true
});
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('home');
});

http.listen(3000, () => {
	console.log('Servidor rodando . . .')
});

// escutando eventos; escuta o evento de alguém se conectando ao servidor; isto é, se alguém abre a página
io.on('connection', socket => {
	console.log('Usuário conectado: ' + socket.id); // todos que se conectam tem um id

	socket.on('message', (mensagem, destinatario, sala) => {
		if (destinatario === '' && sala === '') {
			// envia a mesma mensagem para todos, menos nós mesmos
			socket.broadcast.emit('message', mensagem);
		} else if (destinatario !== '') {
			socket.to(destinatario).emit('message', mensagem);
		} else {
			socket.to(sala).emit('message', mensagem);
		}
	});

	socket.on('join-room', (sala, callback) => {
		socket.join(sala);
		console.log(`O usuario ${socket.id} entrou na sala "${sala}".`);
		callback(`Você entrou na sala ${sala}`);
	});
});