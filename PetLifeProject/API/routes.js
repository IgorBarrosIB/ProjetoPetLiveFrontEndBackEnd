const app = require("express");

const horarioController = require("./src/controller/horarioController");
const porcaoUnicaController = require("./src/controller/porcaoUnicaController.js");
const routes = app.Router();

routes.post('/horario/add',horarioController.add);
routes.get('/horario/all',horarioController.all);
routes.get('/horario/:id',horarioController.read);
routes.get('/horario/:id/delete',horarioController.delete);
routes.post('/horario/update/:id',horarioController.update);

routes.get('/porcaoUnica',porcaoUnicaController.read);
routes.get('/porcaoUnica/:param',porcaoUnicaController.update);

module.exports = routes;