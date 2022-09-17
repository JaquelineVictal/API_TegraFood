const express = require("express");
const routes = require("./src/routes");
const err = require("./middleware/error")

//gerando o servidor
const server = express();

server.use(express.json());
server.use(routes);
server.use(err);


server.listen(6000, () => console.log("Servidor rodando na porta 6000"));