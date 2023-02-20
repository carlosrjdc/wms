const Axios = require("../../config/Ravex.js");
const db = require("../../models");
const ravex = require("./functionRavex.js");
require("dotenv").config();
const moment = require("moment");

const ravexNF = db.Ravex_Retorno_Nota;

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

  static filtroEmaberto = async (req, res) => {
    const filtro = await ravexNF.findAll({
      where: {
        status: "Em aberto",
      },
      attributes: ["unidade", "viagemId", "placa", "transportadora"],
      order: [["placa", "DESC"]],
      group: ["viagemId"],
    });
    try {
      res.status(200).json(filtro);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  };

  static AtualizarRegistro = async (req, res) => {
    const registro = await ravexNF.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    try {
      res.status(200).json(registro);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  };

  static deletarRegistro = async (req, res) => {
    const registro = await ravexNF.destroy({
      where: {
        id: req.params.id,
      },
    });
    try {
      res.status(200).json(registro);
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

  static prepararInput = async (req, res) => {
    const filtro = await ravex.periodoLongo();
    const Usuario = await ravexNF.findAll({
      where: {
        data: moment(new Date()).format("DD/MM/YYYY"),
      },
      attributes: [
        "id",
        "unidade",
        "data",
        "refenciaId",
        "viagemId",
        "notaFiscal",
        "placa",
        "transportadora",
        "motivo",
      ],
    });

    const arraymap = [];

    await filtro.map(async (item) => {
      const registro = await ravexNF.count({
        where: {
          refenciaId: String(item.viagemId + item.notaFiscal),
        },
      });

      if (registro < 1) {
        ravexNF.create({
          unidade: item.unidade,
          data: moment(new Date()).format("DD/MM/YYYY"),
          refenciaId: item.viagemId + item.notaFiscal,
          viagemId: item.viagemId,
          notaFiscal: item.notaFiscal,
          placa: item.placa,
          transportadora: item.transportadora,
          motivo: item.status,
        });
      }
    });

    try {
      res.status(200).json(Usuario);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  };
}

module.exports = RavexControllerNF;
