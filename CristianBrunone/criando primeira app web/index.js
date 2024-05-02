var http = require("http");

http.createServer(function(require, response){
    response.write("Primeiros passos com Node.JS");
    response.end();
}).listen(8081);

console.log("Servidor rodando em http://localhost:8081");