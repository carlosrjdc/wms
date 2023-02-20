const Axios = require("../../config/Ravex.js");
const db = require("../../models");
const ravex = require("./functionRavex.js");
require("dotenv").config();

class RavexControllerNF {
  static TodasNotas = async (req, res) => {
    const dados = await Axios.get(
      "/obter-notas-fiscais-por-periodo?skip=0&take=1000&dataHoraInicio=2023-02-15&dataHoraFim=2023-02-16"
    );
    const filtro = await ravex.filtro(dados.data);
    try {
      res.status(200).json(filtro);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  };
  static TodasNotasver = async (req, res) => {
    const filtro = await ravex.periodoLongo();
    try {
      res.status(200).json(filtro);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  };
}

module.exports = RavexControllerNF;
