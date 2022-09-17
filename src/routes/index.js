const express = require("express");
const ProdutsController = require("../controller/Produts.controller.js");

//Validations

const FindProdustsValidations = require("../validations/Produts/FindProdusts")
const GetByIdProdustsValidations = require("../validations/Produts/GetById")
const CreatedProdutProdustsValidations = require("../validations/Produts/CreatedProdut")
const DeletedProdutProdustsValidations = require("../validations/Produts/DeletedProdut")
const UpdateProdutProdutProdustsValidations = require("../validations/Produts/UpdateProdut")

const routes = express.Router();

routes.get("/produts", FindProdustsValidations,ProdutsController.FindProdusts);
routes.get("/produts/:id", GetByIdProdustsValidations, ProdutsController.GetById);
routes.post("/produts", CreatedProdutProdustsValidations, ProdutsController.CreatedProdut);
routes.delete("/produts/:id", DeletedProdutProdustsValidations, ProdutsController.DeletedProdut);
routes.put("/produts/:id", UpdateProdutProdutProdustsValidations, ProdutsController.UpdateProdut);



module.exports = routes;

