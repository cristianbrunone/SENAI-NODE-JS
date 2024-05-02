const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static('public')); // Corrigindo a chamada do método use()

// URL padrão do site
app.get('/', (req, res) => { // Usando app.get() em vez de app.use()
    res.sendFile(path.join(__dirname, 'index.html')); // Corrigindo a concatenação de caminhos
});

const server = http.createServer(app);
const port = 3000; // Corrigindo a porta para 3000
server.listen(port, () => { // Corrigindo a chamada de server.listen()
    console.log('Servidor inicializado na porta ' + port); // Corrigindo a mensagem de log
});
