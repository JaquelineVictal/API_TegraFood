const express = require("express");


const routes = require("./routes");

//gerando o servidor
const server = express();

server.use(express.json());
server.use(routes);


server.listen(6000, () => console.log("Servidor rodando na porta 6000"));