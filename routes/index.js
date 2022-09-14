const express = require("express");
const ProdutsController = require("../controller/Produts.controller.js");

const routes = express.Router();

routes.get("/produts", ProdutsController.FindProdusts);
//routes.get("/produts", ProdutsController.listAll);
routes.get("/produts/:id", ProdutsController.GetById);
routes.post("/produts", ProdutsController.CreatedProdut);
routes.delete("/produts/:id", ProdutsController.DeletedProdut);
routes.put("/produts/:id", ProdutsController.UpdateProdut);



module.exports = routes;

