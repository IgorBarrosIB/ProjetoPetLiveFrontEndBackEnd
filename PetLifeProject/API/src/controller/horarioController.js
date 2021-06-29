const hora = require("../model/horario");
const path = require("path");

module.exports = {

  async all(req, res){
    const horarios = await hora.getAll();
    console.log(horarios);
    return res.send(horarios);
  },

  async read(req, res){
    const {id} = req.params;
    const horario = await hora.findById(id);
    return res.send(horario);
  },
 
  async add(req, res){
    const  horario = req.body;
    const response = await hora.create(horario);
    return res.send(response);
  },
  
  async delete(req, res){
    const { id } = req.params;
    const response = await hora.remove(id);
    return res.send(response);
  },

  async update(req, res){
    const  horario = req.body;
    const response = await hora.update(horario);
    return res.send(response);
  },
}